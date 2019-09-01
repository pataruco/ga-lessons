/* 
fewdLessons

0 intro
1 html
2 htmlCss
3 boxModel
4 cssSelectors
5 flexbox
6 positioning
7 responsive
8
9 js
10 jquery
11 jquery-plugins
12 forms
13 animations
14 svg 
15 accesability
16 git / sass 
*/

// this

interface Slides {
  [key: string]: string;
}

const fewdLessons: Slides = {
  accesability: 'accesability/accesability.md',
  animations: 'animations/animations.md',
  boxModel: 'box-model/box-model.md',
  cssSelectors: 'css-selectors/css-selectors.md',
  finalPresentations: 'final-presentations/slides.md',
  flexbox: 'flexbox/flexbox.md',
  forms: 'forms/forms.md',
  html: 'intro-html/html.md',
  htmlCss: 'html-css/html-css.md',
  intro: 'intro/intro.md',
  jquery: 'intro-jquery/slides.md',
  jqueryPlugins: 'intro-jquery-plugins/slides.md',
  js: 'intro-js/slides.md',
  jsPlugins: './slides/js-plugins/slides.md',
  positioning: 'positioning/positioning.md',
  responsive: 'responsive/responsive.md',
  svg: 'svg/svg.md',
};

/* 
introToCode

1 introToCode

*/

const introToCode: Slides = {
  introToCode: '../intro-to-code/intro-to-code.md',
};

/*
UXDI
*/

const uxdi: Slides = {
  introJs: 'js-uxdi/intro-js.md',
  positioning: 'positioning-uxdi/positioning.md',
  git: 'git-uxdi/slides.md',
};

export default {
  fewdLessons,
  introToCode,
  uxdi,
};
