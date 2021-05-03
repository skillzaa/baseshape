//import { terser } from "rollup-plugin-terser";
//import uglifyjs from 'uglifyjs';
export default {
	input: 'src/Shapes.js',
//	plugins: [terser()],
	output: {
	  file: 'dist/Shapes.js',
	  format: 'es',
	}
  };