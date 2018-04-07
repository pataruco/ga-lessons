import '../../lib/head';
import Reveal from 'reveal.js';

document.addEventListener('DOMContentLoaded', event => {
  window.Reveal = Reveal;
  Reveal.initialize({
    dependencies: [
      { src: './lib/marked.js' },
      { src: './lib/markdown.js' },
      // { src: '../node_modules/reveal.js/plugin/notes/notes.js', async: true },
      // {
      //   src: 'plugin/highlight/highlight.js',
      //   async: true,
      //   callback: function() {
      //     hljs.initHighlightingOnLoad();
      //   },
      // },
    ],
  });
});
