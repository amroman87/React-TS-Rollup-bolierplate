import pkg from "./package.json";
import commonjs from '@rollup/plugin-commonjs';
import resolve from '@rollup/plugin-node-resolve';
import babel from '@rollup/plugin-babel';
import globals from 'rollup-plugin-node-globals';
import serve from 'rollup-plugin-serve';
import livereload from 'rollup-plugin-livereload';
import { terser } from 'rollup-plugin-terser'

const extensions = [".js", ".jsx", ".ts", ".tsx"];
const name = 'myModuleName';
const plugins = [
   // Allows node_modules resolution
   resolve({ extensions }),

   // Allow bundling cjs modules. Rollup doesn't understand cjs
   commonjs({
    include: 'node_modules/**',
  }),

   globals(),
   terser(),
   // Compile TypeScript/JavaScript files
   babel({
     extensions,
     babelHelpers: 'bundled',
     include: ['src/**/*'],
     exclude: 'node_modules/**',
   }),
   serve({
    open: true,
    verbose: true,
    contentBase: ['', 'dist'],
    historyApiFallback: true,
    host: 'localhost',
    port: 3000
  }),
  livereload({
    watch: 'dist'})
];

export default [
  {
    input: './src/index.ts',    
    plugins,
    output: [{
      name,
      file: pkg.main,
      format: 'cjs',
    }, {
      name,
      file: pkg.module,
      format: 'es',
    }, {
      name,
      file: pkg.browser,
      format: 'iife',
      // https://rollupjs.org/guide/en/#outputglobals
      globals: {},
    }],    
  }
];