# work

## cnpm
1. 地址
    a. [registry地址](http://172.23.40.188:7001/)
    b. [管理地址](http://172.23.40.188:7002/)
2. node版本使用12，高版本可能登录失败
3. 仓库下新建.npmrc文件
    ```ts
    registry=http://172.23.40.188:7001/
    ```
4. 登录
    ```shell
    npm login
    # 用户名&密码都是admin
    ```
5. 发布需要在package.json中添加如下内容
    ```json
    "maintainers": ["admin"],
    ```

## kuboard

::: tabs
@tab dev（包含后端服务）
[link](http://172.23.241.1:32567/login)
```
eyJhbGciOiJSUzI1NiIsImtpZCI6IklFbGJvbVdfTm9NWjhXTDgxcEQ3SmhKOVV3ZE1aZEYwVW1GMXJYbzV0ZEkifQ.eyJpc3MiOiJrdWJlcm5ldGVzL3NlcnZpY2VhY2NvdW50Iiwia3ViZXJuZXRlcy5pby9zZXJ2aWNlYWNjb3VudC9uYW1lc3BhY2UiOiJrdWJlLXN5c3RlbSIsImt1YmVybmV0ZXMuaW8vc2VydmljZWFjY291bnQvc2VjcmV0Lm5hbWUiOiJrdWJvYXJkLXZpZXdlci10b2tlbi1sc3hwayIsImt1YmVybmV0ZXMuaW8vc2VydmljZWFjY291bnQvc2VydmljZS1hY2NvdW50Lm5hbWUiOiJrdWJvYXJkLXZpZXdlciIsImt1YmVybmV0ZXMuaW8vc2VydmljZWFjY291bnQvc2VydmljZS1hY2NvdW50LnVpZCI6IjM2MjBjOTdmLTgwNjAtNDFlMC05NjRjLWI0ZThmZTI2N2NhNiIsInN1YiI6InN5c3RlbTpzZXJ2aWNlYWNjb3VudDprdWJlLXN5c3RlbTprdWJvYXJkLXZpZXdlciJ9.I3COYEveWzdqDLV4wD8g0HHwQ1BtCEyQ4g1iexxP41WwiOSafozTcDGIhR3yo_yBj2fVXEW043fBnNfxlOZg91MclFrj1t1qilWFGWgkya2fWcRMT5NfmIBDyA-ic8RPtgd7-Vd45EfyudhBJ8Gekljm7nlkh4bx4szSJ7naF1mgv_DWULPHefVwgibwgPVLEV56A4GGdd4W14Fp5H6XftNGehdqG_MBcYcFG6q0kbiQvx0_6XsEeSmrti5Dtsr88BIj57LmfD-1NRwP32O9M5sazMrbnJZkuuZPJgwDT2dDFiEXiNevY0_4o8hKhQqik6LlR2QLEDtF0NcTSMl0vA
```
@tab dev（包含前端服务）
[link](http://172.23.241.5:32567/login)
```
eyJhbGciOiJSUzI1NiIsImtpZCI6Im95aUFoRFB3dmJzeGVHVkpPTXlnQTF0ZEtYQVpUMDZzSGtqV245SlBhRE0ifQ.eyJpc3MiOiJrdWJlcm5ldGVzL3NlcnZpY2VhY2NvdW50Iiwia3ViZXJuZXRlcy5pby9zZXJ2aWNlYWNjb3VudC9uYW1lc3BhY2UiOiJrdWJlLXN5c3RlbSIsImt1YmVybmV0ZXMuaW8vc2VydmljZWFjY291bnQvc2VjcmV0Lm5hbWUiOiJzZWNyZXQta3Vib2FyZC11c2VyIiwia3ViZXJuZXRlcy5pby9zZXJ2aWNlYWNjb3VudC9zZXJ2aWNlLWFjY291bnQubmFtZSI6Imt1Ym9hcmQtdXNlciIsImt1YmVybmV0ZXMuaW8vc2VydmljZWFjY291bnQvc2VydmljZS1hY2NvdW50LnVpZCI6IjYzZTNjOTAwLTE3Y2QtNGViZS1hM2Q3LTE3NjNiNzQzN2MzYyIsInN1YiI6InN5c3RlbTpzZXJ2aWNlYWNjb3VudDprdWJlLXN5c3RlbTprdWJvYXJkLXVzZXIifQ.gZIlsCEHiQSdpJtFk73M907rRmQFH5w6oKkGUhOEA4fUjVJcHIueQlHNjOBmFjePemaWC5rfL0Xfhlt-dEd6lBPWnMql6EaQPjPUE_4B55EoENozcNdAndgEKZD6bVeFMO1PnfmsMWtu2fh2etX8DeoY5yb91RfcBLkMgJ9-P4O-7wrt0eT9b2c6Lsl47e5RandJyoxJOj1aZj2mMJKeBaHwIfFRjpWHPCToJJTXD9nm4Zx5lnmEHqCwUJ33rNtwZGWrOLJTGRkrIn0HM4aK4q9CQhEczLpOw5v8nePrTvLplip51zeW1zPUxUXN-iM7u9W4aybE-VbyxNf9P0H5UA
```
@tab 测试（包含本地化前后端）
[link](http://172.23.240.1:32567/login)
```
eyJhbGciOiJSUzI1NiIsImtpZCI6InpNa1dNRGtIWVNzSzVKT1VXLW10eHpQVEdsTk5rM25WZlFWRDJQNTNFZ3cifQ.eyJpc3MiOiJrdWJlcm5ldGVzL3NlcnZpY2VhY2NvdW50Iiwia3ViZXJuZXRlcy5pby9zZXJ2aWNlYWNjb3VudC9uYW1lc3BhY2UiOiJrdWJlLXN5c3RlbSIsImt1YmVybmV0ZXMuaW8vc2VydmljZWFjY291bnQvc2VjcmV0Lm5hbWUiOiJrdWJvYXJkLXVzZXItdG9rZW4tYmdzNjQiLCJrdWJlcm5ldGVzLmlvL3NlcnZpY2VhY2NvdW50L3NlcnZpY2UtYWNjb3VudC5uYW1lIjoia3Vib2FyZC11c2VyIiwia3ViZXJuZXRlcy5pby9zZXJ2aWNlYWNjb3VudC9zZXJ2aWNlLWFjY291bnQudWlkIjoiNGY1YmNlY2QtODBkOC00ZWM2LThkZmUtZjY0ZGZhOWUxYjI1Iiwic3ViIjoic3lzdGVtOnNlcnZpY2VhY2NvdW50Omt1YmUtc3lzdGVtOmt1Ym9hcmQtdXNlciJ9.4m4ydRlxxQ6Y6vVbconkBs4DkWDaYrautYi3BDpBKp6I5Z_u8MC4NsfqikpBgi0S5YnYH3p9eNyqGlK05TYl3E28dRAz1SCyDlZc7z2ti13hhbLv-ccvCEFXjINZi4DveYXpsIiW2HyaovTdpsPlhRdcn6GefbKkOPsWVtTVq5maQ58WPP8-fZyJLJbJTGXNacGtm9pPCRdFNUAywIWr9SkZJyaVTOeuQ-PkxqY78sYBxIDi2dUFmApv9ojmuaBZAP34ePA7wcDw2rd2xCpkSycQRSxZIVVn8c60zlPxzP-9AjGxEgpL0yHZi_T_mv91A6F-BHV6Mp_vdNZ3xfCfnw
```
@tab 预发
[link](http://81.69.165.135:32567/login)
```
eyJhbGciOiJSUzI1NiIsImtpZCI6Ijk5X3Z2aXU3UV9DNTZHRjVrWW4yR1h6aVZnTE44VC1SQ3hwcFlhcl9taEEifQ.eyJpc3MiOiJrdWJlcm5ldGVzL3NlcnZpY2VhY2NvdW50Iiwia3ViZXJuZXRlcy5pby9zZXJ2aWNlYWNjb3VudC9uYW1lc3BhY2UiOiJrdWJlLXN5c3RlbSIsImt1YmVybmV0ZXMuaW8vc2VydmljZWFjY291bnQvc2VjcmV0Lm5hbWUiOiJrdWJvYXJkLXVzZXItdG9rZW4tc25ndnAiLCJrdWJlcm5ldGVzLmlvL3NlcnZpY2VhY2NvdW50L3NlcnZpY2UtYWNjb3VudC5uYW1lIjoia3Vib2FyZC11c2VyIiwia3ViZXJuZXRlcy5pby9zZXJ2aWNlYWNjb3VudC9zZXJ2aWNlLWFjY291bnQudWlkIjoiZmVkZDNjMmYtZjYzNS00NWU4LThkZTAtNmFiY2U2ODRhNTM1Iiwic3ViIjoic3lzdGVtOnNlcnZpY2VhY2NvdW50Omt1YmUtc3lzdGVtOmt1Ym9hcmQtdXNlciJ9.jB6pYI5kv-qF7CCKPKJv-j1fzJZnD_tDMCze67tCQ9tJWPUTzB8yu5C2w1u7yG76Du-lXTiv9T8wefspGx0ZEdXIAHDENw_fBwR8N7lqS4Tr36UQxN8n_IchkGMDy2qcV3--xDLqD35SjezkGLGhvcUYd_J6skkQWFPWzGdDufyd0lOgyXWk5Tnr4VbU5Q6n8NI5-yUNn5iVMH9fdY9pv23oBn1XffsoTqrST895Kg7PznTciuYO5NONatJNBmScXHbo_g1Qf2ar7GoH9AbkximhX-kphCGv5L4G2wkUMBgyaldUTztkIQZqNqKNMsOXUUeNxW_gfdNKZr0lHPlXiQ
```
:::
****

<p>一 、本地化项目分支管理现状</p>

<table style="table-layout: fixed;white-space: nowrap; max-width: 100%;">
    <colgroup>
        <col style="width: 51px" />
        <col style="width: 280px" />
        <col style="width: 280px" />
        <col style="width: 280px" />
        <col style="width: 280px" />
        <col style="width: 280px" />
        <col style="width: 280px" />
        <col style="width: 280px" />
        <col style="width: 280px" />
    </colgroup>
    <tbody>
        <tr>
            <th
                style="text-align: center"
                class="confluenceTh">
                序号
            </th>
            <th
                style="text-align: center"
                class="confluenceTh">
                服务
            </th>
            <th
                style="text-align: center"
                class="confluenceTh">
                分支名称
            </th>
            <th
                style="text-align: center"
                colspan="1"
                class="confluenceTh">
                是否区分客户
            </th>
            <th
                style="text-align: center"
                colspan="1"
                class="confluenceTh">
                是否区分环境
            </th>
            <th
                style="text-align: center"
                class="confluenceTh">
                所属客户
            </th>
            <th
                colspan="1"
                class="confluenceTh">
                构建命令
            </th>
            <th
                style="text-align: center"
                class="confluenceTh">
                特殊备注
            </th>
            <th
                style="text-align: center"
                colspan="1"
                class="confluenceTh">
                是否与saas一套代码
            </th>
        </tr>
        <tr>
            <td
                style="text-align: center"
                rowspan="6"
                class="confluenceTd">
                1
            </td>
            <td
                style="text-align: left"
                rowspan="6"
                class="confluenceTd">
                <span style="color: rgb(34, 34, 34)">mfe</span>
            </td>
            <td
                style="text-align: left"
                class="confluenceTd">
                master-kidswant
            </td>
            <td
                colspan="1"
                class="confluenceTd">
                ✅
            </td>
            <td
                colspan="1"
                class="confluenceTd">
                <span>✅</span>
            </td>
            <td class="confluenceTd">孩子王</td>
            <td
                colspan="1"
                class="confluenceTd">
                <p>孩子王/<span>乐友</span>测试：build-fatkw/<span>build-fatly</span></p>
                <p>孩子王/<span>乐友</span>预发布：build-nanofintaxkw/build-nanofintaxly</p>
                <p>孩子王/乐友客户侧测试：build-fatckw/build-fatcly</p>
                <p>孩子王/<span>乐友</span>生产：build-ckw/build-cly</p>
            </td>
            <td class="confluenceTd">
                <p>域名不同</p>
                <p><span>不同环境APPID不同</span></p>
            </td>
            <td
                colspan="1"
                class="confluenceTd">
                <br />
            </td>
        </tr>
        <tr>
            <td
                style="text-align: left"
                colspan="1"
                class="confluenceTd">
                <span>master-ketong</span>
            </td>
            <td
                colspan="1"
                class="confluenceTd">
                <span>✅</span>
            </td>
            <td
                colspan="1"
                class="confluenceTd">
                <span>✅</span>
            </td>
            <td
                colspan="1"
                class="confluenceTd">
                科通
            </td>
            <td
                colspan="1"
                class="confluenceTd">
                <p>测试：build-fat</p>
                <p>预发布：build-nanofintax</p>
                <p>生产：build-nanofintax</p>
            </td>
            <td
                colspan="1"
                class="confluenceTd">
                <p>域名不同</p>
                <p><span>不同环境APPID不同</span></p>
            </td>
            <td
                colspan="1"
                class="confluenceTd">
                <br />
            </td>
        </tr>
        <tr>
            <td
                style="text-align: left"
                colspan="1"
                class="confluenceTd">
                f-send-shanghaiwater
            </td>
            <td
                colspan="1"
                class="confluenceTd">
                <span>✅</span>
            </td>
            <td
                colspan="1"
                class="confluenceTd">
                <span>✅</span>
            </td>
            <td
                colspan="1"
                class="confluenceTd">
                上海水务
            </td>
            <td
                colspan="1"
                class="confluenceTd">
                <br />
            </td>
            <td
                colspan="1"
                class="confluenceTd">
                <p>logo不同</p>
                <p>域名不同</p>
                <p>不同环境APPID不同</p>
            </td>
            <td
                colspan="1"
                class="confluenceTd">
                <br />
            </td>
        </tr>
        <tr>
            <td
                style="text-align: left"
                colspan="1"
                class="confluenceTd">
                <span>f-send-kunshanwater</span>
            </td>
            <td
                colspan="1"
                class="confluenceTd">
                <span>✅</span>
            </td>
            <td
                colspan="1"
                class="confluenceTd">
                <span>✅</span>
            </td>
            <td
                colspan="1"
                class="confluenceTd">
                昆山水务
            </td>
            <td
                colspan="1"
                class="confluenceTd">
                <span>build-fatkssw</span>
            </td>
            <td
                colspan="1"
                class="confluenceTd">
                <p>logo不同</p>
                <p>域名不同</p>
                <p><span>不同环境APPID不同</span></p>
            </td>
            <td
                colspan="1"
                class="confluenceTd">
                <br />
            </td>
        </tr>
        <tr>
            <td
                colspan="1"
                class="confluenceTd">
                master-omni
            </td>
            <td
                colspan="1"
                class="confluenceTd">
                <span>✅</span>
            </td>
            <td
                colspan="1"
                class="confluenceTd">
                <span>✅</span>
            </td>
            <td
                colspan="1"
                class="confluenceTd">
                全渠道
            </td>
            <td
                colspan="1"
                class="confluenceTd">
                <span style="color: rgb(0, 0, 0)">build-omni</span>
            </td>
            <td
                colspan="1"
                class="confluenceTd">
                <br />
            </td>
            <td
                colspan="1"
                class="confluenceTd">
                <br />
            </td>
        </tr>
        <tr>
            <td
                colspan="1"
                class="confluenceTd">
                <span>master-local</span>
            </td>
            <td
                colspan="1"
                class="confluenceTd">
                <br />
            </td>
            <td
                colspan="1"
                class="confluenceTd">
                <br />
            </td>
            <td
                colspan="1"
                class="confluenceTd">
                <span>标准化分支</span>
            </td>
            <td
                colspan="1"
                class="confluenceTd">
                <span>build</span>
            </td>
            <td
                colspan="1"
                class="confluenceTd">
                <span>开发阶段，暂未投入使用</span>
            </td>
            <td
                colspan="1"
                class="confluenceTd">
                <br />
            </td>
        </tr>
        <tr>
            <td
                style="text-align: center"
                rowspan="6"
                class="confluenceTd">
                2
            </td>
            <td
                style="text-align: left"
                rowspan="6"
                class="confluenceTd">
                <span style="color: rgb(34, 34, 34)">vac</span>
            </td>
            <td
                style="text-align: left"
                class="confluenceTd">
                <span>master-kidswant</span>
            </td>
            <td
                colspan="1"
                class="confluenceTd">
                <span>✅</span>
            </td>
            <td
                colspan="1"
                class="confluenceTd">
                <span>✅</span>
            </td>
            <td class="confluenceTd"><span>孩子王</span></td>
            <td
                colspan="1"
                class="confluenceTd">
                <p>孩子王/乐友测试：build-fatkw/build-fatly</p>
                <p>孩子王/乐友预发布：build-nanofintaxkw/build-nanofintaxly</p>
                <p>孩子王/乐友客户侧测试：build-fatckw/build-fatcly</p>
                <p>孩子王/乐友生产：build-ckw/build-cly</p>
            </td>
            <td class="confluenceTd">
                <p><span>域名不同</span></p>
                <p><br /></p>
            </td>
            <td
                colspan="1"
                class="confluenceTd">
                <br />
            </td>
        </tr>
        <tr>
            <td
                style="text-align: left"
                colspan="1"
                class="confluenceTd">
                master-ketong
            </td>
            <td
                colspan="1"
                class="confluenceTd">
                <span>✅</span>
            </td>
            <td
                colspan="1"
                class="confluenceTd">
                <span>✅</span>
            </td>
            <td
                colspan="1"
                class="confluenceTd">
                <span>科通</span>
            </td>
            <td
                colspan="1"
                class="confluenceTd">
                <p>测试：build-fat</p>
                <p>预发布：build-nanofintax</p>
                <p>生产：build-nanofintax</p>
            </td>
            <td
                colspan="1"
                class="confluenceTd">
                <p>域名不同</p>
            </td>
            <td
                colspan="1"
                class="confluenceTd">
                <br />
            </td>
        </tr>
        <tr>
            <td
                style="text-align: left"
                colspan="1"
                class="confluenceTd">
                <span>f-send-shanghaiwater</span>
            </td>
            <td
                colspan="1"
                class="confluenceTd">
                <span>✅</span>
            </td>
            <td
                colspan="1"
                class="confluenceTd">
                <span>✅</span>
            </td>
            <td
                colspan="1"
                class="confluenceTd">
                <span>上海水务</span>
            </td>
            <td
                colspan="1"
                class="confluenceTd">
                <br />
            </td>
            <td
                colspan="1"
                class="confluenceTd">
                <p><span>域名不同</span></p>
                <p>logo不同</p>
            </td>
            <td
                colspan="1"
                class="confluenceTd">
                <br />
            </td>
        </tr>
        <tr>
            <td
                style="text-align: left"
                colspan="1"
                class="confluenceTd">
                f-send-kunshanwater
            </td>
            <td
                colspan="1"
                class="confluenceTd">
                <span>✅</span>
            </td>
            <td
                colspan="1"
                class="confluenceTd">
                <span>✅</span>
            </td>
            <td
                colspan="1"
                class="confluenceTd">
                <span>昆山水务</span>
            </td>
            <td
                colspan="1"
                class="confluenceTd">
                <span>build-fatkssw</span>
            </td>
            <td
                colspan="1"
                class="confluenceTd">
                <p><span>域名不同</span></p>
                <p><span>logo不同</span></p>
            </td>
            <td
                colspan="1"
                class="confluenceTd">
                <br />
            </td>
        </tr>
        <tr>
            <td
                colspan="1"
                class="confluenceTd">
                <span>master-omni</span>
            </td>
            <td
                colspan="1"
                class="confluenceTd">
                <span>✅</span>
            </td>
            <td
                colspan="1"
                class="confluenceTd">
                <span>✅</span>
            </td>
            <td
                colspan="1"
                class="confluenceTd">
                <span>全渠道</span>
            </td>
            <td
                colspan="1"
                class="confluenceTd">
                <span style="color: rgb(0, 0, 0)">build-omni</span>
            </td>
            <td
                colspan="1"
                class="confluenceTd">
                <br />
            </td>
            <td
                colspan="1"
                class="confluenceTd">
                <br />
            </td>
        </tr>
        <tr>
            <td
                colspan="1"
                class="confluenceTd">
                master-local
            </td>
            <td
                colspan="1"
                class="confluenceTd">
                <br />
            </td>
            <td
                colspan="1"
                class="confluenceTd">
                <br />
            </td>
            <td
                colspan="1"
                class="confluenceTd">
                标准化分支
            </td>
            <td
                colspan="1"
                class="confluenceTd">
                build
            </td>
            <td
                colspan="1"
                class="confluenceTd">
                开发阶段，暂未投入使用
            </td>
            <td
                colspan="1"
                class="confluenceTd">
                <br />
            </td>
        </tr>
        <tr>
            <td
                style="text-align: center"
                rowspan="6"
                class="confluenceTd">
                3
            </td>
            <td
                style="text-align: left"
                rowspan="6"
                class="confluenceTd">
                vwb
            </td>
            <td
                style="text-align: left"
                class="confluenceTd">
                <span>master-kidswant</span>
            </td>
            <td
                colspan="1"
                class="confluenceTd">
                <span>✅</span>
            </td>
            <td
                colspan="1"
                class="confluenceTd">
                <span>✅</span>
            </td>
            <td class="confluenceTd"><span>孩子王</span></td>
            <td
                colspan="1"
                class="confluenceTd">
                <p>孩子王/乐友测试：build-fatkw/build-fatly</p>
                <p>孩子王/乐友预发布：build-nanofintaxkw/build-nanofintaxly</p>
                <p>孩子王/乐友客户侧测试：build-fatckw/build-fatcly</p>
                <p>孩子王/乐友生产：build-ckw/build-cly</p>
            </td>
            <td class="confluenceTd"><p>域名不同</p></td>
            <td
                colspan="1"
                class="confluenceTd">
                <br />
            </td>
        </tr>
        <tr>
            <td
                style="text-align: left"
                colspan="1"
                class="confluenceTd">
                <span>master-ketong</span>
            </td>
            <td
                colspan="1"
                class="confluenceTd">
                <span>✅</span>
            </td>
            <td
                colspan="1"
                class="confluenceTd">
                <span>✅</span>
            </td>
            <td
                colspan="1"
                class="confluenceTd">
                <span>科通</span>
            </td>
            <td
                colspan="1"
                class="confluenceTd">
                <p>测试：build-fat</p>
                <p>预发布：build-nanofintax</p>
                <p>生产：build-nanofintax</p>
            </td>
            <td
                colspan="1"
                class="confluenceTd">
                <p>域名不同</p>
            </td>
            <td
                colspan="1"
                class="confluenceTd">
                <br />
            </td>
        </tr>
        <tr>
            <td
                style="text-align: left"
                colspan="1"
                class="confluenceTd">
                f-local-build（开发分支）
            </td>
            <td
                colspan="1"
                class="confluenceTd">
                <span>✅</span>
            </td>
            <td
                colspan="1"
                class="confluenceTd">
                <span>✅</span>
            </td>
            <td
                colspan="1"
                class="confluenceTd">
                <span>上海水务</span>
            </td>
            <td
                colspan="1"
                class="confluenceTd">
                <span>build</span>
            </td>
            <td
                colspan="1"
                class="confluenceTd">
                <p>域名不同</p>
            </td>
            <td
                colspan="1"
                class="confluenceTd">
                <br />
            </td>
        </tr>
        <tr>
            <td
                style="text-align: left"
                colspan="1"
                class="confluenceTd">
                <span><span>f-local-build</span> <span>（开发分支）</span></span>
            </td>
            <td
                colspan="1"
                class="confluenceTd">
                <span>✅</span>
            </td>
            <td
                colspan="1"
                class="confluenceTd">
                <span>✅</span>
            </td>
            <td
                colspan="1"
                class="confluenceTd">
                <span>昆山水务</span>
            </td>
            <td
                colspan="1"
                class="confluenceTd">
                build
            </td>
            <td
                colspan="1"
                class="confluenceTd">
                <span>域名不同</span>
            </td>
            <td
                colspan="1"
                class="confluenceTd">
                <br />
            </td>
        </tr>
        <tr>
            <td
                colspan="1"
                class="confluenceTd">
                <span
                    ><span>f-local-build<span>（开发分支）</span></span
                    ><br
                /></span>
            </td>
            <td
                colspan="1"
                class="confluenceTd">
                <span>✅</span>
            </td>
            <td
                colspan="1"
                class="confluenceTd">
                <span>✅</span>
            </td>
            <td
                colspan="1"
                class="confluenceTd">
                <span>全渠道</span>
            </td>
            <td
                colspan="1"
                class="confluenceTd">
                <span style="color: rgb(0, 0, 0)">build</span>
            </td>
            <td
                colspan="1"
                class="confluenceTd">
                <br />
            </td>
            <td
                colspan="1"
                class="confluenceTd">
                <br />
            </td>
        </tr>
        <tr>
            <td
                colspan="1"
                class="confluenceTd">
                <span>master-local</span>
            </td>
            <td
                colspan="1"
                class="confluenceTd">
                <br />
            </td>
            <td
                colspan="1"
                class="confluenceTd">
                <br />
            </td>
            <td
                colspan="1"
                class="confluenceTd">
                <span>标准化分支</span>
            </td>
            <td
                colspan="1"
                class="confluenceTd">
                <span>build</span>
            </td>
            <td
                colspan="1"
                class="confluenceTd">
                <span>开发阶段，暂未投入使用</span>
            </td>
            <td
                colspan="1"
                class="confluenceTd">
                <br />
            </td>
        </tr>
        <tr>
            <td
                style="text-align: center"
                rowspan="5"
                class="confluenceTd">
                4
            </td>
            <td
                style="text-align: left"
                rowspan="5"
                class="confluenceTd">
                vai
            </td>
            <td
                style="text-align: left"
                class="confluenceTd">
                master-kidswant
            </td>
            <td
                colspan="1"
                class="confluenceTd">
                ✅
            </td>
            <td
                colspan="1"
                class="confluenceTd">
                ❎
            </td>
            <td class="confluenceTd">孩子王</td>
            <td
                colspan="1"
                class="confluenceTd">
                <span style="color: rgb(0, 0, 0)">build</span>
            </td>
            <td class="confluenceTd">定制化需求</td>
            <td
                colspan="1"
                class="confluenceTd">
                <br />
            </td>
        </tr>
        <tr>
            <td
                style="text-align: left"
                colspan="1"
                class="confluenceTd">
                master-ketong
            </td>
            <td
                colspan="1"
                class="confluenceTd">
                ✅
            </td>
            <td
                colspan="1"
                class="confluenceTd">
                <span>❎</span>
            </td>
            <td
                colspan="1"
                class="confluenceTd">
                科通
            </td>
            <td
                colspan="1"
                class="confluenceTd">
                <span style="color: rgb(0, 0, 0)">build</span>
            </td>
            <td
                colspan="1"
                class="confluenceTd">
                <span>定制化需求</span>
            </td>
            <td
                colspan="1"
                class="confluenceTd">
                <br />
            </td>
        </tr>
        <tr>
            <td
                style="text-align: left"
                colspan="1"
                class="confluenceTd">
                master-local
            </td>
            <td
                colspan="1"
                class="confluenceTd">
                ✅
            </td>
            <td
                colspan="1"
                class="confluenceTd">
                <span>❎</span>
            </td>
            <td
                colspan="1"
                class="confluenceTd">
                上海水务
            </td>
            <td
                colspan="1"
                class="confluenceTd">
                <span style="color: rgb(0, 0, 0)">build</span>
            </td>
            <td
                colspan="1"
                class="confluenceTd">
                定制化需求
            </td>
            <td
                colspan="1"
                class="confluenceTd">
                <br />
            </td>
        </tr>
        <tr>
            <td
                style="text-align: left"
                colspan="1"
                class="confluenceTd">
                <span>master-local</span>
            </td>
            <td
                colspan="1"
                class="confluenceTd">
                ✅
            </td>
            <td
                colspan="1"
                class="confluenceTd">
                <span>❎</span>
            </td>
            <td
                colspan="1"
                class="confluenceTd">
                昆山水务
            </td>
            <td
                colspan="1"
                class="confluenceTd">
                <span style="color: rgb(0, 0, 0)">build</span>
            </td>
            <td
                colspan="1"
                class="confluenceTd">
                <span>定制化需求</span>
            </td>
            <td
                colspan="1"
                class="confluenceTd">
                <br />
            </td>
        </tr>
        <tr>
            <td
                colspan="1"
                class="confluenceTd">
                <span><span>master-local</span><br /></span>
            </td>
            <td
                colspan="1"
                class="confluenceTd">
                <span>✅</span>
            </td>
            <td
                colspan="1"
                class="confluenceTd">
                <span>❎</span>
            </td>
            <td
                colspan="1"
                class="confluenceTd">
                <span>全渠道</span>
            </td>
            <td
                colspan="1"
                class="confluenceTd">
                <span style="color: rgb(0, 0, 0)">build</span>
            </td>
            <td
                colspan="1"
                class="confluenceTd">
                <br />
            </td>
            <td
                colspan="1"
                class="confluenceTd">
                <br />
            </td>
        </tr>
        <tr>
            <td
                style="text-align: center"
                rowspan="2"
                class="confluenceTd">
                5
            </td>
            <td
                style="text-align: left"
                rowspan="2"
                class="confluenceTd">
                vin
            </td>
            <td
                style="text-align: left"
                colspan="1"
                class="confluenceTd">
                <span>f-rec-local-shuiwu<br /></span>
            </td>
            <td
                colspan="1"
                class="confluenceTd">
                <span>✅</span>
            </td>
            <td
                colspan="1"
                class="confluenceTd">
                ❎
            </td>
            <td
                colspan="1"
                class="confluenceTd">
                <span>昆山水务</span>
            </td>
            <td
                colspan="1"
                class="confluenceTd">
                build-local
            </td>
            <td
                colspan="1"
                class="confluenceTd">
                定制化需求
            </td>
            <td
                colspan="1"
                class="confluenceTd">
                <span>✅</span>
            </td>
        </tr>
        <tr>
            <td
                style="text-align: left"
                colspan="1"
                class="confluenceTd">
                <span><span>f-send</span>-kidswant</span>
            </td>
            <td
                colspan="1"
                class="confluenceTd">
                ✅
            </td>
            <td
                colspan="1"
                class="confluenceTd">
                <span>❎</span>
            </td>
            <td
                colspan="1"
                class="confluenceTd">
                <span>孩子王</span>
            </td>
            <td
                colspan="1"
                class="confluenceTd">
                <br />
            </td>
            <td
                colspan="1"
                class="confluenceTd">
                <span>定制化需求</span>
            </td>
            <td
                colspan="1"
                class="confluenceTd">
                <span>✅</span>
            </td>
        </tr>
        <tr>
            <td
                style="text-align: center"
                class="confluenceTd">
                6
            </td>
            <td
                style="text-align: left"
                class="confluenceTd">
                <span style="color: rgb(34, 34, 34)">cloudapi</span>
            </td>
            <td
                style="text-align: left"
                class="confluenceTd">
                master
            </td>
            <td
                colspan="1"
                class="confluenceTd">
                <span>❎</span>
            </td>
            <td
                colspan="1"
                class="confluenceTd">
                <span>❎</span>
            </td>
            <td class="confluenceTd">基线</td>
            <td
                colspan="1"
                class="confluenceTd">
                <br />
            </td>
            <td class="confluenceTd"><br /></td>
            <td
                colspan="1"
                class="confluenceTd">
                <br />
            </td>
        </tr>
        <tr>
            <td
                style="text-align: center"
                class="confluenceTd">
                7
            </td>
            <td
                style="text-align: left"
                class="confluenceTd">
                <span style="color: rgb(34, 34, 34)">gateway-kubernetes-ingress</span>
            </td>
            <td
                style="text-align: left"
                class="confluenceTd">
                <span>master</span>
            </td>
            <td
                colspan="1"
                class="confluenceTd">
                <span>❎</span>
            </td>
            <td
                colspan="1"
                class="confluenceTd">
                <span>❎</span>
            </td>
            <td class="confluenceTd"><span>基线</span></td>
            <td
                colspan="1"
                class="confluenceTd">
                <br />
            </td>
            <td class="confluenceTd"><br /></td>
            <td
                colspan="1"
                class="confluenceTd">
                <br />
            </td>
        </tr>
        <tr>
            <td
                style="text-align: center"
                class="confluenceTd">
                8
            </td>
            <td
                style="text-align: left"
                class="confluenceTd">
                <span style="color: rgb(34, 34, 34)">im-service</span>
            </td>
            <td
                style="text-align: left"
                class="confluenceTd">
                <span>master</span>
            </td>
            <td
                colspan="1"
                class="confluenceTd">
                <span>❎</span>
            </td>
            <td
                colspan="1"
                class="confluenceTd">
                <span>❎</span>
            </td>
            <td class="confluenceTd"><span>基线</span></td>
            <td
                colspan="1"
                class="confluenceTd">
                <br />
            </td>
            <td class="confluenceTd"><br /></td>
            <td
                colspan="1"
                class="confluenceTd">
                <br />
            </td>
        </tr>
        <tr>
            <td
                style="text-align: center"
                class="confluenceTd">
                9
            </td>
            <td
                style="text-align: left"
                class="confluenceTd">
                <span style="color: rgb(34, 34, 34)">log-platform</span>
            </td>
            <td
                style="text-align: left"
                class="confluenceTd">
                <span>master</span>
            </td>
            <td
                colspan="1"
                class="confluenceTd">
                <span>❎</span>
            </td>
            <td
                colspan="1"
                class="confluenceTd">
                <span>❎</span>
            </td>
            <td class="confluenceTd"><span>基线</span></td>
            <td
                colspan="1"
                class="confluenceTd">
                <br />
            </td>
            <td class="confluenceTd"><br /></td>
            <td
                colspan="1"
                class="confluenceTd">
                <br />
            </td>
        </tr>
        <tr>
            <td
                style="text-align: center"
                rowspan="3"
                class="confluenceTd">
                10
            </td>
            <td
                style="text-align: left"
                rowspan="3"
                class="confluenceTd">
                <span style="color: rgb(34, 34, 34)">tenant-center</span>
            </td>
            <td
                style="text-align: left"
                class="confluenceTd">
                <span>master-saas-base</span>
            </td>
            <td
                colspan="1"
                class="confluenceTd">
                <span>❎</span>
            </td>
            <td
                colspan="1"
                class="confluenceTd">
                <span>❎</span>
            </td>
            <td class="confluenceTd">基线</td>
            <td
                colspan="1"
                class="confluenceTd">
                <br />
            </td>
            <td class="confluenceTd">混合云（科通、孩子王在用）</td>
            <td
                colspan="1"
                class="confluenceTd">
                <br />
            </td>
        </tr>
        <tr>
            <td
                style="text-align: left"
                colspan="1"
                class="confluenceTd">
                <span>f-send-shanghaiwater</span>
            </td>
            <td
                colspan="1"
                class="confluenceTd">
                <span>❎</span>
            </td>
            <td
                colspan="1"
                class="confluenceTd">
                <span><span>❎</span><br /></span>
            </td>
            <td
                colspan="1"
                class="confluenceTd">
                基线
            </td>
            <td
                colspan="1"
                class="confluenceTd">
                <br />
            </td>
            <td
                colspan="1"
                class="confluenceTd">
                纯本地化（未来废弃）
            </td>
            <td
                colspan="1"
                class="confluenceTd">
                <br />
            </td>
        </tr>
        <tr>
            <td
                colspan="1"
                class="confluenceTd">
                master-base
            </td>
            <td
                colspan="1"
                class="confluenceTd">
                <span>❎</span>
            </td>
            <td
                colspan="1"
                class="confluenceTd">
                <span>❎</span>
            </td>
            <td
                colspan="1"
                class="confluenceTd">
                <span>基线</span>
            </td>
            <td
                colspan="1"
                class="confluenceTd">
                <br />
            </td>
            <td
                colspan="1"
                class="confluenceTd">
                纯本地化+混合云通用版，作为未来主版本
            </td>
            <td
                colspan="1"
                class="confluenceTd">
                <br />
            </td>
        </tr>
        <tr>
            <td
                style="text-align: center"
                colspan="1"
                class="confluenceTd">
                11
            </td>
            <td
                style="text-align: left"
                colspan="1"
                class="confluenceTd">
                <span style="color: rgb(34, 34, 34)">ucenter</span>
            </td>
            <td
                style="text-align: left"
                colspan="1"
                class="confluenceTd">
                <span>master</span>
            </td>
            <td
                colspan="1"
                class="confluenceTd">
                ❎
            </td>
            <td
                colspan="1"
                class="confluenceTd">
                ❎
            </td>
            <td
                colspan="1"
                class="confluenceTd">
                <span>基线</span>
            </td>
            <td
                colspan="1"
                class="confluenceTd">
                <br />
            </td>
            <td
                colspan="1"
                class="confluenceTd">
                <br />
            </td>
            <td
                colspan="1"
                class="confluenceTd">
                <br />
            </td>
        </tr>
        <tr>
            <td
                style="text-align: center"
                rowspan="4"
                class="confluenceTd">
                12
            </td>
            <td
                style="text-align: left"
                rowspan="4"
                class="confluenceTd">
                <span style="color: rgb(34, 34, 34)">invoice-send-local</span>
            </td>
            <td
                style="text-align: left"
                colspan="1"
                class="confluenceTd">
                master
            </td>
            <td
                colspan="1"
                class="confluenceTd">
                <span>✅</span>
            </td>
            <td
                colspan="1"
                class="confluenceTd">
                <span>❎</span>
            </td>
            <td
                colspan="1"
                class="confluenceTd">
                基线
            </td>
            <td
                colspan="1"
                class="confluenceTd">
                <br />
            </td>
            <td
                colspan="1"
                class="confluenceTd">
                <span>混合云</span>
            </td>
            <td
                colspan="1"
                class="confluenceTd">
                <br />
            </td>
        </tr>
        <tr>
            <td
                style="text-align: left"
                colspan="1"
                class="confluenceTd">
                <span>master-local</span>
            </td>
            <td
                colspan="1"
                class="confluenceTd">
                <span>✅</span>
            </td>
            <td
                colspan="1"
                class="confluenceTd">
                <span>❎</span>
            </td>
            <td
                colspan="1"
                class="confluenceTd">
                <span>基线</span>
            </td>
            <td
                colspan="1"
                class="confluenceTd">
                <br />
            </td>
            <td
                colspan="1"
                class="confluenceTd">
                <span>纯本地化</span>
            </td>
            <td
                colspan="1"
                class="confluenceTd">
                <br />
            </td>
        </tr>
        <tr>
            <td
                style="text-align: left"
                colspan="1"
                class="confluenceTd">
                master-ketong
            </td>
            <td
                colspan="1"
                class="confluenceTd">
                <span>✅</span>
            </td>
            <td
                colspan="1"
                class="confluenceTd">
                <span>❎</span>
            </td>
            <td
                colspan="1"
                class="confluenceTd">
                科通
            </td>
            <td
                colspan="1"
                class="confluenceTd">
                <br />
            </td>
            <td
                colspan="1"
                class="confluenceTd">
                科通-混合云
            </td>
            <td
                colspan="1"
                class="confluenceTd">
                <br />
            </td>
        </tr>
        <tr>
            <td
                style="text-align: left"
                colspan="1"
                class="confluenceTd">
                master-kidswant
            </td>
            <td
                colspan="1"
                class="confluenceTd">
                <span>✅</span>
            </td>
            <td
                colspan="1"
                class="confluenceTd">
                <span>❎</span>
            </td>
            <td
                colspan="1"
                class="confluenceTd">
                孩子王
            </td>
            <td
                colspan="1"
                class="confluenceTd">
                <br />
            </td>
            <td
                colspan="1"
                class="confluenceTd">
                <span>孩子王-混合云</span>
            </td>
            <td
                colspan="1"
                class="confluenceTd">
                <br />
            </td>
        </tr>
        <tr>
            <td
                style="text-align: center"
                rowspan="4"
                class="confluenceTd">
                13
            </td>
            <td
                style="text-align: left"
                rowspan="4"
                class="confluenceTd">
                <span style="color: rgb(34, 34, 34)">invoice-platform-bff-local</span>
            </td>
            <td
                style="text-align: left"
                colspan="1"
                class="confluenceTd">
                <span>master</span>
            </td>
            <td
                colspan="1"
                class="confluenceTd">
                <span>✅</span>
            </td>
            <td
                colspan="1"
                class="confluenceTd">
                <span>❎</span>
            </td>
            <td
                colspan="1"
                class="confluenceTd">
                <span>基线</span>
            </td>
            <td
                colspan="1"
                class="confluenceTd">
                <br />
            </td>
            <td
                colspan="1"
                class="confluenceTd">
                <span>混合云</span>
            </td>
            <td
                colspan="1"
                class="confluenceTd">
                <br />
            </td>
        </tr>
        <tr>
            <td
                style="text-align: left"
                colspan="1"
                class="confluenceTd">
                master-local
            </td>
            <td
                colspan="1"
                class="confluenceTd">
                <span>✅</span>
            </td>
            <td
                colspan="1"
                class="confluenceTd">
                <span>❎</span>
            </td>
            <td
                colspan="1"
                class="confluenceTd">
                <span>基线</span>
            </td>
            <td
                colspan="1"
                class="confluenceTd">
                <br />
            </td>
            <td
                colspan="1"
                class="confluenceTd">
                <span>纯本地化</span>
            </td>
            <td
                colspan="1"
                class="confluenceTd">
                <br />
            </td>
        </tr>
        <tr>
            <td
                style="text-align: left"
                colspan="1"
                class="confluenceTd">
                <span>master-ketong</span>
            </td>
            <td
                colspan="1"
                class="confluenceTd">
                <span>✅</span>
            </td>
            <td
                colspan="1"
                class="confluenceTd">
                <span>❎</span>
            </td>
            <td
                colspan="1"
                class="confluenceTd">
                <span>科通</span>
            </td>
            <td
                colspan="1"
                class="confluenceTd">
                <br />
            </td>
            <td
                colspan="1"
                class="confluenceTd">
                <span>科通-混合云</span>
            </td>
            <td
                colspan="1"
                class="confluenceTd">
                <br />
            </td>
        </tr>
        <tr>
            <td
                style="text-align: left"
                colspan="1"
                class="confluenceTd">
                <span>master-kidswant</span>
            </td>
            <td
                colspan="1"
                class="confluenceTd">
                <span>✅</span>
            </td>
            <td
                colspan="1"
                class="confluenceTd">
                <span>❎</span>
            </td>
            <td
                colspan="1"
                class="confluenceTd">
                <span>孩子王</span>
            </td>
            <td
                colspan="1"
                class="confluenceTd">
                <br />
            </td>
            <td
                colspan="1"
                class="confluenceTd">
                <span>孩子王-混合云</span>
            </td>
            <td
                colspan="1"
                class="confluenceTd">
                <br />
            </td>
        </tr>
        <tr>
            <td
                style="text-align: center"
                colspan="1"
                class="confluenceTd">
                14
            </td>
            <td
                style="text-align: left"
                colspan="1"
                class="confluenceTd">
                <span style="color: rgb(34, 34, 34)">invoice-leqi-service</span>
            </td>
            <td
                style="text-align: left"
                colspan="1"
                class="confluenceTd">
                <span>master</span>
            </td>
            <td
                colspan="1"
                class="confluenceTd">
                <span>❎</span>
            </td>
            <td
                colspan="1"
                class="confluenceTd">
                <span>❎</span>
            </td>
            <td
                colspan="1"
                class="confluenceTd">
                <br />
            </td>
            <td
                colspan="1"
                class="confluenceTd">
                <br />
            </td>
            <td
                colspan="1"
                class="confluenceTd">
                <span>一套代码</span>
            </td>
            <td
                colspan="1"
                class="confluenceTd">
                <span>✅</span>
            </td>
        </tr>
        <tr>
            <td
                style="text-align: center"
                colspan="1"
                class="confluenceTd">
                15
            </td>
            <td
                style="text-align: left"
                colspan="1"
                class="confluenceTd">
                <span style="color: rgb(34, 34, 34)">invoice-base-service</span>
            </td>
            <td
                style="text-align: left"
                colspan="1"
                class="confluenceTd">
                <span>master-local</span>
            </td>
            <td
                colspan="1"
                class="confluenceTd">
                <span>❎</span>
            </td>
            <td
                colspan="1"
                class="confluenceTd">
                <span>❎</span>
            </td>
            <td
                colspan="1"
                class="confluenceTd">
                <br />
            </td>
            <td
                colspan="1"
                class="confluenceTd">
                <br />
            </td>
            <td
                colspan="1"
                class="confluenceTd">
                <span>一套代码</span>
            </td>
            <td
                colspan="1"
                class="confluenceTd">
                <span>✅</span>
            </td>
        </tr>
        <tr>
            <td
                style="text-align: center"
                colspan="1"
                class="confluenceTd">
                16
            </td>
            <td
                style="text-align: left"
                colspan="1"
                class="confluenceTd">
                <span style="color: rgb(34, 34, 34)">invoice-receive-local</span>
            </td>
            <td
                style="text-align: left"
                colspan="1"
                class="confluenceTd">
                <span>master-local</span>
            </td>
            <td
                colspan="1"
                class="confluenceTd">
                <span>❎</span>
            </td>
            <td
                colspan="1"
                class="confluenceTd">
                <span>❎</span>
            </td>
            <td
                colspan="1"
                class="confluenceTd">
                <br />
            </td>
            <td
                colspan="1"
                class="confluenceTd">
                <br />
            </td>
            <td
                colspan="1"
                class="confluenceTd">
                <span>一套代码</span>
            </td>
            <td
                colspan="1"
                class="confluenceTd">
                <span>✅</span>
            </td>
        </tr>
        <tr>
            <td
                style="text-align: center"
                colspan="1"
                class="confluenceTd">
                17
            </td>
            <td
                style="text-align: left"
                colspan="1"
                class="confluenceTd">
                <span style="color: rgb(34, 34, 34)">invoice-receive-platform-bff-local</span>
            </td>
            <td
                style="text-align: left"
                colspan="1"
                class="confluenceTd">
                <span>master-local</span>
            </td>
            <td
                colspan="1"
                class="confluenceTd">
                <span>❎</span>
            </td>
            <td
                colspan="1"
                class="confluenceTd">
                <span>❎</span>
            </td>
            <td
                colspan="1"
                class="confluenceTd">
                <br />
            </td>
            <td
                colspan="1"
                class="confluenceTd">
                <br />
            </td>
            <td
                colspan="1"
                class="confluenceTd">
                <span>一套代码</span>
            </td>
            <td
                colspan="1"
                class="confluenceTd">
                <span>✅</span>
            </td>
        </tr>
        <tr>
            <td
                style="text-align: center"
                colspan="1"
                class="confluenceTd">
                18
            </td>
            <td
                style="text-align: left"
                colspan="1"
                class="confluenceTd">
                <span style="color: rgb(34, 34, 34)">invoice-supplychains-local</span>
            </td>
            <td
                style="text-align: left"
                colspan="1"
                class="confluenceTd">
                master
            </td>
            <td
                colspan="1"
                class="confluenceTd">
                <span>❎</span>
            </td>
            <td
                colspan="1"
                class="confluenceTd">
                <span>❎</span>
            </td>
            <td
                colspan="1"
                class="confluenceTd">
                孩子王
            </td>
            <td
                colspan="1"
                class="confluenceTd">
                <br />
            </td>
            <td
                colspan="1"
                class="confluenceTd">
                孩子王定制服务
            </td>
            <td
                colspan="1"
                class="confluenceTd">
                <br />
            </td>
        </tr>
    </tbody>
</table>


## 项目问题
1. 首次进入页面，winResizeChange装饰器装饰的页面表格高度异常
    - 页面内部存在modal， drawer，他们内部还有包含winResizeChange装饰的组件；
    - modal，drawer内部还有ny-page-box组件，因为modal，drawer在visible为false的情况下，渲染机制也会先渲染，所以内容可以用v-if绑定visible；