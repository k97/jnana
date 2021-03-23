---
title: "Emirates Connect"
excerpt: "Design research with usability tests, workflow inquires, screen designs and component development"
coverImage: "https://k97static.s3-ap-southeast-2.amazonaws.com/v8/work/cover/ek.png"
date: "2016-05-25T00:00:00.000Z"
author:
  name: Karthik
  private: true
  tags: Design sprint, Usability research, Component library
  role: UX Engineer
  term: 2016-2018
  madewith: Sketch, UXPin, InVision
  product: Web platform
ogImage:
  url: "/assets/blog/shell-grunt/cover.png"
---

The Emirates Connect, also known as ResConnect was the first major project I contributed as UX Engineer back in 2015.Since Emirates Airlines is one of the largest operator of passenger aircrafts in the world, a sizable amount of our customers book their tickets through the in-house call center.

## Overview

The goal of this project was to revamp the existing desktop client into a web product and deliver an first hand booking experience for the callers.

![](https://s3-ap-southeast-2.amazonaws.com/k97static/project-snaps/ssui-2-search.png)

![](https://s3-ap-southeast-2.amazonaws.com/k97static/project-snaps/ssui-3-payments.png)

## Design Sprint

Redesigning and building a product in a large organisation has its own intricacies. We were 4 agile squads running in parallel working on the app. The UI designers and developers in each squad were responsible for their respective sprint deliverables. The design squad composition was a bit unconventional, a key team of UX designers and UI developers working together in parallel to the product development. Our sprint deliverables were generally enablers for the rest of the product development and this meant we had to be consistent with our sprint velocity.

## Design

We approached the designs using Google Material Design guidelines after multiple user test validations with different design styleguides. I collaborated with the UX research team to identify user touchpoints and visualise them as design concepts or prototypes.

The prototypes were later put into test stages and we planned out the test scripts to validate product assumptions. The engagement of the users were a key factor to collect quantitative test data for further design iterations.

### Components

Even though material design language was at its infancy , the solid documentation base allowed us to empathise the idea and further extend our interpretation of several new components. I designed these new custom components that were not part of the initial material design releases. Some of these custom components were Accordions, Form Steppers, range sliders, file-upload interface, etc. The design specs were formulated after much deliberation on design and interaction prototypes and after validating their usage on functional modules.

![COMPONENT STYLEGUIDE](https://s3-ap-southeast-2.amazonaws.com/k97static/project-snaps/ssui-component.jpg)

![Layout](https://s3-ap-southeast-2.amazonaws.com/k97static/project-snaps/ssui-4-xray-components.png)

### Engineering

I worked closely with the user interface developers to deliver the custom components as components and managed the versions through a release life-cycle across the organisation, thus fostering independent iteration of these components with enhanced feature sets.

For custom styles we took the SMACSS routes with BEM as the standard for naming elements, since we were operating with a fairly large amount of developers, interpretation of existing selectors was important to avoid code duplication and cut down on repaints or overrides.

Since we were fairly large group of designers & engineers, we formulated our custom code style guides for templating, SCSS and JavaScript. These style guides were maintained in the central repository allowing the developers to iterate and accommodate better workflows.

### Things I learnt

We established a design review session to collaborate and share design feedback from multiple touchpoints. These sessions also helped me to improve my workshop skills and proactively plan and strategise the sessions better.
