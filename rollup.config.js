import commonjs from 'rollup-plugin-commonjs';
import resolve from 'rollup-plugin-node-resolve';
import { uglify } from 'rollup-plugin-uglify';
import { minify as esMinify } from 'uglify-es';
import reservedDomProps from 'uglify-es/tools/domprops';

const commonMinification = uglify({
    mangle: {
        toplevel: true,
        properties: {
            reserved: reservedDomProps,
        },
    },
}, esMinify);

export default [{
    input: 'example/index.mjs',

    output: {
        format: 'iife',
        file: 'example-dist/index.es.min.js',
    },

    plugins: [
        resolve({
            module: true,
            main: false,
            extensions: ['.mjs'],
        }),
        commonMinification,
    ],
}, {
    input: 'example/index.js',

    output: {
        name: 'f', // unfortunately required, but accomodated when capturing sizes
        format: 'iife',
        file: 'example-dist/index.cjs.min.js',
    },

    plugins: [
        commonjs(),
        resolve({
            module: false,
            main: true,
        }),
        commonMinification,
    ],
}];
