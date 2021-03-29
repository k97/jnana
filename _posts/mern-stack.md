---
title: "MERN stack"
excerpt: "I'm doing yet another iteration on my website. Unlike the previous versions, I want the next one to hold for a longer timespan. In the coming weeks, I will be logging the process here, so it can stay as a reference material."
date: "2017-06-23T21:56:01.033Z"
author:
  name: Karthik
  picture: "/assets/blog/authors/joe.jpeg"
ogImage:
  url: "https://k97static.s3-ap-southeast-2.amazonaws.com/v8/metax.png"
---

I'm doing yet another iteration on my website. Unlike the previous versions, I want the next one to hold for a longer timespan. In the coming weeks, I will be logging the process here, so it can stay as a reference material.

### Problem(s)

The last version had some teething problem in terms of logging data across the sections. Whenever I dealt with new content, either the setup was getting in the way or the templates. In hindsight, Angular and Jekyll setup didn't really workout and gh-pages wasn't ideal in maintaining the blog and the portfolio as separate entities. Apparently, I lost the setup for the blog and the re-setup was slightly tedious that I couldn't fire up the blog again. I want to avoid all this aggravation in the next version and keep the logging process simple.

### Resolution.

The content is going to be in Markdown, so that's sorted. Now, the choices are between compiling the markdown on the browser using a JS parser or generate a compiled markup during deployment and then serve it as static pages or as services. If I approach it with the latter choice, then the app might involve a back-end module using ExpressJS and to host it, either Heroku or Firebase can a good option.

### Designs

I've some wireframes sketched out and also designed few mockups to get a direction on the design elements. Upon completion of the mockups, it looked plenty enough for me to start the work. As far as iterations on the designs are concerned, usually I do it on the browser while coding and I want to follow the same approach for this one. The design elements are going to be sort kind of a chart, and the idea is to consume my [RescueTime](https://www.rescuetime.com/) data and display the analytics at a high level for the initial release. This will allow me to gather data from multiple devices and publish it to a single public interface.

<figure><img src="/assets/blog/mern/wireframes-homepage.jpg" alt="Landing page wireframes"><figcaption>Landing page wireframes</figcaption></figure>
<figure><img src="/assets/blog/mern/v6_landing_2.png" alt="Landing page design mock"><figcaption>Landing page design mock</figcaption></figure>

The idea of habit and time-tracking tools were something that I wanted to develop for sometime. Meanwhile, when I was thinking about the various ways to approach this, Gyroscope was released. It's an app that consolidates all the user's data from multiple devices into a single interface. There are few other services which does this but I felt that Gyroscope is superior, mostly because of its beautiful design. I got inspired by the app and then it lead to a rough idea on how I can approach my site. To set things clear, I am gonna try hard enough not to copy anything intentionally from there, which by itself is a stern design challenge.\n\n### What's ahead?\nThe plan is to keep the portfolio and the blog section separate as similar to the old site. Only this time around, I've to be extra careful in managing the modules being independent. To achieve that, I'm planning to build the whole technical solution using a single framework. After using NG2 for an app at work, I was quite convinced with it and I've been working with AngularJS for quite sometime now, which has left me wondering on the other JS frameworks that are out there. I want to check things on Aurelia and ReactJS, which looked particularly interesting that on the others. Especially, the React ecosystem sounds more interesting and the added buzz makes it more appealing. I think its the right time to do this project as an experiment with the concepts of React.\n\nWith some much in the backlog and other projects taking majority of my time, its going to be tricky to manage time in the coming days. But I've wasted enough time postponing this work and I'm just excited to work with React.

#### More designs

<figure><img src="/assets/blog/mern/wireframes-blogpost.jpg" alt="Journal design wireframes"><figcaption>Journal reference wireframes</figcaption></figure>
