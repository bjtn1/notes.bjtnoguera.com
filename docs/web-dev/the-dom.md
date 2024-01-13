---
description: "Learn about the DOM, how to manipulate it, and how to interact with it"
---

# The DOM (Document Object Model)

> Source https://www.theodinproject.com/lessons/foundations-dom-manipulation-and-events

The DOM is just like a big ol' tree from CS. Each node is an html tag like `div` or `h1`

## Selecting a node in the DOM
```js showLineNumbers
// General syntax:
// element.querySelector(selector)
// This obtains the first instance of "div"
const div = document.querySelector("div");
```

## Creating an element in the DOM
```js showLineNumbers
// Syntax:
// document.createElement(tag_name, [options])
// This creates a div element
// It DOES NOT add it to the DOM
const div = document.createElement("div");
```

## Adding an element to the DOM
```js showLineNumbers
// Syntax:
parent_node.appendChild(child_node);
// Resulting tree will look like...
// parent_node -> child_node

parent_node.insertBefore(new_node, reference_node);
// Resulting tree will look like:
// parent_node -> new_node -> reference_node
```

## Altering elements in the DOM
```js showLineNumbers
// Create an element to be altered later
const div = document.createElement("div");

// Adding inline styles
// You can add one rule...
div.style.color = "blue";

// Or many rules
div.style.cssText = "color: blue; background: white;";

// Another way of adding many rules...
div.setAttribute("style", "color: blue; background: white;")
```

:::warning
Kebab-style CSS rules like `background-color` need to be converted to [camelCase](https://developer.mozilla.org/en-US/docs/Glossary/Camel_case#:~:text=Camel%20case%20is%20a%20way,either%20upper%20or%20lower%20case.) (`backgroundColor`) when using `elements.style.kebab-style-rule`

```js showLineNumbers
// All of these are ok
div.style.backgroundColor = "blue";
div.style["background-color"] = "blue";
div.style.cssText = "background-color: white;"

// This is NOT ok
div.style.background-color = "blue";
```
:::

## Editing attributes
```js showLineNumbers
// This changes the id attribute of div element to "theDiv" if the id attribute was set, otherwise it creates it
div.setAttribute("id", "theDiv")

// Returns the id attribute of div
div.getAttribute("id")

```

## Removing attributes
```js showLineNumbers
// Removes specified attribute
div.removeAttribute("id");
```

## Adding and removing a class to/from a tag
```js showLineNumbers
div.classList.add("new");

div.classList.remove("new");

// Adds "active" class to div if div doesn't have a class called "active"
// Otherwise removes class "active" from div
div.classList.toggle("active");
```

:::note
It is standard practice to use `element.classList.toggle("class_name")`
:::

## Adding text to an element
```js showLineNumbers
// Adds "Hello world" to this div
div.textContent = "Hello world"

// Gets rendered as
// <div>Hello world</div>
```
:::warning
Avoid using `element.innerHTML` as it poses security risks. Use `textContent` whenever possible
:::

## Example usage
```html showLineNumbers
<!-- your HTML file: -->
<body>
  <h1>
    THE TITLE OF YOUR WEBPAGE
  </h1>
  <div id="container"></div>
</body>
```

```js showLineNumbers
// your JavaScript file
const container = document.querySelector('#container');

const content = document.createElement('div');
content.classList.add('content');
content.textContent = 'This is the glorious text-content!';

container.appendChild(content);
```
:::note
If you wanna get/set the text content of an `input` tag, use `input.value`
:::

Doing all of that results in this
```html showLineNumbers
<!-- The DOM -->
<body>
  <h1>
    THE TITLE OF YOUR WEBPAGE
  </h1>
  <div id="container">
  	<div class="content">
      This is the glorious text-content!
    </div>
  </div>
</body>
```

The HTML file ***will not*** change. 

The JS DOM manipulations happen ***after*** the HTML file has been rendered

:::note
Include your js file in your html like this, so that the js file runs ***after*** the DOM has been rendered
```html showLineNumbers
<head>
  <script src="js-file.js" defer></script>
</head>
```
:::

## Events

Events are mouse clicks or key presses that occur on the page that we can track with some js code.

There are three ways to track events

### `onclick` attribute in HTML file
```js showLineNumbers
// Creates a button with the event "onclick" that alerts the user when the button get clicked with a pop up that says "Hello world"
<button onclick="alert('Hello World')">Click Me</button>
```
:::note
You can only set one `onclick` property per DOM element
:::

### `onclick` attribute in Javascript file
```html showLineNumbers
<!-- the HTML file -->
<button id="btn">Click Me</button>
```

```js showLineNumbers
// the JavaScript file
const btn = document.querySelector('#btn');
btn.onclick = () => alert("Hello World");
```
:::note
Like int the previous method, each DOM element can only have 1 `onclick` property
:::

### `addEventListener` in Javascrupt file (best method)
```html showLineNumbers
<!-- the HTML file -->
<button id="btn">Click Me Too</button>
```

```js showLineNumbers
// the JavaScript file
const btn = document.querySelector('#btn');
btn.addEventListener('click', () => {
  alert("Hello World");
});
```

### Getting info about the event in `addEventListener`
```js showLineNumbers
btn.addEventListener('click', function (e) {
  console.log(e);
});

```
:::note
`function(e)` is a [callback](https://dev.to/i3uckwheat/understanding-callbacks-2o9e) function

All this means is that thru the `e` variable, we can get info about the event that trigered this listener
:::

### How to add listeners to a group of nodes with `querySelectorAll("selector")`    
```html showLineNumbers
<div id="container">
    <button id="1">Click Me</button>
    <button id="2">Click Me</button>
    <button id="3">Click Me</button>
</div>
```

```js showLineNumbers
// buttons is a node list. It looks and acts much like an array.
const buttons = document.querySelectorAll('button');

// we use the .forEach method to iterate through each button
buttons.forEach((button) => {

  // and for each one we add a 'click' listener
  button.addEventListener('click', () => {
    alert(button.id);
  });
});
```

> Complete list of events can be found [here](https://www.w3schools.com/jsref/dom_obj_event.asp)

## Assignment
1. Complete [this challenge](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Client-side_web_APIs/Manipulating_documents#active_learning_a_dynamic_shopping_list)
2. Do the first 2 sections of [this JavaScript DOM Tutorial](https://www.javascripttutorial.net/javascript-dom/), then do the 7th section

## Event flows

Event flows describe how events are received on the page

### Event bubbling

This means that the event triggers at the most specific (innermost) target element, and then triggers its ancestors until reaching the root of the DOM tree

### Event capturing

This is the opposite of event bubbling.

The event triggers at the root of the DOM tree, and travels down to the most specific triggering element
