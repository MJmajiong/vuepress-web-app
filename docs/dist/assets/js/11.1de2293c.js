;(window.webpackJsonp = window.webpackJsonp || []).push([
  [11],
  {
    216: function(t, n, e) {},
    300: function(t, n, e) {
      'use strict'
      var r = e(216)
      e.n(r).a
    },
    308: function(t, n, e) {
      'use strict'
      e.r(n)
      var r = {
          name: 'Contact',
          computed: {
            contacts() {
              return this.$page.frontmatter.contacts
            }
          },
          mounted() {},
          methods: {}
        },
        a = (e(300), e(1)),
        c = Object(a.a)(
          r,
          function() {
            var t = this,
              n = t.$createElement,
              e = t._self._c || n
            return e(
              'div',
              { staticClass: 'contact-moudle' },
              t._l(t.contacts, function(n) {
                return e(
                  'a',
                  {
                    key: n.type,
                    staticClass: 'link-item',
                    attrs: { href: n.href, target: '_blank', rel: 'noreferrer noopener' }
                  },
                  [t._v('\n    ' + t._s(n.desc) + '\n  ')]
                )
              }),
              0
            )
          },
          [],
          !1,
          null,
          null,
          null
        )
      n.default = c.exports
    }
  }
])