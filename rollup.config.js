import pkg from "./package.json";
import commonjs from '@rollup/plugin-commonjs';
import resolve from '@rollup/plugin-node-resolve';
import babel from '@rollup/plugin-babel';

const extensions = [".js", ".jsx", ".ts", ".tsx"];

const plugins = [
   // Allows node_modules resolution
   resolve({ extensions }),

   // Allow bundling cjs modules. Rollup doesn't understand cjs
   commonjs(),

   // Compile TypeScript/JavaScript files
   babel({
     extensions,
     babelHelpers: 'bundled',
     include: ['src/**/*'],
   }),
];

 // Specify here external modules which you don't want to include in your bundle (for instance: 'lodash', 'moment' etc.)
  // https://rollupjs.org/guide/en/#external
const external = [
    ...Object.keys(pkg.devDependencies || {}),
    ...Object.keys(pkg.peerDependencies || {}),
  ];

export default [
  {
    input: './src/index.ts',
    external,
    plugins,
    output: [{
      file: pkg.main,
      format: 'cjs',
    }, {
      file: pkg.module,
      format: 'es',
    }, {
      file: pkg.browser,
      format: 'iife',
      // https://rollupjs.org/guide/en/#outputglobals
      globals: {},
    }],    
  }
];