import babel from 'rollup-plugin-babel';
import eslint from 'rollup-plugin-eslint';

export default {
	entry: 'src/main.js',
	dest: 'dist/main.min.js',
	format: 'iife',
	sourceMap: 'inline',
	plugins: [
		babel({
			exclude: 'node_modules/**'
		}),
		eslint({
			exclude: [
				'src/**.css'
			]
		})
	],
};