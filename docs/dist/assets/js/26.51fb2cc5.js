;(window.webpackJsonp = window.webpackJsonp || []).push([
  [26],
  {
    321: function(t, s, e) {
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
                e('p', [
                  t._v('在使用 '),
                  e(
                    'a',
                    {
                      attrs: {
                        href: 'https://www.jeffjade.com/tags/Git/',
                        target: '_blank',
                        rel: 'noopener noreferrer'
                      }
                    },
                    [t._v('Git'), e('OutboundLink')],
                    1
                  ),
                  t._v(
                    ' 这款版本控制工具，来管理项目代码，蛮多的时候，会涉及到“删除 Git 仓库新增修改”这样的诉求；如果能快速优雅做到，将会促进开发效率；这篇文章即在于，从不同诉求角度，来逐一探讨：“如何快速删除 Git 仓库新增修改”。'
                  )
                ]),
                t._v(' '),
                t._m(0),
                t._v(' '),
                t._m(1),
                t._v(' '),
                t._m(2),
                t._v(' '),
                t._m(3),
                t._v(' '),
                t._m(4),
                t._m(5),
                t._v(' '),
                t._m(6),
                t._m(7),
                t._v(' '),
                t._m(8),
                t._m(9),
                t._v(' '),
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
                t._v(' '),
                t._m(17),
                t._m(18),
                t._v(' '),
                t._m(19),
                t._m(20),
                t._v(' '),
                t._m(21),
                t._m(22),
                t._v(' '),
                e('p', [t._v('@2019-11-02 于深圳.福田 Last Modify：2019-11-02')]),
                t._v(' '),
                e('blockquote', [
                  e('p', [
                    t._v('原文首链：'),
                    e(
                      'a',
                      {
                        attrs: {
                          href: 'https://quickapp.lovejade.cn/how-to-quickly-delete-git-repository-new-changes',
                          target: '_blank',
                          rel: 'noopener noreferrer'
                        }
                      },
                      [t._v('如何快速删除 Git 仓库新增修改'), e('OutboundLink')],
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
                s('img', {
                  attrs: {
                    src: 'https://image.nicelinks.site/how-to-quickly-delete-git-repository-new-changes.jpeg',
                    alt: '如何快速删除 Git 仓库新增修改'
                  }
                })
              ])
            },
            function() {
              var t = this.$createElement,
                s = this._self._c || t
              return s('h2', { attrs: { id: '只删除已追踪的文件' } }, [
                s(
                  'a',
                  { staticClass: 'header-anchor', attrs: { href: '#只删除已追踪的文件', 'aria-hidden': 'true' } },
                  [this._v('#')]
                ),
                this._v(' 只删除已追踪的文件')
              ])
            },
            function() {
              var t = this.$createElement,
                s = this._self._c || t
              return s('p', [
                this._v('在 Git 项目中，可以在 '),
                s('code', [this._v('.gitignore')]),
                this._v(' 文件，对一些不需要提交到代码仓库的文件（夹）加以忽视；对于这类文件，还有尚未提交到'),
                s('code', [this._v('本地暂存区')]),
                this._v(
                  '的内容，都是未追踪文件（untracked files），在处理时候，方式略有不同。如果只是删除已追踪的文件，可以有以下两种方法：'
                )
              ])
            },
            function() {
              var t = this.$createElement,
                s = this._self._c || t
              return s('h3', { attrs: { id: 'git-checkout' } }, [
                s('a', { staticClass: 'header-anchor', attrs: { href: '#git-checkout', 'aria-hidden': 'true' } }, [
                  this._v('#')
                ]),
                this._v(' git checkout')
              ])
            },
            function() {
              var t = this,
                s = t.$createElement,
                e = t._self._c || s
              return e('div', { staticClass: 'language-bash extra-class' }, [
                e('pre', { pre: !0, attrs: { class: 'language-bash' } }, [
                  e('code', [
                    e('span', { pre: !0, attrs: { class: 'token comment' } }, [t._v('# 删除所有已追踪修改')]),
                    t._v('\n'),
                    e('span', { pre: !0, attrs: { class: 'token function' } }, [t._v('git')]),
                    t._v(' checkout  '),
                    e('span', { pre: !0, attrs: { class: 'token builtin class-name' } }, [t._v('.')]),
                    t._v('\n\n'),
                    e('span', { pre: !0, attrs: { class: 'token comment' } }, [t._v('# 删除指定文件')]),
                    t._v('\n'),
                    e('span', { pre: !0, attrs: { class: 'token function' } }, [t._v('git')]),
                    t._v(' checkout -- your-modified-filename\n\n'),
                    e('span', { pre: !0, attrs: { class: 'token comment' } }, [
                      t._v('# 删除指定文件夹内所有已追踪修改')
                    ]),
                    t._v('\n'),
                    e('span', { pre: !0, attrs: { class: 'token function' } }, [t._v('git')]),
                    t._v(' checkout -- your-modified-dir\n')
                  ])
                ])
              ])
            },
            function() {
              var t = this.$createElement,
                s = this._self._c || t
              return s('h3', { attrs: { id: 'git-reset' } }, [
                s('a', { staticClass: 'header-anchor', attrs: { href: '#git-reset', 'aria-hidden': 'true' } }, [
                  this._v('#')
                ]),
                this._v(' git reset')
              ])
            },
            function() {
              var t = this.$createElement,
                s = this._self._c || t
              return s('div', { staticClass: 'language-bash extra-class' }, [
                s('pre', { pre: !0, attrs: { class: 'language-bash' } }, [
                  s('code', [
                    s('span', { pre: !0, attrs: { class: 'token comment' } }, [this._v('# 删除所有已追踪修改')]),
                    this._v('\n'),
                    s('span', { pre: !0, attrs: { class: 'token function' } }, [this._v('git')]),
                    this._v(' reset --hard\n')
                  ])
                ])
              ])
            },
            function() {
              var t = this.$createElement,
                s = this._self._c || t
              return s('h3', { attrs: { id: 'git-stash' } }, [
                s('a', { staticClass: 'header-anchor', attrs: { href: '#git-stash', 'aria-hidden': 'true' } }, [
                  this._v('#')
                ]),
                this._v(' git stash')
              ])
            },
            function() {
              var t = this.$createElement,
                s = this._self._c || t
              return s('div', { staticClass: 'language-bash extra-class' }, [
                s('pre', { pre: !0, attrs: { class: 'language-bash' } }, [
                  s('code', [
                    s('span', { pre: !0, attrs: { class: 'token comment' } }, [this._v('# 删除所已追踪修改')]),
                    this._v('\n'),
                    s('span', { pre: !0, attrs: { class: 'token function' } }, [this._v('git')]),
                    this._v(' stash\n'),
                    s('span', { pre: !0, attrs: { class: 'token function' } }, [this._v('git')]),
                    this._v(' stash drop\n')
                  ])
                ])
              ])
            },
            function() {
              var t = this.$createElement,
                s = this._self._c || t
              return s('p', [
                this._v('在用这种方法时候，还需要考虑“储藏区”是否有其他内容；很明显可以看出来，使用 '),
                s('code', [this._v('git checkout')]),
                this._v(' 是最为灵活且快捷的方式。')
              ])
            },
            function() {
              var t = this.$createElement,
                s = this._self._c || t
              return s('h2', { attrs: { id: '只删除未追踪的文件' } }, [
                s(
                  'a',
                  { staticClass: 'header-anchor', attrs: { href: '#只删除未追踪的文件', 'aria-hidden': 'true' } },
                  [this._v('#')]
                ),
                this._v(' 只删除未追踪的文件')
              ])
            },
            function() {
              var t = this.$createElement,
                s = this._self._c || t
              return s('p', [
                this._v(
                  '对于新增了一个未追踪的文件，直接在控制台、编辑器，就可以手动移除；但，如果是很多个，就需要用些方法，才会更加高效。比较推荐的方法是使用 '
                ),
                s('code', [this._v('git clean')]),
                this._v(':')
              ])
            },
            function() {
              var t = this,
                s = t.$createElement,
                e = t._self._c || s
              return e('div', { staticClass: 'language-bash extra-class' }, [
                e('pre', { pre: !0, attrs: { class: 'language-bash' } }, [
                  e('code', [
                    e('span', { pre: !0, attrs: { class: 'token comment' } }, [t._v('# 删除 untracked files')]),
                    t._v('\n'),
                    e('span', { pre: !0, attrs: { class: 'token function' } }, [t._v('git')]),
                    t._v(' clean -f\n\n'),
                    e('span', { pre: !0, attrs: { class: 'token comment' } }, [
                      t._v('# 连 untracked 的目录也一起删掉')
                    ]),
                    t._v('\n'),
                    e('span', { pre: !0, attrs: { class: 'token function' } }, [t._v('git')]),
                    t._v(' clean -fd\n\n'),
                    e('span', { pre: !0, attrs: { class: 'token comment' } }, [
                      t._v('# 连 gitignore 的 untrack 文件/目录也一起删掉 （慎用）')
                    ]),
                    t._v('\n'),
                    e('span', { pre: !0, attrs: { class: 'token function' } }, [t._v('git')]),
                    t._v(' clean -xfd\n')
                  ])
                ])
              ])
            },
            function() {
              var t = this.$createElement,
                s = this._self._c || t
              return s('p', [
                this._v('可以根据自己的诉求，附带合适的参数来运行命令；一般采用 '),
                s('code', [this._v('git clean -fd')]),
                this._v(' 即可。但，为数据安全烤箱，强烈建议在运行删除命令前，加上 '),
                s('code', [this._v('-n')]),
                this._v(' 参数，先看看会删掉哪些文件，以防止重要文件被误删。如下面示例：')
              ])
            },
            function() {
              var t = this.$createElement,
                s = this._self._c || t
              return s('div', { staticClass: 'language-bash extra-class' }, [
                s('pre', { pre: !0, attrs: { class: 'language-bash' } }, [
                  s('code', [
                    s('span', { pre: !0, attrs: { class: 'token function' } }, [this._v('git')]),
                    this._v(' clean -nfd\n// Would remove xxx\n// Would remove yyy\n')
                  ])
                ])
              ])
            },
            function() {
              var t = this.$createElement,
                s = this._self._c || t
              return s('h2', { attrs: { id: '删除本地修改的所有文件' } }, [
                s(
                  'a',
                  { staticClass: 'header-anchor', attrs: { href: '#删除本地修改的所有文件', 'aria-hidden': 'true' } },
                  [this._v('#')]
                ),
                this._v(' 删除本地修改的所有文件')
              ])
            },
            function() {
              var t = this.$createElement,
                s = this._self._c || t
              return s('p', [
                this._v('对于所做的修改，却还没有提交（'),
                s('code', [this._v('git add')]),
                this._v('）的内容，结合上面 👆 的总结，运行如下命令即可：')
              ])
            },
            function() {
              var t = this,
                s = t.$createElement,
                e = t._self._c || s
              return e('div', { staticClass: 'language-bash extra-class' }, [
                e('pre', { pre: !0, attrs: { class: 'language-bash' } }, [
                  e('code', [
                    e('span', { pre: !0, attrs: { class: 'token function' } }, [t._v('git')]),
                    t._v(' checkout  '),
                    e('span', { pre: !0, attrs: { class: 'token builtin class-name' } }, [t._v('.')]),
                    t._v(' '),
                    e('span', { pre: !0, attrs: { class: 'token operator' } }, [t._v('&&')]),
                    t._v(' '),
                    e('span', { pre: !0, attrs: { class: 'token function' } }, [t._v('git')]),
                    t._v(' clean -fd\n'),
                    e('span', { pre: !0, attrs: { class: 'token comment' } }, [t._v('# Or')]),
                    t._v('\n'),
                    e('span', { pre: !0, attrs: { class: 'token function' } }, [t._v('git')]),
                    t._v(' checkout  '),
                    e('span', { pre: !0, attrs: { class: 'token builtin class-name' } }, [t._v('.')]),
                    t._v(' '),
                    e('span', { pre: !0, attrs: { class: 'token operator' } }, [t._v('&&')]),
                    t._v(' '),
                    e('span', { pre: !0, attrs: { class: 'token function' } }, [t._v('git')]),
                    t._v(' clean -xfd\n')
                  ])
                ])
              ])
            },
            function() {
              var t = this.$createElement,
                s = this._self._c || t
              return s('p', [
                this._v('如果有些内容，已经 '),
                s('code', [this._v('git add')]),
                this._v(' 添加至暂存区，也要丢弃删除的话，可以如下操作：')
              ])
            },
            function() {
              var t = this,
                s = t.$createElement,
                e = t._self._c || s
              return e('div', { staticClass: 'language-bash extra-class' }, [
                e('pre', { pre: !0, attrs: { class: 'language-bash' } }, [
                  e('code', [
                    e('span', { pre: !0, attrs: { class: 'token function' } }, [t._v('git')]),
                    t._v(' reset '),
                    e('span', { pre: !0, attrs: { class: 'token operator' } }, [t._v('&&')]),
                    t._v(' '),
                    e('span', { pre: !0, attrs: { class: 'token function' } }, [t._v('git')]),
                    t._v(' checkout  '),
                    e('span', { pre: !0, attrs: { class: 'token builtin class-name' } }, [t._v('.')]),
                    t._v(' '),
                    e('span', { pre: !0, attrs: { class: 'token operator' } }, [t._v('&&')]),
                    t._v(' '),
                    e('span', { pre: !0, attrs: { class: 'token function' } }, [t._v('git')]),
                    t._v(' clean -fd\n'),
                    e('span', { pre: !0, attrs: { class: 'token comment' } }, [t._v('# Or')]),
                    t._v('\n'),
                    e('span', { pre: !0, attrs: { class: 'token function' } }, [t._v('git')]),
                    t._v(' reset '),
                    e('span', { pre: !0, attrs: { class: 'token operator' } }, [t._v('&&')]),
                    t._v(' '),
                    e('span', { pre: !0, attrs: { class: 'token function' } }, [t._v('git')]),
                    t._v(' checkout  '),
                    e('span', { pre: !0, attrs: { class: 'token builtin class-name' } }, [t._v('.')]),
                    t._v(' '),
                    e('span', { pre: !0, attrs: { class: 'token operator' } }, [t._v('&&')]),
                    t._v(' '),
                    e('span', { pre: !0, attrs: { class: 'token function' } }, [t._v('git')]),
                    t._v(' clean -xfd\n')
                  ])
                ])
              ])
            },
            function() {
              var t = this.$createElement,
                s = this._self._c || t
              return s('p', [
                this._v('倘若说部分内容，用 '),
                s('code', [this._v('git commit')]),
                this._v(' 将暂存区里的改动给提交到本地的版本库，也要丢弃删除的话，可以如下操作：')
              ])
            },
            function() {
              var t = this,
                s = t.$createElement,
                e = t._self._c || s
              return e('div', { staticClass: 'language-bash extra-class' }, [
                e('pre', { pre: !0, attrs: { class: 'language-bash' } }, [
                  e('code', [
                    e('span', { pre: !0, attrs: { class: 'token function' } }, [t._v('git')]),
                    t._v(' reset --hard HEAD^ '),
                    e('span', { pre: !0, attrs: { class: 'token operator' } }, [t._v('&&')]),
                    t._v(' '),
                    e('span', { pre: !0, attrs: { class: 'token function' } }, [t._v('git')]),
                    t._v(' checkout  '),
                    e('span', { pre: !0, attrs: { class: 'token builtin class-name' } }, [t._v('.')]),
                    t._v(' '),
                    e('span', { pre: !0, attrs: { class: 'token operator' } }, [t._v('&&')]),
                    t._v(' '),
                    e('span', { pre: !0, attrs: { class: 'token function' } }, [t._v('git')]),
                    t._v(' clean -fd\n'),
                    e('span', { pre: !0, attrs: { class: 'token comment' } }, [t._v('# Or')]),
                    t._v('\n'),
                    e('span', { pre: !0, attrs: { class: 'token function' } }, [t._v('git')]),
                    t._v(' reset --hard Last-Commit-ID '),
                    e('span', { pre: !0, attrs: { class: 'token operator' } }, [t._v('&&')]),
                    t._v(' '),
                    e('span', { pre: !0, attrs: { class: 'token function' } }, [t._v('git')]),
                    t._v(' checkout  '),
                    e('span', { pre: !0, attrs: { class: 'token builtin class-name' } }, [t._v('.')]),
                    t._v(' '),
                    e('span', { pre: !0, attrs: { class: 'token operator' } }, [t._v('&&')]),
                    t._v(' '),
                    e('span', { pre: !0, attrs: { class: 'token function' } }, [t._v('git')]),
                    t._v(' clean -fd\n')
                  ])
                ])
              ])
            },
            function() {
              var t = this.$createElement,
                s = this._self._c || t
              return s('p', [
                this._v('以上，即对'),
                s('a', { attrs: { href: '' } }, [this._v('如何快速删除 Git 仓库新增修改')]),
                this._v('的一些总结，如有更加便捷的办法，欢迎留言相告。')
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