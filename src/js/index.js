console.log('hola');

import Reveal from 'reveal.js';

document.addEventListener('DOMContentLoaded', event => {
  window.Reveal = Reveal;

  Reveal.initialize({
    // width: 960,
    // height: 700,
    // margin: 0.05, // Factor of the display size that should remain empty around the content
    // controls: false, // Display controls in the bottom right corner
    progress: true, // Display a presentation progress bar
    slideNumber: false, // Display the page number of the current slide
    history: true, // Push each slide change to the browser history
    keyboard: true, // Enable keyboard shortcuts for navigation
    center: false, // Vertical centering of slide
    overview: true,
    transition: 'slide', // Transition style: none/fade/slide/convex/concave/zoom
    transitionSpeed: 'default', // Transition speed: default/fast/slow

    // keyboard: {
    //   80: function() {
    //     if (! window.location.search.match( /print-pdf/gi )) {
    //       var uri = window.location.toString().split("#")
    //       window.location.replace(uri[0] + "?print-pdf");
    //     }
    //   }
    // }
  });
});
// import marked from "reveal.js/plugin/markdown/marked";
// import markdown from "reveal.js/plugin/markdown/markdown";

// Reveal.initialize({
// dependencies: [
//   { src: "../node_modules/reveal.js/plugin/markdown/marked.js" },
//   { src: "../node_modules/reveal.js/plugin/markdown/markdown.js" },
//   { src: "../node_modules/reveal.js/plugin/notes/notes.js", async: true },
//   {
//     src: "plugin/highlight/highlight.js",
//     async: true,
//     callback: function() {
//       hljs.initHighlightingOnLoad();
//     }
//   }
// ]
// });

// /Users/pataruco/Development/fewd-lessons/node_modules/reveal.js/plugin/markdown/marked.js
// /Users/pataruco/Development/fewd-lessons/node_modules/reveal.js/plugin/markdown/markdown.js
