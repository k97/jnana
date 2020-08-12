---
title: 'Shell-Grunt Boilerplate'
excerpt: 'Shell contains all the basic things that are need to jumpstart a project without dealing with bootstrapping. I have forked the h5bp repo to make things easier for the app structure.'
coverImage: '/assets/blog/shell-grunt/cover.png'
date: '2014-05-05'
author:
  name: Karthik
  picture: '/assets/blog/authors/joe.jpeg'
ogImage:
  url: '/assets/blog/shell-grunt/cover.png'
---

[NPM](https://www.npmjs.com/) is a powerful asset when it comes to managing dependencies and running tasks while working on app development. I have used [Yeoman](http://yeoman.io/) and pre-configured apps in the past which usually has the setups done and it was easier for me and my team to pull the code from the repos and get going without much fuss. After awhile, I wanted to setup my own configuration, a little something that can be used or referenced to jump start the whole setup process while beginning a new project.

After procrastinating for a while, I managed to complete the task. It took me sometime to figure out the basics and set things right. To sum it up briefly on what I grasped, NPM module is coiled to NodeJS and the development dependencies are setup here by configuring the `package.json` file, like grunt configuration & its plugins. Then we have to setup the `gruntFile.js` to manage tasks for development, like automated conversion of LESS to CSS, etc. Apparently Bower is another module which is configured through `bower.json` to manage the actual application dependencies like jQuery & other vendor libraries. Also, it becomes easier if the development & application dependencies are managed separately. There is a great article by [Chris at 24ways](http://24ways.org/2013/grunt-is-not-weird-and-hard/), he explains everything in detail.

Anyway, Shell contains all the basic things that are need to start a project. I have just pulled the [h5bp](http://html5boilerplate.com/) inside to make things easier. Also, while developing I tried out [ExpressJS](http://expressjs.com/) and found it to be extremely powerful, so I’m really looking forward to utilize its full potential in some other other app. I’m planning on extending the Shell boilerplate to make it more efficiency and dynamic, as the current one is just a startup template which intends to looks simple and self-explanatory for beginners like me. I am a LESS user, so I have included basic configuration for LESS files and tasks for LESS conversion. The entire setup files for development is available in [this github](https://github.com/k97/shell) repo for reference.
