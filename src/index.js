/**
 * Style sheet
 */
// import './css/index.js';
import './css/typo.scss';
import './css/layout.scss';
import './css/comp.scss';

import Handlebars from 'handlebars';
/**
 * Markdown source
 */
import intro from './md/intro/index.md';
import research from './md/research/index.md';
import publications from './md/publications/index.md';
import news from './md/news/index.md';
import education from './md/education/index.md';

var source = document.getElementById('entry-template').innerHTML;
var template = Handlebars.compile(source);
var root = document.querySelector('#root');

var context = {
	intro,
	research,
	publications,
	news,
	education
};
var html = template(context);
root.innerHTML = html;
