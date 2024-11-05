package controller

import (
	"bytes"
	"fmt"
	"github.com/docker/docker/api/types/container"
	"github.com/docker/docker/pkg/stdcopy"
	"github.com/donknap/dpanel/common/service/docker"
	"github.com/donknap/dpanel/common/service/ws"
	"github.com/gin-gonic/gin"
	"github.com/we7coreteam/w7-rangine-go/v2/src/http/controller"
	"io"
	"log/slog"
	"strconv"
)

type RunLog struct {
	controller.Abstract
}

func (self RunLog) Run(http *gin.Context) {
	type ParamsValidate struct {
		Md5       string `json:"md5" binding:"required"`
		LineTotal int    `json:"lineTotal" binding:"required,number,oneof=50 100 200 500 1000"`
		Download  bool   `json:"download"`
	}

	params := ParamsValidate{}
	if !self.Validate(http, &params) {
		return
	}
	response, err := docker.Sdk.Client.ContainerLogs(docker.Sdk.Ctx, params.Md5, container.LogsOptions{
		ShowStderr: true,
		ShowStdout: true,
		Tail:       strconv.Itoa(params.LineTotal),
		Follow:     true,
	})
	if err != nil {
		self.JsonResponseWithError(http, err, 500)
		return
	}
	progress := ws.NewProgressPip(fmt.Sprintf(ws.MessageTypeContainerLog, params.Md5))
	progress.OnWrite = func(p string) error {
		newReader := bytes.NewReader([]byte(p))
		stdout := new(bytes.Buffer)
		_, err = stdcopy.StdCopy(stdout, stdout, newReader)
		if err != nil {
			progress.BroadcastMessage(p)
		} else {
			progress.BroadcastMessage(stdout.String())
		}
		return nil
	}
	go func() {
		select {
		case <-progress.Done():
			slog.Debug("container", "run log", "close")
			_ = response.Close()
		}
	}()
	_, err = io.Copy(progress, response)
	//if err != nil {
	//	self.JsonResponseWithError(http, errors.New("读取日志失败"), 500)
	//	return
	//}
	//newReader := bytes.NewReader(out.Bytes())
	//
	//stdout := new(bytes.Buffer)
	//_, err = stdcopy.StdCopy(stdout, stdout, newReader)
	//
	//if err == nil {
	//	out = stdout
	//}
	if params.Download {
		http.Header("Content-Type", "text/plain")
		http.Header("Content-Disposition", "attachment; filename="+params.Md5+".log")
		//http.Data(200, "text/plain", []byte(out.String()))
		return
	} else {
		self.JsonResponseWithoutError(http, gin.H{
			"log": "",
		})
	}
	return
}
