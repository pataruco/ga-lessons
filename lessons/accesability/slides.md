![GeneralAssemb.ly](../../img/icons/FEWD_Logo.png)

# Accesability

### Pedro Martin

---

## Accessability

_"Accessibility is most often used to describe facilities or amenities to assist people with disabilities, as in 'wheelchair accessible'. This can extend to Braille signage, wheelchair ramps, audio signals at pedestrian crossings, walkway contours, website design, and so on."_

---

## Accessability on the Web

_"**The Web is fundamentally designed to work for all people**, whatever their hardware, software, language, culture, location, or physical or mental ability. When the Web meets this goal, it is accessible to people with a diverse range of hearing, movement, sight, and cognitive ability."_

---

## Benefits

Accessibility and the best practices it entails can benefit everyone:

* Semantic HTML (which improves accessibility) also improves SEO, making your site more findable/marketable.
* Caring about accessibility demonstrates good ethics/morals, which improves your public image.
* Other good practices that improve accessibility also make your site more usable by other groups, such as mobile phone users, those on a low network speed, etc.
* [EU](http://eur-lex.europa.eu/eli/dir/2016/2102/oj) and [UK Law](http://www.legislation.gov.uk/ukpga/2010/15/contents)

---

## What kinds of disability are we looking at?

* People with visual impairments
* People with hearing impairments
* People with mobility impairments
* People with cognitive impairments

---

## Implementing accessibility into your project

A common accessibility **myth** is that accessibility is an expensive _"added extra"_ to implement on a project. This myth actually can be true if either:

* You are trying to _"retrofit"_ accessibility onto an existing website that has significant accessiblity issues.
* You have only started to consider accessibility and uncovered related issues in the late stages of a project.

---

## What we are covering?

### HTML: A good basis for accessibility:

A great deal of web content can be made accessible just by making sure the correct HTML elements are used for the correct purpose at all times.

### CSS accessibility best practices

CSS and JavaScript, when used properly, also have the potential to allow for accessible web experiences, but if misused they can significantly harm accessibility.

---

## What we are covering?

### WAI-ARIA basics

WAI-ARIA is a technology that can help with such problems by adding in further semantics that browsers and assistive technologies can recognize and use to let users know what is going on. Here we'll show how to use it at a basic level to improve accessiblity.

---

## What we are covering?

### Accessible multimedia

Another category of content that can create accessibility problems is multimedia — video, audio, and image content need to be given proper textual alternatives so they can be understood by assistive technologies and their users.

---

## What we are covering?

### Mobile accessibility

With web access on mobile devices being so popular, and popular platforms such as iOS and Android having fully-fledged accessibility tools, it is important to consider the accessibility of your web content on these plartforms. This article looks at mobile-specific accessibility considerations.

---

## HTML: A good basis for accessibility

As you learn more about HTML — read more resources, look at more examples, etc. — you'll keep seeing a common theme: the importance of using semantic HTML. This means using the correct HTML elements for their correct purpose as much as possible.

---

## HTML: A good basis for accessibility

You might wonder why this is so important. After all, you can use a combination of CSS and JavaScript to make just about any HTML element behave in whatever way you want.

---

## HTML: A good basis for accessibility

For example, a control button to play a video on your site could be marked up like this:

```html
<div>Play video</div>
```

But as you'll see in greater detail later on, it makes much sense to use the correct element for the job:

```html
<button>Play video</button>
```

---

## HTML: A good basis for accessibility

Not only do HTML `<button>`s have some suitable styling applied by default (which you will probably want to override), they also have built-in keyboard accessibility — they can be tabbed between, and activated using Return/Enter.

Semantic HTML doesn't take longer to write than non-semantic (bad) markup if you do it consistently from the start of your project.

---

## HTML: A good basis for accessibility

Benefits:

* Easier to develop with — as mentioned above, you get some functionality for free, plus it is arguably easier to understand.
* Better on mobile — semantic HTML is arguably lighter in file size than non-semantic spaghetti code, and easier to make responsive.
* Good for SEO — search engines give more importance to keywords inside headings, links, etc., than keywords included in non-semantic `<div>`s, etc., so your documents will be more findable by customers.

---

## HTML: A good basis for accessibility

### Exercise using VO utility

[Good Practice](https://mdn.github.io/learning-area/accessibility/html/good-semantics.html)
[Bad Practice](https://mdn.github.io/learning-area/accessibility/html/bad-semantics.html)

---

## HTML: A good basis for accessibility

### Exercise using VO utility

[Images practice](https://mdn.github.io/learning-area/accessibility/html/accessible-image.html)

---

## CSS accessibility best practices

* _Standard_ text content structure

```html
<h1>Heading</h1>

<p>Paragraph</p>

<ul>
  <li>My list</li>
  <li>has two items.</li>
</ul>
```

---

## CSS accessibility best practices

* _Standard_ text content structure

```css
h1 {
  font-size: 5rem;
}

p,
li {
  line-height: 1.5;
  font-size: 1.6rem;
}
```

---

## CSS accessibility best practices

* Emphasised text

```html
<p>The water is <em>very hot</em>.</p>

<p>Water droplets collecting on surfaces is called <strong>condensation</strong>.</p>
```

---

## CSS accessibility best practices

* Emphasised text

```css
strong,
em {
  color: #a60000;
}
```

---

## CSS accessibility best practices

* Links

```html
<p>Visit the <a href="https://www.mozilla.org">Mozilla homepage</a>.</p>
```

---

## CSS accessibility best practices

* Links

```css
a {
  color: #ff0000;
}

a:hover,
a:visited,
a:focus {
  color: #a60000;
  text-decoration: none;
}

a:active {
  color: #000000;
  background-color: #a60000;
}
```

---
