;(window.webpackJsonp = window.webpackJsonp || []).push([
  [12],
  {
    207: function(t, e, n) {},
    237: function(t, e, n) {
      'use strict'
      var a = n(207)
      n.n(a).a
    },
    309: function(t, e, n) {
      'use strict'
      n.r(e)
      var a = {
          functional: !0,
          props: { type: { type: String, default: 'tip' }, text: String, vertical: { type: String, default: 'top' } },
          render: (t, { props: e, slots: n }) =>
            t('span', { class: ['badge', e.type, e.vertical] }, e.text || n().default)
        },
        p = (n(237), n(1)),
        i = Object(p.a)(a, void 0, void 0, !1, null, '099ab69c', null)
      e.default = i.exports
    }
  }
])
