import path from "path";

import includePaths from "rollup-plugin-includepaths";
import eslint from "@rollup/plugin-eslint";
import peerDepsExternal from "rollup-plugin-peer-deps-external";
import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import typescript from "@rollup/plugin-typescript";
import postcss from "rollup-plugin-postcss";
import { terser } from "rollup-plugin-terser";
import dts from "rollup-plugin-dts";

import packageJson from "./package.json";

export default [
  {
    input: "src/index.ts",
    output: [
      {
        dir: path.resolve(path.parse(packageJson.main).dir, ".."), // Step up a level as we output a src folder.
        format: "cjs",
        preserveModules: true,
        sourcemap: true,
      },
      {
        dir: path.resolve(path.parse(packageJson.module).dir, ".."),
        format: "esm",
        preserveModules: true,
        sourcemap: true,
      },
    ],
    plugins: [
      eslint({
        throwOnError: true,
      }),
      includePaths({
        include: {},
        paths: ["src"],
        external: [],
        extensions: [".ts", ".tsx", ".js", ".jsx", ".json"],
      }),
      peerDepsExternal(),
      resolve({
        browser: true,
      }),
      commonjs(),
      typescript({
        tsconfig: "./tsconfig.json",
        declaration: false,
        declarationDir: null,
        outDir: null,
      }),
      postcss(),
      terser(),
    ],
  },
  {
    input: "src/index.ts",
    output: [
      {
        file: "dist/index.d.ts",
        format: "esm",
      },
    ],
    plugins: [dts.default()],
    external: [/\.css$/],
  },
];
