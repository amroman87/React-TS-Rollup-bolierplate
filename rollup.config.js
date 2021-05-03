import typescript from "rollup-plugin-typescript2";
import pkg from "./package.json";

const extensions = [".js", ".jsx", ".ts", ".tsx"];
const input = "src/index.ts";

const plugins = [
  typescript({
    typescript: require("typescript"),
  }),
];

export default [
  {
    input: 'src/index.ts',
    output: {
      file: 'dist/index.js',
      format: "esm",
      sourcemap: true,
    },
    plugins,
  },
  {
    input: 'src/index.ts',
    output: {
      file: 'dist/index.js',
      format: "cjs",
      sourcemap: true,
    },
    plugins,
  },
];