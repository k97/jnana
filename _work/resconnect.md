---
title: "Emirates Connect"
excerpt: "Design research with usability tests, workflow inquires, screen designs and component development"
coverImage: "/assets/work/cover/ek.png"
date: "2016-05-25T00:00:00.000Z"
author:
  name: Karthik
  private: true
  tags: Design sprint, Usability research, Component library
ogImage:
  url: "/assets/blog/shell-grunt/cover.png"
---

The Emirates Connect also known as ResConnect was the first major application I got to work in Emirates Airlines when I joined in 2015. This case-study is to share my perspective as a UX Engineer while working on the product with our adapted version of the design sprint.

### Overview

Emirates Airlines is one of the largest operator of passenger aircrafts in the world. A sizable amount of our customers book their tickets through the in-house call center. These calls generally are from potential passengers looking for bulk, loyalty or emergency bookings. The goal was to revamp the existing desktop client app into a web client and in the process, design an app that not only helps in selling the product rather sell the experience to the callers through the agent. That\u2019s the 20,000 ft overview of the goal and each subsequent module had its own challenges in turn.

![](https://s3-ap-southeast-2.amazonaws.com/k97static/project-snaps/ssui-2-search.png)

![](https://s3-ap-southeast-2.amazonaws.com/k97static/project-snaps/ssui-3-payments.png)

### Process

Redesigning and building a product in a large organisation has its own intricacies. We were 4 agile squads running in parallel working on the app development. The UI designers and developers in each squad were responsible for their respective sprint deliverables. The design squad composition was a bit unconventional, a key team of UX designers and UI developers working together in parallel to the product development. Our sprint deliverables were generally enablers for the rest of the product development and this meant we had to be consistent with our sprint velocity.\n\n### UI Structure\nWe decided to approach the product design through material design after careful consideration of the possible approaches with design and development prototypes. Some of the prototypes were done using Bootstrap and a full custom design approach for components. Even though material design language was at its infancy, the solid documentation base allowed us to empathise the idea and further extend our interpretation of several new components. \n\nWe collaborated and iterated these new custom components that were not part of the initial material design releases. Some of the custom components were Accordions, Form Steppers, Two way sliders, file-upload, etc. The design specifications were formulated after much deliberation on design and interaction prototypes and after validating their usage on functional modules.

![COMPONENT STYLEGUIDE](https://s3-ap-southeast-2.amazonaws.com/k97static/project-snaps/ssui-component.jpg)

### Development Strategy

The application was developed using AngularJS as the core framework along with ui-router. There were 4 -5 different layouts used within the app, all managed through ui-views. The major challenge was contextually updating the app layout. Since one of our goals was to provide rich content to the agents in terms of 2nd person interpretation, the layouts had to be dynamically manipulated as per the information context at the given process flow.

![Layout](https://s3-ap-southeast-2.amazonaws.com/k97static/project-snaps/ssui-4-xray-components.png)

The custom components were usually developed as directive or component patterns and managed through an internal git library which allowed us to expose it to multiple projects within the organisation, thus fostering independent iteration of these components and constant recycle cycles.

For custom styles we took the SMACSS routes with BEM as the standard for naming elements, since we were operating with a fairly large amount of developers, interpretation of existing selectors was important to avoid code duplication and cut down on repaints or overrides.

#### Styleguide

Since we extended on top of material design language, it was easier for us to formulate the styleguide with the same approach. The missing components from material were documented in the similar fashion allowing our users and the core team to further understand the usage of these modules during development.

#### Code style guides

Since we were fairly large group of developers, we formulated our custom code style guides for templating, SCSS and JavaScript. This helped our new team members to get upto speed easily. These style guides were maintained in the central repository allowing the developers to iterate and accommodate better workflows. Later, these style guides were used as a reference to the linters for certain code editors.

<iframe src=\"//www.slideshare.net/slideshow/embed_code/key/2Vyd5rY9Stlwd2\" width=\"668\" height=\"714\" frameborder=\"0\" marginwidth=\"0\" marginheight=\"0\" scrolling=\"no\" style=\"border:1px solid #CCC; border-width:1px; max-width: 100%;\" allowfullscreen> </iframe>

### UI Retrospects

Similar to the pre development brainstorming, the UI developers worked closely with the respective designers to further iterate upon the design, if possible through code and rebase the designs if there were any gaps in the interpretation post development.

These retrospective sessions also helped us to be proactive in taking up the future modules for design and also set a more robust baseline for the component library.

### Things I learnt

We were able to check off the goals that were initially set while designing the application and set a concrete baseline for both application and component development in a large organisation. There were more challenges & difference of opinions while collaborating with people who are passionate towards the work and the key takeaway when working in such an enviroment was, getting the right point across the team required a sensible data to back the fact.\n
