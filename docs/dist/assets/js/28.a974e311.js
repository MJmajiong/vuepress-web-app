;(window.webpackJsonp = window.webpackJsonp || []).push([
  [28],
  {
    323: function(t, e, r) {
      'use strict'
      r.r(e)
      var a = r(1),
        s = Object(a.a)(
          {},
          function() {
            var t = this,
              e = t.$createElement,
              r = t._self._c || e
            return r(
              'div',
              { staticClass: 'content' },
              [
                r('p', [
                  t._v(
                    'README，它是别人对项目了解、印象的第一来源；尤其是针对开源项目，相当之重要：好比颜值之于一个人，主页之于一个公司；但很多项目并未重视这一点；各种仓库，浩如烟海，没有简洁、明晰的介绍，教人如何耐心去看？本篇文章的存在，即是为了改善这种情况。它将指导您如何写出一篇友好、易读的 README ，同时提供一键生成专业 README（模版）的工具，从而为广大开发者，解决如何书写良好 README 之烦忧；同时为诸多阅读者，缓解没有清晰 README 一窥项目主旨的苦恼。'
                  )
                ]),
                t._v(' '),
                t._m(0),
                t._v(' '),
                r('p', [
                  t._v('先前在了解 '),
                  r(
                    'a',
                    {
                      attrs: {
                        href: 'https://www.jeffjade.com/2019/12/11/160-how-to-use-npm-npx-tutorial/',
                        target: '_blank',
                        rel: 'noopener noreferrer'
                      }
                    },
                    [t._v('npx'), r('OutboundLink')],
                    1
                  ),
                  t._v(' 相关功能时候，有特地在 Github Gist 上做了一个工具：'),
                  r(
                    'a',
                    {
                      attrs: {
                        href: 'https://gist.github.com/nicejade/406f154e882a836de1b2e12d02b84aab',
                        target: '_blank',
                        rel: 'noopener noreferrer'
                      }
                    },
                    [t._v('Generate a good README'), r('OutboundLink')],
                    1
                  ),
                  t._v(
                    '，如果您的电脑已经安装 Node(version >= 5.2.0)，那么即可通过一条命令，快速生成一个良好 README，只需对其中具体内容做下修改即可。'
                  )
                ]),
                t._v(' '),
                t._m(1),
                r('hr'),
                t._v(' '),
                t._m(2),
                t._v(' '),
                r('p', [
                  t._v('显而易见，'),
                  r('strong', [t._v('Logo')]),
                  t._v('、'),
                  r('strong', [t._v('标题')]),
                  t._v('、'),
                  r('strong', [t._v('简短描述')]),
                  t._v('，对于项目是必要的；它应该位于 README 顶部，且居中显示；除此之外，还可以添加'),
                  r('strong', [t._v('徽章')]),
                  t._v(
                    '（Badge），对项目进行标记和说明，这些好看的小图标，不仅简洁美观，而且清晰易读，您可以在这里链接更多信息，这有助于更好向他人展示自己的项目；正在维护的 '
                  ),
                  r(
                    'a',
                    {
                      attrs: {
                        href: 'https://github.com/nicejade/markdown-online-editor',
                        target: '_blank',
                        rel: 'noopener noreferrer'
                      }
                    },
                    [t._v('nicejade/markdown-online-editor'), r('OutboundLink')],
                    1
                  ),
                  t._v(' 项目，就添加有以下徽章：')
                ]),
                t._v(' '),
                t._m(3),
                t._v(' '),
                t._m(4),
                t._v(' '),
                t._m(5),
                t._v(' '),
                t._m(6),
                t._v(' '),
                r('p', [
                  t._v(
                    '为您设计的项目，写下初衷、理念和目标。对创建和维护项目背后的动机，作简短的阐述，这应该可以解释为什么该项目存在。'
                  )
                ]),
                t._v(' '),
                t._m(7),
                t._v(' '),
                r('p', [t._v('说明用户在安装和使用前，需要准备的一些先决条件，譬如：')]),
                t._v(' '),
                r('p', [
                  t._v('您需要安装或升级 '),
                  r(
                    'a',
                    { attrs: { href: 'https://nodejs.org/en/', target: '_blank', rel: 'noopener noreferrer' } },
                    [t._v('Node.js'), r('OutboundLink')],
                    1
                  ),
                  t._v('（> = '),
                  r('code', [t._v('8。*')]),
                  t._v('，Npm 版本 >= '),
                  r('code', [t._v('5.2.0')]),
                  t._v('，'),
                  r(
                    'a',
                    {
                      attrs: {
                        href: 'https://www.jeffjade.com/2017/12/30/135-npm-vs-yarn-detial-memo/',
                        target: '_blank',
                        rel: 'noopener noreferrer'
                      }
                    },
                    [t._v('Yarn'), r('OutboundLink')],
                    1
                  ),
                  t._v(' 作为首选）。')
                ]),
                t._v(' '),
                t._m(8),
                t._v(' '),
                t._m(9),
                r('p', [
                  t._v(
                    '在特定的生态系统中，可能存在一种通用的安装方式，例如使用 Yarn，NuGet 或 Homebrew。但是，请考虑是否有可能正在阅读 README 的人是新手，并且需要更多指导。'
                  )
                ]),
                t._v(' '),
                t._m(10),
                t._v(' '),
                t._m(11),
                r('p', [
                  t._v(
                    '列举如何使用示例，并尽可能显示预期的输出。内联您可以演示的最小用法示例很有帮助，同时提供指向更复杂示例的 Wiki 链接（如果它们太长而无法合理地包含在自述文件中）。'
                  )
                ]),
                t._v(' '),
                t._m(12),
                t._v(' '),
                r('p', [
                  t._v(
                    '您可以用列表的形式，展示项目现在已经支持的功能或特性，这有助于他人对项目存在的价值，做更深一步了解。'
                  )
                ]),
                t._v(' '),
                t._m(13),
                t._v(' '),
                r('p', [t._v('包括 logo / demo 截图等。')]),
                t._v(' '),
                t._m(14),
                t._v(' '),
                r('p', [
                  t._v('告诉人们他们可以去哪里寻求帮助。它可以是 issue 跟踪器，聊天室，电子邮件地址等的任意组合。')
                ]),
                t._v(' '),
                t._m(15),
                t._v(' '),
                t._m(16),
                r('p', [t._v('用代码示例描述并展示如何运行测试。')]),
                t._v(' '),
                t._m(17),
                t._v(' '),
                r('p', [t._v('如果您对将来的发行版有任何想法，最好在 README 文件中列出它们。')]),
                t._v(' '),
                t._m(18),
                t._v(' '),
                r('p', [
                  t._v('欢迎提出请求。对于重大更改，请先打开一个 issue，以讨论您要更改的内容。请确保适当更新测试。')
                ]),
                t._v(' '),
                t._m(19),
                t._v(' '),
                r('p', [t._v('向那些为该项目做出贡献的人表示感谢。')]),
                t._v(' '),
                t._m(20),
                t._v(' '),
                r('p', [
                  r(
                    'a',
                    {
                      attrs: {
                        href: 'http://opensource.org/licenses/MIT',
                        target: '_blank',
                        rel: 'noopener noreferrer'
                      }
                    },
                    [t._v('MIT'), r('OutboundLink')],
                    1
                  )
                ]),
                t._v(' '),
                t._m(21),
                t._v(' '),
                t._m(22),
                t._v(' '),
                r('p', [
                  t._v(
                    '如果您没有足够的精力或时间来完成项目，请在 README 文件的顶部添加注释，指出开发速度已减慢或完全停止。可能有人会选择 fork 您的项目，或者，以维护者或所有者的身份自愿加入，从而使您的项目继续进行下去。您也可以明确要求维护者。'
                  )
                ]),
                t._v(' '),
                r('p', [t._v('于深圳.福田 @2020.01.09')]),
                t._v(' '),
                r('blockquote', [
                  r('p', [
                    t._v('原文首发于个人最新博客：'),
                    r(
                      'a',
                      {
                        attrs: {
                          href: 'https://quickapp.lovejade.cn/how-to-write-a-good-readme-for-your-project/',
                          target: '_blank',
                          rel: 'noopener noreferrer'
                        }
                      },
                      [t._v('如何为项目编写良好 README | 静轩之别苑 静轩之别苑'), r('OutboundLink')],
                      1
                    ),
                    t._v('。')
                  ])
                ]),
                t._v(' '),
                r('ArticleList'),
                t._v(' '),
                r('br'),
                t._v(' '),
                r('br'),
                t._v(' '),
                r('br'),
                t._v(' '),
                r('Advertisement'),
                t._v(' '),
                t._m(23),
                t._v(' '),
                r('ul', [
                  r('li', [
                    r(
                      'a',
                      {
                        attrs: {
                          href:
                            'https://www.lovejade.cn/zh/article/how-to-quickly-delete-git-repository-new-changes.html',
                          target: '_blank',
                          rel: 'noopener noreferrer'
                        }
                      },
                      [t._v('如何快速删除 Git 仓库新增修改'), r('OutboundLink')],
                      1
                    )
                  ]),
                  t._v(' '),
                  r('li', [
                    r(
                      'a',
                      {
                        attrs: {
                          href: 'https://www.jeffjade.com/2017/12/30/135-npm-vs-yarn-detial-memo/',
                          target: '_blank',
                          rel: 'noopener noreferrer'
                        }
                      },
                      [t._v('Npm vs Yarn 之备忘详单'), r('OutboundLink')],
                      1
                    )
                  ]),
                  t._v(' '),
                  r('li', [
                    r(
                      'a',
                      {
                        attrs: {
                          href: 'https://quickapp.lovejade.cn/git-common-problems-and-solutions/',
                          target: '_blank',
                          rel: 'noopener noreferrer'
                        }
                      },
                      [t._v('Git 常见问题及解决办法'), r('OutboundLink')],
                      1
                    )
                  ]),
                  t._v(' '),
                  r('li', [
                    r(
                      'a',
                      {
                        attrs: {
                          href: 'https://www.jeffjade.com/2019/08/25/156-arya-jarvis-born-for-efficiency/',
                          target: '_blank',
                          rel: 'noopener noreferrer'
                        }
                      },
                      [t._v('为高效而生：Arya Jarvis'), r('OutboundLink')],
                      1
                    )
                  ]),
                  t._v(' '),
                  r('li', [
                    r(
                      'a',
                      {
                        attrs: {
                          href: 'https://www.jeffjade.com/2019/05/31/155-arya-markdown-online-editor/',
                          target: '_blank',
                          rel: 'noopener noreferrer'
                        }
                      },
                      [t._v('Arya - 在线 Markdown 编辑器'), r('OutboundLink')],
                      1
                    )
                  ]),
                  t._v(' '),
                  r('li', [
                    r(
                      'a',
                      {
                        attrs: {
                          href: 'https://www.jeffjade.com/2019/02/02/150-prettier-quickapp-plugin/',
                          target: '_blank',
                          rel: 'noopener noreferrer'
                        }
                      },
                      [t._v('Prettier 插件为更漂亮快应用代码'), r('OutboundLink')],
                      1
                    )
                  ]),
                  t._v(' '),
                  r('li', [
                    r(
                      'a',
                      {
                        attrs: {
                          href: 'https://www.jeffjade.com/2019/06/14/156-puppeteer-robot/',
                          target: '_blank',
                          rel: 'noopener noreferrer'
                        }
                      },
                      [t._v('基于 Puppeteer 构建简易机器人'), r('OutboundLink')],
                      1
                    )
                  ])
                ])
              ],
              1
            )
          },
          [
            function() {
              var t = this.$createElement,
                e = this._self._c || t
              return e('h2', { attrs: { id: '一键生成-readme-md' } }, [
                e(
                  'a',
                  { staticClass: 'header-anchor', attrs: { href: '#一键生成-readme-md', 'aria-hidden': 'true' } },
                  [this._v('#')]
                ),
                this._v(' 一键生成 README.md')
              ])
            },
            function() {
              var t = this.$createElement,
                e = this._self._c || t
              return e('div', { staticClass: 'language- extra-class' }, [
                e('pre', { pre: !0, attrs: { class: 'language-text' } }, [
                  e('code', [
                    this._v(
                      '# 默认英文 README\nnpx https://gist.github.com/nicejade/406f154e882a836de1b2e12d02b84aab\n\n# 生成中文 README\nnpx https://gist.github.com/nicejade/406f154e882a836de1b2e12d02b84aab zh\n'
                    )
                  ])
                ])
              ])
            },
            function() {
              var t = this.$createElement,
                e = this._self._c || t
              return e('h2', { attrs: { id: '顶部信息' } }, [
                e('a', { staticClass: 'header-anchor', attrs: { href: '#顶部信息', 'aria-hidden': 'true' } }, [
                  this._v('#')
                ]),
                this._v(' 顶部信息')
              ])
            },
            function() {
              var t = this.$createElement,
                e = this._self._c || t
              return e('div', { attrs: { align: 'center' } }, [
                e('a', { attrs: { href: 'https://github.com/nicejade/markdown-online-editor' } }, [
                  e('img', {
                    attrs: {
                      src: 'https://img.shields.io/github/license/nicejade/markdown-online-editor.svg',
                      alt: 'LICENSE'
                    }
                  })
                ]),
                this._v(' '),
                e('a', { attrs: { href: 'https://nicelinks.site/post/5c16083e819ae45de1453caa' } }, [
                  e('img', {
                    attrs: {
                      src: 'https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=flat',
                      alt: 'Prettier'
                    }
                  })
                ]),
                this._v(' '),
                e('a', { attrs: { href: 'https://www.jeffjade.com/2019/05/31/155-arya-markdown-online-editor/' } }, [
                  e('img', {
                    attrs: {
                      src: 'https://img.shields.io/badge/chat-on%20blog-brightgreen.svg',
                      alt: 'Arya - 在线 Markdown 编辑器'
                    }
                  })
                ]),
                this._v(' '),
                e('a', { attrs: { href: 'https://v2ex.com/t/623128' } }, [
                  e('img', {
                    attrs: { src: 'https://img.shields.io/badge/Chat-on%20v2ex-brightgreen.svg', alt: 'Chat On V2ex' }
                  })
                ]),
                this._v(' '),
                e('a', { attrs: { href: 'https://hacpai.com/article/1558270349379' } }, [
                  e('img', {
                    attrs: {
                      src: 'https://img.shields.io/badge/Chat-on%20hacpai-brightgreen.svg',
                      alt: 'Chat On Hacpai'
                    }
                  })
                ]),
                this._v(' '),
                e('a', { attrs: { href: 'https://weibo.com/aryamarkdown' } }, [
                  e('img', {
                    attrs: {
                      src: 'https://img.shields.io/badge/WeiBo-aryamarkdown-red.svg?style=flat',
                      alt: 'Arya - 在线 Markdown 编辑器'
                    }
                  })
                ]),
                this._v(' '),
                e('a', { attrs: { href: 'https://aboutme.lovejade.cn/?utm_source=github.com' } }, [
                  e('img', {
                    attrs: { src: 'https://img.shields.io/badge/Author-nicejade-%23a696c8.svg', alt: 'Author nicejade' }
                  })
                ])
              ])
            },
            function() {
              var t = this.$createElement,
                e = this._self._c || t
              return e('p', [
                this._v(
                  '如果您习惯使用中文，但项目又是国际化的，那不妨考虑以英文来书写 README，这似乎更有逼格（毕竟代码也是英文）；但为人性化考量，也应该提供其他语言版本 README，可以在'
                ),
                e('strong', [this._v('徽章')]),
                this._v('之下，添加网页跳转链接。')
              ])
            },
            function() {
              var t = this.$createElement,
                e = this._self._c || t
              return e('p', [
                e('img', {
                  attrs: {
                    src:
                      'https://user-images.githubusercontent.com/15773463/72075141-20cc6600-332e-11ea-8829-b42cdf61d12b.png',
                    alt: '如何为项目编写良好 README'
                  }
                })
              ])
            },
            function() {
              var t = this.$createElement,
                e = this._self._c || t
              return e('h2', { attrs: { id: '目标与哲学' } }, [
                e('a', { staticClass: 'header-anchor', attrs: { href: '#目标与哲学', 'aria-hidden': 'true' } }, [
                  this._v('#')
                ]),
                this._v(' 目标与哲学')
              ])
            },
            function() {
              var t = this.$createElement,
                e = this._self._c || t
              return e('h2', { attrs: { id: '先决条件' } }, [
                e('a', { staticClass: 'header-anchor', attrs: { href: '#先决条件', 'aria-hidden': 'true' } }, [
                  this._v('#')
                ]),
                this._v(' 先决条件')
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
                    this._v(' i\n')
                  ])
                ])
              ])
            },
            function() {
              var t = this.$createElement,
                e = this._self._c || t
              return e('h2', { attrs: { id: '用法' } }, [
                e('a', { staticClass: 'header-anchor', attrs: { href: '#用法', 'aria-hidden': 'true' } }, [
                  this._v('#')
                ]),
                this._v(' 用法')
              ])
            },
            function() {
              var t = this.$createElement,
                e = this._self._c || t
              return e('div', { staticClass: 'language-bash extra-class' }, [
                e('pre', { pre: !0, attrs: { class: 'language-bash' } }, [
                  e('code', [
                    e('span', { pre: !0, attrs: { class: 'token function' } }, [this._v('npm')]),
                    this._v(' start\n')
                  ])
                ])
              ])
            },
            function() {
              var t = this.$createElement,
                e = this._self._c || t
              return e('h2', { attrs: { id: '功能支持（可选）' } }, [
                e('a', { staticClass: 'header-anchor', attrs: { href: '#功能支持（可选）', 'aria-hidden': 'true' } }, [
                  this._v('#')
                ]),
                this._v(' 功能支持（可选）')
              ])
            },
            function() {
              var t = this.$createElement,
                e = this._self._c || t
              return e('h2', { attrs: { id: '屏幕截图（可选）' } }, [
                e('a', { staticClass: 'header-anchor', attrs: { href: '#屏幕截图（可选）', 'aria-hidden': 'true' } }, [
                  this._v('#')
                ]),
                this._v(' 屏幕截图（可选）')
              ])
            },
            function() {
              var t = this.$createElement,
                e = this._self._c || t
              return e('h2', { attrs: { id: '支持（可选）' } }, [
                e('a', { staticClass: 'header-anchor', attrs: { href: '#支持（可选）', 'aria-hidden': 'true' } }, [
                  this._v('#')
                ]),
                this._v(' 支持（可选）')
              ])
            },
            function() {
              var t = this.$createElement,
                e = this._self._c || t
              return e('h2', { attrs: { id: '测试（可选）' } }, [
                e('a', { staticClass: 'header-anchor', attrs: { href: '#测试（可选）', 'aria-hidden': 'true' } }, [
                  this._v('#')
                ]),
                this._v(' 测试（可选）')
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
                    e('span', { pre: !0, attrs: { class: 'token builtin class-name' } }, [this._v('test')]),
                    this._v('\n')
                  ])
                ])
              ])
            },
            function() {
              var t = this.$createElement,
                e = this._self._c || t
              return e('h2', { attrs: { id: '路线图（可选）' } }, [
                e('a', { staticClass: 'header-anchor', attrs: { href: '#路线图（可选）', 'aria-hidden': 'true' } }, [
                  this._v('#')
                ]),
                this._v(' 路线图（可选）')
              ])
            },
            function() {
              var t = this.$createElement,
                e = this._self._c || t
              return e('h2', { attrs: { id: '贡献（可选）' } }, [
                e('a', { staticClass: 'header-anchor', attrs: { href: '#贡献（可选）', 'aria-hidden': 'true' } }, [
                  this._v('#')
                ]),
                this._v(' 贡献（可选）')
              ])
            },
            function() {
              var t = this.$createElement,
                e = this._self._c || t
              return e('h2', { attrs: { id: '作者和致谢（可选）' } }, [
                e(
                  'a',
                  { staticClass: 'header-anchor', attrs: { href: '#作者和致谢（可选）', 'aria-hidden': 'true' } },
                  [this._v('#')]
                ),
                this._v(' 作者和致谢（可选）')
              ])
            },
            function() {
              var t = this.$createElement,
                e = this._self._c || t
              return e('h2', { attrs: { id: '执照' } }, [
                e('a', { staticClass: 'header-anchor', attrs: { href: '#执照', 'aria-hidden': 'true' } }, [
                  this._v('#')
                ]),
                this._v(' 执照')
              ])
            },
            function() {
              var t = this.$createElement,
                e = this._self._c || t
              return e('p', [
                this._v('版权所有 (c) 2020-至今，'),
                e('a', { attrs: { href: 'you-website-url' } }, [this._v('您的名字')]),
                this._v('。')
              ])
            },
            function() {
              var t = this.$createElement,
                e = this._self._c || t
              return e('h2', { attrs: { id: '项目状态（可选）' } }, [
                e('a', { staticClass: 'header-anchor', attrs: { href: '#项目状态（可选）', 'aria-hidden': 'true' } }, [
                  this._v('#')
                ]),
                this._v(' 项目状态（可选）')
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