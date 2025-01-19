import * as esbuild from 'esbuild';

await esbuild.build({
  entryPoints: ['static/components/index.js'],
  bundle: true,
  minify: true,
  format: 'esm',
  outfile: 'static/components.min.js',
  target: ['es2020'],
  loader: { '.js': 'js' },
  sourcemap: process.env.NODE_ENV !== 'production'
});

console.log('\x1b[32m\u2713\x1b[0m Build and minification successfully completed!');
