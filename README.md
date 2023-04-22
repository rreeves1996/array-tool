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
    <a href='https://array-tool.vercel.app/'>Vercel Deployment</a>
  </p>
</div>

## About

<!-- <img src='./src/assets/app.PNG' alt='screenshot' width="600"> -->

This app allows the user to interact with a visual representation of an array by using commonly used array manipulation methods. It was created after I saw a demo of someone's own iteration of the app on LinkedIn. I can't find the video anymore for reference, but this app is my attempt to create that demo that I saw!
Something else I wanted to accomplish with this app was a log of my development of the app, including the steps I took to create it and my thoughts/planning/problem solving methods. It was a great opportunity help cohorts/potential employers understand my line of thinking during the development process, which is something that is undoubtedly valuable. Even more valuable, however, was the ability for me to easily look back and reflect on my process myself - I was sure that having a log of my thinking throughout an app's creation would expose some bad habits/choices that may have not been as obvious.
Once again, this app idea was not my own - it was based off of a demo I saw on my LinkedIn! The programming and log is entirely mine, but the concept was not - so please do not give me brownie points for coming up with this cool concept, and contact me if you come across the demo I am talking about so I can give the original creator credit!

## Development Log

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

First off would be creating states at the highest level component to track the array items. I decided to create a state for all of the array icons as objects with properties isAdded, position, and a "key" for each icon (numbers 0 - 6). Then I would create a state for the icons that are added, and one with the icons that aren't added. This way, I would have an easy way to track both arrays while technically still having all of the icons themselves in the same array in order to animate them properly, and not have them disappearing and reappearing in their arrays when using the various methods. By having states that represent the arrays actually being displayed to the user, I could modify these arrays concurrent with the user's input, which would make it easy to track an icon's position within its arrays.

I created the three states, then did some very basic styling, as well as mapping the elements on the page. The elements on the page are being mapped from the state containing all of the array icons as objects, and not from the states that represent the arrays being displayed (the unadded icons and the added array icons).

Then, after creating four method buttons(push, pop, unshift, and shift - saving splice until after these four basic methods are complete) it was time to see how my approach would pan out! In order to avoid too much prop drilling, I created a "handleMethod" function that I would pass down to the button container component. This would take in a string correlating with the method called by the user, and perform the correct method by calling a switch statement based on the inputted string. Each switch conditional calls the individual function for the method, that way I don't have to pass down a function for every method, which saves me the headache of passing down every new function I create or plan to in the future.

I started with the push method. My basic plan for the function was to:

- Create a copy of each of the three arrays as to not manipulate state directly

- Perform the push on the array

- Remove the pushed icon from the array of unadded icons

- Update the stateful array of the icon objects, which included changing "isAdded" to true for the appropriate object, and updating its position property to correlate with its position in the array it was moved to. This is easily calculated since we already have an updated array with the icon in it - we just grab the length of that array, and change the icon's position to that. Then, in the same filter function, we can subtract the position of the icons that aren't added in order to shift them a position to compensate for the icon being removed from the unadded icons array.

Since we're adding the element to the end of the array, we don't have to shift the array of added icons, so this should complete the function! Then I simply updated the states by changing them to the new, modified arrays.

In order to properly animate the icons, I'm going to have to modify their styling within the JS, translating their position based on the "position" property in their correlated object. I simply multiplied their position by about 2em in a useEffect, and it spaced them out evenly and neatly. By adding the array of icons as a dependancy for the useEffect, it would recalculate and translate their positions whenever a re-render was triggered, which would be triggered by the array of icons changing. Perfect! I also made a translate for the right bracket of the array as well, so that it would move dynamically based on the size of the array.

It looks like my planning paid off, because after creating the push function and testing it out, everything worked perfectly! The first icon from the unadded array smoothly moved from the unadded array into the array of added icons, and the bracket moved accordingly to accomodate the new icon. In the console logs, I could see that the key of the icon being pushed was added to the array of added icons, removed from the beginning of the array of unadded icons, and the icon object with the corresponding key's "isAdded" property was being changed to true, and its position being changed to represent its position in its new array. A lot of words to explain something so simple happening, but I was impressed everything worked accordingly on the first go!

One silly hiccup I ran into (that I'm proud I was able to figure out!) was when I was dealing with conditional statements to keep the method functions from running if there was no unadded icons to push, no added icons to pop etc. To keep the functions from running if there wasn't any icons available, I simply added a conditional if statement in the switch cases in the handleMethod function. It checked to see if there was a 0th item in the array that it was pulling from, and if there was, run the function. It worked fine with push, however, when I inserted the conditional in the pop function, I ran into some weirdness.

The pop function wouldn't run at all! It was checking to see if there was an addedIcon[0] which there was. That icon held the value of 0 for its key. I'm sure the experienced developers reading this would be able to tell what happened, but after console logging the addedIcon[0] a thousand times, seeing it existed, and still not having the pop function execute, I was getting pretty weirded out! After some deliberation, I realized that since 0 was a falsy value, my conditional that ran if addedIcon[0] existed worked improperly if addedIcon[0] was 0! Even if it existed, if it was 0, it read false, despite it existing. Big "ahhh" moment for me in my head and kind of a goofy scenario. To fix this, I simply changed the conditional from a basic if(addedIcon[0]) to if(addedIcon[0] || addedIcon[0] === 0) to make sure to account for the 0 value. There was a couple of other ways to do this, but this was the first thing that came to mind, so I rolled with it. The next method to get around this that came to mind was changing if(addedIcon[0]) to if(addedIcon[0] !== undefined), since 0 would make the conditional false, not undefined. I'm sure there are 1000 other ways to use this kind of conditional while accounting for a potential falsy integer, but like I said, I rolled with this one as I wasn't concerned about scalability. I applied the same logic to the rest of the conditionals in the handleMethod function.

## Contact

Ryan Reeves - [https://www.linkedin.com/in/rreevesdev/](https://www.linkedin.com/in/rreevesdev/) - rreeves.dev@gmail.com

Project Link: [https://github.com/rreeves1996/todo-list](https://github.com/rreeves1996/todo-list)

<p align="right">(<a href="#readme-top">back to top</a>)</p>
