# Nginx
[官网doc](https://nginx.org/en/docs/beginners_guide.html)

## install
mac `brew install nginx`

## nginx.conf文件配置基础结构
```js
{
  http {
    server {
      //当location匹配上且内部没有配置root的时候会使用此选项
      root ${uri} 
      // 多个location进行匹配，匹配上多个，会代理去location最长的那个
      location ${uri} {
        // opt 配置了此选项，请求会代理到指定的proxy_pass的服务器
        proxy_pass ${url}
        //root和alias只能二选一，且alias必须以“/”结尾
        //匹配上之后会转发到指定目录下，转发请求会进行拼接: ${root}/${location}
        root ${uri}
        //匹配上之后会转发到指定目录下，转发请求不会进行拼接: ${root}
        alias ${uri}
        location /images/ {
            root /opt/html/;
            try_files $uri   $uri/  /images/default.gif; 
        }
        // 比如 请求 127.0.0.1/images/test.gif 会依次查找 
        // 1.文件/opt/html/images/test.gif   
        // 2.文件夹 /opt/html/images/test.gif/下的index文件  
        // 3. 请求127.0.0.1/images/default.gif
      }
    }
  }
}
```
<a href='/nginx.conf配置详解.xmind'>nginx.conf配置详解.xmind，位于源码的public文件夹下</a>

## 日志配置
`log_format  main  '$server_addr ; $server_name ; $server_port ; $server_protocol ; $upstream_addr ; $request ; $http_x_forwarded_for $proxy_add_x_forwarded_for';`
- `$http_x_forwarded_for`
- `$proxy_add_x_forwarded_for`