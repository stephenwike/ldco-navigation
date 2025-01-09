import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import typescript from '@rollup/plugin-typescript';
import postcss from 'rollup-plugin-postcss';

export default {
  input: 'src/index.ts', // Entry point of your library
  output: [
    {
      file: 'dist/index.js', // CommonJS output
      format: 'cjs',
      sourcemap: true,
      exports: 'named', // Ensure named exports
    },
    {
      file: 'dist/index.esm.js', // ES module output
      format: 'esm',
      sourcemap: true,
    },
  ],
  plugins: [
    resolve(),
    commonjs(),
    typescript({
      tsconfig: './tsconfig.json',
    }),
    postcss({
      modules: true, // Enable CSS Modules
      extract: true, // Extract CSS into a separate file
    }),
  ],
  external: ['react', 'react-dom'], // Mark React as external
};
