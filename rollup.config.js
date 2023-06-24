import path from "path";

import { babel } from "@rollup/plugin-babel";
import { defineConfig } from "rollup";
import { nodeResolve } from "@rollup/plugin-node-resolve";
import { terser } from "rollup-plugin-terser";
import commonjs from "@rollup/plugin-commonjs";
import dts from "rollup-plugin-dts";
import eslint from "@rollup/plugin-eslint";
import peerDepsExternal from "rollup-plugin-peer-deps-external";
import postcss from "rollup-plugin-postcss";

import packageJson from "./package.json";

const rootDirectory = path.resolve(__dirname);
const extensions = [".js", ".jsx", ".ts", ".tsx"];

const esmLocation = packageJson.exports["."].import;
const cjsLocation = packageJson.exports["."].require;
const dtsLocation = packageJson.exports["."].types;

export default defineConfig([
  {
    input: "src/index.ts",
    output: [
      {
        dir: path.parse(esmLocation).dir,
        entryFileNames: `[name]${path.parse(esmLocation).ext}`,
        format: "esm",
        exports: "named",
        preserveModules: true,
        sourcemap: true,
      },
      {
        dir: path.parse(cjsLocation).dir,
        entryFileNames: `[name]${path.parse(cjsLocation).ext}`,
        format: "cjs",
        exports: "named",
        interop: "auto",
        preserveModules: true,
        sourcemap: true,
      },
    ],
    plugins: [
      eslint({
        throwOnError: true,
      }),
      peerDepsExternal({
        packageJsonPath: path.resolve(rootDirectory, "package.json"),
      }),
      nodeResolve({
        browser: true,
        extensions,
      }),
      babel({
        babelHelpers: "bundled",
        configFile: path.resolve(rootDirectory, "babel.config.js"),
        extensions,
      }),
      commonjs(),
      postcss({
        extract: true,
      }),
      terser(),
    ],
  },
  {
    input: "src/index.ts",
    output: [
      {
        dir: path.parse(dtsLocation).dir,
        format: "esm",
        exports: "named",
        preserveModules: true,
      },
    ],
    plugins: [dts.default()],
    external: [/\.css$/],
  },
]);
