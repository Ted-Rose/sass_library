# sass_library
Initially made by following this tutorial: https://www.youtube.com/watch?v=_kqN4hl9bGc&list=PL4cUxeGkcC9jxJX7vojNVK-o8ubDZEcNb

# Setup

1. Run these commands in terminal:

```
npm install -g gulp
```

```
npm install gulp gulp-sass sass --save-dev
```

```
npm install gulp-sass gulp-cssbeautify --save-dev
```

```
npm install gulp-purgecss
```

```
gulp
```

2. In root directory create directory css.

3. Then create index.css file within css directory.

4. If compiled CSS file should be in another directory it can be done by changing accordingly previous two steps and editing gulpfile.js following line:
```
.pipe(dest('DESIRED/DESTINATION/OF/CSS/FILE'));

```

5. Now updated CSS file should appear in css/index.css every time .scss or .html file is saved


