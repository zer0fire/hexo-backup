hexo.extend.filter.register("theme_inject", function (injects) {
  //   injects.header.file(
  //     "default",
  //     "source/_inject/test1.ejs",
  //     { key: "value" },
  //     { cache: true },
  //     -1
  //   );
  injects.bodyEnd.raw(
    "rainbow-kit-script",
    '<script type="module" src="./demo/rainbow/assets/index-D0sDB4-R.js" crossorigin></script>'
  );
});
