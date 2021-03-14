---
title: "eTags Grading"
excerpt: "Dynamic form builder framework"
coverImage: "/assets/work/etags/cover.jpg"
date: "2015-02-02T00:00:00.000Z"
author:
  name: Karthik
  private: true
  picture: "/assets/blog/authors/joe.jpeg"
ogImage:
  url: "/assets/blog/shell-grunt/cover.png"
---

#### Overview

Emirates Grading or eTags is an angular app that is used by certified examiners to train and certify pilots from Emirates and other affiliated airlines. \n\n#### The Stack\nConsidering the complexity of the app, we interlaced the UI with multiple end-points for each subsequent business module. Node/ExpressJS combo was used for PDF generation on request and in batches, while Java Spring was used to do the heavy lifting in terms of data processing from the existing Oracle DB. We started to built the UI layer with [AngularJS 1.x](https://angularjs.org/), and decided to stick to 1.x since the Angular 2 was still on its pre-release cycle and later migration would risk our release deadlines.

![](https://s3-ap-southeast-2.amazonaws.com/k97static/project-snaps/tags-2-form-designer.png)

#### Form Builder Framework

The grading system is a set of forms which consists of widgets that pieced together by multiple logics for each specific pilot based on their training history and the current training schedule.\n\n##### Technical Interpretation

Since the final form is rendered based on complex business logic, we broke down the form into multiple fieldsets starting with design, initialisation and final processing along with the version control for each separate configuration.

**Design Module:** The design module was constructed separately into a `<form-designer>` where the user is able to design a form by dragging and dropping widgets which are pre-configured with default values. A configuration layer allows the user to override or provide additional input if required based on the widget type. We used JSON based configurations for storing these values in separate versions.

![](https://s3-ap-southeast-2.amazonaws.com/k97static/project-snaps/tags-1-roster-calendar.png)

**Initialisation Module:** The initialisation module utilises the design value and renders a `<form>`. Each of these widgets have delegated logic to handle user interaction. The master data for these form elements like `<select>` or `<typeahead>` are loaded by separate rest calls which operate independently from the main form.

![](https://s3-ap-southeast-2.amazonaws.com/k97static/project-snaps/tags-3-form-view.png)

**Form Processing:** We tapped into the angular form APIs for trivial validations and designed a separate `<rule-engine>` to process the form input values given by the user. We designed the widgets in such a way that the final form submission event triggers the rule-engine which further performs business validations with the data from each of the widgets. The return values are shown to users with context and the relative values are stored back as results in the pilot's profile.

#### PDF Generation with NodeJS

Performance was the obvious constraint when moving the module back into NodeJS from client-side processing. The PDF generation was put together as separate app from the get go and that allowed us to seamlessly shift the data processing for PDF generation easily to the server side with minimal code changes around configuration.

#### Performance Optimization & Tuning

We constantly iterated through the `<rule-engine>` and the `<form>` itself to extract maximum performance. Delegating each widgets behaviour closely to a native `<fieldset>` with the component pattern made our lives easier to tune for performance gains at each layer. The life-cycle hooks were a major fallback for us to piece the whole form together and later control the data processing with minimal event propagation and a seamless form experience.

![](https://s3-ap-southeast-2.amazonaws.com/k97static/project-snaps/tags-4-tab-view.png)
