import nodeResolve from "@rollup/plugin-node-resolve";
import typescript from "@rollup/plugin-typescript";
import commonjs from "@rollup/plugin-commonjs";
import terser from "@rollup/plugin-terser";

export default {
  input: "index.ts",
  output: {
    file: "dist/index.js",
    format: "es",
  },
  plugins: [typescript(), commonjs(), nodeResolve(), terser()],
};
