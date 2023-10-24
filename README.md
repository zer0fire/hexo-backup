```shell
$ hexo --version
INFO  Validating config
hexo: 6.3.0
hexo-cli: 4.3.1
os: darwin 22.3.0 13.2.1

node: 18.13.0
v8: 10.2.154.23-node.21
uv: 1.44.2
zlib: 1.2.13
brotli: 1.0.9
ares: 1.18.1
modules: 108
nghttp2: 1.51.0
napi: 8
llhttp: 6.0.10
uvwasi: 0.0.13
openssl: 3.0.7+quic
cldr: 42.0
icu: 72.1
tz: 2022f
unicode: 15.0
ngtcp2: 0.8.1
nghttp3: 0.7.0
```

```shell
$ hexo --help
INFO  Validating config
Usage: hexo <command>

Commands:
  clean     Remove generated files and cache.
  config    Get or set configurations.
  deploy    Deploy your website.
  generate  Generate static files.
  help      Get help on a command.
  init      Create a new Hexo folder.
  list      List the information of the site
  migrate   Migrate your site from other system to Hexo.
  new       Create a new post.
  publish   Moves a draft post from _drafts to _posts folder.
  render    Render files with renderer plugins.
  server    Start the server.
  version   Display version information.

Global Options:
  --config  Specify config file instead of using _config.yml
  --cwd     Specify the CWD
  --debug   Display all verbose messages in the terminal
  --draft   Display draft posts
  --safe    Disable all plugins and scripts
  --silent  Hide output on console

For more help, you can use 'hexo help [command]' for the detailed information
or you can check the docs: http://hexo.io/docs/
```

custom page
```yaml
skip_render: demo/**
```