# Must Have Full Stack Mern

## HTML

### Basics of HTML
- Hypertext Markup Language
- HyperText Markup Language is the primary language of the wen, containing the content and structure of a Website

### Tag
- A tag with children `<tagname>content</tagname>`
- A tag with no children `<tagname />`

### Attribute
- `<tagname attribute="value">content</tagname>`
- `<tagname attribute="value"/>`

### Comments
- `<!-- This is a comment -->`
```html
 <!-- 
 This is a comment 
 that lives on multiple pages
  -->
```

### `<!DOCTYPE html>`
### `<html></html>`
  - ### `<head></head>`
  - ### `<body></body>`

### Semantic HTML
 - Does you HTML make sense without the browser? That's the question.
### Semantic Grouping Tags
 - `<header></header>` Intruductory content of the body, section, or article.
 - `<main></main>` Main Content of the body
 - `<article></article>` Self-Contained Content that can be distributed on its own and would make sense
 - `<section></section>` Thematically grouped content that is not distributable
 - `<footer></footer>` Closing, Conclusion or Ending Content of the body, section, or article.. Usually Copyright and Footer navigation information outside the main content of site
 - `<nav></nav>` Navigation links often a child of header or footer
 - `<aside></aside>` Indirectly related non vital content, usually used for sidebars.
### Most used HTML tags
  - `<h1></h1>` Heading from h1 through h6
  - `<p></p>` Paragraph
  - `<img src="imgsource" alt="alternative text"/>` Image tags
  - `<ul></ul>` Unordered list and `<ol></ol>` ordered list
  - `<li></li>` A list item inside a list
  - `<pre></pre>` Preformatted text
  - `<br/>` Line break
  - `<hr/>` Horizontal Rule Tag
  - `<a href="website to go to"> Text to display for link</a>` Anchor tag to make hyperlinks
  - `<em></em>` Emphasis tag
  - `<strong></strong>` Strong text tag
  - `<span></span>` Inline text
  - `<div></div>` Non semantic division tag to designate a block of text, shouldn't be abused
### Tables
### Forms
### Document Object Model From POV of HTML
### Web Accessibility
### Meta Data
### Open Graph API

## CSS
 ### CSS Basics
 ### CSS Selectors
 ### Psuedo Classes and Elements
 ### CSS Specificity
 ### CSS Units
 ### Block vs Inline
 ### The Box Model
 ### Box Sizing
 ### Position
 ### Stacking Contexts
 ### Flexbox
 ### CSS Grid
 ### Images
 ### Inheritance in CSS
 ### Responsive Design
 ### Animations
 ### CSS Variables
 ### Frameworks and PreProcessors
 ### CSS Methodologies and Best Practices

## JS
 ### JavaScript Basics
 ### Variables and Scoping
 ### Arrays
 ### Objects
 ### Equality and Type Coercion
 ### Syntactic Sugar and Modern JS
 ### Connecting JavaScript to HTML
 ### DOM Manipulation
 ### Event Driven Programming
 ### Promises
 ### Servers
 ### Timers and Intervals
 ### Closures
 ### This
 ### Classes
 ### Currying
 ### Generators
 ### Modules
 ### The Event Loop
 ### Web Workers
 ### Browser Storage
 ### Basic Data Structures with JS
 ### JS Frameworks
 ### TypeScript
 ### Debugging Strategies
 ### Writing Clean JavaScript
 ### The JavaScript EcoSystem

## Web Application Development Concepts
  ### What is Web Development
  ### Client Server Model
  ### Webpage Request Lifecycle
  ### Hypertext Transer Protocol
  ### Working with APIs
  ### Web Security
  ### How Browsers Render Content

## Object Oriented Programming
  ### Objects as Nouns
  ### Classes as Definitions of Nouns and Index
  ### Abstraction
   - It refers to, providing only essential information to the outside world and hiding their background details. For example, a web server hides how it processes data it receives, the end user just hits the endpoints and gets the data back.
  ### Encapsulation
   - Encapsulation is a process of binding data members (variables, properties) and member functions (methods) into a single unit. It is also a way of restricting access to certain properties or component. The best example for encapsulation is a class.
  ### Inheritance
   - The ability to create a new class from an existing class is called Inheritance. Using inheritance, we can create a Child class from a Parent class such that it inherits the properties and methods of the parent class and can have its own additional properties and methods. For example, if we have a class Vehicle that has properties like Color, Price, etc, we can create 2 classes like Bike and Car from it that have those 2 properties and additional properties that are specialized for them like a car has numberOfWindows while a bike cannot. Same is applicable to methods.
  ### Polymorphism
   - The word polymorphism means having many forms. Typically, polymorphism occurs when there is a hierarchy of classes and they are related by inheritance. C++ polymorphism means that a call to a member function will cause a different function to be executed depending on the type of object that invokes the function.


## Functional Programming & Declarative Programming
 ### Why?
 - Imperative: With imperative programming, our code tells the compiler and users about how to do a task.
 - Declarative: With Declarative programming, our code tells the compiler and users what to do.

## Node JS & Express

## JSX

## MongoDB & Mongoose

## REACT & State Management

## Async Programming In JavaScript

## RESTFUL Web Services with NodeJS & Persistent Data Storage

## Data Structures

## Testing with JEST










```
Installing packages and creating folder for our fresh fruits app
```

```
Explain Morgan
HTTP request logger middleware for node.js
Morgan is a middleware that logs HTTP requests and errors. 
Middleware is simply a function that has access to the request and response lifecycle methods. 
We can either use predefined formats or create new ones to format our logs.
```

```
setup package scripts
```
```
Summarize Dependencies
```

```
Setup .env and .gitignore
```

```
Setup server.js as the only file for right now
```

```
Run dev server
```

```
create seed
```

```
create index route

explain 3 equivalent syntaxes for async functions

set up views folder and public folder and views/fruits

create Default.jsx

Review Sematic HTML

Create fruits/Index.jsx

create show route

create show view 

create new route and new view

link Index to New

create create route

create edit route and edit view

create update route

create delete route

connect delete to index and edit to show
```

### Move the connection
```
create a folder called models, and in it a file called connection.js
move our connection code from server.js to models/connection.js
```

### Move the model also

### Move the fruit routes into a controller/router

```
Your app should now be working just like it was before but now should be more organized. Notice all the pieces for fruits have been broken down into MVC.

models/fruit.js- handles the getting the database connection and defining the fruit model (share of data)
views/fruits/- this folder contains all our views/templates for our fruits
controllers/fruit.js- creates all our routes which pull data from the model and sends them over to the templates
```

### Make a seed script
```
create a models/seed.jsfile
```

```js
  "scripts": {
    "start": "node server.js",
    "dev": "nodemon server.js",
    "seed": "node models/seed.js"
  }
```
