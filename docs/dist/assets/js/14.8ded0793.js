;(window.webpackJsonp = window.webpackJsonp || []).push([
  [14],
  {
    234: function(t, s, i) {
      'use strict'
      i.r(s)
      var n = {
          props: ['isLoading'],
          methods: {
            click() {
              this.$emit('click')
            }
          }
        },
        c = i(1),
        e = Object(c.a)(
          n,
          function() {
            var t = this.$createElement,
              s = this._self._c || t
            return s(
              'button',
              { staticClass: 'gt-btn', on: { click: this.click } },
              [
                this._t('default'),
                this._v(' '),
                this.isLoading ? s('span', { staticClass: 'gt-btn-loading gt-spinner' }) : this._e()
              ],
              2
            )
          },
          [],
          !1,
          null,
          null,
          null
        )
      s.default = e.exports
    }
  }
])
