//import { terser } from "rollup-plugin-terser";
//import uglifyjs from 'uglifyjs';
export default {
	input: 'src/bilzaa2d.js',
//	plugins: [terser()],
	output: {
	  file: 'dist/bilzaa2d.js',
	  format: 'es',
	}
  };