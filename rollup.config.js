import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import builtins from 'rollup-plugin-node-builtins';
import globals from 'rollup-plugin-node-globals';
import md from 'rollup-plugin-md';
import Marked from 'marked';
import sass from 'rollup-plugin-sass';
import postcss from 'rollup-plugin-postcss';
import { terser } from 'rollup-plugin-terser';
import * as fs from 'fs';

// Get reference
var renderer = new Marked.Renderer();

// Override function
renderer.heading = function(text, level) {
	var escapedText = text.toLowerCase().replace(/[^\w]+/g, '-');

	return `
          <h${level} id="${escapedText}">
            <a name="${escapedText}" class="anchor" href="#${escapedText}">
              <span class="header-link"></span>
            </a>
            ${text}
          </h${level}>`;
};

// `npm run build` -> `production` is true
// `npm run dev` -> `production` is false
const production = !process.env.ROLLUP_WATCH;

export default {
	input: 'src/index.js',
	output: {
		file: 'bundle.js',
		format: 'iife', // immediately-invoked function expression — suitable for <script> tags
		sourcemap: true
	},
	plugins: [
		resolve(), // tells Rollup how to find date-fns in node_modules
		commonjs(), // converts date-fns to ES modules
		globals(),
		builtins(),
		md({
			marked: {
				renderer: renderer,
				headerIds: true,
				pedantic: false,
				gfm: true,
				tables: true,
				breaks: true,
				sanitize: false,
				smartLists: true,
				smartypants: false,
				xhtml: false
			}
		}),
		postcss({
			extensions: ['.css']
		}),
		sass({
			// Default behaviour disable output
			// output: false,

			// Write all styles to the bundle destination where .js is replaced by .css
			output: true

			// Filename to write all styles
			// output: 'bundle.css',

			// // Callback that will be called ongenerate with two arguments:
			// // - styles: the concatenated styles in order of imported
			// // - styleNodes: an array of style objects:
			// //  [
			// //    { id: './style1.scss', content: 'body { color: red };' },
			// //    { id: './style2.scss', content: 'body { color: green };' }
			// //  ]
			// output(styles, styleNodes) {
			// 	fs.writeFileSync('bundle.css', styles);
			// }
		}),
		production && terser() // minify, but only in production
	]
};
