import pkg from "./package.json";
import commonjs from '@rollup/plugin-commonjs';
import resolve from '@rollup/plugin-node-resolve';
import babel from '@rollup/plugin-babel';
import globals from 'rollup-plugin-node-globals';

const extensions = [".js", ".jsx", ".ts", ".tsx"];
const name = 'myModuleName';
const plugins = [
   // Allows node_modules resolution
   resolve({ extensions }),

   // Allow bundling cjs modules. Rollup doesn't understand cjs
   commonjs(),

   globals(),
   // Compile TypeScript/JavaScript files
   babel({
     extensions,
     babelHelpers: 'bundled',
     include: ['src/**/*'],
   }),
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