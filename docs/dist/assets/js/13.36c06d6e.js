;(window.webpackJsonp = window.webpackJsonp || []).push([
  [13],
  {
    235: function(t, s, i) {
      'use strict'
      i.r(s)
      var c = {
          props: ['text'],
          methods: {
            click() {
              this.$emit('click')
            }
          }
        },
        e = i(1),
        n = Object(e.a)(
          c,
          function() {
            var t = this.$createElement,
              s = this._self._c || t
            return s('a', { staticClass: 'gt-action', on: { click: this.click } }, [
              s('span', { staticClass: 'gt-action-text' }, [this._v(this._s(this.text))])
            ])
          },
          [],
          !1,
          null,
          null,
          null
        )
      s.default = n.exports
    }
  }
])