# 不同os下的nginx

## windows
> windows下的`nginx`操作命令；    
- 找到`nginx.exe`所在的目录，`where | where.exe nginx`
- `start ./nginx.exe`
- `./nginx.exe -s reload`
- `./nginx.exe -s stop`
- `nginx.conf`
  ```js
  location /assets {
    # 在windows下正反斜杠都可以访问，不过要注意转义字符，正斜杠会导致转义字符的产生
    # 例如第二个alias \thirdpartApp \t被当成转义字符了，所以最好所有的\都写成\\，这也是这里写成\\thirdpartApp的原因
    alias   C:/Users/dengchunming/project/thirdpartApp/dist/assets;
    # alias   C:\Users\dengchunming\project\\thirdpartApp\dist\assets;
    index  index.html index.htm;
  }
  ```

## macos
- `nginx` 
- `nginx -s reload`
- `nginx -s stop`