# Tree Shake your favorite @fluentui/react-icons

I recently used about 20 beautiful icons from @fluentui/react-icons package, and
it added a whopping 8mb to my gzipped static site. By Bundling and Treeshaking
the few icons i needed with Rollup, I got it down to ~50k (and adding the `@rollup/plugin-terser` got it down to just 15kb!).

## Usage

Add your favorite icons to the `MyIcons` object in `index.js` and use `npm run
build` to build your bundle.

Bonus: if you're on unix, use `gzip -c dist/index.js | wc -c` to check the size of your gzipped bundle.
