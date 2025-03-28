package accessor

type BackupSettingOption struct {
	BackupTargetType string   `json:"backupTargetType"`
	BackupTar        string   `json:"backupTar,omitempty"`  // tar 包的位置
	BackupPath       string   `json:"backupPath,omitempty"` // 废弃，快照默认放到 /dpanel/backup 目录下，不支持保存至主机
	VolumePathList   []string `json:"volumePathList"`
	Size             int64    `json:"size"`
	Error            string   `json:"error,omitempty"`
	Status           int      `json:"status,omitempty"`
}
