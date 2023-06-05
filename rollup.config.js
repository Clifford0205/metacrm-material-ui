import peerDepsExternal from "rollup-plugin-peer-deps-external";
import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import babel from "@rollup/plugin-babel";
import replace from "@rollup/plugin-replace";
import alias from "@rollup/plugin-alias";
import copy from "rollup-plugin-copy";
import path from "path";

const packageJson = require("./package.json");

const pathResolve = (p) => path.resolve(__dirname, p);

const makeExternalPredicate = (externalArr) => {
  if (externalArr.length === 0) {
    return () => false;
  }
  const pattern = new RegExp(`^(${externalArr.join("|")})($|/)`);
  return (id) => {
    console.log("id: ", id);
    return pattern.test(id);
  };
};

const task = {
  input: "src/components/SvgIcon/index.js",
  output: {
    dir: "dist",
    format: "esm",
    name: "metacrm-svg",
    exports: "named",
    sourcemap: true,
    preserveModules: true,
    preserveModulesRoot: "src/components",
  },

  external: makeExternalPredicate([
    ...Object.keys(packageJson.dependencies || {}),
    ...Object.keys(packageJson.peerDependencies || {}),
  ]),

  plugins: [
    peerDepsExternal(),
    resolve({
      extensions: [".mjs", ".js", ".jsx", ".json", ".node", ".ts", ".tsx"],
      preferBuiltins: true,
      mainFields: ["browser"],
    }),
    babel({
      exclude: "node_modules/**", // only transpile our source code
      babelHelpers: "bundled",
      extensions: [".js", ".jsx", ".es6", ".es", ".mjs", ".ts", ".tsx"],
    }),
    commonjs(),
    copy({
      targets: [{ src: "assets/fonts", dest: "dist/public" }],
    }),
    alias({
      entries: [{ find: "@", replacement: pathResolve("src") }],
    }),
    replace({
      preventAssignment: true,
      "process.env.NODE_ENV": JSON.stringify("production"),
    }),
  ],
};

export default task;
