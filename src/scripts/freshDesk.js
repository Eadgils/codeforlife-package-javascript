window.fwSettings = {
  widget_id: 77000000397,
}
!(function () {
  if ("function" != typeof window.FreshworksWidget) {
    var n = function () {
      n.q.push(arguments)
    }
    ;(n.q = []), (window.FreshworksWidget = n)
  }
})()

var FwBootstrap = (function (e) {
  var t = {}
  function n(s) {
    if (t[s]) return t[s].exports
    var i = (t[s] = { i: s, l: !1, exports: {} })
    return e[s].call(i.exports, i, i.exports, n), (i.l = !0), i.exports
  }
  return (
    (n.m = e),
    (n.c = t),
    (n.d = function (e, t, s) {
      n.o(e, t) || Object.defineProperty(e, t, { enumerable: !0, get: s })
    }),
    (n.r = function (e) {
      "undefined" != typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }),
        Object.defineProperty(e, "__esModule", { value: !0 })
    }),
    (n.t = function (e, t) {
      if ((1 & t && (e = n(e)), 8 & t)) return e
      if (4 & t && "object" == typeof e && e && e.__esModule) return e
      var s = Object.create(null)
      if (
        (n.r(s),
        Object.defineProperty(s, "default", { enumerable: !0, value: e }),
        2 & t && "string" != typeof e)
      )
        for (var i in e)
          n.d(
            s,
            i,
            function (t) {
              return e[t]
            }.bind(null, i),
          )
      return s
    }),
    (n.n = function (e) {
      var t =
        e && e.__esModule
          ? function () {
              return e.default
            }
          : function () {
              return e
            }
      return n.d(t, "a", t), t
    }),
    (n.o = function (e, t) {
      return Object.prototype.hasOwnProperty.call(e, t)
    }),
    (n.p = "https://euc-widget.freshworks.com/widgetBase/"),
    n((n.s = 0))
  )
})([
  function (e, t, n) {
    e.exports = n(2)
  },
  function (e, t) {
    e.exports =
      "https://euc-widget.freshworks.com/widgetBase/static/media/frame.d7ae132c.css"
  },
  function (e, t, n) {
    "use strict"
    n.r(t)
    var s = ["FrustrationTracking", "Predictive"],
      i = {
        boot: "queueComplete",
        open: "openWidget",
        close: "closeWidget",
        destroy: "destroyWidget",
        identify: "identifyFormFields",
        prefill: "prefillFormFields",
        clear: "clearFormFields",
        hide: "hideWidget",
        hideLauncher: "hideLauncher",
        showLauncher: "showLauncher",
        show: "showWidget",
        setLabels: "setLabels",
        updateSettings: "updateSettings",
        updatePreviewSettings: "updatePreviewSettings",
        updateTicketForms: "updateTicketForms",
        reloadComponents: "reloadComponents",
        authenticate: "authenticate",
        authenticateCallback: "authenticateCallback",
        logout: "logout",
        hideFormFields: "hideFormFields",
        disable: null,
        disableFormFields: "disableFormFields",
        hideChoices: "hideChoices",
      },
      o = {
        id: 1,
        product_id: 1,
        account_id: 1,
        name: "Help widget",
        settings: {
          message: "",
          button_text: "Help",
          contact_form: {
            form_type: 2,
            form_title: "",
            form_button_text: "Send",
            form_submit_message: "Thank you for your feedback.",
            attach_file: !0,
            screenshot: !0,
            captcha: !1,
          },
          appearance: {
            position: 1,
            offset_from_right: 30,
            offset_from_left: 30,
            offset_from_bottom: 30,
            theme_color: "#2392ec",
            button_color: "#16193e",
          },
          components: { contact_form: !0, solution_articles: !0 },
          predictive_support: {
            welcome_message: "",
            message:
              "We noticed youâ€™re stuck. Tell us what you were trying to accomplish, and our support team will reach out to you as soon as possible.",
            success_message: "Thanks. We'll be in touch!",
            domain_list: ["freshpo.com"],
          },
          hide_launcher_bydefault: !0,
        },
        active: !0,
        updated_at: "2018-10-01T14:16:05+05:30",
        account_url: "https://localhost.freshdesk-dev.com",
        recaptcha_enterprise: !1,
        languages: {
          primary: "en",
          supported: [
            "ca",
            "cs",
            "da",
            "de",
            "es-LA",
            "es",
            "et",
            "fi",
            "fr",
            "hu",
            "id",
            "it",
            "ja-JP",
            "ko",
            "nb-NO",
            "nl",
            "pl",
            "pt-BR",
            "pt-PT",
            "ru-RU",
            "sv-SE",
            "sk",
            "sl",
            "tr",
            "vi",
            "zh-CN",
            "uk",
            "th",
            "ro",
            "zh-TW",
            "lv-LV",
            "bs",
            "bg",
            "hr",
            "el",
            "ms",
            "lt",
            "sr",
          ],
        },
      }
    function r() {
      return window.fwSettings && window.fwSettings.preview
    }
    function a(e, t) {
      return e.indexOf(t) >= 0
    }
    var d = {
      init: function () {
        var e = window.fwSettings.widget_id
        if (e)
          if (((this.origin = window.location.origin), r())) {
            var t = o
            ;(t.id = e), this.initWidget(t, !0)
          } else {
            var n = ""
              .concat("https://euc-widget.freshworks.com", "/widgets/")
              .concat(e, ".json?randomId=")
              .concat(Math.random())
            this.fetchSettings(n, this.initWidget.bind(this))
          }
      },
      fetchSettings: function (e, t) {
        var n = new XMLHttpRequest()
        ;(n.onreadystatechange = function () {
          4 === n.readyState &&
            200 === n.status &&
            t(
              (function (e) {
                try {
                  return JSON.parse(e)
                } catch (t) {
                  return e
                }
              })(n.response),
            )
        }),
          n.open("get", e),
          (n.responseType = "json"),
          n.send()
      },
      showWidget: function (e) {
        var t = !1,
          n = e.meta,
          s = e.settings,
          i = e.components
        return (
          (i || s.components) &&
            [
              "contact_form",
              "solution_articles",
              "frustration_tracking",
              "predictive_support",
            ].forEach(function (e) {
              var o =
                n && n.data_version && i
                  ? i[e] && i[e].enabled
                  : s.components[e]
              t = t || Boolean(o)
            }),
          t
        )
      },
      initWidget: function (e) {
        var t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1]
        if (
          !(function (e) {
            return void 0 === e || null === e || 0 === Object.keys(e).length
          })(e) &&
          e &&
          this.showWidget(e)
        ) {
          ;(this.options = e), (window.fwSettings.originUrl = this.origin)
          var n = new URL(e.account_url).hostname
          if (!t && !/.*(\.freshdesk.com|\.freshpo.com)$/.test(n)) return
          ;(window.fwSettings.options = e),
            (this.messageHandler = this.handleMessage.bind(this)),
            this.createMountPoint(),
            this.loadIFrame(),
            this.loadJS()
        }
      },
      createMountPoint: function () {
        var e = document.createElement("div")
        ;(e.id = "freshworks-container"),
          (e.style.width = "0px"),
          (e.style.height = "0px"),
          (e.style.bottom = "0px"),
          (e.style.right = "0px"),
          (e.style.zIndex = Number.MAX_SAFE_INTEGER),
          e.setAttribute("data-html2canvas-ignore", !0),
          document.body.appendChild(e)
        var t = n(1),
          s = document.createElement("link")
        ;(s.id = "freshworks-frame"),
          (s.rel = "stylesheet"),
          (s.href = t),
          document.head.appendChild(s)
      },
      loadIFrame: function () {
        var e = document.createElement("iframe")
        e.setAttribute("title", "FreshworksWidget"),
          e.setAttribute("id", "freshworks-frame"),
          e.setAttribute("data-html2canvas-ignore", !0),
          (e.style.display = "none"),
          (e.onload = function () {
            var t = document.createElement("link")
            t.setAttribute("rel", "preconnect"),
              t.setAttribute(
                "href",
                "https://euc-widget.freshworks.com/widgetBase",
              ),
              e.contentDocument.head.appendChild(t)
          }),
          document.body.appendChild(e),
          (this._frame = e)
        var t = e.contentDocument || e.document
        t.open()
        var n = '<script src="'.concat(
          "https://euc-widget.freshworks.com/widgetBase",
          '/widget.js" async defer></script>',
        )
        t.write(n), t.close(), this.bindMessageHandler()
      },
      loadJS: function () {
        if (this.isFrustrationTrackingEnabled()) {
          var e = this.frustrationTrackingData()
          if (e && !window.FM && !r()) {
            var t = document.createElement("script")
            ;(t.src = ""
              .concat("https://cdn.freshmarketer.com", "/")
              .concat(e.org_id, "/")
              .concat(e.project_id, ".js")),
              (t.async = !0),
              document.body.appendChild(t)
          }
        }
      },
      helpWidgetMethods: function (e, t, n, s) {
        if (e && d[e] && a(Object.keys(i), e)) return d[e](t, n, s)
      },
      widgetRenderComplete: function () {
        if (document.body.contains(this._frame)) {
          var e = (window.FreshworksWidget && window.FreshworksWidget.q) || []
          ;(window.FreshworksWidget = this.helpWidgetMethods),
            e.forEach(function (e) {
              window.FreshworksWidget.apply(null, e)
            }),
            this.postMessage(i.boot)
        }
      },
      bindMessageHandler: function () {
        this.postMessageHandlerBound ||
          ((this.postMessageHandlerBound = !0),
          window.addEventListener
            ? window.addEventListener("message", this.messageHandler, !0)
            : window.attachEvent("message", this.messageHandler, !0))
      },
      unbindMessageHandler: function () {
        this.postMessageHandlerBound &&
          ((this.postMessageHandlerBound = !1),
          window.removeEventListener
            ? window.removeEventListener("message", this.messageHandler, !0)
            : window.detachEvent("message", this.messageHandler, !0))
      },
      handleMessage: function (e) {
        if (e.origin === this.origin || "file://" === this.origin) {
          var t = e.data,
            n = t.eventName,
            s = t.data
          ;(n || "function" == typeof this[n]) && this[n](s)
        }
      },
      postMessage: function (e) {
        var t =
          arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}
        this._frame.contentWindow.postMessage(
          { eventName: e, data: t },
          a(this.origin, "file://") ? null : this.origin,
        )
      },
      boot: function () {
        this.bindMessageHandler(),
          this._frame.contentWindow.Widget.mount(this.origin),
          this.postMessage(i.boot)
      },
      isFrustrationTrackingEnabled: function () {
        var e = this.options,
          t = e.meta,
          n = e.settings,
          s = e.components
        return t && t.data_version && s
          ? s.frustration_tracking && Boolean(s.frustration_tracking.enabled)
          : Boolean(n.components.predictive_support)
      },
      frustrationTrackingData: function () {
        var e = this.options,
          t = e.meta,
          n = e.settings,
          s = e.freshmarketer
        return t && t.data_version ? s : n.freshmarketer
      },
      open: function (e, t) {
        var n = (e || {}).widgetType
        if (e && n && a(s, n)) {
          if (!this.isFrustrationTrackingEnabled() && !r()) return
          this._frame.contentWindow.Widget.el ||
            this._frame.contentWindow.Widget.mount(this.origin, e.widgetType)
        }
        this.postMessage(i.open, { cardType: e, data: t })
      },
      close: function () {
        this.postMessage(i.close)
      },
      prefill: function (e, t, n) {
        this.postMessage(i.prefill, { formName: e, formFields: t, options: n })
      },
      identify: function (e, t) {
        this.postMessage(i.identify, { formName: e, formFields: t })
      },
      disable: function (e, t, n) {
        this.postMessage(i.disableFormFields, {
          formName: e,
          formFields: t,
          options: n,
        })
      },
      clear: function (e, t) {
        this.postMessage(i.clear, { formName: e, options: t })
      },
      hide: function (e, t, n) {
        e
          ? t
            ? this.postMessage(i.hideFormFields, {
                formName: e,
                formFields: t,
                options: n,
              })
            : "launcher" === e && this.postMessage(i.hideLauncher)
          : this.postMessage(i.hide)
      },
      show: function (e) {
        "launcher" === e
          ? this.postMessage(i.showLauncher)
          : this.postMessage(i.show)
      },
      hideChoices: function (e, t, n) {
        this.postMessage(i.hideChoices, {
          formName: e,
          formFieldsAndChoices: t,
          options: n,
        })
      },
      setLabels: function (e) {
        this.postMessage(i.setLabels, e)
      },
      updateSettings: function (e) {
        this.postMessage(i.updateSettings, e)
      },
      updatePreviewSettings: function (e) {
        this.postMessage(i.updatePreviewSettings, e)
      },
      updateTicketForms: function (e) {
        this.postMessage(i.updateTicketForms, e)
      },
      reloadComponents: function () {
        this.postMessage(i.reloadComponents)
      },
      destroy: function () {
        this._frame.contentWindow.Widget.unmount(), this.unbindMessageHandler()
      },
      authenticate: function (e) {
        var t = e.callback,
          n = e.token,
          s = t && "function" == typeof t,
          o = "function" == typeof this.authenticateCallback,
          r = s || o
        s && (this.authenticateCallback = t),
          this.postMessage(i.authenticate, { token: n, hasCallback: r })
      },
      logout: function () {
        this.postMessage(i.logout)
      },
    }
    d.init()
  },
])
