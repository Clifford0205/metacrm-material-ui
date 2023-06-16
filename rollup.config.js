import peerDepsExternal from 'rollup-plugin-peer-deps-external';
import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import babel from '@rollup/plugin-babel';
import replace from '@rollup/plugin-replace';
import alias from '@rollup/plugin-alias';
import copy from 'rollup-plugin-copy';
import path from 'path';
import fs from 'fs';

const packageJson = require('./package.json');

const pathResolve = p => path.resolve(__dirname, p);

const makeExternalPredicate = externalArr => {
  if (externalArr.length === 0) {
    return () => false;
  }
  const pattern = new RegExp(`^(${externalArr.join('|')})($|/)`);
  return id => {
    return pattern.test(id);
  };
};

const inputArray = [];
try {
  fs.readdirSync('./src/components').forEach(file => {
    const inputFile = `./src/components/${file}/index.js`;
    if (fs.existsSync(inputFile)) {
      inputArray.push(inputFile);
    }
  });
} catch (err) {
  if (err.code === 'ENOENT') {
    console.log('file or directory does not exist');
  }
}

const globals = {
  react: 'React',
  'react-dom': 'ReactDOM',
  'prop-types': 'PropTypes',
  '@mui/material': '@mui/material',
  '@mui/icons-material': 'IconsMaterial',
  '@mui/styles': 'Styles',
  '@mui/system': 'System',
  '@mui/lab': 'Lab',
  '@mui/core': 'Core',
  '@mui/utils': 'Utils',
  'date-fns': 'dateFns',
  uuid: 'uuid',
};

const allComponentsEntry = [
  {
    input: inputArray,
    output: {
      dir: 'dist/m800',
      format: 'esm',
      name: 'M800',
      globals,
      exports: 'named',
      sourcemap: false,
      preserveModules: true,
      preserveModulesRoot: 'src/components',
    },
  },
];

const task = {
  input: 'src/components/SvgIcon/index.js',
  output: {
    dir: 'dist',
    format: 'esm',
    name: 'metacrm-svg',
    exports: 'named',
    sourcemap: true,
    preserveModules: true,
    preserveModulesRoot: 'src/components',
  },

  external: makeExternalPredicate([
    ...Object.keys(packageJson.dependencies || {}),
    ...Object.keys(packageJson.peerDependencies || {}),
  ]),

  plugins: [
    peerDepsExternal(),
    resolve({
      extensions: ['.mjs', '.js', '.jsx', '.json', '.node', '.ts', '.tsx'],
      preferBuiltins: true,
      mainFields: ['browser'],
    }),
    babel({
      exclude: 'node_modules/**', // only transpile our source code
      babelHelpers: 'bundled',
      extensions: ['.js', '.jsx', '.es6', '.es', '.mjs', '.ts', '.tsx'],
    }),
    commonjs(),
    copy({
      targets: [{ src: 'assets/fonts', dest: 'dist/public' }],
    }),
    alias({
      entries: [{ find: '@', replacement: pathResolve('src') }],
    }),
    replace({
      preventAssignment: true,
      'process.env.NODE_ENV': JSON.stringify('production'),
    }),
  ],
};

const copyMaterialFiles = {
  targets: [
    {
      src: './src/utils/*',
      dest: 'dist/m800/utils/',
    },
    {
      src: './src/constants/*',
      dest: 'dist/m800/constants/',
    },
    {
      src: './src/theme/*',
      dest: 'dist/m800/theme/',
    },
  ],
  hook: 'writeBundle',
  copyOnce: true,
};

console.log('allComponentsEntry: ', allComponentsEntry);

const tasks = allComponentsEntry.map((enchEntry, index) => {
  const copyFiles = index === 0 ? copyMaterialFiles : {};
  const plugins = [
    peerDepsExternal(),
    resolve({
      extensions: ['.mjs', '.js', '.jsx', '.json', '.node', '.ts', '.tsx'],
      preferBuiltins: true,
      mainFields: ['browser'],
    }),
    babel({
      exclude: 'node_modules/**', // only transpile our source code
      babelHelpers: 'bundled',
      extensions: ['.js', '.jsx', '.es6', '.es', '.mjs', '.ts', '.tsx'],
    }),
    commonjs(),
    copy(copyFiles),
    alias({
      entries: [{ find: '@', replacement: pathResolve('src') }],
    }),
    replace({
      preventAssignment: true,
      'process.env.NODE_ENV': JSON.stringify('production'),
    }),
  ];

  let watch = false;

  // only in watch mode
  if (process.env.ROLLUP_WATCH) {
    watch = {
      include: `${pathResolve('src')}/**`,
      exclude: ['node_modules/'],
    };
  }

  return {
    input: enchEntry.input,
    output: enchEntry.output,
    external: makeExternalPredicate([
      ...Object.keys(packageJson.dependencies || {}),
      ...Object.keys(packageJson.peerDependencies || {}),
    ]),

    treeshake: {
      moduleSideEffects: false,
    },
    plugins,
    watch,
  };
});

export default tasks;
