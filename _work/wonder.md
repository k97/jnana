---
private: "locked"
title: "Wonder"
excerpt: "Android app design and web app development"
coverImage: "/assets/work/wonder/cover.jpg"
date: "2013-09-20T00:00:00.000Z"
author:
  name: Karthik
  private: false
  picture: "/assets/blog/authors/joe.jpeg"
ogImage:
  url: "/assets/blog/shell-grunt/cover.png"
---

I got a chance to work on the Wonder Cements logistics app when I was employed at Karya Technologies. The scope of my work was around designing and developing a web application and Android mobile application. This application is used by dealers and potential customers who purchase the cement bags in bulk, since this app was planned to be used by customers all over the country, we decided to do a native android app that would consume services from the [Microsoft Dynamics AX](https://www.microsoft.com/en-in/dynamics365/ax-overview) ERP and a web app that would manage the mobile app users and workflows.

#### Android app design

![](/assets/work/wonder/wonder-1-android-design.png)
We started off the design with few prototypes and a concept design in parallel. The low level designs were to straighten up the components that weren't part of the [Android Human Interface Guidelines](https://developer.android.com/guide/practices/ui_guidelines/index.html) as of Jelly Bean version. Setting up a singular experience flow for both web and the mobile app was quite the challenge but we eventually iterated upon a simple accordion based forms.

#### Web app development

![](/assets/work/wonder/wonder-2-webapp.png)

The web application interfaced with a .Net server for user account and session maintenance while the main module level services were consumed from the AX. We used [MustacheJS](http://mustache.github.io/) as the templating engine and built our own custom web framework to maintain data and service layer through JavaScript. We used HTML5 APIs such sessionStorage and localStorage to maintain module data through the a sales-order creation and used location APIs to track and display sales orders contextually.

![](/assets/work/wonder/wonder-3--listings-webapp.png)
