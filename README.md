<a name="readme-top"></a>

<div align="center">
<h1 align="center">Array Tooler</h1>

  <p align="center">
    <img src='./src/assets/react_icon.png' alt='screenshot' width="100">
    <br />
    <br />
    Array manipulation vizualizer created by Ryan Reeves
    <br />
    <a href="https://github.com/rreeves1996/array-tooler/issues">Report Bug</a>
    ·
    <a href="https://github.com/rreeves1996/array-tooler/features">Inquire About Features</a>
    <br />
    <a href='#'>Heroku Deployment</a>
  </p>
</div>

## About

<!-- <img src='./src/assets/app.PNG' alt='screenshot' width="600"> -->

This app allows the user to interact with a visual representation of an array by using commonly used array manipulation methods. It was created after I saw a demo of someone's own iteration of the app on LinkedIn. I can't find the video anymore for reference, but this app is my attempt to create that demo that I saw!
Something else I wanted to accomplish with this app was a log of my development of the app, including the steps I took to create it and my thoughts/planning/problem solving methods. It was a great opportunity help cohorts/potential employers understand my line of thinking during the development process, which is something that is undoubtedly valuable. Even more valuable, however, was the ability for me to easily look back and reflect on my process myself - I was sure that having a log of my thinking throughout an app's creation would expose some bad habits/choices that may have not been as obvious.
Once again, this app idea was not my own - it was based off of a demo I saw on my LinkedIn! The programming and log is entirely mine, but the concept was not - so please do not give me brownie points for coming up with this cool concept, and contact me if you come across the demo I am talking about so I can give the original creator credit!

## Development Log

### 3/11/2023:

I created a fresh React app using Vite, and then cleared up some of the default files/JSX to start with a clean slate. As I was finishing up the initial clean up, and replacing the default App.js boilerplate with fresh code that had a heading for the app, my first instinct was to think about my ideal component structure. Since I had created an h1 and an h6, and I knew the app's functional components were coming next, it was easy to autopilot here and just continue in my impulsive thought process/lack of planning.
Although this isn't necessarily the worst option, I took a second to think critically about what the most efficient thing to do first would be. Following about 5 seconds of thinking critically, I realized this hunch to think about component structure was coming from the inner junior dev/UI fanatic in me, not from a place of understanding the best first option.
So, as a junior dev attempting to create good new habits and work more efficiently, I decided to back up and do some planning, starting at the broadest scope I could. This, to me, was simply typing out my broad objectives for the app and how I wanted it to function.

Here is a list of my initial objectives:

    User story: I want to create a tool that allows the user to visualize commonly used array methods.

    Features:

      * The array itself, represented by Font Awesome icons inside of brackets

      * Some kind of way to represent values inside of the array (i.e. opacity, with the icon with the value of 1 being the lightest)

      * The methods, including push, pop, shift, unshift, splice, sort, map, filter, includes and forEach

      * Minimal UI with icons for the array shifting smoothly based on the input, not just rendering a new array w/ out a transition

      * Some kind of way to either view my development log/process in the app, or a way to easily access it via redirect (not ideal)

    I decided that I will shoot for the MVP first, which to me meant the interface for modifying the array, the array itself, and five of the methods listed (push, pop, shift, unshift, and splice). 

At this point in time, I am already thinking the biggest challenge will involve the animations. Because I don't want the array icons to just disappear and reappear in the array when adding/removing (I want them to smoothly move from the list of available icons into their proper position in the array), I knew it was going to take some tricky methods to get the animations to work properly, most likely with absolute positioning. I decided to start by operating under the assumption I would do it this way, so that I could program the functionality in a way that would make this method easily applicable. 
With this in mind, I decided that for the functionality, I wasn't going to translating what the user is seeing directly into the code - that is, it wouldn't be as simple as adding to or removing to the array itself from a pool of options, with the array itself simply displaying. If I wanted to animate the icons how I wanted, I needed the element to be the same element, whether it was in the array or outside of it. I wouldn't be adding it to the array to make it appear; I would be simply changing a property on the element that either positioned it in the pool of icons able to be added, or its position in the array based on the user's input.
First off would be creating states at the highest level component to track the array items.

## Contact

Ryan Reeves - [https://www.linkedin.com/in/rreevesdev/](https://www.linkedin.com/in/rreevesdev/) - rreeves.dev@gmail.com

Project Link: [https://github.com/rreeves1996/todo-list](https://github.com/rreeves1996/todo-list)

<p align="right">(<a href="#readme-top">back to top</a>)</p>
