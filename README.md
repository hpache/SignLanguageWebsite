# Introduction

This is the github repo we will use to put our work in. Documentation related to the project development will not
be written on the README file. Once we are done, the README file should include a description of the site, what 
resources we used, and explain the functionality of the site. Any documentation related to the project 
development will be put on a google drive (TBD).

# The Project

Right now, we don't have any requirements down other than the due date, but basically, we want to make a site 
that will be able to translate an ASL geture to text. Basically, we will have a camera looking at the user, the
user signs something, and the site shows the translation of the sign. Note, this is just a description of the site, not
a requirement!

# Possible resources

I managed to gather some possible resources for this site. First, this project will involve computer vision
and machine learning. Both of those things are really computationally intensive so we will need to be smart 
about how we test it. 

For the computer vision and machine learning aspect, we could use tensorflow.js. Tensorflow is a mathematics 
library created by Google, and it is better known as a machine learning library. Their site has some cool 
examples of tensorflow being used in the web development sense, so it will be useful to check those out.

[TensorFlow](https://www.tensorflow.org/js/)

Next, we will need a model to recognize ASL gestures. We can make one from scratch, but that might take a lot 
of extra research, and might take a lot of time. There is a package from people using TensorFlow to make an 
ASL recognition model, and it is known as Project Shuwa. This team is actually pretty cool, the use TensorFlow
on python in order to create a website that teaches people sign language. The only thing about this model is that
it only recognizes JSL and HKSL. It is still a good starting point though.

[Project Shuwa website](https://signtown.org)

[Project Shuwa github repo](https://github.com/google/shuwa)

# Development Process

Since we are building a website, and we have roughly three weeks to come up with something for CS325, I
think we should use the Extreme Prototyping development model. A quick sparknotes version of this model is the
following:

A website is composed of two layers, the presentation layer and the services layer. Another name for these layers
are the front-end and back-end layers. The front-end describes the user interface of the website, basically what the 
user sees and interacts with at all times. The back-end describes all the server-side programs that actually makes runs
the site. This is the layer that the use will never interact with outside of inputting data and getting an output. We will
be responsible for implementing these two layers, and Extreme Prototyping gives us a smart way for doing that in phases.

The phases are given as follows:

1. Build an HTML wireframe for the website. Basically, we come up with the UI with some functionality
in order to show how a user might navigate the site. This is more to simulate what the website would be like .
2. Transform the HTML wireframe into fully functional HTML pages. Here we move away from a simulated
web layout to a fully functional web layout. This is where we also start to simulate the services layer. 
3. Code and implement the services layer

The first two phases are really easy to do, and won't take more than a week to have something down. The third phase will
probably be difficult. There are some things we can do to make the third phase easy to handle, but that will be discussed when 
we gather the requirements. I do want to say that setting up a CI/CD pipeline will make testing during phase 3 really easy and quick.

# Summary

Overall, this project sounds really fun, and I think we can get a functional prototype done by the end of the month. If we set the development
workflow correctly, we can actually get more people to help us with this, and maybe get a fully functional website by the end of the spring semester. 
We still need to talk about the requirements, and we also need to setup a workflow to keep us on track. :triumph:
