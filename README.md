# Frontend Mentor - Age calculator app solution

This is a solution to the [Age calculator app challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/age-calculator-app-dF9DFFpj-Q). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)

## Overview

### The challenge

Users should be able to:

- View an age in years, months, and days after submitting a valid date through the form
- Receive validation errors if:
  - Any field is empty when the form is submitted
  - The day number is not between 1-31
  - The month number is not between 1-12
  - The year is in the future
  - The date is invalid e.g. 31/04/1991 (there are 30 days in April)
- View the optimal layout for the interface depending on their device's screen size
- See hover and focus states for all interactive elements on the page
- **Bonus**: See the age numbers animate to their final number when the form is submitted

### Screenshot

![Output on Desktop](/screenshots/Desktop_Output.PNG)
![Error Output on Desktop](/screenshots/Desktop_Error.PNG)
![Output on Mobile](/screenshots/Mobile_Output.PNG)
![Error Output on Mobile](/screenshots/Mobile_Error.PNG)

### Links

- Solution URL: [My Age Calculator Website Repo](https://github.com/Jaime-Cont/responsive-age-calculator)
- Live Site URL: [My Age Calculator Website hosted by Github Pages](https://jaime-cont.github.io/responsive-age-calculator/)

## My process
- I started off by plotting down all the basic HTML Elements, setting up the main element, sections and divs that I deemed necessary to accomplish the challened.
- I proceeded to initialize my CSS Variables for easier color application and setting the main font size and weight, all according to the challenge's specifications.
- I would work on HTML and CSS in an alternating matter to match the output, until I was satisfied with the front end side of things.
- I then proceeded to work on JavaScript, initializing a var connected to all the elements I want the script to affect
- I would think of the logic behind getting the correct year, months and days
- Trial and Error till I got the output I was looking for.

### Built with

- HTML
- CSS
- JavaScript
- Responsive Media Queries

### What I learned

- I learned a lot by accomplishing this challenge, mainly JavaScript related things, but being able to practice HTML and CSS helped improved my workflow and coding habits as well.
- After this I would look back and think of the things I wish I did before doing this or that, especially the mobile first workflow, I keep on saying I'll start doing that but here I am, but I'll do better next time!
- The main thing I did that I'm glad I learned while making this challenge is the incrementing JavaScript code, I used to do game development and seeing functions like these made me realize they aren't so different after all, in fact it made me wanna know what else I can do: 
```js
  function numberIncrease(startNumber, endNumber, element, speed) {
    if (startNumber <= endNumber) {
        document.getElementById(element).innerHTML = startNumber;
        setTimeout(function() {
            numberIncrease(startNumber + 1, endNumber, element, speed)
        }, speed) 
    } else {
        element.dataset.animationRunning = false
    }
  }
```
- I also learned how to reference and assign HTML elements into JavaScript, I would know how to affect the element and even change the CSS styling if I want it to using if statements, switches, etc.
- Was overall an amazing experience and looking forward to doing more challenges!

### Continued development

- If I were to continue development on this, I would probably add more animations within the interactions to make it more fun to use and more pleasing to the eyes, I would add a better background and more elements that could make it look better.

### Useful resources

- [W3Schools](https://www.w3schools.com/) - This helped me with some html and css codes like to better style elements according to the correct output.
- [Increase Number Animation](https://codepen.io/duvander/pen/KXOpXw) - This helped me accomplish the increasing number animation.

## Author

- Github - [Jaime Contemprato](https://github.com/Jaime-Cont)
- Frontend Mentor - [@Jaime-Cont](https://www.frontendmentor.io/profile/Jaime-Cont)
