class: center, middle, red

# .center[Welcome to General Assembly]

.logo[![](../assets/ga.svg)]

???

- Good evening! I’d like to welcome everyone to General Assembly for intro to code. How’s everybody doing?
- Introduce yourself
- By show of hands, how many of you are familiar with General Assembly? (look around the room and thank those for coming back to General Assembly)
- Welcome back and welcome to everyone who is on campus for their first time!

---

# Locations

<iframe src="https://pataruco.github.io/ga-locations/" style="height: 75vh" frameborder="0" ></iframe>

???

- General Assembly **“GA”** - is a global education institution that specializes in the most in-demand skills across data, design, technology and business.
- We have campuses like this one in 14 other cities around the world, where we empower a global community to pursue work they love
- We offer classes, workshops, and courses in development, design, digital marketing, data science, and business with a range of commitment options
- As part of helping individuals like yourselves acquire new skills and/or transition into a new career, we also work with employers as a source of talent.
- In fact, more than 2500 employers have hired our grads of our full-time, immersive courses!

---

class: center, middle, red

# .center[Intro to coding]

## .center[HTML & CSS]

.logo[![](../assets/ga.svg)]

---

# Goal

By the end of this workshop, our goal is to build a simple **responsive** web page.

# [Link to zip file]()

???

- Does anyone know what `responsive` means?
- Provide definition after taking participation: Essentially, you can think of `responsive` as meaning that the page adapts to the device that is viewing the page. All pages today should be build responsively, so we’re going to learn about this tonight.

---

# How the Web works?

.image-half[![](https://mdn.mozillademos.org/files/8973/Client-server.jpg)]

???

- Again, the browser is a “client”, but there can be different clients than browsers
- When we type in an address or interact with a page (ex. Clicking a link) we will make a ‘request’
- Servers manage these requests and run ‘logic’ to determine how to handle the particular request
- They may have to go into a database to access information used when they ‘respond’ to the client’s request
- Let’s see just how many requests and responses are needed to build a typical page
- Remember, pages are not single files, like a PDF!
- Load a common page, like **Wikipedia** and with the inspector open to show how many requests are needed to build the page

---

# Frontend vs. Backend

The development process can be broken into two areas:

.row[
.column[

### Front-End

- How things look to the user
- Involves: images, content, structure
- HTML, CSS, and JavaScript
  ]

.column[

### Back-End

- How things work
- Involves: “business logic” and “data”
- Ruby, PHP, C++, Java, etc.]
  ]

???

- Tonight we’re learning HTML & CSS, which fall under what we call `front-end web development`.
- It essentially makes up the things that impact how things look to the use.
- More specifically it includes structure and content (HTML), styling (CSS), and interactivity and - behavior (JavaScript).
- We teach JavaScript in bootcamps and extensively in our courses, but tonight we’re focusing on HTML and CSS
- Front-end development may also be called ‘client-side’ development
- Back-end development is an entirely different area (which, again, we teach extensively in our immersive course, if you’re interested in learning about it)
- There are a lot of languages that can be used here, but they essentially handle the ‘business logic’ of the application
- May also have heard this referred to as ‘server-side’ development
- Lines have blurred a bit between these neat categories over time, but these are the broad-stroke of how all these things fit into ‘web development’

---

# Tools We'll be using

---

# Text editor

.row[

.column[
For this workshop, we’ll be **[Visual Studio Code](https://code.visualstudio.com/Download)**

- It’s free
- Provides syntax highlighting, code hinting, auto completion, and a lot of great features geared towards writing code
- Word, Pages, and any WYSIWYG editor is NOT suitable for code!

]
.column[
.image-half[![](https://upload.wikimedia.org/wikipedia/commons/2/2d/Visual_Studio_Code_1.18_icon.svg)]
]
]

???

- How many of you haven’t already installed Visual Studio Code?
- This looks like notepad when you open it, but it gives us powerful tools as developers
- Cover difference between WYSIWYG tools and Visual Studio Code

---

# Browser

.row[
.column[
.image-half[![](https://upload.wikimedia.org/wikipedia/commons/a/a5/Google_Chrome_icon_%28September_2014%29.svg)]
]
.column[

- We recommend using **Google Chrome**.
- It’s free
- It provides many developer-friendly tools!
  ]
  ]

---

# Getting Started

- Type this URL into your browser: [ga.co/2JYsw3Y](ga.co/2JYsw3Y)
- Extract the folder that downloads:
- On a **Mac**: double click on the zip file and it will extract
- On **Windows**: open the zip folder and hit `Extract all` in the menu bar
- Open **Visual Studio Code**
- Drag the entire folder you unzipped onto the **Visual Studio Code**

---

# HTML

**HTML** _(Hypertext Markup Language)_ is not a programming language; it is a markup language used to tell your browser how to structure the web pages you visit.

---

# A Typical HTML Tag

`My cat is very grumpy`

```html
<p>My cat is very grumpy</p>
```

???

- This is what a typical HTML tag looks like – in this case, a paragraph
  - You can ask students:
    - What is the actual ‘tag’ here? What’s the tag name?
    - `p` for paragraph
- What do you notice about the syntax?
- The tag is repeated twice
- The second tag is different (has a “/” before the name)
- When the page is interpreted by the browser, what do you think is going to show up on the screen?
- Just the word `content`, not the tags
- At a high-level, we’re instructing the browser that the `Content` is a paragraph
- Don’t get caught up wanting to know every tag that exists, just try to understand this basic structure:
- We want to ‘markup’ our content so that the browser knows the structure of the document
- Good programmers don’t memorize a lot – they learn how it works and then use the language’s documentation

---

# Anatomy of an HTML element

![](https://mdn.mozillademos.org/files/9347/grumpy-cat-small.png)

---

# Nesting elements

## What is the difference?

```html
<p>My cat is <strong>very</strong> grumpy.</p>
```

```html
<p>My cat is <strong>very grumpy.</p></strong>
```

---

# Nesting elements

## Good:

```html
<p>My cat is <strong>very</strong> grumpy.</p>
```

## ~~Bad~~:

```html
<p>My cat is <strong>very grumpy.</p></strong>
```

---

# Empty elements

Are self closing elements

```html
<img src="https://api.peteroftheday.com/random" alt="A random Picture of Peter Martin"/>
<hr/>
<input type="color" id="color"/>
```

---

# HTML attributes

Elements can also have attributes, which look like this:

![](https://mdn.mozillademos.org/files/9345/grumpy-cat-attribute-small.png)

- A space between it and the element name (or the previous attribute, if the element already has one or more attributes.)
- The attribute name, followed by an equals sign.
- An attribute value, with opening and closing quote marks wrapped around it.

---

# Images

```html
<img src="https://api.peteroftheday.com/random" alt="A picture of Peter Martin">
```

The above example shows very simple usage of the `<img>` element. The src attribute is required, and contains the path to the image you want to embed. The alt attribute contains a textual description of the image, which isn't mandatory but is incredibly useful for accessibility

---

# Links

```html
<p>
  I'm creating a link to
  <a href="https://https://en.wikipedia.org/wiki/Main_Page">
    Wikipedia homepage
  </a>.
</p>
```

A basic link is created by wrapping the text or other content, you want to turn into a link inside an `<a>` element, and giving it an href attribute that will contain the web address you want the link to point to.

---

# Document

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <title>My test page</title>
  </head>
  <body>
    <p>This is my page</p>
  </body>
</html>
```

---

# `<head>`

```html
<head>
  <meta charset="utf-8">
  <title>My test page</title>
</head>
```

- Can be thought of as the **brain** of the document
- Its properties are not part of the physical layout of the page
- Holds all of the properties
  Ex. the document’s title

---

# `<body>`

```html
  <body>
    <p>This is my page</p>
  </body>
```

- Represents the area from the top left corner of our page to the bottom right corner
- Holds the physical structure of the page
- Basically all of our work today will be in the body of the document

---

# Common elements

.row[
.column[

## Text Wrappers:

- `<p>`
- `<h1>` to `<h6>`
- `<blockquote>`
- `<li>`

]
.column[

## Inline Text-Wrappers:

- `<a>`
- `<span>`
- `<em>`
- `<strong>`
  ]
  ]

---

# Common elements

.row[
.column[

## Block Containers:

- `<header>`
- `<footer>`
- `<main>`
- `<section>`
- `<article>`
- `<nav>`
- `<aside>`
- `<div>`
  ]
  .column[

## List Containers:

- `<ul>`
- `<ol>`
- `<dl>`
  ]
  ]
