;(window.webpackJsonp = window.webpackJsonp || []).push([
  [27],
  {
    322: function(t, e, a) {
      'use strict'
      a.r(e)
      var n = a(1),
        s = Object(n.a)(
          {},
          function() {
            var t = this,
              e = t.$createElement,
              a = t._self._c || e
            return a('div', { staticClass: 'content' }, [
              a('p', [
                a(
                  'a',
                  {
                    attrs: {
                      href:
                        'https://github.com/nicejade/nice-front-end-tutorial/blob/master/tutorial/nodejs-tutorial.md',
                      target: '_blank',
                      rel: 'noopener noreferrer'
                    }
                  },
                  [t._v('Node.js'), a('OutboundLink')],
                  1
                ),
                t._v('，如今已经是'),
                a(
                  'a',
                  {
                    attrs: {
                      href: 'https://github.com/nicejade/nice-front-end-tutorial',
                      target: '_blank',
                      rel: 'noopener noreferrer'
                    }
                  },
                  [t._v('前端开发'), a('OutboundLink')],
                  1
                ),
                t._v('不可或缺的组成部分；'),
                a('code', [t._v('npm')]),
                t._v(' 则是 Node.js 默认的、以 JavaScript 编写的软件包管理系统； 而 '),
                a('code', [t._v('npx')]),
                t._v(' '),
                a('strong', [t._v('是 npm 软件包运行器')]),
                t._v(
                  '，使用它，能够无需显式安装即可帮助执行 npm 软件包。它有很多用处，本就从其主要使用场景角度，来介绍下该命令。'
                )
              ]),
              t._v(' '),
              t._m(0),
              t._v(' '),
              t._m(1),
              t._v(' '),
              a('p', [
                t._v('更新 npm 至 '),
                a('em', [t._v('>= @5.2.0')]),
                t._v('，就会自动安装 '),
                a(
                  'a',
                  {
                    attrs: { href: 'https://www.npmjs.com/package/npx', target: '_blank', rel: 'noopener noreferrer' }
                  },
                  [t._v('npx'), a('OutboundLink')],
                  1
                ),
                t._v('；可以通过 '),
                a('code', [t._v('which npx')]),
                t._v(' 来查看其绝对路径 ；如果由于某种原因它不可用，请按照以下说明安装或更新它即可：')
              ]),
              t._v(' '),
              t._m(2),
              t._m(3),
              t._v(' '),
              a('p', [
                t._v('多年来，npm 生态系统越来越倾向于将工具安装为项目本地 '),
                a('code', [t._v('devDependencies')]),
                t._v('，而不是要求用户在全局范围内安装它们。这意味着像 '),
                a(
                  'a',
                  { attrs: { href: 'https://npm.im/mocha', target: '_blank', rel: 'noopener noreferrer' } },
                  [t._v('mocha'), a('OutboundLink')],
                  1
                ),
                t._v('，'),
                a(
                  'a',
                  {
                    attrs: { href: 'https://www.jeffjade.com/tags/Gulp/', target: '_blank', rel: 'noopener noreferrer' }
                  },
                  [t._v('gulp'), a('OutboundLink')],
                  1
                ),
                t._v(' 和 '),
                a(
                  'a',
                  { attrs: { href: 'https://npm.im/bower', target: '_blank', rel: 'noopener noreferrer' } },
                  [t._v('bower'), a('OutboundLink')],
                  1
                ),
                t._v(
                  ' 这样曾经主要全局安装在系统上的工具现在可以在每个项目的基础上管理它们的版本。这也意味着，要使基于 npm 的项目启动并运行，你需要做的就是确保在系统上有 '
                ),
                a('code', [t._v('node+npm')]),
                t._v('，克隆 '),
                a('code', [t._v('Git repo')]),
                t._v('，然后执行 '),
                a('code', [t._v('npm install')]),
                t._v(' 和 '),
                a('code', [t._v('npm run xx')]),
                t._v(' 来安装依赖以及运行命令。由于'),
                a('code', [t._v('npm run-script')]),
                t._v(' 将本地二进制文件添加到路径，这样就可以了！')
              ]),
              t._v(' '),
              t._m(4),
              t._v(' '),
              t._m(5),
              a('p', [
                t._v('npx 为你提供了更好的解决方案：'),
                a('code', [t._v('npx rollup')]),
                t._v(' 是你使用本地安装所需的全部工作；如果你采取额外的步骤并配置 '),
                a(
                  'a',
                  {
                    attrs: {
                      href: 'https://www.npmjs.com/package/npx#shell-auto-fallback',
                      target: '_blank',
                      rel: 'noopener noreferrer'
                    }
                  },
                  [t._v('shell 自动回退'), a('OutboundLink')],
                  1
                ),
                t._v('。')
              ]),
              t._v(' '),
              t._m(6),
              t._v(' '),
              t._m(7),
              t._v(' '),
              t._m(8),
              t._v(' '),
              a('p', [
                t._v('npx 想要解决的主要问题，就是调用项目内部安装的模块。比如，项目内部安装了打包工具 '),
                a('code', [t._v('rollup')]),
                t._v('。调用 rollup ，可在项目脚本和 package.json 的 '),
                a(
                  'a',
                  {
                    attrs: {
                      href:
                        'https://www.jeffjade.com/2017/12/30/135-npm-vs-yarn-detial-memo/#%E5%BC%BA%E5%A4%A7%E5%A6%82%E6%96%AF%EF%BC%8Cnpm-%E8%84%9A%E6%9C%AC',
                      target: '_blank',
                      rel: 'noopener noreferrer'
                    }
                  },
                  [t._v('scripts'), a('OutboundLink')],
                  1
                ),
                t._v(' 字段里面；如果想在命令行下调用，像下面 👇 这样使用，会更加方便。')
              ]),
              t._v(' '),
              t._m(9),
              t._m(10),
              t._v(' '),
              t._m(11),
              t._m(12),
              t._v(' '),
              t._m(13),
              t._m(14),
              t._v(' '),
              t._m(15),
              t._v(' '),
              t._m(16),
              a('p', [
                t._v('值得一提的是，上述 '),
                a(
                  'a',
                  {
                    attrs: {
                      href: 'https://gist.github.com/nicejade/406f154e882a836de1b2e12d02b84aab',
                      target: '_blank',
                      rel: 'noopener noreferrer'
                    }
                  },
                  [t._v('gist 代码片段'), a('OutboundLink')],
                  1
                ),
                t._v('，是为写此篇文章，特意写来测试用（使用 npx 命令来快速生成一个标准的 '),
                a('code', [t._v('README.md')]),
                t._v('）；有了 '),
                a('code', [t._v('npx')]),
                t._v(
                  ' 这个功能，即可为朋友们分享一些脚本，提供更加便捷 & 快捷的方式（相比之下，npm 仓库的脚本，发布和使用，都显得更加繁琐些；当然，你需要注意 ⚠️ 安全，请务必仔细阅读 gists 代码，如同运行'
                ),
                a('code', [t._v('.sh')]),
                t._v(' 脚本时一样！）。')
              ]),
              t._v(' '),
              t._m(17),
              t._v(' '),
              t._m(18),
              t._m(19),
              t._v(' '),
              t._m(20),
              t._v(' '),
              t._m(21),
              t._v(' '),
              t._m(22),
              t._m(23),
              t._v(' '),
              a('p', [
                t._v(
                  '如果 npx 安装多个模块，默认情况下，所执行的命令之中，只有第一个可执行项会使用 npx 安装的模块，后面的可执行项还是会交给 Shell 解释。所以如下命令会报错：'
                )
              ]),
              t._v(' '),
              t._m(24),
              t._m(25),
              t._v(' '),
              t._m(26),
              t._m(27),
              t._v(' '),
              t._m(28),
              t._m(29),
              t._v(' '),
              t._m(30),
              a('p', [
                t._v('此外，npx 还有 shell 自动回退（shell auto-fallback）功能，可以使用与 '),
                a('code', [t._v('bash')]),
                t._v('、'),
                a('code', [t._v('zsh')]),
                t._v('、'),
                a('code', [t._v('fish')]),
                t._v(' 等；倘若把 npx 配置在 '),
                a('code', [t._v('.zshrc')]),
                t._v(' 文件中，当在本地找不见伴随 '),
                a('code', [t._v('@')]),
                t._v(' 命令时，可以在不引用 npx 的情况下，用其作为后备命令执行，配置也很简单，如果你是用的是 '),
                a('code', [t._v('zsh')]),
                t._v('，执行如下命令即可（如果是 '),
                a('code', [t._v('bash')]),
                t._v(' Or '),
                a('code', [t._v('fish')]),
                t._v('，可以参见 '),
                a(
                  'a',
                  {
                    attrs: { href: 'https://www.npmjs.com/package/npx', target: '_blank', rel: 'noopener noreferrer' }
                  },
                  [t._v('npx - shell auto-fallback'), a('OutboundLink')],
                  1
                ),
                t._v('）：')
              ]),
              t._v(' '),
              t._m(31),
              a('p', [t._v('具体使用效果如下示例：')]),
              t._v(' '),
              t._m(32),
              a('blockquote', [
                a('p', [
                  t._v('原文首发出处: '),
                  a(
                    'a',
                    { attrs: { href: 'https://quickapp.lovejade.cn/', target: '_blank', rel: 'noopener noreferrer' } },
                    [t._v('静轩之别苑'), a('OutboundLink')],
                    1
                  ),
                  t._v(' 原文首发链接：'),
                  a(
                    'a',
                    {
                      attrs: {
                        href: 'https://quickapp.lovejade.cn/how-to-use-npm-npx-tutorial/',
                        target: '_blank',
                        rel: 'noopener noreferrer'
                      }
                    },
                    [t._v('前端利器之 npx 使用纪要'), a('OutboundLink')],
                    1
                  )
                ])
              ]),
              t._v(' '),
              a('p', [t._v('于 2019.12.10 于深圳.福田 last modify: 2019.12.11.')]),
              t._v(' '),
              t._m(33),
              t._v(' '),
              a('ul', [
                a('li', [
                  a(
                    'a',
                    {
                      attrs: { href: 'https://www.npmjs.com/package/npx', target: '_blank', rel: 'noopener noreferrer' }
                    },
                    [t._v('npx(1)-- execute npm package binaries'), a('OutboundLink')],
                    1
                  )
                ]),
                t._v(' '),
                a('li', [
                  a(
                    'a',
                    {
                      attrs: {
                        href: 'https://medium.com/@maybekatz/introducing-npx-an-npm-package-runner-55f7d4bd282b',
                        target: '_blank',
                        rel: 'noopener noreferrer'
                      }
                    },
                    [t._v('Introducing npx: an npm package runner'), a('OutboundLink')],
                    1
                  )
                ]),
                t._v(' '),
                a('li', [
                  a(
                    'a',
                    {
                      attrs: {
                        href: 'https://hackernoon.com/npx-npm-package-runner-7f6683e4304a',
                        target: '_blank',
                        rel: 'noopener noreferrer'
                      }
                    },
                    [t._v('npx: npm package runner'), a('OutboundLink')],
                    1
                  )
                ]),
                t._v(' '),
                a('li', [
                  a(
                    'a',
                    {
                      attrs: {
                        href: 'https://www.ruanyifeng.com/blog/2019/02/npx.html',
                        target: '_blank',
                        rel: 'noopener noreferrer'
                      }
                    },
                    [t._v('npx 使用教程 | 阮一峰'), a('OutboundLink')],
                    1
                  )
                ])
              ]),
              t._v(' '),
              t._m(34),
              t._v(' '),
              a('ul', [
                a('li', [
                  a(
                    'a',
                    {
                      attrs: {
                        href: 'https://www.lovejade.cn/zh/article/how-to-write-a-good-readme-for-your-project.html',
                        target: '_blank',
                        rel: 'noopener noreferrer'
                      }
                    },
                    [t._v('如何为项目编写良好 README'), a('OutboundLink')],
                    1
                  )
                ]),
                t._v(' '),
                a('li', [
                  a(
                    'a',
                    {
                      attrs: {
                        href: 'https://www.jeffjade.com/2017/12/30/135-npm-vs-yarn-detial-memo/',
                        target: '_blank',
                        rel: 'noopener noreferrer'
                      }
                    },
                    [t._v('Npm vs Yarn 之备忘详单'), a('OutboundLink')],
                    1
                  )
                ]),
                t._v(' '),
                a('li', [
                  a(
                    'a',
                    {
                      attrs: {
                        href: 'https://quickapp.lovejade.cn/git-common-problems-and-solutions/',
                        target: '_blank',
                        rel: 'noopener noreferrer'
                      }
                    },
                    [t._v('Git 常见问题及解决办法'), a('OutboundLink')],
                    1
                  )
                ]),
                t._v(' '),
                a('li', [
                  a(
                    'a',
                    {
                      attrs: {
                        href: 'https://www.jeffjade.com/2019/08/25/156-arya-jarvis-born-for-efficiency/',
                        target: '_blank',
                        rel: 'noopener noreferrer'
                      }
                    },
                    [t._v('为高效而生：Arya Jarvis'), a('OutboundLink')],
                    1
                  )
                ]),
                t._v(' '),
                a('li', [
                  a(
                    'a',
                    {
                      attrs: {
                        href: 'https://www.jeffjade.com/2019/05/31/155-arya-markdown-online-editor/',
                        target: '_blank',
                        rel: 'noopener noreferrer'
                      }
                    },
                    [t._v('Arya - 在线 Markdown 编辑器'), a('OutboundLink')],
                    1
                  )
                ]),
                t._v(' '),
                a('li', [
                  a(
                    'a',
                    {
                      attrs: {
                        href: 'https://www.jeffjade.com/2019/02/02/150-prettier-quickapp-plugin/',
                        target: '_blank',
                        rel: 'noopener noreferrer'
                      }
                    },
                    [t._v('Prettier 插件为更漂亮快应用代码'), a('OutboundLink')],
                    1
                  )
                ]),
                t._v(' '),
                a('li', [
                  a(
                    'a',
                    {
                      attrs: {
                        href: 'https://www.jeffjade.com/2019/06/14/156-puppeteer-robot/',
                        target: '_blank',
                        rel: 'noopener noreferrer'
                      }
                    },
                    [t._v('基于 Puppeteer 构建简易机器人'), a('OutboundLink')],
                    1
                  )
                ])
              ])
            ])
          },
          [
            function() {
              var t = this.$createElement,
                e = this._self._c || t
              return e('p', [
                e('img', {
                  attrs: { src: 'https://image.nicelinks.site/node-npm-npx.jpg', alt: '前端利器之 npx 使用纪要' }
                })
              ])
            },
            function() {
              var t = this.$createElement,
                e = this._self._c || t
              return e('h2', { attrs: { id: '安装' } }, [
                e('a', { staticClass: 'header-anchor', attrs: { href: '#安装', 'aria-hidden': 'true' } }, [
                  this._v('#')
                ]),
                this._v(' 安装')
              ])
            },
            function() {
              var t = this.$createElement,
                e = this._self._c || t
              return e('div', { staticClass: 'language-bash extra-class' }, [
                e('pre', { pre: !0, attrs: { class: 'language-bash' } }, [
                  e('code', [
                    e('span', { pre: !0, attrs: { class: 'token function' } }, [this._v('npm')]),
                    this._v(' '),
                    e('span', { pre: !0, attrs: { class: 'token function' } }, [this._v('install')]),
                    this._v(' -g npx\n')
                  ])
                ])
              ])
            },
            function() {
              var t = this.$createElement,
                e = this._self._c || t
              return e('h2', { attrs: { id: '存在价值' } }, [
                e('a', { staticClass: 'header-anchor', attrs: { href: '#存在价值', 'aria-hidden': 'true' } }, [
                  this._v('#')
                ]),
                this._v(' 存在价值')
              ])
            },
            function() {
              var t = this,
                e = t.$createElement,
                a = t._self._c || e
              return a('p', [
                t._v(
                  '缺点是，这使你无法以交互方式快速、方便地调用本地二进制文件。有几种方法可以做到这一点，他们都对他们有一些烦恼：你可以将这些工具添加到你的 '
                ),
                a('code', [t._v('scripts')]),
                t._v('，但是你需要记住通过使用 '),
                a('code', [t._v('--')]),
                t._v(' 来传递参数，你可以做使用 shell 脚本技巧 '),
                a('code', [t._v('alias npmx=PATH=$(npm bin):$PATH')]),
                t._v('，或者你可以使用 '),
                a('code', [t._v('./node_modules/.bin/rollup')]),
                t._v(' 手动路径到它们。这些都有效，但没有一个是理想的，参见如下使用命令：')
              ])
            },
            function() {
              var t = this,
                e = t.$createElement,
                a = t._self._c || e
              return a('div', { staticClass: 'language-bash extra-class' }, [
                a('pre', { pre: !0, attrs: { class: 'language-bash' } }, [
                  a('code', [
                    a('span', { pre: !0, attrs: { class: 'token function' } }, [t._v('npm')]),
                    t._v(' i -D rollup\n./node_modules/.bin/rollup -v\n\n'),
                    a('span', { pre: !0, attrs: { class: 'token comment' } }, [t._v('#or')]),
                    t._v('\n'),
                    a('span', { pre: !0, attrs: { class: 'token function' } }, [t._v('npm')]),
                    t._v(' i -D rollup\n'),
                    a('span', { pre: !0, attrs: { class: 'token variable' } }, [
                      a('span', { pre: !0, attrs: { class: 'token variable' } }, [t._v('`')]),
                      a('span', { pre: !0, attrs: { class: 'token function' } }, [t._v('npm')]),
                      t._v(' bin'),
                      a('span', { pre: !0, attrs: { class: 'token variable' } }, [t._v('`')])
                    ]),
                    t._v('/rollup -v\n')
                  ])
                ])
              ])
            },
            function() {
              var t = this.$createElement,
                e = this._self._c || t
              return e('blockquote', [
                e('p', [
                  this._v(
                    '好处是，如果调用已经安装的二进制文件，npx 基本上没有开销（Npx Official Description: Executes <command> either from a local node_modules/.bin, or from a central cache, installing any packages needed in order for <command> to run.） – 它足够聪明，可以将工具的代码，直接加载到当前运行的'
                  ),
                  e('code', [this._v('node')]),
                  this._v(' 进程中！这与此类事情的速度差不多，并使其成为完全可以接受的脚本编写工具。')
                ])
              ])
            },
            function() {
              var t = this.$createElement,
                e = this._self._c || t
              return e('h2', { attrs: { id: '应用场景' } }, [
                e('a', { staticClass: 'header-anchor', attrs: { href: '#应用场景', 'aria-hidden': 'true' } }, [
                  this._v('#')
                ]),
                this._v(' 应用场景')
              ])
            },
            function() {
              var t = this.$createElement,
                e = this._self._c || t
              return e('h3', { attrs: { id: '运行项目安装的模块' } }, [
                e(
                  'a',
                  { staticClass: 'header-anchor', attrs: { href: '#运行项目安装的模块', 'aria-hidden': 'true' } },
                  [this._v('#')]
                ),
                this._v(' 运行项目安装的模块')
              ])
            },
            function() {
              var t = this.$createElement,
                e = this._self._c || t
              return e('div', { staticClass: 'language-bash extra-class' }, [
                e('pre', { pre: !0, attrs: { class: 'language-bash' } }, [e('code', [this._v('npx rollup -v\n')])])
              ])
            },
            function() {
              var t = this.$createElement,
                e = this._self._c || t
              return e('p', [
                this._v('npx 的原理很简单，就是运行的时候，会到'),
                e('code', [this._v('node_modules/.bin')]),
                this._v('路径和环境变量'),
                e('code', [this._v('$PATH')]),
                this._v('里面，检查命令是否存在。由于 npx 会检查环境变量'),
                e('code', [this._v('$PATH')]),
                this._v('，所以系统命令也可以调用。')
              ])
            },
            function() {
              var t = this,
                e = t.$createElement,
                a = t._self._c || e
              return a('div', { staticClass: 'language-bash extra-class' }, [
                a('pre', { pre: !0, attrs: { class: 'language-bash' } }, [
                  a('code', [
                    t._v('npx '),
                    a('span', { pre: !0, attrs: { class: 'token function' } }, [t._v('ls')]),
                    t._v(' '),
                    a('span', { pre: !0, attrs: { class: 'token comment' } }, [t._v('# 等价于 npx ls')]),
                    t._v('\nnpx '),
                    a('span', { pre: !0, attrs: { class: 'token function' } }, [t._v('which')]),
                    t._v(' '),
                    a('span', { pre: !0, attrs: { class: 'token function' } }, [t._v('npm')]),
                    t._v(' '),
                    a('span', { pre: !0, attrs: { class: 'token comment' } }, [t._v('# 等价于 which npm')]),
                    t._v('\n')
                  ])
                ])
              ])
            },
            function() {
              var t = this.$createElement,
                e = this._self._c || t
              return e('h3', { attrs: { id: '一次性调用，无需本地安装' } }, [
                e(
                  'a',
                  { staticClass: 'header-anchor', attrs: { href: '#一次性调用，无需本地安装', 'aria-hidden': 'true' } },
                  [this._v('#')]
                ),
                this._v(' 一次性调用，无需本地安装')
              ])
            },
            function() {
              var t = this.$createElement,
                e = this._self._c || t
              return e('div', { staticClass: 'language-bash extra-class' }, [
                e('pre', { pre: !0, attrs: { class: 'language-bash' } }, [
                  e('code', [
                    e('span', { pre: !0, attrs: { class: 'token comment' } }, [this._v('# 开启一个本地静态服务器')]),
                    this._v('\nnpx arya-jarvis s\n'),
                    e('span', { pre: !0, attrs: { class: 'token comment' } }, [this._v('# or')]),
                    this._v('\nnpx http-server\n')
                  ])
                ])
              ])
            },
            function() {
              var t = this.$createElement,
                e = this._self._c || t
              return e('h3', { attrs: { id: '执行-github-上面的模块源码' } }, [
                e(
                  'a',
                  {
                    staticClass: 'header-anchor',
                    attrs: { href: '#执行-github-上面的模块源码', 'aria-hidden': 'true' }
                  },
                  [this._v('#')]
                ),
                this._v(' 执行 GitHub 上面的模块源码')
              ])
            },
            function() {
              var t = this.$createElement,
                e = this._self._c || t
              return e('p', [
                e('strong', [this._v('注意')]),
                this._v('，远程代码必须是一个模块，即必须包含 '),
                e('code', [this._v('package.json')]),
                this._v(' 和入口脚本。')
              ])
            },
            function() {
              var t = this.$createElement,
                e = this._self._c || t
              return e('div', { staticClass: 'language-bash extra-class' }, [
                e('pre', { pre: !0, attrs: { class: 'language-bash' } }, [
                  e('code', [
                    e('span', { pre: !0, attrs: { class: 'token comment' } }, [this._v('# 从 gist 服务上调用命令')]),
                    this._v('\nnpx https://gist.github.com/nicejade/406f154e882a836de1b2e12d02b84aab\n\n'),
                    e('span', { pre: !0, attrs: { class: 'token comment' } }, [this._v('# 从 github 仓库中调用命令')]),
                    this._v('\nnpx github:piuccio/cowsay hello\n')
                  ])
                ])
              ])
            },
            function() {
              var t = this.$createElement,
                e = this._self._c || t
              return e('h3', { attrs: { id: '指定不同版本的-node-运行-npm-脚本' } }, [
                e(
                  'a',
                  {
                    staticClass: 'header-anchor',
                    attrs: { href: '#指定不同版本的-node-运行-npm-脚本', 'aria-hidden': 'true' }
                  },
                  [this._v('#')]
                ),
                this._v(' 指定不同版本的 node 运行 npm 脚本')
              ])
            },
            function() {
              var t = this,
                e = t.$createElement,
                a = t._self._c || e
              return a('div', { staticClass: 'language-bash extra-class' }, [
                a('pre', { pre: !0, attrs: { class: 'language-bash' } }, [
                  a('code', [
                    t._v('npx node@12.9.1 '),
                    a('span', { pre: !0, attrs: { class: 'token function' } }, [t._v('npm')]),
                    t._v(' -v\nnpx -p node@12.9.1 '),
                    a('span', { pre: !0, attrs: { class: 'token function' } }, [t._v('npm')]),
                    t._v(' -v\nnpx -p node@12.9.1 '),
                    a('span', { pre: !0, attrs: { class: 'token function' } }, [t._v('npm')]),
                    t._v(' run build\nnpx -p node@12.9.1 '),
                    a('span', { pre: !0, attrs: { class: 'token function' } }, [t._v('yarn')]),
                    t._v(' build\n')
                  ])
                ])
              ])
            },
            function() {
              var t = this.$createElement,
                e = this._self._c || t
              return e('p', [
                this._v('上面命令会使用 '),
                e('code', [this._v('12.9.1')]),
                this._v(
                  ' 版本的 Node 执行脚本；原理是从 npm 下载这个版本的 node，使用后再删掉；在一些特殊场景，用来此法来切换 Node 版本（如测试该版本是否支持某特性等），要比一些版本管理器（如 '
                ),
                e('code', [this._v('nvm')]),
                this._v('）来的方便一些。')
              ])
            },
            function() {
              var t = this.$createElement,
                e = this._self._c || t
              return e('h4', { attrs: { id: 'p-参数' } }, [
                e('a', { staticClass: 'header-anchor', attrs: { href: '#p-参数', 'aria-hidden': 'true' } }, [
                  this._v('#')
                ]),
                this._v(' '),
                e('code', [this._v('-p')]),
                this._v(' 参数')
              ])
            },
            function() {
              var t = this.$createElement,
                e = this._self._c || t
              return e('p', [
                e('code', [this._v('-p')]),
                this._v('参数用于指定 npx 所要安装的模块，这对于需要安装多个模块的场景很有用，比如：')
              ])
            },
            function() {
              var t = this.$createElement,
                e = this._self._c || t
              return e('div', { staticClass: 'language-bash extra-class' }, [
                e('pre', { pre: !0, attrs: { class: 'language-bash' } }, [
                  e('code', [
                    this._v('npx -p cowsay -p arya-jarvis  '),
                    e('span', { pre: !0, attrs: { class: 'token punctuation' } }, [this._v('[')]),
                    this._v('command'),
                    e('span', { pre: !0, attrs: { class: 'token punctuation' } }, [this._v(']')]),
                    this._v('\n')
                  ])
                ])
              ])
            },
            function() {
              var t = this.$createElement,
                e = this._self._c || t
              return e('h4', { attrs: { id: 'c-参数' } }, [
                e('a', { staticClass: 'header-anchor', attrs: { href: '#c-参数', 'aria-hidden': 'true' } }, [
                  this._v('#')
                ]),
                this._v(' '),
                e('code', [this._v('-c')]),
                this._v(' 参数')
              ])
            },
            function() {
              var t = this.$createElement,
                e = this._self._c || t
              return e('div', { staticClass: 'language- extra-class' }, [
                e('pre', { pre: !0, attrs: { class: 'language-text' } }, [
                  e('code', [this._v('# 将会报错\nnpx -p cowsay -p arya-jarvis  "arya ip | cowsay"\n')])
                ])
              ])
            },
            function() {
              var t = this.$createElement,
                e = this._self._c || t
              return e('ol', [
                e('li', [
                  this._v('npx '),
                  e('code', [this._v('-c')]),
                  this._v('参数，可以将所有命令都用 npx 来解释。于是，下面代码就可以正常工作：')
                ])
              ])
            },
            function() {
              var t = this.$createElement,
                e = this._self._c || t
              return e('div', { staticClass: 'language- extra-class' }, [
                e('pre', { pre: !0, attrs: { class: 'language-text' } }, [
                  e('code', [
                    this._v(
                      '# npx -p cowsay -c "cowsay hey, bro"\nnpx -p cowsay -p arya-jarvis -c "arya ip | cowsay"\n...\n ______________\n< 172.13.14.21 >\n --------------\n        \\   ^__^\n         \\  (oo)\\_______\n            (__)\\       )\\/\\\n                ||----w |\n                ||     ||\n'
                    )
                  ])
                ])
              ])
            },
            function() {
              var t = this.$createElement,
                e = this._self._c || t
              return e('ol', { attrs: { start: '2' } }, [
                e('li', [
                  e('code', [this._v('-c')]),
                  this._v(' 参数的另一个作用是，可以把这些 npm 的环境变量带入 npx 命令，如下代码：')
                ])
              ])
            },
            function() {
              var t = this,
                e = t.$createElement,
                a = t._self._c || e
              return a('div', { staticClass: 'language-bash extra-class' }, [
                a('pre', { pre: !0, attrs: { class: 'language-bash' } }, [
                  a('code', [
                    t._v('npx -c '),
                    a('span', { pre: !0, attrs: { class: 'token string' } }, [
                      t._v('\'echo "'),
                      a('span', { pre: !0, attrs: { class: 'token variable' } }, [t._v('$npm_package_name')]),
                      t._v('"\'')
                    ]),
                    t._v('\nnpx -c '),
                    a('span', { pre: !0, attrs: { class: 'token string' } }, [
                      t._v('\'echo "'),
                      a('span', { pre: !0, attrs: { class: 'token variable' } }, [t._v('$npm_package_version')]),
                      t._v('"\'')
                    ]),
                    t._v('\n')
                  ])
                ])
              ])
            },
            function() {
              var t = this.$createElement,
                e = this._self._c || t
              return e('h3', { attrs: { id: '使用-inspect-运行节点二进制文件' } }, [
                e(
                  'a',
                  {
                    staticClass: 'header-anchor',
                    attrs: { href: '#使用-inspect-运行节点二进制文件', 'aria-hidden': 'true' }
                  },
                  [this._v('#')]
                ),
                this._v(' 使用 '),
                e('code', [this._v('--inspect')]),
                this._v(' 运行节点二进制文件')
              ])
            },
            function() {
              var t = this.$createElement,
                e = this._self._c || t
              return e('div', { staticClass: 'language-bash extra-class' }, [
                e('pre', { pre: !0, attrs: { class: 'language-bash' } }, [
                  e('code', [
                    this._v('npx --node-arg'),
                    e('span', { pre: !0, attrs: { class: 'token operator' } }, [this._v('=')]),
                    this._v('--inspect cowsay\nDebugger listening on ws://127.0.0.1:9229/'),
                    e('span', { pre: !0, attrs: { class: 'token punctuation' } }, [this._v('..')]),
                    e('span', { pre: !0, attrs: { class: 'token punctuation' } }, [this._v('..')]),
                    this._v('\n')
                  ])
                ])
              ])
            },
            function() {
              var t = this,
                e = t.$createElement,
                a = t._self._c || e
              return a('div', { staticClass: 'language-bash extra-class' }, [
                a('pre', { pre: !0, attrs: { class: 'language-bash' } }, [
                  a('code', [
                    a('span', { pre: !0, attrs: { class: 'token builtin class-name' } }, [t._v('source')]),
                    t._v(' '),
                    a('span', { pre: !0, attrs: { class: 'token operator' } }, [t._v('<')]),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('(')]),
                    t._v('npx --shell-auto-fallback '),
                    a('span', { pre: !0, attrs: { class: 'token function' } }, [t._v('zsh')]),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(')')]),
                    t._v('\n')
                  ])
                ])
              ])
            },
            function() {
              var t = this.$createElement,
                e = this._self._c || t
              return e('div', { staticClass: 'language-bash extra-class' }, [
                e('pre', { pre: !0, attrs: { class: 'language-bash' } }, [
                  e('code', [
                    this._v('ember-cli@latest --version\n找不到 ember-cli@latest，请尝试使用 npx'),
                    e('span', { pre: !0, attrs: { class: 'token punctuation' } }, [this._v('..')]),
                    this._v('.\nember-cli: '),
                    e('span', { pre: !0, attrs: { class: 'token number' } }, [this._v('3.14')]),
                    this._v('.0\nnode: '),
                    e('span', { pre: !0, attrs: { class: 'token number' } }, [this._v('12.13')]),
                    this._v('.0\nos: darwin x64\n')
                  ])
                ])
              ])
            },
            function() {
              var t = this.$createElement,
                e = this._self._c || t
              return e('h3', { attrs: { id: '参考文献链接' } }, [
                e('a', { staticClass: 'header-anchor', attrs: { href: '#参考文献链接', 'aria-hidden': 'true' } }, [
                  this._v('#')
                ]),
                this._v(' 参考文献链接')
              ])
            },
            function() {
              var t = this.$createElement,
                e = this._self._c || t
              return e('h3', { attrs: { id: '您可能感兴趣的文章' } }, [
                e(
                  'a',
                  { staticClass: 'header-anchor', attrs: { href: '#您可能感兴趣的文章', 'aria-hidden': 'true' } },
                  [this._v('#')]
                ),
                this._v(' 您可能感兴趣的文章')
              ])
            }
          ],
          !1,
          null,
          null,
          null
        )
      e.default = s.exports
    }
  }
])