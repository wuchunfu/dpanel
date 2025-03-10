package logic

import (
	"errors"
	"github.com/docker/docker/api/types"
	"github.com/donknap/dpanel/common/accessor"
	"github.com/donknap/dpanel/common/dao"
	"github.com/donknap/dpanel/common/entity"
	"github.com/donknap/dpanel/common/service/docker"
)

// 全局配置
var (
	SettingGroupSetting                     = "setting"
	SettingGroupSettingServer               = "server" // 服务器
	SettingGroupSettingDocker               = "docker" // docker env
	SettingGroupSettingTwoFa                = "twoFa"  // 双因素
	SettingGroupSettingDiskUsage            = "diskUsage"
	SettingGroupSettingCheckContainerIgnore = "checkContainerIgnore"
	SettingGroupSettingDPanelInfo           = "DPanelInfo"
	SettingGroupSettingThemeConfig          = "themeConfig"
	SettingGroupSettingThemeUserConfig      = "themeUserConfig"
	SettingGroupSettingDnsApi               = "dnsApi"
)

// 用户相关数据
var (
	SettingGroupUser        = "user"
	SettingGroupUserFounder = "founder"
	SettingGroupUserManager = "manager"
	SettingGroupUserMember  = "member"

	SettingGroupUserStatusEnable  = uint8(2)
	SettingGroupUserStatusDisable = uint8(1)
)

type Setting struct {
}

func (self Setting) Save(settingRow *entity.Setting) error {
	oldSetting, _ := dao.Setting.Where(
		dao.Setting.GroupName.Eq(settingRow.GroupName),
		dao.Setting.Name.Eq(settingRow.Name),
	).First()
	if oldSetting == nil {
		err := dao.Setting.Create(settingRow)
		if err != nil {
			return err
		}
	} else {
		_, err := dao.Setting.Where(
			dao.Setting.GroupName.Eq(settingRow.GroupName),
			dao.Setting.Name.Eq(settingRow.Name),
		).Updates(settingRow)
		if err != nil {
			return err
		}
	}
	return nil
}

func (self Setting) GetValue(groupName string, name string) (*entity.Setting, error) {
	setting, _ := dao.Setting.Where(
		dao.Setting.GroupName.Eq(groupName),
		dao.Setting.Name.Eq(name),
	).First()
	if setting == nil || setting.Value == nil {
		return nil, errors.New("setting not found")
	}
	return setting, nil

}

func (self Setting) GetValueById(id int32) (*entity.Setting, error) {
	setting, _ := dao.Setting.Where(dao.Setting.ID.Eq(id)).First()
	if setting == nil {
		return nil, errors.New("配置不存在")
	}
	return setting, nil
}

func (self Setting) GetDockerClient(name string) (*docker.Client, error) {
	if setting, err := self.GetValue(SettingGroupSetting, SettingGroupSettingDocker); err == nil {
		if item, ok := setting.Value.Docker[name]; ok {
			return item, nil
		}
	}
	return nil, errors.New("docker client not found " + name)
}

func (self Setting) GetDPanelInfo() (types.ContainerJSON, error) {
	result := types.ContainerJSON{}
	if exists := self.GetByKey(SettingGroupSetting, SettingGroupSettingDPanelInfo, &result); exists {
		return result, nil
	}
	return result, errors.New("dpanel container not found")
}

func (self Setting) Delete(groupName string, name string) error {
	_, _ = dao.Setting.Where(
		dao.Setting.GroupName.Eq(groupName),
		dao.Setting.Name.Eq(name),
	).Delete()
	return nil
}

func (self Setting) GetByKey(group, name string, value interface{}) (exists bool) {
	setting, err := self.GetValue(group, name)
	if err != nil {
		return false
	}
	if value != nil {
		switch v := value.(type) {
		case *map[string]*docker.Client:
			if setting.Value.Docker != nil {
				exists = true
				*v = setting.Value.Docker
			}
		case *accessor.DiskUsage:
			if setting.Value.DiskUsage != nil {
				exists = true
				*v = *setting.Value.DiskUsage
			}
		case *accessor.TwoFa:
			if setting.Value.TwoFa != nil {
				exists = true
				*v = *setting.Value.TwoFa
			}
		case *accessor.IgnoreCheckUpgrade:
			if setting.Value.IgnoreCheckUpgrade != nil {
				exists = true
				*v = setting.Value.IgnoreCheckUpgrade
			}
		case *types.ContainerJSON:
			if setting.Value.DPanelInfo != nil {
				exists = true
				*v = *setting.Value.DPanelInfo
			}
		case *accessor.ThemeUserConfig:
			if setting.Value.ThemeUserConfig != nil {
				exists = true
				*v = *setting.Value.ThemeUserConfig
			}
		case *accessor.ThemeConfig:
			if setting.Value.ThemeConfig != nil {
				exists = true
				*v = *setting.Value.ThemeConfig
			}
		case *[]accessor.DnsApi:
			if setting.Value.DnsApi != nil {
				exists = true
				*v = setting.Value.DnsApi
			}
		}
	}
	return exists
}
