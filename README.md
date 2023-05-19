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

2. If compiled CSS file should be in another directory it can be done by editing gulpfile.js following line:
```
.pipe(dest('DESIRED/DESTINATION/OF/CSS/FILE'));

```

3. Now CSS file should be automatically updated every time .scss or .html file is saved

# Extending or customizing the library:
1. Create SASS folder
2. In the folder create index.scss file
3. Any changes do inside the new index.scss file
4. Update guplfile's following lines:
```
return src('sass_library/**/*.scss')
watch(['sass/**/*.scss', '*.html'], series(buildStyles));
```
5. Add the following line to the end of the index.scss file:
```
@import 'sass_library';
```
6. Re run gulp command
7. Now gulp will compile into index.css file any changes made into index.scss file
7. To overwrite some classes from sass_library:
    1. Make sure to make changes before  the line "@import 'sass_library';" in index.css file
    2. In sass_library directory add "!default" value at the end of the class you want to modify

