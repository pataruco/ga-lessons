import '../../lib/head';
import Reveal from 'reveal.js';
import hljs from 'highlight.js';
import '../styles/index.css';

document.addEventListener('DOMContentLoaded', event => {
  window.Reveal = Reveal;
  Reveal.initialize({
    dependencies: [{ src: './lib/marked.js' }, { src: './lib/markdown.js' }],
  });

  Reveal.addEventListener('ready', function(event) {
    const codes = document.querySelectorAll('pre code, p code');
    for (const code of codes) {
      hljs.highlightBlock(code);
    }
  });
});

// todo:
// Add css as <link>
// style
