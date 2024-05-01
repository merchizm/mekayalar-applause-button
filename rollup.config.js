import uglify from "@lopatnov/rollup-plugin-uglify";
import { nodeResolve } from '@rollup/plugin-node-resolve';

export default {
  input: "src/applause-button.js",
  plugins: [
    nodeResolve(),
    uglify()
  ],
  output: {
    file: "dist/applause-button.js",
    format: "umd"
  }
};
