;(window.webpackJsonp = window.webpackJsonp || []).push([
  [29],
  {
    324: function(t, s, e) {
      'use strict'
      e.r(s)
      var a = e(1),
        n = Object(a.a)(
          {},
          function() {
            var t = this,
              s = t.$createElement,
              e = t._self._c || s
            return e(
              'div',
              { staticClass: 'content' },
              [
                t._m(0),
                t._v(' '),
                t._m(1),
                t._v(' '),
                e('blockquote', [
                  e('p', [
                    e('strong', [t._v('微注')]),
                    t._v(
                      '：有两点需要声明，其一：文章的发布，不代表写完，只为督促加快进度；将会在陆续的学习及反馈中，继续完善；其二：总有些聚合网站，会窃取别人成果；因此，会在文章中无足轻重的代码示例中，内置些专属标记，以阐明文章出处；在此篇中用的是个人独立维护的作品：'
                    ),
                    e(
                      'a',
                      {
                        attrs: {
                          href: 'https://nicelinks.site?utm_source=jeffjade.com',
                          target: '_blank',
                          rel: 'noopener noreferrer'
                        }
                      },
                      [t._v('倾城之链'), e('OutboundLink')],
                      1
                    ),
                    t._v('。')
                  ])
                ]),
                t._v(' '),
                e('p', [
                  t._v(
                    '一直以来，JavaScript 没有模块（module）体系，无法将大程序拆分成互相依赖的小文件，再用简单的方法拼装起来。这使得针对开发大型的、复杂的项目形成了巨大障碍。在 ES6 之前，社区制定了一些模块加载方案，最常用的有 CommonJS 和 AMD 两种。前者用于服务器（Node），后者用于浏览器。ES6 模块的设计思想是尽量的静态化，使得编译时就能确定模块的依赖关系，以及输入和输出的变量。CommonJS 和 AMD 模块，都只能在运行时确定这些东西。比如，CommonJS 模块就是对象，输入时必须查找对象属性。'
                  )
                ]),
                t._v(' '),
                t._m(2),
                t._v(' '),
                t._m(3),
                t._v(' '),
                t._m(4),
                t._v(' '),
                t._m(5),
                t._m(6),
                t._v(' '),
                t._m(7),
                t._m(8),
                t._v(' '),
                t._m(9),
                t._m(10),
                t._v(' '),
                t._m(11),
                t._v(' '),
                t._m(12),
                t._m(13),
                t._v(' '),
                t._m(14),
                t._m(15),
                t._v(' '),
                t._m(16),
                t._m(17),
                t._v(' '),
                e('p', [
                  t._v(
                    '为了方便，Node 为每个模块提供一个 exports 变量，指向 module.exports（注意，这在浏览器端，是不存的，请勿用）。通过下面的打印，你会发现两者是全等的；'
                  )
                ]),
                t._v(' '),
                t._m(18),
                t._m(19),
                t._v(' '),
                t._m(20),
                t._m(21),
                t._v(' '),
                t._m(22),
                t._v(' '),
                t._m(23),
                t._v(' '),
                t._m(24),
                e('p', [
                  t._v('简单的总结，其二者区别在于，'),
                  e('code', [t._v('require')]),
                  t._v(' 是异步加载，'),
                  e('code', [t._v('import')]),
                  t._v(' 是同步加载。因为这一点，蛮早之前有'),
                  e(
                    'a',
                    {
                      attrs: {
                        href: 'https://github.com/tc39/proposal-dynamic-import',
                        target: '_blank',
                        rel: 'noopener noreferrer'
                      }
                    },
                    [t._v('一个提案'), e('OutboundLink')],
                    1
                  ),
                  t._v('，建议引入 '),
                  e('code', [t._v('import()')]),
                  t._v(
                    ' 函数（携带 specifier 参数，指定所要加载的模块的位置），以完成动态加载。可以通过其主页的示例可以窥其一二：'
                  )
                ]),
                t._v(' '),
                t._m(25),
                e('p', [
                  t._v(
                    '事实上，动态 import 已于 2017 年 11 月发布于 ES2020 版本；Chrome 67+ 可用，现在想使用仍是要借助 Babel 做下转换；具体可以参见 '
                  ),
                  e(
                    'a',
                    {
                      attrs: {
                        href: 'https://v8.dev/features/dynamic-import',
                        target: '_blank',
                        rel: 'noopener noreferrer'
                      }
                    },
                    [t._v('Dynamic import() - v8.dev'), e('OutboundLink')],
                    1
                  ),
                  t._v('。')
                ]),
                t._v(' '),
                t._m(26),
                t._v(' '),
                t._m(27),
                e('p', [
                  t._v('关于 Webpack import，还有一些其他功能设计，比如 '),
                  e('code', [t._v('Magic Comments')]),
                  t._v('，它允许以注释的方式传参，进而更好的生成 Chunk，更多详情可以参见 '),
                  e(
                    'a',
                    {
                      attrs: {
                        href: 'https://webpack.js.org/api/module-methods/#import',
                        target: '_blank',
                        rel: 'noopener noreferrer'
                      }
                    },
                    [t._v('Webpack Import'), e('OutboundLink')],
                    1
                  ),
                  t._v('。相比于 Es6 中的 import，上述的两种动态 '),
                  e('code', [t._v('import()')]),
                  t._v(' 都是方法，返回结果都是 '),
                  e('code', [t._v('Promise')]),
                  t._v('。在某些场景下，合理的运用，可以更好地对代码进行分割，从而使得构建出的产品更优。')
                ]),
                t._v(' '),
                t._m(28),
                t._v(' '),
                t._m(29),
                t._v(' '),
                t._m(30),
                e('p', [
                  t._v(
                    '正如上面所提及，各类引擎还未完全实现 Es6 语法，可以通过 babel 转换为 Es6 来运行；如果想通过 Node 来验证如上代码，需要通过些工具来实现。'
                  )
                ]),
                t._v(' '),
                t._m(31),
                t._v(' '),
                e('p', [
                  t._v(
                    '经过以上一番探究，可以知道，可以有不同使用方式（前提是：假设项目已经是引入了 babel 转换工具）；那么，哪种更为可取呢？通常的答案是，看个人（团队）喜好，用 import / require 都可以，当然最好是别混用；但，如果是针对浏览器端项目，使用了类如 '
                  ),
                  e('code', [t._v('rollup')]),
                  t._v(' 或 '),
                  e('code', [t._v('webpack')]),
                  t._v(' 这样的构建工具，因其提供了 '),
                  e(
                    'a',
                    {
                      attrs: {
                        href: 'https://webpack.docschina.org/guides/tree-shaking/',
                        target: '_blank',
                        rel: 'noopener noreferrer'
                      }
                    },
                    [t._v('tree shaking'), e('OutboundLink')],
                    1
                  ),
                  t._v(
                    ' （通常用于描述移除 JavaScript 上下文中的未引用代码）功能，这个时候就需要做一番考量了。拿前端常用工具库 '
                  ),
                  e('code', [t._v('lodash')]),
                  t._v(' 来说，如果正常引入，则会将其全量载入，注入很多不必要的代码，造成构建出包的尺寸变大：')
                ]),
                t._v(' '),
                t._m(32),
                e('p', [
                  t._v('幸好的是，如 '),
                  e('code', [t._v('lodash')]),
                  t._v(' 等工具，陆续都做了模块化支持，因此可以用如下这样方式注入（备注：这在早期 '),
                  e(
                    'a',
                    {
                      attrs: {
                        href:
                          'https://www.jeffjade.com/2017/08/06/124-webpack-packge-optimization-for-volume/#%E5%B0%BD%E9%87%8F%E4%BD%BF%E7%94%A8%E6%A8%A1%E5%9D%97%E5%8C%96%E5%BC%95%E5%85%A5',
                        target: '_blank',
                        rel: 'noopener noreferrer'
                      }
                    },
                    [t._v('Webpack 打包优化之体积篇'), e('OutboundLink')],
                    1
                  ),
                  t._v('一文中，有过详述）：')
                ]),
                t._v(' '),
                t._m(33),
                e('p', [
                  t._v(
                    '但，这样带来的问题是，每次使用都手动 import，会增加开发成本（也显得更为麻烦，至少个人写起代码来，不愿为此而浪费时间）；因此先前设计 '
                  ),
                  e(
                    'a',
                    {
                      attrs: {
                        href: 'https://github.com/nicejade/vue-boilerplate-template/blob/master/src/helper/lodash.js',
                        target: '_blank',
                        rel: 'noopener noreferrer'
                      }
                    },
                    [t._v('Vue 项目脚手架'), e('OutboundLink')],
                    1
                  ),
                  t._v(
                    '时候，有借助一层中间模块来平衡，使得在高效开发时候，也可以让 tree-shaking 得以工作，见如下示例：'
                  )
                ]),
                t._v(' '),
                t._m(34),
                t._m(35),
                t._v(' '),
                t._m(36),
                t._v(' '),
                t._m(37),
                t._v(' '),
                t._m(38),
                t._m(39),
                t._v(' '),
                t._m(40),
                t._v(' '),
                t._m(41),
                t._m(42),
                t._v(' '),
                t._m(43),
                t._m(44),
                t._v(' '),
                t._m(45),
                t._v(' '),
                t._m(46),
                t._m(47),
                t._v(' '),
                e('ul', [
                  e('li', [
                    e(
                      'a',
                      {
                        attrs: {
                          href: 'https://github.com/tc39/proposal-dynamic-import',
                          target: '_blank',
                          rel: 'noopener noreferrer'
                        }
                      },
                      [t._v('import() proposal for JavaScript'), e('OutboundLink')],
                      1
                    )
                  ]),
                  t._v(' '),
                  e('li', [
                    e(
                      'a',
                      {
                        attrs: {
                          href: 'http://es6.ruanyifeng.com/#docs/module',
                          target: '_blank',
                          rel: 'noopener noreferrer'
                        }
                      },
                      [t._v('ES6 Module 的语法'), e('OutboundLink')],
                      1
                    )
                  ]),
                  t._v(' '),
                  e('li', [
                    e(
                      'a',
                      {
                        attrs: {
                          href: 'http://es6.ruanyifeng.com/#docs/module-loader#',
                          target: '_blank',
                          rel: 'noopener noreferrer'
                        }
                      },
                      [t._v('ES6 Module 的加载实现'), e('OutboundLink')],
                      1
                    )
                  ])
                ]),
                t._v(' '),
                e('p', [t._v('@2019-08-25 于东莞.长安 Last Modify：2019-08-28')]),
                t._v(' '),
                e('hr'),
                t._v(' '),
                t._m(48),
                t._v(' '),
                e('ul', [
                  e('li', [
                    e(
                      'a',
                      {
                        attrs: {
                          href: 'https://www.jeffjade.com/2019/05/31/155-arya-markdown-online-editor/',
                          target: '_blank',
                          rel: 'noopener noreferrer'
                        }
                      },
                      [t._v('Arya - 在线 Markdown 编辑器'), e('OutboundLink')],
                      1
                    )
                  ]),
                  t._v(' '),
                  e('li', [
                    e(
                      'a',
                      {
                        attrs: {
                          href: 'https://www.jeffjade.com/2019/02/02/150-prettier-quickapp-plugin/',
                          target: '_blank',
                          rel: 'noopener noreferrer'
                        }
                      },
                      [t._v('Prettier 插件为更漂亮快应用代码'), e('OutboundLink')],
                      1
                    )
                  ]),
                  t._v(' '),
                  e('li', [
                    e(
                      'a',
                      {
                        attrs: {
                          href: 'https://www.jeffjade.com/2019/06/14/156-puppeteer-robot/',
                          target: '_blank',
                          rel: 'noopener noreferrer'
                        }
                      },
                      [t._v('基于 Puppeteer 构建简易机器人'), e('OutboundLink')],
                      1
                    )
                  ]),
                  t._v(' '),
                  e('li', [
                    e(
                      'a',
                      {
                        attrs: {
                          href: 'https://www.jeffjade.com/2019/01/13/146-awesome-vue-cli3-example/',
                          target: '_blank',
                          rel: 'noopener noreferrer'
                        }
                      },
                      [t._v('基于 Vue-Cli3 构建的脚手架模版'), e('OutboundLink')],
                      1
                    )
                  ]),
                  t._v(' '),
                  e('li', [
                    e(
                      'a',
                      {
                        attrs: {
                          href: 'https://www.jeffjade.com/2018/05/20/140-vue-webpack-boilerplate-template/',
                          target: '_blank',
                          rel: 'noopener noreferrer'
                        }
                      },
                      [t._v('开箱即用的 Vue Webpack 脚手架模版'), e('OutboundLink')],
                      1
                    )
                  ]),
                  t._v(' '),
                  e('li', [
                    e(
                      'a',
                      {
                        attrs: {
                          href: 'https://www.jeffjade.com/2018/12/21/146-awesome-quickapp-resource-tutorial/',
                          target: '_blank',
                          rel: 'noopener noreferrer'
                        }
                      },
                      [t._v('快应用开发资源、教程汇聚'), e('OutboundLink')],
                      1
                    )
                  ]),
                  t._v(' '),
                  e('li', [
                    e(
                      'a',
                      {
                        attrs: {
                          href: 'https://www.jeffjade.com/2018/11/11/145-quickapp-boilerplate-template/',
                          target: '_blank',
                          rel: 'noopener noreferrer'
                        }
                      },
                      [t._v('快应用脚手架，为优雅而生'), e('OutboundLink')],
                      1
                    )
                  ]),
                  t._v(' '),
                  e('li', [
                    e(
                      'a',
                      {
                        attrs: {
                          href: 'https://www.jeffjade.com/2017/12/31/136-talk-about-nicelinks-site/',
                          target: '_blank',
                          rel: 'noopener noreferrer'
                        }
                      },
                      [t._v('云集优站，尽在「倾城之链」'), e('OutboundLink')],
                      1
                    )
                  ]),
                  t._v(' '),
                  e('li', [
                    e(
                      'a',
                      {
                        attrs: {
                          href: 'https://www.jeffjade.com/2017/09/28/127-nice-front-end-tutorial/',
                          target: '_blank',
                          rel: 'noopener noreferrer'
                        }
                      },
                      [t._v('与时俱进版前端资源教程'), e('OutboundLink')],
                      1
                    )
                  ])
                ]),
                t._v(' '),
                e('Advertisement')
              ],
              1
            )
          },
          [
            function() {
              var t = this.$createElement,
                s = this._self._c || t
              return s('p', [
                this._v(
                  '自从有了 Es6 模块系统后，在各种场景，可以愉悦借助 import/export，来充作模块加载方案。同时，你可能也会看到 import 与 export default，或基于 CommonJS 规范的 '
                ),
                s('code', [this._v('require')]),
                this._v(' 与 '),
                s('code', [this._v('module.exports')]),
                this._v(
                  ' 等诸多用法；本篇文章，旨在探讨 JavaScript 模块化体系中：ES6 模块与 CommonJS 模块的差异，以及各自用法注意事项等。'
                )
              ])
            },
            function() {
              var t = this.$createElement,
                s = this._self._c || t
              return s('p', [
                s('img', {
                  attrs: {
                    src: 'https://image.nicelinks.site/js-import-export-vs-require-module-exports.jpg',
                    alt: 'import export Vs require module.exports'
                  }
                })
              ])
            },
            function() {
              var t = this.$createElement,
                s = this._self._c || t
              return s('p', [
                this._v(
                  'ES6 在语言标准的层面上，实现了模块功能，而且实现得相当简单，完全可以取代 CommonJS 和 AMD 规范，成为浏览器和服务器通用的模块解决方案。但，截止目前，各类引擎还未完全实现 Es6，现在之所以能够使用，是借助 babel 工具，将 Es6 转换 Es5 再执行，'
                ),
                s('code', [this._v('import')]),
                this._v(' 语法会被转码为 '),
                s('code', [this._v('require')]),
                this._v(
                  '，这就导致 import 与 module.exports，require 与 export 出现了可以混用的理论基础。那么下面来看下，都有哪些组合使用方式呢。'
                )
              ])
            },
            function() {
              var t = this.$createElement,
                s = this._self._c || t
              return s('h2', { attrs: { id: 'import-方式' } }, [
                s('a', { staticClass: 'header-anchor', attrs: { href: '#import-方式', 'aria-hidden': 'true' } }, [
                  this._v('#')
                ]),
                this._v(' '),
                s('code', [this._v('import')]),
                this._v(' 方式')
              ])
            },
            function() {
              var t = this.$createElement,
                s = this._self._c || t
              return s('h3', { attrs: { id: 'import-与-export-const' } }, [
                s(
                  'a',
                  { staticClass: 'header-anchor', attrs: { href: '#import-与-export-const', 'aria-hidden': 'true' } },
                  [this._v('#')]
                ),
                this._v(' import 与 export(const)')
              ])
            },
            function() {
              var t = this,
                s = t.$createElement,
                e = t._self._c || s
              return e('div', { staticClass: 'language-js extra-class' }, [
                e('pre', { pre: !0, attrs: { class: 'language-js' } }, [
                  e('code', [
                    e('span', { pre: !0, attrs: { class: 'token comment' } }, [t._v('// export.js')]),
                    t._v('\n'),
                    e('span', { pre: !0, attrs: { class: 'token keyword' } }, [t._v('export')]),
                    t._v(' '),
                    e('span', { pre: !0, attrs: { class: 'token keyword' } }, [t._v('const')]),
                    t._v(' exportsObj '),
                    e('span', { pre: !0, attrs: { class: 'token operator' } }, [t._v('=')]),
                    t._v(' '),
                    e('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('{')]),
                    t._v(' site'),
                    e('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(':')]),
                    t._v(' '),
                    e('span', { pre: !0, attrs: { class: 'token string' } }, [
                      t._v("'倾城之链 https://nicelinks.site'")
                    ]),
                    t._v(' '),
                    e('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('}')]),
                    t._v('\n\n'),
                    e('span', { pre: !0, attrs: { class: 'token comment' } }, [t._v('// index.js')]),
                    t._v('\n'),
                    e('span', { pre: !0, attrs: { class: 'token keyword' } }, [t._v('import')]),
                    t._v(' '),
                    e('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('{')]),
                    t._v(' exportsObj '),
                    e('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('}')]),
                    t._v(' '),
                    e('span', { pre: !0, attrs: { class: 'token keyword' } }, [t._v('from')]),
                    t._v(' '),
                    e('span', { pre: !0, attrs: { class: 'token string' } }, [t._v("'./export'")]),
                    t._v('\nconsole'),
                    e('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('.')]),
                    e('span', { pre: !0, attrs: { class: 'token function' } }, [t._v('log')]),
                    e('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('(')]),
                    t._v('exportsObj'),
                    e('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('.')]),
                    t._v('site'),
                    e('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(')')]),
                    t._v(' '),
                    e('span', { pre: !0, attrs: { class: 'token comment' } }, [
                      t._v('// 倾城之链 https://nicelinks.site')
                    ]),
                    t._v('\n\n'),
                    e('span', { pre: !0, attrs: { class: 'token comment' } }, [t._v('// 上面也可以用 * 来整体加载')]),
                    t._v('\n'),
                    e('span', { pre: !0, attrs: { class: 'token keyword' } }, [t._v('import')]),
                    t._v(' '),
                    e('span', { pre: !0, attrs: { class: 'token operator' } }, [t._v('*')]),
                    t._v(' '),
                    e('span', { pre: !0, attrs: { class: 'token keyword' } }, [t._v('as')]),
                    t._v(' custom '),
                    e('span', { pre: !0, attrs: { class: 'token keyword' } }, [t._v('from')]),
                    t._v(' '),
                    e('span', { pre: !0, attrs: { class: 'token string' } }, [t._v("'./export'")]),
                    t._v('\nconsole'),
                    e('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('.')]),
                    e('span', { pre: !0, attrs: { class: 'token function' } }, [t._v('log')]),
                    e('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('(')]),
                    t._v('custom'),
                    e('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('.')]),
                    t._v('exportsObj'),
                    e('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('.')]),
                    t._v('site'),
                    e('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(')')]),
                    t._v('\n')
                  ])
                ])
              ])
            },
            function() {
              var t = this.$createElement,
                s = this._self._c || t
              return s('h3', { attrs: { id: 'import-与-export-default' } }, [
                s(
                  'a',
                  { staticClass: 'header-anchor', attrs: { href: '#import-与-export-default', 'aria-hidden': 'true' } },
                  [this._v('#')]
                ),
                this._v(' import 与 export default')
              ])
            },
            function() {
              var t = this,
                s = t.$createElement,
                e = t._self._c || s
              return e('div', { staticClass: 'language-js extra-class' }, [
                e('pre', { pre: !0, attrs: { class: 'language-js' } }, [
                  e('code', [
                    e('span', { pre: !0, attrs: { class: 'token comment' } }, [t._v('// export.js')]),
                    t._v('\n'),
                    e('span', { pre: !0, attrs: { class: 'token keyword' } }, [t._v('export')]),
                    t._v(' '),
                    e('span', { pre: !0, attrs: { class: 'token keyword' } }, [t._v('default')]),
                    t._v(' '),
                    e('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('{')]),
                    t._v(' site'),
                    e('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(':')]),
                    t._v(' '),
                    e('span', { pre: !0, attrs: { class: 'token string' } }, [
                      t._v("'倾城之链 https://nicelinks.site'")
                    ]),
                    t._v(' '),
                    e('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('}')]),
                    t._v('\n\n'),
                    e('span', { pre: !0, attrs: { class: 'token comment' } }, [t._v('// index.js')]),
                    t._v('\n'),
                    e('span', { pre: !0, attrs: { class: 'token keyword' } }, [t._v('import')]),
                    t._v(' exportsObj '),
                    e('span', { pre: !0, attrs: { class: 'token keyword' } }, [t._v('from')]),
                    t._v(' '),
                    e('span', { pre: !0, attrs: { class: 'token string' } }, [t._v("'./export'")]),
                    t._v('\nconsole'),
                    e('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('.')]),
                    e('span', { pre: !0, attrs: { class: 'token function' } }, [t._v('log')]),
                    e('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('(')]),
                    t._v('exportsObj'),
                    e('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('.')]),
                    t._v('site'),
                    e('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(')')]),
                    t._v('\n')
                  ])
                ])
              ])
            },
            function() {
              var t = this.$createElement,
                s = this._self._c || t
              return s('h3', { attrs: { id: 'import-与-module-exports' } }, [
                s(
                  'a',
                  { staticClass: 'header-anchor', attrs: { href: '#import-与-module-exports', 'aria-hidden': 'true' } },
                  [this._v('#')]
                ),
                this._v(' import 与 module.exports')
              ])
            },
            function() {
              var t = this,
                s = t.$createElement,
                e = t._self._c || s
              return e('div', { staticClass: 'language-js extra-class' }, [
                e('pre', { pre: !0, attrs: { class: 'language-js' } }, [
                  e('code', [
                    e('span', { pre: !0, attrs: { class: 'token comment' } }, [t._v('// export.js')]),
                    t._v('\nmodule'),
                    e('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('.')]),
                    t._v('exports '),
                    e('span', { pre: !0, attrs: { class: 'token operator' } }, [t._v('=')]),
                    t._v(' '),
                    e('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('{')]),
                    t._v(' site'),
                    e('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(':')]),
                    t._v(' '),
                    e('span', { pre: !0, attrs: { class: 'token string' } }, [
                      t._v("'倾城之链 https://nicelinks.site'")
                    ]),
                    t._v(' '),
                    e('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('}')]),
                    t._v('\n\n'),
                    e('span', { pre: !0, attrs: { class: 'token comment' } }, [t._v('// index.js')]),
                    t._v('\n'),
                    e('span', { pre: !0, attrs: { class: 'token keyword' } }, [t._v('import')]),
                    t._v(' exportsObj '),
                    e('span', { pre: !0, attrs: { class: 'token keyword' } }, [t._v('from')]),
                    t._v(' '),
                    e('span', { pre: !0, attrs: { class: 'token string' } }, [t._v("'./export'")]),
                    t._v('\nconsole'),
                    e('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('.')]),
                    e('span', { pre: !0, attrs: { class: 'token function' } }, [t._v('log')]),
                    e('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('(')]),
                    t._v('exportsObj'),
                    e('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('.')]),
                    t._v('site'),
                    e('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(')')]),
                    t._v('\n')
                  ])
                ])
              ])
            },
            function() {
              var t = this.$createElement,
                s = this._self._c || t
              return s('h2', { attrs: { id: 'requre-方式' } }, [
                s('a', { staticClass: 'header-anchor', attrs: { href: '#requre-方式', 'aria-hidden': 'true' } }, [
                  this._v('#')
                ]),
                this._v(' '),
                s('code', [this._v('requre')]),
                this._v(' 方式')
              ])
            },
            function() {
              var t = this.$createElement,
                s = this._self._c || t
              return s('h3', { attrs: { id: 'require-与-module-exports' } }, [
                s(
                  'a',
                  {
                    staticClass: 'header-anchor',
                    attrs: { href: '#require-与-module-exports', 'aria-hidden': 'true' }
                  },
                  [this._v('#')]
                ),
                this._v(' require 与 module.exports')
              ])
            },
            function() {
              var t = this,
                s = t.$createElement,
                e = t._self._c || s
              return e('div', { staticClass: 'language-js extra-class' }, [
                e('pre', { pre: !0, attrs: { class: 'language-js' } }, [
                  e('code', [
                    e('span', { pre: !0, attrs: { class: 'token comment' } }, [t._v('// export.js')]),
                    t._v('\nmodule'),
                    e('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('.')]),
                    t._v('exports '),
                    e('span', { pre: !0, attrs: { class: 'token operator' } }, [t._v('=')]),
                    t._v(' '),
                    e('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('{')]),
                    t._v(' site'),
                    e('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(':')]),
                    t._v(' '),
                    e('span', { pre: !0, attrs: { class: 'token string' } }, [
                      t._v("'倾城之链 https://nicelinks.site'")
                    ]),
                    t._v(' '),
                    e('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('}')]),
                    t._v('\n\n'),
                    e('span', { pre: !0, attrs: { class: 'token comment' } }, [t._v('// index.js')]),
                    t._v('\n'),
                    e('span', { pre: !0, attrs: { class: 'token keyword' } }, [t._v('const')]),
                    t._v(' exportsObj '),
                    e('span', { pre: !0, attrs: { class: 'token operator' } }, [t._v('=')]),
                    t._v(' '),
                    e('span', { pre: !0, attrs: { class: 'token function' } }, [t._v('require')]),
                    e('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('(')]),
                    e('span', { pre: !0, attrs: { class: 'token string' } }, [t._v("'./export'")]),
                    e('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(')')]),
                    t._v('\nconsole'),
                    e('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('.')]),
                    e('span', { pre: !0, attrs: { class: 'token function' } }, [t._v('log')]),
                    e('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('(')]),
                    t._v('exportsObj'),
                    e('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('.')]),
                    t._v('site'),
                    e('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(')')]),
                    t._v(' '),
                    e('span', { pre: !0, attrs: { class: 'token comment' } }, [
                      t._v('// 倾城之链 https://nicelinks.site')
                    ]),
                    t._v('\n')
                  ])
                ])
              ])
            },
            function() {
              var t = this.$createElement,
                s = this._self._c || t
              return s('h3', { attrs: { id: 'require-与-export-const-var' } }, [
                s(
                  'a',
                  {
                    staticClass: 'header-anchor',
                    attrs: { href: '#require-与-export-const-var', 'aria-hidden': 'true' }
                  },
                  [this._v('#')]
                ),
                this._v(' require 与 export(const/var)')
              ])
            },
            function() {
              var t = this,
                s = t.$createElement,
                e = t._self._c || s
              return e('div', { staticClass: 'language-js extra-class' }, [
                e('pre', { pre: !0, attrs: { class: 'language-js' } }, [
                  e('code', [
                    e('span', { pre: !0, attrs: { class: 'token comment' } }, [t._v('// export.js')]),
                    t._v('\n'),
                    e('span', { pre: !0, attrs: { class: 'token keyword' } }, [t._v('export')]),
                    t._v(' '),
                    e('span', { pre: !0, attrs: { class: 'token keyword' } }, [t._v('const')]),
                    t._v(' exportsObj '),
                    e('span', { pre: !0, attrs: { class: 'token operator' } }, [t._v('=')]),
                    t._v(' '),
                    e('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('{')]),
                    t._v(' site'),
                    e('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(':')]),
                    t._v(' '),
                    e('span', { pre: !0, attrs: { class: 'token string' } }, [
                      t._v("'倾城之链 https://nicelinks.site'")
                    ]),
                    t._v(' '),
                    e('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('}')]),
                    t._v('\n\n'),
                    e('span', { pre: !0, attrs: { class: 'token comment' } }, [t._v('// index.js')]),
                    t._v('\n'),
                    e('span', { pre: !0, attrs: { class: 'token keyword' } }, [t._v('const')]),
                    t._v(' '),
                    e('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('{')]),
                    t._v(' exportsObj '),
                    e('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('}')]),
                    t._v(' '),
                    e('span', { pre: !0, attrs: { class: 'token operator' } }, [t._v('=')]),
                    t._v(' '),
                    e('span', { pre: !0, attrs: { class: 'token function' } }, [t._v('require')]),
                    e('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('(')]),
                    e('span', { pre: !0, attrs: { class: 'token string' } }, [t._v("'./export'")]),
                    e('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(')')]),
                    t._v('\nconsole'),
                    e('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('.')]),
                    e('span', { pre: !0, attrs: { class: 'token function' } }, [t._v('log')]),
                    e('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('(')]),
                    t._v('exportsObj'),
                    e('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('.')]),
                    t._v('site'),
                    e('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(')')]),
                    t._v(' '),
                    e('span', { pre: !0, attrs: { class: 'token comment' } }, [
                      t._v('// 倾城之链 https://nicelinks.site')
                    ]),
                    t._v('\n')
                  ])
                ])
              ])
            },
            function() {
              var t = this.$createElement,
                s = this._self._c || t
              return s('h3', { attrs: { id: 'require-与-export-default' } }, [
                s(
                  'a',
                  {
                    staticClass: 'header-anchor',
                    attrs: { href: '#require-与-export-default', 'aria-hidden': 'true' }
                  },
                  [this._v('#')]
                ),
                this._v(' require 与 export default')
              ])
            },
            function() {
              var t = this,
                s = t.$createElement,
                e = t._self._c || s
              return e('div', { staticClass: 'language-js extra-class' }, [
                e('pre', { pre: !0, attrs: { class: 'language-js' } }, [
                  e('code', [
                    e('span', { pre: !0, attrs: { class: 'token comment' } }, [t._v('// export.js')]),
                    t._v('\n'),
                    e('span', { pre: !0, attrs: { class: 'token keyword' } }, [t._v('export')]),
                    t._v(' '),
                    e('span', { pre: !0, attrs: { class: 'token keyword' } }, [t._v('default')]),
                    t._v(' '),
                    e('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('{')]),
                    t._v(' site'),
                    e('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(':')]),
                    t._v(' '),
                    e('span', { pre: !0, attrs: { class: 'token string' } }, [
                      t._v("'倾城之链 https://nicelinks.site'")
                    ]),
                    t._v(' '),
                    e('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('}')]),
                    t._v('\n\n'),
                    e('span', { pre: !0, attrs: { class: 'token comment' } }, [t._v('// index.js')]),
                    t._v('\n'),
                    e('span', { pre: !0, attrs: { class: 'token keyword' } }, [t._v('const')]),
                    t._v(' exportsObj '),
                    e('span', { pre: !0, attrs: { class: 'token operator' } }, [t._v('=')]),
                    t._v(' '),
                    e('span', { pre: !0, attrs: { class: 'token function' } }, [t._v('require')]),
                    e('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('(')]),
                    e('span', { pre: !0, attrs: { class: 'token string' } }, [t._v("'./export'")]),
                    e('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(')')]),
                    e('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('.')]),
                    t._v('default\nconsole'),
                    e('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('.')]),
                    e('span', { pre: !0, attrs: { class: 'token function' } }, [t._v('log')]),
                    e('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('(')]),
                    t._v('exportsObj'),
                    e('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('.')]),
                    t._v('site'),
                    e('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(')')]),
                    t._v(' '),
                    e('span', { pre: !0, attrs: { class: 'token comment' } }, [
                      t._v('// 倾城之链 https://nicelinks.site')
                    ]),
                    t._v('\n')
                  ])
                ])
              ])
            },
            function() {
              var t = this.$createElement,
                s = this._self._c || t
              return s('h2', { attrs: { id: 'module-exports-vs-exports' } }, [
                s(
                  'a',
                  {
                    staticClass: 'header-anchor',
                    attrs: { href: '#module-exports-vs-exports', 'aria-hidden': 'true' }
                  },
                  [this._v('#')]
                ),
                this._v(' module.exports VS exports')
              ])
            },
            function() {
              var t = this,
                s = t.$createElement,
                e = t._self._c || s
              return e('div', { staticClass: 'language-js extra-class' }, [
                e('pre', { pre: !0, attrs: { class: 'language-js' } }, [
                  e('code', [
                    t._v('console'),
                    e('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('.')]),
                    e('span', { pre: !0, attrs: { class: 'token function' } }, [t._v('log')]),
                    e('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('(')]),
                    t._v('exports '),
                    e('span', { pre: !0, attrs: { class: 'token operator' } }, [t._v('===')]),
                    t._v(' module'),
                    e('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('.')]),
                    t._v('exports'),
                    e('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(')')]),
                    t._v(' '),
                    e('span', { pre: !0, attrs: { class: 'token comment' } }, [t._v('// true')]),
                    t._v('\n')
                  ])
                ])
              ])
            },
            function() {
              var t = this.$createElement,
                s = this._self._c || t
              return s('p', [
                this._v(
                  '这其实等同在每个模块头部，有一行这样的代码：var exports = module.exports；在使用之时也有些注意事项，更推荐的方式是使用 '
                ),
                s('code', [this._v('module.exports')]),
                this._v(' 而不用 '),
                s('code', [this._v('exports')]),
                this._v('。以下是不可取用法的示例：')
              ])
            },
            function() {
              var t = this,
                s = t.$createElement,
                e = t._self._c || s
              return e('div', { staticClass: 'language-js extra-class' }, [
                e('pre', { pre: !0, attrs: { class: 'language-js' } }, [
                  e('code', [
                    e('span', { pre: !0, attrs: { class: 'token comment' } }, [
                      t._v('// 切断了 exports 与 module.exports 的联系')
                    ]),
                    t._v('\n'),
                    e('span', { pre: !0, attrs: { class: 'token function-variable function' } }, [t._v('exports')]),
                    t._v(' '),
                    e('span', { pre: !0, attrs: { class: 'token operator' } }, [t._v('=')]),
                    t._v(' '),
                    e('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('(')]),
                    e('span', { pre: !0, attrs: { class: 'token parameter' } }, [t._v('param')]),
                    e('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(')')]),
                    t._v(' '),
                    e('span', { pre: !0, attrs: { class: 'token operator' } }, [t._v('=>')]),
                    t._v(' '),
                    e('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('{')]),
                    t._v(' console'),
                    e('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('.')]),
                    t._v('logparamx'),
                    e('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(')')]),
                    t._v(' '),
                    e('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('}')]),
                    t._v('\n\n'),
                    e('span', { pre: !0, attrs: { class: 'token comment' } }, [
                      t._v('// 因为 module.exports 被重新赋值，sayHello 无法对外输出')
                    ]),
                    t._v('\nexports'),
                    e('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('.')]),
                    e('span', { pre: !0, attrs: { class: 'token function-variable function' } }, [t._v('sayHello')]),
                    t._v(' '),
                    e('span', { pre: !0, attrs: { class: 'token operator' } }, [t._v('=')]),
                    t._v(' '),
                    e('span', { pre: !0, attrs: { class: 'token keyword' } }, [t._v('function')]),
                    e('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('(')]),
                    e('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(')')]),
                    t._v(' '),
                    e('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('{')]),
                    t._v('\n  '),
                    e('span', { pre: !0, attrs: { class: 'token keyword' } }, [t._v('return')]),
                    t._v(' '),
                    e('span', { pre: !0, attrs: { class: 'token string' } }, [t._v("'hello'")]),
                    t._v('\n'),
                    e('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('}')]),
                    t._v('\nmodule'),
                    e('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('.')]),
                    t._v('exports '),
                    e('span', { pre: !0, attrs: { class: 'token operator' } }, [t._v('=')]),
                    t._v(' '),
                    e('span', { pre: !0, attrs: { class: 'token string' } }, [t._v("'Hello world'")]),
                    t._v('\n')
                  ])
                ])
              ])
            },
            function() {
              var t = this.$createElement,
                s = this._self._c || t
              return s('h2', { attrs: { id: 'es6-与-commonjs-的差异' } }, [
                s(
                  'a',
                  { staticClass: 'header-anchor', attrs: { href: '#es6-与-commonjs-的差异', 'aria-hidden': 'true' } },
                  [this._v('#')]
                ),
                this._v(' Es6 与 CommonJS 的差异')
              ])
            },
            function() {
              var t = this.$createElement,
                s = this._self._c || t
              return s('ol', [s('li', [this._v('CommonJS 模块是运行时加载，ES6 模块是编译时输出接口；')])])
            },
            function() {
              var t = this.$createElement,
                s = this._self._c || t
              return s('blockquote', [
                s('p', [
                  this._v(
                    'CommonJS 加载的是一个对象（即 module.exports 属性），该对象只有在脚本运行完才会生成。而 ES6 模块不是对象，它的对外接口只是一种静态定义，在代码静态解析阶段就会生成。因为 '
                  ),
                  s('code', [this._v('require')]),
                  this._v(' 是运行时加载模块，import 命令无法取代 '),
                  s('code', [this._v('require')]),
                  this._v(' 的动态加载功能。如下代码可以看二者区别：')
                ])
              ])
            },
            function() {
              var t = this,
                s = t.$createElement,
                e = t._self._c || s
              return e('div', { staticClass: 'language-js extra-class' }, [
                e('pre', { pre: !0, attrs: { class: 'language-js' } }, [
                  e('code', [
                    e('span', { pre: !0, attrs: { class: 'token comment' } }, [t._v('// Okay')]),
                    t._v('\n'),
                    e('span', { pre: !0, attrs: { class: 'token keyword' } }, [t._v('const')]),
                    t._v(' currentModule '),
                    e('span', { pre: !0, attrs: { class: 'token operator' } }, [t._v('=')]),
                    t._v(' '),
                    e('span', { pre: !0, attrs: { class: 'token function' } }, [t._v('require')]),
                    e('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('(')]),
                    t._v('process'),
                    e('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('.')]),
                    e('span', { pre: !0, attrs: { class: 'token function' } }, [t._v('cwd')]),
                    e('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('(')]),
                    e('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(')')]),
                    t._v(' '),
                    e('span', { pre: !0, attrs: { class: 'token operator' } }, [t._v('+')]),
                    t._v(' moduleName'),
                    e('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(')')]),
                    t._v('\n\n'),
                    e('span', { pre: !0, attrs: { class: 'token comment' } }, [t._v('// SyntaxError')]),
                    t._v('\n'),
                    e('span', { pre: !0, attrs: { class: 'token keyword' } }, [t._v('const')]),
                    t._v(' currentModule '),
                    e('span', { pre: !0, attrs: { class: 'token operator' } }, [t._v('=')]),
                    t._v(' '),
                    e('span', { pre: !0, attrs: { class: 'token keyword' } }, [t._v('import')]),
                    e('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('(')]),
                    t._v('process'),
                    e('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('.')]),
                    e('span', { pre: !0, attrs: { class: 'token function' } }, [t._v('cwd')]),
                    e('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('(')]),
                    e('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(')')]),
                    t._v(' '),
                    e('span', { pre: !0, attrs: { class: 'token operator' } }, [t._v('+')]),
                    t._v(' moduleName'),
                    e('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(')')]),
                    t._v('\n')
                  ])
                ])
              ])
            },
            function() {
              var t = this,
                s = t.$createElement,
                e = t._self._c || s
              return e('div', { staticClass: 'language-js extra-class' }, [
                e('pre', { pre: !0, attrs: { class: 'language-js' } }, [
                  e('code', [
                    e('span', { pre: !0, attrs: { class: 'token keyword' } }, [t._v('const')]),
                    t._v(' main '),
                    e('span', { pre: !0, attrs: { class: 'token operator' } }, [t._v('=')]),
                    t._v(' document'),
                    e('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('.')]),
                    e('span', { pre: !0, attrs: { class: 'token function' } }, [t._v('querySelector')]),
                    e('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('(')]),
                    e('span', { pre: !0, attrs: { class: 'token string' } }, [t._v("'main'")]),
                    e('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(')')]),
                    t._v('\n'),
                    e('span', { pre: !0, attrs: { class: 'token keyword' } }, [t._v('for')]),
                    t._v(' '),
                    e('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('(')]),
                    e('span', { pre: !0, attrs: { class: 'token keyword' } }, [t._v('const')]),
                    t._v(' link '),
                    e('span', { pre: !0, attrs: { class: 'token keyword' } }, [t._v('of')]),
                    t._v(' document'),
                    e('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('.')]),
                    e('span', { pre: !0, attrs: { class: 'token function' } }, [t._v('querySelectorAll')]),
                    e('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('(')]),
                    e('span', { pre: !0, attrs: { class: 'token string' } }, [t._v("'nav > a'")]),
                    e('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(')')]),
                    e('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(')')]),
                    t._v(' '),
                    e('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('{')]),
                    t._v('\n  link'),
                    e('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('.')]),
                    e('span', { pre: !0, attrs: { class: 'token function' } }, [t._v('addEventListener')]),
                    e('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('(')]),
                    e('span', { pre: !0, attrs: { class: 'token string' } }, [t._v("'click'")]),
                    e('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(',')]),
                    t._v(' '),
                    e('span', { pre: !0, attrs: { class: 'token parameter' } }, [t._v('e')]),
                    t._v(' '),
                    e('span', { pre: !0, attrs: { class: 'token operator' } }, [t._v('=>')]),
                    t._v(' '),
                    e('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('{')]),
                    t._v('\n    e'),
                    e('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('.')]),
                    e('span', { pre: !0, attrs: { class: 'token function' } }, [t._v('preventDefault')]),
                    e('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('(')]),
                    e('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(')')]),
                    t._v('\n\n    '),
                    e('span', { pre: !0, attrs: { class: 'token keyword' } }, [t._v('import')]),
                    e('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('(')]),
                    e('span', { pre: !0, attrs: { class: 'token template-string' } }, [
                      e('span', { pre: !0, attrs: { class: 'token template-punctuation string' } }, [t._v('`')]),
                      e('span', { pre: !0, attrs: { class: 'token string' } }, [t._v('./section-modules/')]),
                      e('span', { pre: !0, attrs: { class: 'token interpolation' } }, [
                        e('span', { pre: !0, attrs: { class: 'token interpolation-punctuation punctuation' } }, [
                          t._v('${')
                        ]),
                        t._v('link'),
                        e('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('.')]),
                        t._v('dataset'),
                        e('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('.')]),
                        t._v('entryModule'),
                        e('span', { pre: !0, attrs: { class: 'token interpolation-punctuation punctuation' } }, [
                          t._v('}')
                        ])
                      ]),
                      e('span', { pre: !0, attrs: { class: 'token string' } }, [t._v('.js')]),
                      e('span', { pre: !0, attrs: { class: 'token template-punctuation string' } }, [t._v('`')])
                    ]),
                    e('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(')')]),
                    t._v('\n      '),
                    e('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('.')]),
                    e('span', { pre: !0, attrs: { class: 'token function' } }, [t._v('then')]),
                    e('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('(')]),
                    e('span', { pre: !0, attrs: { class: 'token parameter' } }, [t._v('module')]),
                    t._v(' '),
                    e('span', { pre: !0, attrs: { class: 'token operator' } }, [t._v('=>')]),
                    t._v(' '),
                    e('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('{')]),
                    t._v('\n        module'),
                    e('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('.')]),
                    e('span', { pre: !0, attrs: { class: 'token function' } }, [t._v('loadPageInto')]),
                    e('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('(')]),
                    t._v('main'),
                    e('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(')')]),
                    t._v('\n      '),
                    e('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('}')]),
                    e('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(')')]),
                    t._v('\n      '),
                    e('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('.')]),
                    e('span', { pre: !0, attrs: { class: 'token function' } }, [t._v('catch')]),
                    e('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('(')]),
                    e('span', { pre: !0, attrs: { class: 'token parameter' } }, [t._v('err')]),
                    t._v(' '),
                    e('span', { pre: !0, attrs: { class: 'token operator' } }, [t._v('=>')]),
                    t._v(' '),
                    e('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('{')]),
                    t._v('\n        main'),
                    e('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('.')]),
                    t._v('textContent '),
                    e('span', { pre: !0, attrs: { class: 'token operator' } }, [t._v('=')]),
                    t._v(' err'),
                    e('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('.')]),
                    t._v('message\n      '),
                    e('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('}')]),
                    e('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(')')]),
                    t._v('\n  '),
                    e('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('}')]),
                    e('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(')')]),
                    t._v('\n'),
                    e('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('}')]),
                    t._v('\n')
                  ])
                ])
              ])
            },
            function() {
              var t = this.$createElement,
                s = this._self._c || t
              return s('p', [
                this._v(
                  '如果你使用 Vue Or React 开发，你会发现用 Webpack import 可以按需引入，使得可以资源懒加载得以实现（早前使用 '
                ),
                s('code', [this._v('require.ensure')]),
                this._v(
                  '）；但需要注意的是，无法使用完全动态的 import 语句，例如 import(foo)，因为 foo 可能是系统或项目中任何文件的任何路径，从而导致将很多无用的资源注入。因此，在使用 webpack import，应该'
                ),
                s('strong', [this._v('尽可能静态化表达包所处的路径，最小化变量控制的区域')]),
                this._v('；来看下官网给出的示例：')
              ])
            },
            function() {
              var t = this,
                s = t.$createElement,
                e = t._self._c || s
              return e('div', { staticClass: 'language-js extra-class' }, [
                e('pre', { pre: !0, attrs: { class: 'language-js' } }, [
                  e('code', [
                    e('span', { pre: !0, attrs: { class: 'token keyword' } }, [t._v('const')]),
                    t._v(' language '),
                    e('span', { pre: !0, attrs: { class: 'token operator' } }, [t._v('=')]),
                    t._v(' '),
                    e('span', { pre: !0, attrs: { class: 'token function' } }, [t._v('detectVisitorLanguage')]),
                    e('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('(')]),
                    e('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(')')]),
                    t._v('\n'),
                    e('span', { pre: !0, attrs: { class: 'token keyword' } }, [t._v('import')]),
                    e('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('(')]),
                    e('span', { pre: !0, attrs: { class: 'token template-string' } }, [
                      e('span', { pre: !0, attrs: { class: 'token template-punctuation string' } }, [t._v('`')]),
                      e('span', { pre: !0, attrs: { class: 'token string' } }, [t._v('./locale/')]),
                      e('span', { pre: !0, attrs: { class: 'token interpolation' } }, [
                        e('span', { pre: !0, attrs: { class: 'token interpolation-punctuation punctuation' } }, [
                          t._v('${')
                        ]),
                        t._v('language'),
                        e('span', { pre: !0, attrs: { class: 'token interpolation-punctuation punctuation' } }, [
                          t._v('}')
                        ])
                      ]),
                      e('span', { pre: !0, attrs: { class: 'token string' } }, [t._v('.json')]),
                      e('span', { pre: !0, attrs: { class: 'token template-punctuation string' } }, [t._v('`')])
                    ]),
                    e('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(')')]),
                    e('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('.')]),
                    e('span', { pre: !0, attrs: { class: 'token function' } }, [t._v('then')]),
                    e('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('(')]),
                    e('span', { pre: !0, attrs: { class: 'token parameter' } }, [t._v('module')]),
                    t._v(' '),
                    e('span', { pre: !0, attrs: { class: 'token operator' } }, [t._v('=>')]),
                    t._v(' '),
                    e('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('{')]),
                    t._v('\n  '),
                    e('span', { pre: !0, attrs: { class: 'token comment' } }, [
                      t._v('// do something with the translations')
                    ]),
                    t._v('\n'),
                    e('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('}')]),
                    e('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(')')]),
                    t._v('\n')
                  ])
                ])
              ])
            },
            function() {
              var t = this.$createElement,
                s = this._self._c || t
              return s('ol', { attrs: { start: '2' } }, [
                s('li', [
                  this._v('CommonJS 模块输出的是一个'),
                  s('strong', [this._v('值的拷贝')]),
                  this._v('，ES6 模块输出的是'),
                  s('strong', [this._v('值的引用')]),
                  this._v('；')
                ])
              ])
            },
            function() {
              var t = this.$createElement,
                s = this._self._c || t
              return s('blockquote', [
                s('p', [
                  this._v(
                    'CommonJS 模块输出的是值的拷贝，即一旦输出一个值，而模块内部的变化就影响不到这个值。而 ES6 模块的运行机制与 CommonJS 不一样：JS 引擎对脚本静态分析的时候，遇到模块加载命令 '
                  ),
                  s('code', [this._v('import')]),
                  this._v(
                    '，就会生成一个只读引用。等到脚本真正执行时，再根据这个只读引用，到被加载的那个模块里面去取值。因此，ES6 模块是动态引用，并且不会缓存值，模块里面的变量绑定其所在的模块。举例说明：'
                  )
                ])
              ])
            },
            function() {
              var t = this,
                s = t.$createElement,
                e = t._self._c || s
              return e('div', { staticClass: 'language-js extra-class' }, [
                e('pre', { pre: !0, attrs: { class: 'language-js' } }, [
                  e('code', [
                    e('span', { pre: !0, attrs: { class: 'token comment' } }, [t._v('// export.js')]),
                    t._v('\n'),
                    e('span', { pre: !0, attrs: { class: 'token keyword' } }, [t._v('export')]),
                    t._v(' '),
                    e('span', { pre: !0, attrs: { class: 'token keyword' } }, [t._v('let')]),
                    t._v(' counter '),
                    e('span', { pre: !0, attrs: { class: 'token operator' } }, [t._v('=')]),
                    t._v(' '),
                    e('span', { pre: !0, attrs: { class: 'token number' } }, [t._v('276')]),
                    t._v('\n'),
                    e('span', { pre: !0, attrs: { class: 'token keyword' } }, [t._v('export')]),
                    t._v(' '),
                    e('span', { pre: !0, attrs: { class: 'token keyword' } }, [t._v('const')]),
                    t._v(' '),
                    e('span', { pre: !0, attrs: { class: 'token function-variable function' } }, [
                      t._v('makeCounterIncrease')
                    ]),
                    t._v(' '),
                    e('span', { pre: !0, attrs: { class: 'token operator' } }, [t._v('=')]),
                    t._v(' '),
                    e('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('(')]),
                    e('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(')')]),
                    t._v(' '),
                    e('span', { pre: !0, attrs: { class: 'token operator' } }, [t._v('=>')]),
                    t._v(' '),
                    e('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('{')]),
                    t._v('\n  counter'),
                    e('span', { pre: !0, attrs: { class: 'token operator' } }, [t._v('++')]),
                    t._v('\n'),
                    e('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('}')]),
                    t._v('\n\n'),
                    e('span', { pre: !0, attrs: { class: 'token comment' } }, [t._v('// index.js (用 require 方式)')]),
                    t._v('\n'),
                    e('span', { pre: !0, attrs: { class: 'token keyword' } }, [t._v('let')]),
                    t._v(' '),
                    e('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('{')]),
                    t._v(' counter'),
                    e('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(',')]),
                    t._v(' makeCounterIncrease '),
                    e('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('}')]),
                    t._v(' '),
                    e('span', { pre: !0, attrs: { class: 'token operator' } }, [t._v('=')]),
                    t._v(' '),
                    e('span', { pre: !0, attrs: { class: 'token function' } }, [t._v('require')]),
                    e('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('(')]),
                    e('span', { pre: !0, attrs: { class: 'token string' } }, [t._v("'./export'")]),
                    e('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(')')]),
                    t._v('\nconsole'),
                    e('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('.')]),
                    e('span', { pre: !0, attrs: { class: 'token function' } }, [t._v('log')]),
                    e('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('(')]),
                    t._v('counter'),
                    e('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(')')]),
                    t._v(' '),
                    e('span', { pre: !0, attrs: { class: 'token comment' } }, [t._v('// 276')]),
                    t._v('\n'),
                    e('span', { pre: !0, attrs: { class: 'token function' } }, [t._v('makeCounterIncrease')]),
                    e('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('(')]),
                    e('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(')')]),
                    t._v('\nconsole'),
                    e('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('.')]),
                    e('span', { pre: !0, attrs: { class: 'token function' } }, [t._v('log')]),
                    e('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('(')]),
                    t._v('counter'),
                    e('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(')')]),
                    t._v(' '),
                    e('span', { pre: !0, attrs: { class: 'token comment' } }, [t._v('// 277')]),
                    t._v('\ncounter '),
                    e('span', { pre: !0, attrs: { class: 'token operator' } }, [t._v('+=')]),
                    t._v(' '),
                    e('span', { pre: !0, attrs: { class: 'token number' } }, [t._v('1')]),
                    t._v(' '),
                    e('span', { pre: !0, attrs: { class: 'token comment' } }, [t._v('// 不会报错；')]),
                    t._v('\n\n'),
                    e('span', { pre: !0, attrs: { class: 'token comment' } }, [t._v('// index.js (用 import 方式)')]),
                    t._v('\n'),
                    e('span', { pre: !0, attrs: { class: 'token keyword' } }, [t._v('import')]),
                    t._v(' '),
                    e('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('{')]),
                    t._v(' counter'),
                    e('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(',')]),
                    t._v(' makeCounterIncrease '),
                    e('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('}')]),
                    t._v(' '),
                    e('span', { pre: !0, attrs: { class: 'token keyword' } }, [t._v('from')]),
                    t._v(' '),
                    e('span', { pre: !0, attrs: { class: 'token string' } }, [t._v("'./export'")]),
                    t._v('\nconsole'),
                    e('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('.')]),
                    e('span', { pre: !0, attrs: { class: 'token function' } }, [t._v('log')]),
                    e('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('(')]),
                    t._v('counter'),
                    e('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(')')]),
                    t._v(' '),
                    e('span', { pre: !0, attrs: { class: 'token comment' } }, [t._v('// 276')]),
                    t._v('\n'),
                    e('span', { pre: !0, attrs: { class: 'token function' } }, [t._v('makeCounterIncrease')]),
                    e('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('(')]),
                    e('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(')')]),
                    t._v('\nconsole'),
                    e('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('.')]),
                    e('span', { pre: !0, attrs: { class: 'token function' } }, [t._v('log')]),
                    e('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('(')]),
                    t._v('counter'),
                    e('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(')')]),
                    t._v(' '),
                    e('span', { pre: !0, attrs: { class: 'token comment' } }, [t._v('// 277')]),
                    t._v('\ncounter '),
                    e('span', { pre: !0, attrs: { class: 'token operator' } }, [t._v('+=')]),
                    t._v(' '),
                    e('span', { pre: !0, attrs: { class: 'token number' } }, [t._v('1')]),
                    t._v(' '),
                    e('span', { pre: !0, attrs: { class: 'token comment' } }, [
                      t._v('//  报错：Error: "counter" is read-only.')
                    ]),
                    t._v('\n')
                  ])
                ])
              ])
            },
            function() {
              var t = this.$createElement,
                s = this._self._c || t
              return s('h2', { attrs: { id: '用哪种方式更可取呢？' } }, [
                s(
                  'a',
                  { staticClass: 'header-anchor', attrs: { href: '#用哪种方式更可取呢？', 'aria-hidden': 'true' } },
                  [this._v('#')]
                ),
                this._v(' 用哪种方式更可取呢？')
              ])
            },
            function() {
              var t = this,
                s = t.$createElement,
                e = t._self._c || s
              return e('div', { staticClass: 'language-js extra-class' }, [
                e('pre', { pre: !0, attrs: { class: 'language-js' } }, [
                  e('code', [
                    e('span', { pre: !0, attrs: { class: 'token keyword' } }, [t._v('import')]),
                    t._v(' _ '),
                    e('span', { pre: !0, attrs: { class: 'token keyword' } }, [t._v('from')]),
                    t._v(' '),
                    e('span', { pre: !0, attrs: { class: 'token string' } }, [t._v("'lodash'")]),
                    t._v('\n_'),
                    e('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('.')]),
                    e('span', { pre: !0, attrs: { class: 'token function' } }, [t._v('flattenDepth')]),
                    e('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('(')]),
                    e('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(')')]),
                    t._v('\n')
                  ])
                ])
              ])
            },
            function() {
              var t = this,
                s = t.$createElement,
                e = t._self._c || s
              return e('div', { staticClass: 'language-js extra-class' }, [
                e('pre', { pre: !0, attrs: { class: 'language-js' } }, [
                  e('code', [
                    e('span', { pre: !0, attrs: { class: 'token keyword' } }, [t._v('import')]),
                    t._v(' '),
                    e('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('{')]),
                    t._v(' debounce '),
                    e('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('}')]),
                    t._v(' '),
                    e('span', { pre: !0, attrs: { class: 'token keyword' } }, [t._v('from')]),
                    t._v(' '),
                    e('span', { pre: !0, attrs: { class: 'token string' } }, [t._v("'lodash'")]),
                    t._v('\n\n'),
                    e('span', { pre: !0, attrs: { class: 'token comment' } }, [t._v('// 改成如下写法')]),
                    t._v('\n'),
                    e('span', { pre: !0, attrs: { class: 'token keyword' } }, [t._v('import')]),
                    t._v(' debounce '),
                    e('span', { pre: !0, attrs: { class: 'token keyword' } }, [t._v('from')]),
                    t._v(' '),
                    e('span', { pre: !0, attrs: { class: 'token string' } }, [t._v("'lodash/debounce'")]),
                    t._v('\n')
                  ])
                ])
              ])
            },
            function() {
              var t = this,
                s = t.$createElement,
                e = t._self._c || s
              return e('div', { staticClass: 'language-js extra-class' }, [
                e('pre', { pre: !0, attrs: { class: 'language-js' } }, [
                  e('code', [
                    e('span', { pre: !0, attrs: { class: 'token comment' } }, [t._v('// helper/lodash.js (local)')]),
                    t._v('\n'),
                    e('span', { pre: !0, attrs: { class: 'token keyword' } }, [t._v('import')]),
                    t._v(' flattenDepth '),
                    e('span', { pre: !0, attrs: { class: 'token keyword' } }, [t._v('from')]),
                    t._v(' '),
                    e('span', { pre: !0, attrs: { class: 'token string' } }, [t._v("'lodash/flattenDepth'")]),
                    t._v('\n\n'),
                    e('span', { pre: !0, attrs: { class: 'token keyword' } }, [t._v('export')]),
                    t._v(' '),
                    e('span', { pre: !0, attrs: { class: 'token keyword' } }, [t._v('default')]),
                    t._v(' '),
                    e('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('{')]),
                    t._v('\n  flattenDepth\n'),
                    e('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('}')]),
                    t._v('\n\n'),
                    e('span', { pre: !0, attrs: { class: 'token comment' } }, [t._v('// main.js')]),
                    t._v('\n'),
                    e('span', { pre: !0, attrs: { class: 'token keyword' } }, [t._v('import')]),
                    t._v(' lodash '),
                    e('span', { pre: !0, attrs: { class: 'token keyword' } }, [t._v('from')]),
                    t._v(' '),
                    e('span', { pre: !0, attrs: { class: 'token string' } }, [t._v("'helper/lodash.js'")]),
                    t._v('\n'),
                    e('span', { pre: !0, attrs: { class: 'token class-name' } }, [t._v('Vue')]),
                    e('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('.')]),
                    t._v('prototype'),
                    e('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('.')]),
                    t._v('$_ '),
                    e('span', { pre: !0, attrs: { class: 'token operator' } }, [t._v('=')]),
                    t._v(' lodash\n')
                  ])
                ])
              ])
            },
            function() {
              var t = this.$createElement,
                s = this._self._c || t
              return s('h2', { attrs: { id: 'node-运行-es6-语法' } }, [
                s(
                  'a',
                  { staticClass: 'header-anchor', attrs: { href: '#node-运行-es6-语法', 'aria-hidden': 'true' } },
                  [this._v('#')]
                ),
                this._v(' Node 运行 ES6 语法')
              ])
            },
            function() {
              var t = this.$createElement,
                s = this._self._c || t
              return s('p', [
                this._v('使用 '),
                s('code', [this._v('babel-node')]),
                this._v(
                  ' 命令，来运行含有 import/export 语法的代码（需要注意的是 babel-node 不能用于生产环境，它的存在会加载更多资源和模块）。'
                )
              ])
            },
            function() {
              var t = this.$createElement,
                s = this._self._c || t
              return s('h3', { attrs: { id: '安装-babel-node' } }, [
                s('a', { staticClass: 'header-anchor', attrs: { href: '#安装-babel-node', 'aria-hidden': 'true' } }, [
                  this._v('#')
                ]),
                this._v(' 安装 babel-node')
              ])
            },
            function() {
              var t = this.$createElement,
                s = this._self._c || t
              return s('div', { staticClass: 'language-bash extra-class' }, [
                s('pre', { pre: !0, attrs: { class: 'language-bash' } }, [
                  s('code', [
                    s('span', { pre: !0, attrs: { class: 'token function' } }, [this._v('npm')]),
                    this._v(' i @babel/core @babel/node --save-dev\n')
                  ])
                ])
              ])
            },
            function() {
              var t = this.$createElement,
                s = this._self._c || t
              return s('p', [
                this._v('因为 babel-node 对 import 语法默认是关未开启，所以需要安装指定的 preset 并配置 '),
                s('code', [this._v('.babelrc')]),
                this._v('来开启语法支持。')
              ])
            },
            function() {
              var t = this.$createElement,
                s = this._self._c || t
              return s('h3', { attrs: { id: '安装-presets-并配置-babelrc-文件' } }, [
                s(
                  'a',
                  {
                    staticClass: 'header-anchor',
                    attrs: { href: '#安装-presets-并配置-babelrc-文件', 'aria-hidden': 'true' }
                  },
                  [this._v('#')]
                ),
                this._v(' 安装 presets 并配置 .babelrc 文件')
              ])
            },
            function() {
              var t = this.$createElement,
                s = this._self._c || t
              return s('div', { staticClass: 'language-bash extra-class' }, [
                s('pre', { pre: !0, attrs: { class: 'language-bash' } }, [
                  s('code', [
                    this._v(' '),
                    s('span', { pre: !0, attrs: { class: 'token function' } }, [this._v('npm')]),
                    this._v(' i @babel/preset-env --save-dev\n')
                  ])
                ])
              ])
            },
            function() {
              var t = this.$createElement,
                s = this._self._c || t
              return s('p', [
                this._v('在项目根目录下，新建 '),
                s('code', [this._v('.babelrc')]),
                this._v(' 文件，并填入以下配置：')
              ])
            },
            function() {
              var t = this,
                s = t.$createElement,
                e = t._self._c || s
              return e('div', { staticClass: 'language-bash extra-class' }, [
                e('pre', { pre: !0, attrs: { class: 'language-bash' } }, [
                  e('code', [
                    e('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('{')]),
                    t._v('\n  '),
                    e('span', { pre: !0, attrs: { class: 'token string' } }, [t._v('"presets"')]),
                    e('span', { pre: !0, attrs: { class: 'token builtin class-name' } }, [t._v(':')]),
                    t._v(' '),
                    e('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('[')]),
                    t._v(' '),
                    e('span', { pre: !0, attrs: { class: 'token string' } }, [t._v('"@babel/preset-env"')]),
                    t._v(' '),
                    e('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(']')]),
                    t._v('\n'),
                    e('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('}')]),
                    t._v('\n')
                  ])
                ])
              ])
            },
            function() {
              var t = this.$createElement,
                s = this._self._c || t
              return s('h3', { attrs: { id: '通过-babel-node-执行-import-export-语法' } }, [
                s(
                  'a',
                  {
                    staticClass: 'header-anchor',
                    attrs: { href: '#通过-babel-node-执行-import-export-语法', 'aria-hidden': 'true' }
                  },
                  [this._v('#')]
                ),
                this._v(' 通过 babel-node 执行 import/export 语法')
              ])
            },
            function() {
              var t = this.$createElement,
                s = this._self._c || t
              return s('p', [
                this._v(
                  '经过如上配置，即可通过 babel-node 执行 import/export 语法；因为采 babel-node 基于局部安装，因此可以通过 '
                ),
                s('code', [this._v('npx')]),
                this._v(' 来运行；当然，完全可以将命令配置在 package.json 的 scripts 内部，以提升便捷度。')
              ])
            },
            function() {
              var t = this.$createElement,
                s = this._self._c || t
              return s('div', { staticClass: 'language-bash extra-class' }, [
                s('pre', { pre: !0, attrs: { class: 'language-bash' } }, [
                  s('code', [this._v('npx babel-node index.js\n')])
                ])
              ])
            },
            function() {
              var t = this.$createElement,
                s = this._self._c || t
              return s('h3', { attrs: { id: '参考资料' } }, [
                s('a', { staticClass: 'header-anchor', attrs: { href: '#参考资料', 'aria-hidden': 'true' } }, [
                  this._v('#')
                ]),
                this._v(' 参考资料')
              ])
            },
            function() {
              var t = this.$createElement,
                s = this._self._c || t
              return s('h3', { attrs: { id: '您可能会感兴趣的文章' } }, [
                s(
                  'a',
                  { staticClass: 'header-anchor', attrs: { href: '#您可能会感兴趣的文章', 'aria-hidden': 'true' } },
                  [this._v('#')]
                ),
                this._v(' 您可能会感兴趣的文章')
              ])
            }
          ],
          !1,
          null,
          null,
          null
        )
      s.default = n.exports
    }
  }
])
