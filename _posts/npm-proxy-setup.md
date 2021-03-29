---
title: "NPM proxy setup"
excerpt: "Setting up NodeJS and running npm behind corporate proxy in a windows PC was really a pain in the neck when I tried it for the first time. This post will remain as a reference for future configs."
date: "2014-04-05"
author:
  name: Karthik
  picture: "/assets/blog/authors/joe.jpeg"
ogImage:
  url: "https://k97static.s3-ap-southeast-2.amazonaws.com/v8/metax.png"
---

Setting up NodeJS and running npm behind corporate proxy in a windows PC was really a pain in the neck when I tried it for the first time. This post will remain as a reference for future configs. After using YO and Grunt for app development in an open network, I was under the pretext that npm works flawlessly and if at all any problem arises it was just some missing environment variables (corporate machines are usually windows PCs). After joining my new workplace, I found out straight away that its frustrating to run npm with all the proxy setups and blocked admin rights. I also remember crashing the Node with my super buffoon ingenuity while trying to some related issues issues. Trying to recall, I don’t remember exactly what made it to crash but I just did. So I raised an admin ticket and they got it going back again.

Anyway, after finishing my work at hand, I scheduled sometime for the setup and fixed the issues for good. Also, while trying to figure out the whole mess, Marten’s article on getting yeoman to work was quite useful. But I had my own issues other than what Marten had logged. So I thought of logging the whole flow here to make it easier for me and for others who might need it.

First, get the NodeJS installed and also the git if it’s not available already. After installation, check whether they were installed properly using the commands:

```
node --version
v0.10.21 //Returns node version
git --version
git version 1.8.4.msysgit.0 //Returns node version
```

Usually, these commands return their respective version number. In Windows, git command may show some errors as invalid command or something. If that's the case, try setting the environment variable and it will work.

```
Variable Name: PATH
Variable Value: C:\\Program Files\\nodejs\\;C:\\Program Files\\Git\\bin;C:\\Program Files\\Git\\cmd;
```

Now, we have to configure the proxy settings. There are 3 ways to do that, either we can setup environment variables in Windows (or) we can pass certain commands through the cmd prompt. If configuring through cmd prompt feels all nerdy, we can directly follow the alternate method of configuring it through the NPMRC file.

Setting up the proxy values through ENVIRONMENT VARIABLES:

```
Variable Name: HTTP_PROXY
Variable Value: http://proxy.company.com:8080
Variable Name: HTTPS_PROXY
Variable Value: https://proxy.company.com:8080
```

If that doesn't work as in my case like mine where I had some admin privileges blocked. Try these in the cmd prompt:

````
> npm config set proxy http://userNameHere:passwordHere@proxy.company.com:8080
> npm config set https-proxy http://userNameHere:passwordHere@123@proxy.company.com:8080```
````

#### Alternate Method

After configuring all of this I figured out the third way of doing the above steps. To setup the the NPMRC file, which can be found under the USER location `(C:\\Users\\USERNAME\\.NPMRC)`.

```
strict-ssl = false
registry = http://registry.npmjs.org/
prefix = C:\\usr\\local
proxy = http://userNameHere:passwordHere@proxy.company.com:8080
https-proxy = http://userNameHere:passwordHere@proxy.company.com:8080
```

Make sure `npmregistry` is properly setup. It can found in the NPMRC file setting above. Apart from these, we have to configure git to make it work seamlessly with bower. Usually git: protocol URLs are blocked in corporate environment and to overcome this we can use `https:` instead of `git:`. I found out while trying to figure all of this, that there is a similar file alike NPMRC under the same location as it for git `.gitconfig` and we can also save the configurations there.

```
git config --global url https:// insteadOf git://
```

Once all of this is done, the whole grunt-bower should work. But for reason related to blocked admin rights and folder access issue, it wasn’t working for me. I had to figure out where my local npm modules were stored. Usually this gets stored in the default location of the npm directory but I guess the folder rights issue(s) might have moved it to a different location. For instance, my local npm modules were stored under D: drive, so I setup an environment variable under `PATH` as `D:\\usr\\local` and this solved the grunt issue of command not recognized.

Apart from this, there was a fatal warning of Spawn ENOENT while trying to run grunt tasks. Fortunately StackOverflow had a solution for this. To setup the environment variable under PATH for `%SystemRoot%\\system32;` That did the trick and the warning stopped. At last everything seemed to work and I was able to run the npm & grunt tasks at peace.🙂

PS: I have been working on my npm-grunt boilerplate for quite some time and I have completed it. Will try to share through github ASAP.
