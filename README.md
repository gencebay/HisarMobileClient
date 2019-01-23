## React Native Mobile App, HttpLive, TypeScript Proxy

### React-Native

### TypeScript (APIs, Proxy)

### [HttpLive](https://github.com/gencebay/httplive)

[![Build status](https://build.appcenter.ms/v0.1/apps/5c024407-9636-4344-93ee-5a1f94b67cce/branches/master/badge)](https://appcenter.ms)

[![Watch the video](https://github.com/gencebay/HisarMobileClient/blob/master/overview.png)](https://www.youtube.com/watch?v=8yEbVQelPs8)

### Development

Start HttpLive

    $ httplive -p 5003,5004 -d httplive.db

then

    $ npm install

    $ react-native run-ios

### Docker

    $ scp httplive.db root@<hostip>:~/db/httplive.db
    $ docker run -d -v ~/db:/var/db -p 80:5003 gencebay/httplive -d /var/db/httplive.db
