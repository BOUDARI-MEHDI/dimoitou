// Copyright 2012 Google Inc. All rights reserved.
(function() {
  var data = {
    resource: {
      version: "1",

      macros: [],
      tags: [],
      predicates: [],
      rules: [],
    },
    runtime: [],
  };
  /*

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/
  var aa,
    ba =
      "function" == typeof Object.create
        ? Object.create
        : function(a) {
            var b = function() {};
            b.prototype = a;
            return new b();
          },
    ea;
  if ("function" == typeof Object.setPrototypeOf) ea = Object.setPrototypeOf;
  else {
    var fa;
    a: {
      var ha = { uf: !0 },
        ia = {};
      try {
        ia.__proto__ = ha;
        fa = ia.uf;
        break a;
      } catch (a) {}
      fa = !1;
    }
    ea = fa
      ? function(a, b) {
          a.__proto__ = b;
          if (a.__proto__ !== b) throw new TypeError(a + " is not extensible");
          return a;
        }
      : null;
  }
  var ja = ea,
    ka = this || self,
    la = /^[\w+/_-]+[=]{0,2}$/,
    na = null;
  var oa = function() {},
    pa = function(a) {
      return "function" == typeof a;
    },
    g = function(a) {
      return "string" == typeof a;
    },
    qa = function(a) {
      return "number" == typeof a && !isNaN(a);
    },
    ra = function(a) {
      return "[object Array]" == Object.prototype.toString.call(Object(a));
    },
    q = function(a, b) {
      if (Array.prototype.indexOf) {
        var c = a.indexOf(b);
        return "number" == typeof c ? c : -1;
      }
      for (var d = 0; d < a.length; d++) if (a[d] === b) return d;
      return -1;
    },
    va = function(a, b) {
      if (a && ra(a))
        for (var c = 0; c < a.length; c++) if (a[c] && b(a[c])) return a[c];
    },
    wa = function(a, b) {
      if (!qa(a) || !qa(b) || a > b) (a = 0), (b = 2147483647);
      return Math.floor(Math.random() * (b - a + 1) + a);
    },
    ya = function(a, b) {
      for (var c = new xa(), d = 0; d < a.length; d++) c.set(a[d], !0);
      for (var e = 0; e < b.length; e++) if (c.get(b[e])) return !0;
      return !1;
    },
    C = function(a, b) {
      for (var c in a) Object.prototype.hasOwnProperty.call(a, c) && b(c, a[c]);
    },
    za = function(a) {
      return Math.round(Number(a)) || 0;
    },
    Aa = function(a) {
      return "false" == String(a).toLowerCase() ? !1 : !!a;
    },
    Ba = function(a) {
      var b = [];
      if (ra(a)) for (var c = 0; c < a.length; c++) b.push(String(a[c]));
      return b;
    },
    Ca = function(a) {
      return a ? a.replace(/^\s+|\s+$/g, "") : "";
    },
    Ea = function() {
      return new Date().getTime();
    },
    xa = function() {
      this.prefix = "gtm.";
      this.values = {};
    };
  xa.prototype.set = function(a, b) {
    this.values[this.prefix + a] = b;
  };
  xa.prototype.get = function(a) {
    return this.values[this.prefix + a];
  };
  var Fa = function(a, b, c) {
      return a && a.hasOwnProperty(b) ? a[b] : c;
    },
    Ga = function(a) {
      var b = !1;
      return function() {
        if (!b)
          try {
            a();
          } catch (c) {}
        b = !0;
      };
    },
    Ha = function(a, b) {
      for (var c in b) b.hasOwnProperty(c) && (a[c] = b[c]);
    },
    Ia = function(a) {
      for (var b in a) if (a.hasOwnProperty(b)) return !0;
      return !1;
    },
    Ja = function(a, b) {
      for (var c = [], d = 0; d < a.length; d++)
        c.push(a[d]), c.push.apply(c, b[a[d]] || []);
      return c;
    },
    Ka = function(a, b) {
      for (var c = {}, d = c, e = a.split("."), f = 0; f < e.length - 1; f++)
        d = d[e[f]] = {};
      d[e[e.length - 1]] = b;
      return c;
    },
    La = function(a) {
      var b = [];
      C(a, function(c, d) {
        10 > c.length && d && b.push(c);
      });
      return b.join(",");
    }; /*
 jQuery v1.9.1 (c) 2005, 2012 jQuery Foundation, Inc. jquery.org/license. */
  var Ma = /\[object (Boolean|Number|String|Function|Array|Date|RegExp)\]/,
    Na = function(a) {
      if (null == a) return String(a);
      var b = Ma.exec(Object.prototype.toString.call(Object(a)));
      return b ? b[1].toLowerCase() : "object";
    },
    Oa = function(a, b) {
      return Object.prototype.hasOwnProperty.call(Object(a), b);
    },
    Pa = function(a) {
      if (!a || "object" != Na(a) || a.nodeType || a == a.window) return !1;
      try {
        if (
          a.constructor &&
          !Oa(a, "constructor") &&
          !Oa(a.constructor.prototype, "isPrototypeOf")
        )
          return !1;
      } catch (c) {
        return !1;
      }
      for (var b in a);
      return void 0 === b || Oa(a, b);
    },
    D = function(a, b) {
      var c = b || ("array" == Na(a) ? [] : {}),
        d;
      for (d in a)
        if (Oa(a, d)) {
          var e = a[d];
          "array" == Na(e)
            ? ("array" != Na(c[d]) && (c[d] = []), (c[d] = D(e, c[d])))
            : Pa(e)
            ? (Pa(c[d]) || (c[d] = {}), (c[d] = D(e, c[d])))
            : (c[d] = e);
        }
      return c;
    };
  var ob;
  var pb = [],
    qb = [],
    rb = [],
    sb = [],
    tb = [],
    ub = {},
    vb,
    xb,
    yb,
    zb = function(a, b) {
      var c = {};
      c["function"] = "__" + a;
      for (var d in b) b.hasOwnProperty(d) && (c["vtp_" + d] = b[d]);
      return c;
    },
    Ab = function(a, b) {
      var c = a["function"];
      if (!c) throw Error("Error: No function name given for function call.");
      var d = ub[c],
        e = {},
        f;
      for (f in a)
        a.hasOwnProperty(f) &&
          0 === f.indexOf("vtp_") &&
          (e[void 0 !== d ? f : f.substr(4)] = a[f]);
      return void 0 !== d ? d(e) : ob(c, e, b);
    },
    Cb = function(a, b, c) {
      c = c || [];
      var d = {},
        e;
      for (e in a) a.hasOwnProperty(e) && (d[e] = Bb(a[e], b, c));
      return d;
    },
    Db = function(a) {
      var b = a["function"];
      if (!b) throw "Error: No function name given for function call.";
      var c = ub[b];
      return c ? c.priorityOverride || 0 : 0;
    },
    Bb = function(a, b, c) {
      if (ra(a)) {
        var d;
        switch (a[0]) {
          case "function_id":
            return a[1];
          case "list":
            d = [];
            for (var e = 1; e < a.length; e++) d.push(Bb(a[e], b, c));
            return d;
          case "macro":
            var f = a[1];
            if (c[f]) return;
            var h = pb[f];
            if (!h || b.Qc(h)) return;
            c[f] = !0;
            try {
              var k = Cb(h, b, c);
              k.vtp_gtmEventId = b.id;
              d = Ab(k, b);
              yb && (d = yb.Tf(d, k));
            } catch (x) {
              b.xe && b.xe(x, Number(f)), (d = !1);
            }
            c[f] = !1;
            return d;
          case "map":
            d = {};
            for (var l = 1; l < a.length; l += 2)
              d[Bb(a[l], b, c)] = Bb(a[l + 1], b, c);
            return d;
          case "template":
            d = [];
            for (var m = !1, n = 1; n < a.length; n++) {
              var r = Bb(a[n], b, c);
              xb && (m = m || r === xb.yb);
              d.push(r);
            }
            return xb && m ? xb.Wf(d) : d.join("");
          case "escape":
            d = Bb(a[1], b, c);
            if (xb && ra(a[1]) && "macro" === a[1][0] && xb.ug(a))
              return xb.Og(d);
            d = String(d);
            for (var t = 2; t < a.length; t++) Qa[a[t]] && (d = Qa[a[t]](d));
            return d;
          case "tag":
            var p = a[1];
            if (!sb[p])
              throw Error("Unable to resolve tag reference " + p + ".");
            return (d = { ke: a[2], index: p });
          case "zb":
            var u = { arg0: a[2], arg1: a[3], ignore_case: a[5] };
            u["function"] = a[1];
            var v = Eb(u, b, c),
              w = !!a[4];
            return w || 2 !== v ? w !== (1 === v) : null;
          default:
            throw Error(
              "Attempting to expand unknown Value type: " + a[0] + "."
            );
        }
      }
      return a;
    },
    Eb = function(a, b, c) {
      try {
        return vb(Cb(a, b, c));
      } catch (d) {
        JSON.stringify(a);
      }
      return 2;
    };
  var Fb = (function() {
    var a = function(b) {
      return {
        toString: function() {
          return b;
        },
      };
    };
    return {
      vd: a("convert_case_to"),
      wd: a("convert_false_to"),
      xd: a("convert_null_to"),
      yd: a("convert_true_to"),
      zd: a("convert_undefined_to"),
      wh: a("debug_mode_metadata"),
      sa: a("function"),
      Ve: a("instance_name"),
      Ze: a("live_only"),
      af: a("malware_disabled"),
      bf: a("metadata"),
      xh: a("original_vendor_template_id"),
      ff: a("once_per_event"),
      Hd: a("once_per_load"),
      Pd: a("setup_tags"),
      Rd: a("tag_id"),
      Sd: a("teardown_tags"),
    };
  })();
  var Gb = null,
    Kb = function(a) {
      function b(r) {
        for (var t = 0; t < r.length; t++) d[r[t]] = !0;
      }
      var c = [],
        d = [];
      Gb = Hb(a);
      for (var e = 0; e < qb.length; e++) {
        var f = qb[e],
          h = Jb(f);
        if (h) {
          for (var k = f.add || [], l = 0; l < k.length; l++) c[k[l]] = !0;
          b(f.block || []);
        } else null === h && b(f.block || []);
      }
      for (var m = [], n = 0; n < sb.length; n++) c[n] && !d[n] && (m[n] = !0);
      return m;
    },
    Jb = function(a) {
      for (var b = a["if"] || [], c = 0; c < b.length; c++) {
        var d = Gb(b[c]);
        if (0 === d) return !1;
        if (2 === d) return null;
      }
      for (var e = a.unless || [], f = 0; f < e.length; f++) {
        var h = Gb(e[f]);
        if (2 === h) return null;
        if (1 === h) return !1;
      }
      return !0;
    },
    Hb = function(a) {
      var b = [];
      return function(c) {
        void 0 === b[c] && (b[c] = Eb(rb[c], a));
        return b[c];
      };
    }; /*
 Copyright (c) 2014 Derek Brans, MIT license https://github.com/krux/postscribe/blob/master/LICENSE. Portions derived from simplehtmlparser, which is licensed under the Apache License, Version 2.0 */
  var F = window,
    G = document,
    ec = navigator,
    fc = G.currentScript && G.currentScript.src,
    gc = function(a, b) {
      var c = F[a];
      F[a] = void 0 === c ? b : c;
      return F[a];
    },
    hc = function(a, b) {
      b &&
        (a.addEventListener
          ? (a.onload = b)
          : (a.onreadystatechange = function() {
              a.readyState in { loaded: 1, complete: 1 } &&
                ((a.onreadystatechange = null), b());
            }));
    },
    ic = function(a, b, c) {
      var d = G.createElement("script");
      d.type = "text/javascript";
      d.async = !0;
      d.src = a;
      hc(d, b);
      c && (d.onerror = c);
      var e;
      if (null === na)
        b: {
          var f = ka.document,
            h = f.querySelector && f.querySelector("script[nonce]");
          if (h) {
            var k = h.nonce || h.getAttribute("nonce");
            if (k && la.test(k)) {
              na = k;
              break b;
            }
          }
          na = "";
        }
      e = na;
      e && d.setAttribute("nonce", e);
      var l = G.getElementsByTagName("script")[0] || G.body || G.head;
      l.parentNode.insertBefore(d, l);
      return d;
    },
    jc = function() {
      if (fc) {
        var a = fc.toLowerCase();
        if (0 === a.indexOf("https://")) return 2;
        if (0 === a.indexOf("http://")) return 3;
      }
      return 1;
    },
    kc = function(a, b) {
      var c = G.createElement("iframe");
      c.height = "0";
      c.width = "0";
      c.style.display = "none";
      c.style.visibility = "hidden";
      var d = (G.body && G.body.lastChild) || G.body || G.head;
      d.parentNode.insertBefore(c, d);
      hc(c, b);
      void 0 !== a && (c.src = a);
      return c;
    },
    lc = function(a, b, c) {
      var d = new Image(1, 1);
      d.onload = function() {
        d.onload = null;
        b && b();
      };
      d.onerror = function() {
        d.onerror = null;
        c && c();
      };
      d.src = a;
      return d;
    },
    mc = function(a, b, c, d) {
      a.addEventListener
        ? a.addEventListener(b, c, !!d)
        : a.attachEvent && a.attachEvent("on" + b, c);
    },
    nc = function(a, b, c) {
      a.removeEventListener
        ? a.removeEventListener(b, c, !1)
        : a.detachEvent && a.detachEvent("on" + b, c);
    },
    I = function(a) {
      F.setTimeout(a, 0);
    },
    oc = function(a, b) {
      return a && b && a.attributes && a.attributes[b]
        ? a.attributes[b].value
        : null;
    },
    pc = function(a) {
      var b = a.innerText || a.textContent || "";
      b && " " != b && (b = b.replace(/^[\s\xa0]+|[\s\xa0]+$/g, ""));
      b && (b = b.replace(/(\xa0+|\s{2,}|\n|\r\t)/g, " "));
      return b;
    },
    qc = function(a) {
      var b = G.createElement("div");
      b.innerHTML = "A<div>" + a + "</div>";
      b = b.lastChild;
      for (var c = []; b.firstChild; ) c.push(b.removeChild(b.firstChild));
      return c;
    },
    rc = function(a, b, c) {
      c = c || 100;
      for (var d = {}, e = 0; e < b.length; e++) d[b[e]] = !0;
      for (var f = a, h = 0; f && h <= c; h++) {
        if (d[String(f.tagName).toLowerCase()]) return f;
        f = f.parentElement;
      }
      return null;
    },
    tc = function(a) {
      (ec.sendBeacon && ec.sendBeacon(a)) || lc(a);
    },
    uc = function(a, b) {
      var c = a[b];
      c && "string" === typeof c.animVal && (c = c.animVal);
      return c;
    };
  var wc = function(a) {
      return vc ? G.querySelectorAll(a) : null;
    },
    xc = function(a, b) {
      if (!vc) return null;
      if (Element.prototype.closest)
        try {
          return a.closest(b);
        } catch (e) {
          return null;
        }
      var c =
          Element.prototype.matches ||
          Element.prototype.webkitMatchesSelector ||
          Element.prototype.mozMatchesSelector ||
          Element.prototype.msMatchesSelector ||
          Element.prototype.oMatchesSelector,
        d = a;
      if (!G.documentElement.contains(d)) return null;
      do {
        try {
          if (c.call(d, b)) return d;
        } catch (e) {
          break;
        }
        d = d.parentElement || d.parentNode;
      } while (null !== d && 1 === d.nodeType);
      return null;
    },
    yc = !1;
  if (G.querySelectorAll)
    try {
      var zc = G.querySelectorAll(":root");
      zc && 1 == zc.length && zc[0] == G.documentElement && (yc = !0);
    } catch (a) {}
  var vc = yc;
  var J = {
    ra: "_ee",
    Ah: "_uci",
    uc: "event_callback",
    xb: "event_timeout",
    C: "gtag.config",
    X: "allow_ad_personalization_signals",
    vc: "restricted_data_processing",
    Sa: "allow_google_signals",
    Y: "cookie_expires",
    wb: "cookie_update",
    Ta: "session_duration",
    ca: "user_properties",
  };
  J.md = "page_view";
  J.ih = "user_engagement";
  J.ma = "purchase";
  J.Hb = "refund";
  J.Ua = "begin_checkout";
  J.Eb = "add_to_cart";
  J.Fb = "remove_from_cart";
  J.Mg = "view_cart";
  J.Ed = "add_to_wishlist";
  J.Ba = "view_item";
  J.bh = "view_promotion";
  J.Vg = "select_promotion";
  J.Ug = "select_item";
  J.fd = "view_item_list";
  J.Dd = "add_payment_info";
  J.Hg = "add_shipping_info";
  J.lh = "allow_custom_scripts";
  J.nh = "allow_display_features";
  J.ph = "allow_enhanced_conversions";
  J.Zd = "enhanced_conversions";
  J.Ib = "client_id";
  J.O = "cookie_domain";
  J.Kb = "cookie_name";
  J.Fa = "cookie_path";
  J.Va = "cookie_flags";
  J.ia = "currency";
  J.Ob = "custom_params";
  J.vh = "custom_map";
  J.nc = "groups";
  J.Ga = "language";
  J.uh = "country";
  J.Bh = "non_interaction";
  J.$a = "page_location";
  J.ab = "page_referrer";
  J.qc = "page_title";
  J.cb = "send_page_view";
  J.oa = "send_to";
  J.sc = "session_engaged";
  J.Tb = "session_id";
  J.wc = "session_number";
  J.lf = "tracking_id";
  J.na = "linker";
  J.ie = "url_passthrough";
  J.Wa = "accept_incoming";
  J.F = "domains";
  J.Za = "url_position";
  J.Ya = "decorate_forms";
  J.be = "phone_conversion_number";
  J.ae = "phone_conversion_callback";
  J.td = "phone_conversion_css_class";
  J.ee = "phone_conversion_options";
  J.cf = "phone_conversion_ids";
  J.$e = "phone_conversion_country_code";
  J.Fd = "aw_remarketing";
  J.Gd = "aw_remarketing_only";
  J.aa = "value";
  J.df = "quantity";
  J.Oe = "affiliation";
  J.Yd = "tax";
  J.Se = "shipping";
  J.nd = "list_name";
  J.Xd = "checkout_step";
  J.Vd = "checkout_option";
  J.Qe = "coupon";
  J.Re = "promotions";
  J.eb = "transaction_id";
  J.fb = "user_id";
  J.Ea = "conversion_linker";
  J.Da = "conversion_cookie_prefix";
  J.S = "cookie_prefix";
  J.M = "items";
  J.Od = "aw_merchant_id";
  J.Kd = "aw_feed_country";
  J.Ld = "aw_feed_language";
  J.Id = "discount";
  J.Ud = "disable_merchant_reported_purchases";
  J.oc = "new_customer";
  J.Qd = "customer_lifetime_value";
  J.Ne = "dc_natural_search";
  J.Le = "dc_custom_params";
  J.nf = "trip_type";
  J.$d = "passengers";
  J.Xe = "method";
  J.kf = "search_term";
  J.th = "content_type";
  J.Ye = "optimize_id";
  J.Te = "experiments";
  J.Sb = "google_signals";
  J.rd = "google_tld";
  J.Ub = "update";
  J.qd = "firebase_id";
  J.Qb = "ga_restrict_domain";
  J.pd = "event_settings";
  J.jf = "screen_name";
  J.We = "_x_19";
  J.Ue = "_x_20";
  J.qa = "transport_url";
  J.qe = [
    J.X,
    J.Sa,
    J.vc,
    J.O,
    J.Y,
    J.Va,
    J.Kb,
    J.Fa,
    J.S,
    J.wb,
    J.Ob,
    J.uc,
    J.pd,
    J.xb,
    J.Qb,
    J.Sb,
    J.rd,
    J.nc,
    J.na,
    J.oa,
    J.cb,
    J.Ta,
    J.Ub,
    J.ca,
    J.qa,
  ];
  J.qe.push(J.M);
  J.je = [J.$a, J.ab, J.qc, J.Ga, J.jf, J.fb, J.qd];
  J.qf = [
    J.ma,
    J.Hb,
    J.Ua,
    J.Eb,
    J.Fb,
    J.Mg,
    J.Ed,
    J.Ba,
    J.bh,
    J.Vg,
    J.fd,
    J.Ug,
    J.Dd,
    J.Hg,
  ];
  J.Cd = [
    J.oa,
    J.Fd,
    J.Gd,
    J.Ob,
    J.cb,
    J.Ga,
    J.aa,
    J.ia,
    J.eb,
    J.fb,
    J.Ea,
    J.Da,
    J.S,
    J.O,
    J.Y,
    J.Va,
    J.$a,
    J.ab,
    J.be,
    J.ae,
    J.td,
    J.ee,
    J.M,
    J.Od,
    J.Kd,
    J.Ld,
    J.Id,
    J.Ud,
    J.oc,
    J.Qd,
    J.X,
    J.vc,
    J.Ub,
    J.qd,
    J.Zd,
    J.qa,
    J.ie,
  ];
  J.pe = [J.X, J.Sa, J.wb];
  J.se = [J.Y, J.xb, J.Ta];
  var Qc = /[A-Z]+/,
    Rc = /\s/,
    Sc = function(a) {
      if (g(a) && ((a = Ca(a)), !Rc.test(a))) {
        var b = a.indexOf("-");
        if (!(0 > b)) {
          var c = a.substring(0, b);
          if (Qc.test(c)) {
            for (
              var d = a.substring(b + 1).split("/"), e = 0;
              e < d.length;
              e++
            )
              if (!d[e]) return;
            return { id: a, prefix: c, containerId: c + "-" + d[0], o: d };
          }
        }
      }
    },
    Uc = function(a) {
      for (var b = {}, c = 0; c < a.length; ++c) {
        var d = Sc(a[c]);
        d && (b[d.id] = d);
      }
      Tc(b);
      var e = [];
      C(b, function(f, h) {
        e.push(h);
      });
      return e;
    };
  function Tc(a) {
    var b = [],
      c;
    for (c in a)
      if (a.hasOwnProperty(c)) {
        var d = a[c];
        "AW" === d.prefix && d.o[1] && b.push(d.containerId);
      }
    for (var e = 0; e < b.length; ++e) delete a[b[e]];
  }
  var Vc = {},
    Wc = null,
    Xc = Math.random();
  Vc.s = "";
  Vc.Cb = "3i0";
  var Yc = {
      __cl: !0,
      __ecl: !0,
      __ehl: !0,
      __evl: !0,
      __fal: !0,
      __fil: !0,
      __fsl: !0,
      __hl: !0,
      __jel: !0,
      __lcl: !0,
      __sdl: !0,
      __tl: !0,
      __ytl: !0,
      __paused: !0,
      __tg: !0,
    },
    Zc = "www.googletagmanager.com/gtm.js";
  Zc = "www.googletagmanager.com/gtag/js";
  var ad = Zc,
    bd = null,
    cd = null,
    dd = null,
    ed = "//www.googletagmanager.com/a?id=" + Vc.s + "&cv=1",
    fd = {},
    gd = {},
    hd = function() {
      var a = Wc.sequence || 0;
      Wc.sequence = a + 1;
      return a;
    };
  var id = {},
    jd = function(a, b) {
      id[a] = id[a] || [];
      id[a][b] = !0;
    },
    kd = function(a) {
      for (var b = [], c = id[a] || [], d = 0; d < c.length; d++)
        c[d] && (b[Math.floor(d / 6)] ^= 1 << d % 6);
      for (var e = 0; e < b.length; e++)
        b[
          e
        ] = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_".charAt(
          b[e] || 0
        );
      return b.join("");
    };
  var ld = function() {
      return (
        "&tc=" +
        sb.filter(function(a) {
          return a;
        }).length
      );
    },
    od = function() {
      md || (md = F.setTimeout(nd, 500));
    },
    nd = function() {
      md && (F.clearTimeout(md), (md = void 0));
      void 0 === pd ||
        (qd[pd] && !rd && !sd) ||
        (td[pd] || ud.wg() || 0 >= vd--
          ? (jd("GTM", 1), (td[pd] = !0))
          : (ud.Xg(), lc(wd()), (qd[pd] = !0), (xd = yd = sd = rd = "")));
    },
    wd = function() {
      var a = pd;
      if (void 0 === a) return "";
      var b = kd("GTM"),
        c = kd("TAGGING");
      return [
        zd,
        qd[a] ? "" : "&es=1",
        Ad[a],
        b ? "&u=" + b : "",
        c ? "&ut=" + c : "",
        ld(),
        rd,
        sd,
        yd,
        xd,
        "&z=0",
      ].join("");
    },
    Bd = function() {
      return [ed, "&v=3&t=t", "&pid=" + wa(), "&rv=" + Vc.Cb].join("");
    },
    Cd = "0.005000" > Math.random(),
    zd = Bd(),
    Dd = function() {
      zd = Bd();
    },
    qd = {},
    rd = "",
    sd = "",
    xd = "",
    yd = "",
    pd = void 0,
    Ad = {},
    td = {},
    md = void 0,
    ud = (function(a, b) {
      var c = 0,
        d = 0;
      return {
        wg: function() {
          if (c < a) return !1;
          Ea() - d >= b && (c = 0);
          return c >= a;
        },
        Xg: function() {
          Ea() - d >= b && (c = 0);
          c++;
          d = Ea();
        },
      };
    })(2, 1e3),
    vd = 1e3,
    Ed = function(a, b) {
      if (Cd && !td[a] && pd !== a) {
        nd();
        pd = a;
        xd = rd = "";
        var c;
        c = 0 === b.indexOf("gtm.") ? encodeURIComponent(b) : "*";
        Ad[a] = "&e=" + c + "&eid=" + a;
        od();
      }
    },
    Fd = function(a, b, c) {
      if (Cd && !td[a] && b) {
        a !== pd && (nd(), (pd = a));
        var d,
          e = String(b[Fb.sa] || "").replace(/_/g, "");
        0 === e.indexOf("cvt") && (e = "cvt");
        d = e;
        var f = c + d;
        rd = rd ? rd + "." + f : "&tr=" + f;
        var h = b["function"];
        if (!h) throw Error("Error: No function name given for function call.");
        var k = (ub[h] ? "1" : "2") + d;
        xd = xd ? xd + "." + k : "&ti=" + k;
        od();
        2022 <= wd().length && nd();
      }
    },
    Gd = function(a, b, c) {
      if (Cd && !td[a]) {
        a !== pd && (nd(), (pd = a));
        var d = c + b;
        sd = sd ? sd + "." + d : "&epr=" + d;
        od();
        2022 <= wd().length && nd();
      }
    };
  var Hd = {},
    Id = new xa(),
    Jd = {},
    Kd = {},
    Nd = {
      name: "dataLayer",
      set: function(a, b) {
        D(Ka(a, b), Jd);
        Ld();
      },
      get: function(a) {
        return Md(a, 2);
      },
      reset: function() {
        Id = new xa();
        Jd = {};
        Ld();
      },
    },
    Md = function(a, b) {
      if (2 != b) {
        var c = Id.get(a);
        if (Cd) {
          var d = Od(a);
          c !== d && jd("GTM", 5);
        }
        return c;
      }
      return Od(a);
    },
    Od = function(a, b, c) {
      var d = a.split("."),
        e = !1,
        f = void 0;
      var h = function(k, l) {
        for (var m = 0; void 0 !== k && m < d.length; m++) {
          if (null === k) return !1;
          k = k[d[m]];
        }
        return void 0 !== k || 1 < m ? k : l.length ? h(Pd(l.pop()), l) : Qd(d);
      };
      e = !0;
      f = h(Jd.eventModel, [b, c]);
      return e ? f : Qd(d);
    },
    Qd = function(a) {
      for (var b = Jd, c = 0; c < a.length; c++) {
        if (null === b) return !1;
        if (void 0 === b) break;
        b = b[a[c]];
      }
      return b;
    };
  var Pd = function(a) {
      if (a) {
        var b = Qd(["gtag", "targets", a]);
        return Pa(b) ? b : void 0;
      }
    },
    Rd = function(a, b) {
      function c(f) {
        f &&
          C(f, function(h) {
            d[h] = null;
          });
      }
      var d = {};
      c(Jd);
      delete d.eventModel;
      c(Pd(a));
      c(Pd(b));
      c(Jd.eventModel);
      var e = [];
      C(d, function(f) {
        e.push(f);
      });
      return e;
    };
  var Sd = function(a, b) {
      Kd.hasOwnProperty(a) || (Id.set(a, b), D(Ka(a, b), Jd), Ld());
    },
    Ld = function(a) {
      C(Kd, function(b, c) {
        Id.set(b, c);
        D(Ka(b, void 0), Jd);
        D(Ka(b, c), Jd);
        a && delete Kd[b];
      });
    },
    Td = function(a, b, c) {
      Hd[a] = Hd[a] || {};
      var d = 1 !== c ? Od(b) : Id.get(b);
      "array" === Na(d) || "object" === Na(d)
        ? (Hd[a][b] = D(d))
        : (Hd[a][b] = d);
    },
    Ud = function(a, b) {
      if (Hd[a]) return Hd[a][b];
    },
    Vd = function(a, b) {
      Hd[a] && delete Hd[a][b];
    };
  var Wd = function() {
    var a = !1;
    return a;
  };
  var Q = function(a, b, c, d) {
      return (2 === Xd() || d || "http:" != F.location.protocol ? a : b) + c;
    },
    Xd = function() {
      var a = jc(),
        b;
      if (1 === a)
        a: {
          var c = ad;
          c = c.toLowerCase();
          for (
            var d = "https://" + c,
              e = "http://" + c,
              f = 1,
              h = G.getElementsByTagName("script"),
              k = 0;
            k < h.length && 100 > k;
            k++
          ) {
            var l = h[k].src;
            if (l) {
              l = l.toLowerCase();
              if (0 === l.indexOf(e)) {
                b = 3;
                break a;
              }
              1 === f && 0 === l.indexOf(d) && (f = 2);
            }
          }
          b = f;
        }
      else b = a;
      return b;
    };
  var Zd = function(a, b, c) {
      if (F[a.functionName]) return b.Wc && I(b.Wc), F[a.functionName];
      var d = Yd();
      F[a.functionName] = d;
      if (a.Gb)
        for (var e = 0; e < a.Gb.length; e++) F[a.Gb[e]] = F[a.Gb[e]] || Yd();
      a.Rb && void 0 === F[a.Rb] && (F[a.Rb] = c);
      ic(Q("https://", "http://", a.gd), b.Wc, b.Ig);
      return d;
    },
    Yd = function() {
      var a = function() {
        a.q = a.q || [];
        a.q.push(arguments);
      };
      return a;
    },
    $d = {
      functionName: "_googWcmImpl",
      Rb: "_googWcmAk",
      gd: "www.gstatic.com/wcm/loader.js",
    },
    ae = {
      functionName: "_gaPhoneImpl",
      Rb: "ga_wpid",
      gd: "www.gstatic.com/gaphone/loader.js",
    },
    be = { Me: "", pf: "1" },
    ce = {
      functionName: "_googCallTrackingImpl",
      Gb: [ae.functionName, $d.functionName],
      gd:
        "www.gstatic.com/call-tracking/call-tracking_" +
        (be.Me || be.pf) +
        ".js",
    },
    de = {},
    ee = function(a, b, c, d) {
      jd("GTM", 22);
      if (c) {
        d = d || {};
        var e = Zd($d, d, a),
          f = { ak: a, cl: b };
        void 0 === d.da && (f.autoreplace = c);
        e(2, d.da, f, c, 0, new Date(), d.options);
      }
    },
    fe = function(a, b, c) {
      jd("GTM", 23);
      if (b) {
        c = c || {};
        var d = Zd(ae, c, a),
          e = {};
        void 0 !== c.da ? (e.receiver = c.da) : (e.replace = b);
        e.ga_wpid = a;
        e.destination = b;
        d(2, new Date(), e);
      }
    },
    ge = function(a, b, c, d) {
      jd("GTM", 21);
      if (b && c) {
        d = d || {};
        for (
          var e = {
              countryNameCode: c,
              destinationNumber: b,
              retrievalTime: new Date(),
            },
            f = 0;
          f < a.length;
          f++
        ) {
          var h = a[f];
          de[h.id] ||
            (h && "AW" === h.prefix && !e.adData && 2 <= h.o.length
              ? ((e.adData = { ak: h.o[0], cl: h.o[1] }), (de[h.id] = !0))
              : h &&
                "UA" === h.prefix &&
                !e.gaData &&
                ((e.gaData = { gaWpid: h.containerId }), (de[h.id] = !0)));
        }
        (e.gaData || e.adData) && Zd(ce, d)(d.da, e, d.options);
      }
    },
    he = function() {
      var a = !1;
      return a;
    },
    ie = function(a, b) {
      if (a)
        if (Wd()) {
        } else {
          if (g(a)) {
            var c = Sc(a);
            if (!c) return;
            a = c;
          }
          var d = function(y) {
              return b ? b.getWithConfig(y) : Od(y, a.containerId, a.id);
            },
            e = void 0,
            f = !1,
            h = d(J.cf);
          if (h && ra(h)) {
            e = [];
            for (var k = 0; k < h.length; k++) {
              var l = Sc(h[k]);
              l &&
                (e.push(l),
                (a.id === l.id ||
                  (a.id === a.containerId &&
                    a.containerId === l.containerId)) &&
                  (f = !0));
            }
          }
          if (!e || f) {
            var m = d(J.be),
              n;
            if (m) {
              ra(m) ? (n = m) : (n = [m]);
              var r = d(J.ae),
                t = d(J.td),
                p = d(J.ee),
                u = d(J.$e),
                v = r || t,
                w = 1;
              "UA" !== a.prefix || e || (w = 5);
              for (var x = 0; x < n.length; x++)
                x < w &&
                  (e
                    ? ge(e, n[x], u, { da: v, options: p })
                    : "AW" === a.prefix && a.o[1]
                    ? he()
                      ? ge([a], n[x], u || "US", { da: v, options: p })
                      : ee(a.o[0], a.o[1], n[x], { da: v, options: p })
                    : "UA" === a.prefix &&
                      (he()
                        ? ge([a], n[x], u || "US", { da: v })
                        : fe(a.containerId, n[x], { da: v })));
            }
          }
        }
    };
  var le = new RegExp(
      /^(.*\.)?(google|youtube|blogger|withgoogle)(\.com?)?(\.[a-z]{2})?\.?$/
    ),
    me = {
      cl: ["ecl"],
      customPixels: ["nonGooglePixels"],
      ecl: ["cl"],
      ehl: ["hl"],
      hl: ["ehl"],
      html: [
        "customScripts",
        "customPixels",
        "nonGooglePixels",
        "nonGoogleScripts",
        "nonGoogleIframes",
      ],
      customScripts: [
        "html",
        "customPixels",
        "nonGooglePixels",
        "nonGoogleScripts",
        "nonGoogleIframes",
      ],
      nonGooglePixels: [],
      nonGoogleScripts: ["nonGooglePixels"],
      nonGoogleIframes: ["nonGooglePixels"],
    },
    ne = {
      cl: ["ecl"],
      customPixels: ["customScripts", "html"],
      ecl: ["cl"],
      ehl: ["hl"],
      hl: ["ehl"],
      html: ["customScripts"],
      customScripts: ["html"],
      nonGooglePixels: [
        "customPixels",
        "customScripts",
        "html",
        "nonGoogleScripts",
        "nonGoogleIframes",
      ],
      nonGoogleScripts: ["customScripts", "html"],
      nonGoogleIframes: ["customScripts", "html", "nonGoogleScripts"],
    },
    oe = "google customPixels customScripts html nonGooglePixels nonGoogleScripts nonGoogleIframes".split(
      " "
    );
  var qe = function(a) {
      var b = Md("gtm.whitelist");
      b && jd("GTM", 9);
      b = "google gtagfl lcl zone oid op".split(" ");
      var c = b && Ja(Ba(b), me),
        d = Md("gtm.blacklist");
      d || ((d = Md("tagTypeBlacklist")) && jd("GTM", 3));
      d ? jd("GTM", 8) : (d = []);
      pe() &&
        ((d = Ba(d)),
        d.push("nonGooglePixels", "nonGoogleScripts", "sandboxedScripts"));
      0 <= q(Ba(d), "google") && jd("GTM", 2);
      var e = d && Ja(Ba(d), ne),
        f = {};
      return function(h) {
        var k = h && h[Fb.sa];
        if (!k || "string" != typeof k) return !0;
        k = k.replace(/^_*/, "");
        if (void 0 !== f[k]) return f[k];
        var l = gd[k] || [],
          m = a(k, l);
        if (b) {
          var n;
          if ((n = m))
            a: {
              if (0 > q(c, k))
                if (l && 0 < l.length)
                  for (var r = 0; r < l.length; r++) {
                    if (0 > q(c, l[r])) {
                      jd("GTM", 11);
                      n = !1;
                      break a;
                    }
                  }
                else {
                  n = !1;
                  break a;
                }
              n = !0;
            }
          m = n;
        }
        var t = !1;
        if (d) {
          var p = 0 <= q(e, k);
          if (p) t = p;
          else {
            var u = ya(e, l || []);
            u && jd("GTM", 10);
            t = u;
          }
        }
        var v = !m || t;
        v ||
          !(0 <= q(l, "sandboxedScripts")) ||
          (c && -1 !== q(c, "sandboxedScripts")) ||
          (v = ya(e, oe));
        return (f[k] = v);
      };
    },
    pe = function() {
      return le.test(F.location && F.location.hostname);
    };
  var re = {
    Tf: function(a, b) {
      b[Fb.vd] &&
        "string" === typeof a &&
        (a = 1 == b[Fb.vd] ? a.toLowerCase() : a.toUpperCase());
      b.hasOwnProperty(Fb.xd) && null === a && (a = b[Fb.xd]);
      b.hasOwnProperty(Fb.zd) && void 0 === a && (a = b[Fb.zd]);
      b.hasOwnProperty(Fb.yd) && !0 === a && (a = b[Fb.yd]);
      b.hasOwnProperty(Fb.wd) && !1 === a && (a = b[Fb.wd]);
      return a;
    },
  };
  var se = {
      active: !0,
      isWhitelisted: function() {
        return !0;
      },
    },
    te = function(a) {
      var b = Wc.zones;
      !b && a && (b = Wc.zones = a());
      return b;
    };
  var ue = function() {};
  var ve = !1,
    we = 0,
    xe = [];
  function ye(a) {
    if (!ve) {
      var b = G.createEventObject,
        c = "complete" == G.readyState,
        d = "interactive" == G.readyState;
      if (!a || "readystatechange" != a.type || c || (!b && d)) {
        ve = !0;
        for (var e = 0; e < xe.length; e++) I(xe[e]);
      }
      xe.push = function() {
        for (var f = 0; f < arguments.length; f++) I(arguments[f]);
        return 0;
      };
    }
  }
  function ze() {
    if (!ve && 140 > we) {
      we++;
      try {
        G.documentElement.doScroll("left"), ye();
      } catch (a) {
        F.setTimeout(ze, 50);
      }
    }
  }
  var Ae = function(a) {
    ve ? a() : xe.push(a);
  };
  var Be = {},
    Ce = {},
    De = function(a, b, c, d) {
      if (!Ce[a] || Yc[b] || "__zone" === b) return -1;
      var e = {};
      Pa(d) && (e = D(d, e));
      e.id = c;
      e.status = "timeout";
      return Ce[a].tags.push(e) - 1;
    },
    Ee = function(a, b, c, d) {
      if (Ce[a]) {
        var e = Ce[a].tags[b];
        e && ((e.status = c), (e.executionTime = d));
      }
    };
  function Fe(a) {
    for (var b = Be[a] || [], c = 0; c < b.length; c++) b[c]();
    Be[a] = {
      push: function(d) {
        d(Vc.s, Ce[a]);
      },
    };
  }
  var Ie = function(a, b, c) {
      Ce[a] = { tags: [] };
      pa(b) && Ge(a, b);
      c &&
        F.setTimeout(function() {
          return Fe(a);
        }, Number(c));
      return He(a);
    },
    Ge = function(a, b) {
      Be[a] = Be[a] || [];
      Be[a].push(
        Ga(function() {
          return I(function() {
            b(Vc.s, Ce[a]);
          });
        })
      );
    };
  function He(a) {
    var b = 0,
      c = 0,
      d = !1;
    return {
      add: function() {
        c++;
        return Ga(function() {
          b++;
          d && b >= c && Fe(a);
        });
      },
      Ff: function() {
        d = !0;
        b >= c && Fe(a);
      },
    };
  }
  var Je = function() {
    function a(d) {
      return !qa(d) || 0 > d ? 0 : d;
    }
    if (!Wc._li && F.performance && F.performance.timing) {
      var b = F.performance.timing.navigationStart,
        c = qa(Nd.get("gtm.start")) ? Nd.get("gtm.start") : 0;
      Wc._li = { cst: a(c - b), cbt: a(cd - b) };
    }
  };
  var Ne = {},
    Oe = function() {
      return F.GoogleAnalyticsObject && F[F.GoogleAnalyticsObject];
    },
    Pe = !1;
  var Qe = function(a) {
      F.GoogleAnalyticsObject || (F.GoogleAnalyticsObject = a || "ga");
      var b = F.GoogleAnalyticsObject;
      if (F[b]) F.hasOwnProperty(b) || jd("GTM", 12);
      else {
        var c = function() {
          c.q = c.q || [];
          c.q.push(arguments);
        };
        c.l = Number(new Date());
        F[b] = c;
      }
      Je();
      return F[b];
    },
    Re = function(a, b, c, d) {
      b = String(b)
        .replace(/\s+/g, "")
        .split(",");
      var e = Oe();
      e(a + "require", "linker");
      e(a + "linker:autoLink", b, c, d);
    };
  var Te = function(a) {},
    Se = function() {
      return F.GoogleAnalyticsObject || "ga";
    };
  var Ve = /^(?:(?:https?|mailto|ftp):|[^:/?#]*(?:[/?#]|$))/i;
  var We = /:[0-9]+$/,
    Xe = function(a, b, c) {
      for (var d = a.split("&"), e = 0; e < d.length; e++) {
        var f = d[e].split("=");
        if (decodeURIComponent(f[0]).replace(/\+/g, " ") === b) {
          var h = f.slice(1).join("=");
          return c ? h : decodeURIComponent(h).replace(/\+/g, " ");
        }
      }
    },
    $e = function(a, b, c, d, e) {
      b && (b = String(b).toLowerCase());
      if ("protocol" === b || "port" === b)
        a.protocol = Ye(a.protocol) || Ye(F.location.protocol);
      "port" === b
        ? (a.port = String(
            Number(a.hostname ? a.port : F.location.port) ||
              ("http" == a.protocol ? 80 : "https" == a.protocol ? 443 : "")
          ))
        : "host" === b &&
          (a.hostname = (a.hostname || F.location.hostname)
            .replace(We, "")
            .toLowerCase());
      var f = b,
        h,
        k = Ye(a.protocol);
      f && (f = String(f).toLowerCase());
      switch (f) {
        case "url_no_fragment":
          h = Ze(a);
          break;
        case "protocol":
          h = k;
          break;
        case "host":
          h = a.hostname.replace(We, "").toLowerCase();
          if (c) {
            var l = /^www\d*\./.exec(h);
            l && l[0] && (h = h.substr(l[0].length));
          }
          break;
        case "port":
          h = String(
            Number(a.port) || ("http" == k ? 80 : "https" == k ? 443 : "")
          );
          break;
        case "path":
          a.pathname || a.hostname || jd("TAGGING", 1);
          h = "/" == a.pathname.substr(0, 1) ? a.pathname : "/" + a.pathname;
          var m = h.split("/");
          0 <= q(d || [], m[m.length - 1]) && (m[m.length - 1] = "");
          h = m.join("/");
          break;
        case "query":
          h = a.search.replace("?", "");
          e && (h = Xe(h, e, void 0));
          break;
        case "extension":
          var n = a.pathname.split(".");
          h = 1 < n.length ? n[n.length - 1] : "";
          h = h.split("/")[0];
          break;
        case "fragment":
          h = a.hash.replace("#", "");
          break;
        default:
          h = a && a.href;
      }
      return h;
    },
    Ye = function(a) {
      return a ? a.replace(":", "").toLowerCase() : "";
    },
    Ze = function(a) {
      var b = "";
      if (a && a.href) {
        var c = a.href.indexOf("#");
        b = 0 > c ? a.href : a.href.substr(0, c);
      }
      return b;
    },
    af = function(a) {
      var b = G.createElement("a");
      a && (b.href = a);
      var c = b.pathname;
      "/" !== c[0] && (a || jd("TAGGING", 1), (c = "/" + c));
      var d = b.hostname.replace(We, "");
      return {
        href: b.href,
        protocol: b.protocol,
        host: b.host,
        hostname: d,
        pathname: c,
        search: b.search,
        hash: b.hash,
        port: b.port,
      };
    };
  function ff(a, b, c, d) {
    var e = sb[a],
      f = gf(a, b, c, d);
    if (!f) return null;
    var h = Bb(e[Fb.Pd], c, []);
    if (h && h.length) {
      var k = h[0];
      f = ff(
        k.index,
        { B: f, w: 1 === k.ke ? b.terminate : f, terminate: b.terminate },
        c,
        d
      );
    }
    return f;
  }
  function gf(a, b, c, d) {
    function e() {
      if (f[Fb.af]) k();
      else {
        var w = Cb(f, c, []),
          x = De(c.id, String(f[Fb.sa]), Number(f[Fb.Rd]), w[Fb.bf]),
          y = !1;
        w.vtp_gtmOnSuccess = function() {
          if (!y) {
            y = !0;
            var A = Ea() - z;
            Fd(c.id, sb[a], "5");
            Ee(c.id, x, "success", A);
            h();
          }
        };
        w.vtp_gtmOnFailure = function() {
          if (!y) {
            y = !0;
            var A = Ea() - z;
            Fd(c.id, sb[a], "6");
            Ee(c.id, x, "failure", A);
            k();
          }
        };
        w.vtp_gtmTagId = f.tag_id;
        w.vtp_gtmEventId = c.id;
        Fd(c.id, f, "1");
        var B = function() {
          var A = Ea() - z;
          Fd(c.id, f, "7");
          Ee(c.id, x, "exception", A);
          y || ((y = !0), k());
        };
        var z = Ea();
        try {
          Ab(w, c);
        } catch (A) {
          B(A);
        }
      }
    }
    var f = sb[a],
      h = b.B,
      k = b.w,
      l = b.terminate;
    if (c.Qc(f)) return null;
    var m = Bb(f[Fb.Sd], c, []);
    if (m && m.length) {
      var n = m[0],
        r = ff(n.index, { B: h, w: k, terminate: l }, c, d);
      if (!r) return null;
      h = r;
      k = 2 === n.ke ? l : r;
    }
    if (f[Fb.Hd] || f[Fb.ff]) {
      var t = f[Fb.Hd] ? tb : c.gh,
        p = h,
        u = k;
      if (!t[a]) {
        e = Ga(e);
        var v = hf(a, t, e);
        h = v.B;
        k = v.w;
      }
      return function() {
        t[a](p, u);
      };
    }
    return e;
  }
  function hf(a, b, c) {
    var d = [],
      e = [];
    b[a] = jf(d, e, c);
    return {
      B: function() {
        b[a] = kf;
        for (var f = 0; f < d.length; f++) d[f]();
      },
      w: function() {
        b[a] = lf;
        for (var f = 0; f < e.length; f++) e[f]();
      },
    };
  }
  function jf(a, b, c) {
    return function(d, e) {
      a.push(d);
      b.push(e);
      c();
    };
  }
  function kf(a) {
    a();
  }
  function lf(a, b) {
    b();
  }
  var of = function(a, b) {
    for (var c = [], d = 0; d < sb.length; d++)
      if (a.mb[d]) {
        var e = sb[d];
        var f = b.add();
        try {
          var h = ff(d, { B: f, w: f, terminate: f }, a, d);
          h ? c.push({ Je: d, Ee: Db(e), dg: h }) : (mf(d, a), f());
        } catch (l) {
          f();
        }
      }
    b.Ff();
    c.sort(nf);
    for (var k = 0; k < c.length; k++) c[k].dg();
    return 0 < c.length;
  };
  function nf(a, b) {
    var c,
      d = b.Ee,
      e = a.Ee;
    c = d > e ? 1 : d < e ? -1 : 0;
    var f;
    if (0 !== c) f = c;
    else {
      var h = a.Je,
        k = b.Je;
      f = h > k ? 1 : h < k ? -1 : 0;
    }
    return f;
  }
  function mf(a, b) {
    if (!Cd) return;
    var c = function(d) {
      var e = b.Qc(sb[d]) ? "3" : "4",
        f = Bb(sb[d][Fb.Pd], b, []);
      f && f.length && c(f[0].index);
      Fd(b.id, sb[d], e);
      var h = Bb(sb[d][Fb.Sd], b, []);
      h && h.length && c(h[0].index);
    };
    c(a);
  }
  var pf = !1,
    qf = function(a, b, c, d, e) {
      if ("gtm.js" == b) {
        if (pf) return !1;
        pf = !0;
      }
      Ed(a, b);
      var f = Ie(a, d, e);
      Td(a, "event", 1);
      Td(a, "ecommerce", 1);
      Td(a, "gtm");
      var h = {
        id: a,
        name: b,
        Qc: qe(c),
        mb: [],
        gh: [],
        xe: function() {
          jd("GTM", 6);
        },
      };
      h.mb = Kb(h);
      var k = of(h, f);
      ("gtm.js" !== b && "gtm.sync" !== b) || Te(Vc.s);
      if (!k) return k;
      for (var l = 0; l < h.mb.length; l++)
        if (h.mb[l]) {
          var m = sb[l];
          if (m && !Yc[String(m[Fb.sa])]) return !0;
        }
      return !1;
    };
  var rf = function(a, b) {
    var c = zb(a, b);
    sb.push(c);
    return sb.length - 1;
  };
  var sf = /^https?:\/\/www\.googletagmanager\.com/;
  function tf() {
    var a;
    return a;
  }
  function vf(a, b) {}
  function uf(a) {
    0 !== a.indexOf("http://") &&
      0 !== a.indexOf("https://") &&
      (a = "https://" + a);
    "/" === a[a.length - 1] && (a = a.substring(0, a.length - 1));
    return a;
  }
  function wf() {
    var a = !1;
    return a;
  }
  var xf = function() {
      this.eventModel = {};
      this.targetConfig = {};
      this.containerConfig = {};
      this.h = {};
      this.globalConfig = {};
      this.B = function() {};
      this.w = function() {};
    },
    yf = function(a) {
      var b = new xf();
      b.eventModel = a;
      return b;
    },
    zf = function(a, b) {
      a.targetConfig = b;
      return a;
    },
    Af = function(a, b) {
      a.containerConfig = b;
      return a;
    },
    Bf = function(a, b) {
      a.h = b;
      return a;
    },
    Cf = function(a, b) {
      a.globalConfig = b;
      return a;
    },
    Df = function(a, b) {
      a.B = b;
      return a;
    },
    Ef = function(a, b) {
      a.w = b;
      return a;
    };
  xf.prototype.getWithConfig = function(a) {
    if (void 0 !== this.eventModel[a]) return this.eventModel[a];
    if (void 0 !== this.targetConfig[a]) return this.targetConfig[a];
    if (void 0 !== this.containerConfig[a]) return this.containerConfig[a];
    if (void 0 !== this.h[a]) return this.h[a];
    if (void 0 !== this.globalConfig[a]) return this.globalConfig[a];
  };
  var Ff = function(a) {
    function b(e) {
      C(e, function(f) {
        c[f] = null;
      });
    }
    var c = {};
    b(a.eventModel);
    b(a.targetConfig);
    b(a.containerConfig);
    b(a.globalConfig);
    var d = [];
    C(c, function(e) {
      d.push(e);
    });
    return d;
  };
  var Gf = function(a, b, c) {
      for (
        var d = [], e = String(b || document.cookie).split(";"), f = 0;
        f < e.length;
        f++
      ) {
        var h = e[f].split("="),
          k = h[0].replace(/^\s*|\s*$/g, "");
        if (k && k == a) {
          var l = h
            .slice(1)
            .join("=")
            .replace(/^\s*|\s*$/g, "");
          l && c && (l = decodeURIComponent(l));
          d.push(l);
        }
      }
      return d;
    },
    Jf = function(a, b, c, d) {
      var e = Hf(a, d);
      if (1 === e.length) return e[0].id;
      if (0 !== e.length) {
        e = If(
          e,
          function(f) {
            return f.Mb;
          },
          b
        );
        if (1 === e.length) return e[0].id;
        e = If(
          e,
          function(f) {
            return f.nb;
          },
          c
        );
        return e[0] ? e[0].id : void 0;
      }
    };
  function Kf(a, b, c) {
    var d = document.cookie;
    document.cookie = a;
    var e = document.cookie;
    return d != e || (void 0 != c && 0 <= Gf(b, e).indexOf(c));
  }
  var Nf = function(a, b, c, d, e, f, h) {
    d = d || "auto";
    var k = { path: c || "/" };
    e && (k.expires = e);
    "none" !== d && (k.domain = d);
    h && (k.flags = h);
    var l;
    a: {
      var m = b,
        n;
      if (void 0 == m) n = a + "=deleted; expires=" + new Date(0).toUTCString();
      else {
        f && (m = encodeURIComponent(m));
        var r = m;
        r && 1200 < r.length && (r = r.substring(0, 1200));
        m = r;
        n = a + "=" + m;
      }
      var t = void 0,
        p = void 0,
        u = "",
        v;
      for (v in k)
        if (k.hasOwnProperty(v)) {
          var w = k[v];
          if (null != w)
            switch (v) {
              case "secure":
                w && (n += "; secure");
                break;
              case "domain":
                t = w;
                break;
              case "flags":
                u = ";" + w;
                break;
              default:
                "path" == v && (p = w),
                  "expires" == v && w instanceof Date && (w = w.toUTCString()),
                  (n += "; " + v + "=" + w);
            }
        }
      if ("auto" === t) {
        for (var x = Lf(), y = 0; y < x.length; ++y) {
          var B = "none" != x[y] ? x[y] : void 0;
          if (!Mf(B, p) && Kf(n + (B ? "; domain=" + B : "") + u, a, m)) {
            l = !0;
            break a;
          }
        }
        l = !1;
      } else
        t && "none" != t && (n += "; domain=" + t),
          (l = !Mf(t, p) && Kf(n + u, a, m));
    }
    return l;
  };
  function If(a, b, c) {
    for (var d = [], e = [], f, h = 0; h < a.length; h++) {
      var k = a[h],
        l = b(k);
      l === c
        ? d.push(k)
        : void 0 === f || l < f
        ? ((e = [k]), (f = l))
        : l === f && e.push(k);
    }
    return 0 < d.length ? d : e;
  }
  function Hf(a, b) {
    for (var c = [], d = Gf(a), e = 0; e < d.length; e++) {
      var f = d[e].split("."),
        h = f.shift();
      if (!b || -1 !== b.indexOf(h)) {
        var k = f.shift();
        k &&
          ((k = k.split("-")),
          c.push({ id: f.join("."), Mb: 1 * k[0] || 1, nb: 1 * k[1] || 1 }));
      }
    }
    return c;
  }
  var Of = /^(www\.)?google(\.com?)?(\.[a-z]{2})?$/,
    Pf = /(^|\.)doubleclick\.net$/i,
    Mf = function(a, b) {
      return Pf.test(document.location.hostname) || ("/" === b && Of.test(a));
    },
    Lf = function() {
      var a = [],
        b = document.location.hostname.split(".");
      if (4 === b.length) {
        var c = b[b.length - 1];
        if (parseInt(c, 10).toString() === c) return ["none"];
      }
      for (var d = b.length - 2; 0 <= d; d--) a.push(b.slice(d).join("."));
      var e = document.location.hostname;
      Pf.test(e) || Of.test(e) || a.push("none");
      return a;
    };
  function Qf() {
    for (var a = Rf, b = {}, c = 0; c < a.length; ++c) b[a[c]] = c;
    return b;
  }
  function Sf() {
    var a = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    a += a.toLowerCase() + "0123456789-_";
    return a + ".";
  }
  var Rf, Tf;
  function Uf(a) {
    Rf = Rf || Sf();
    Tf = Tf || Qf();
    for (var b = [], c = 0; c < a.length; c += 3) {
      var d = c + 1 < a.length,
        e = c + 2 < a.length,
        f = a.charCodeAt(c),
        h = d ? a.charCodeAt(c + 1) : 0,
        k = e ? a.charCodeAt(c + 2) : 0,
        l = f >> 2,
        m = ((f & 3) << 4) | (h >> 4),
        n = ((h & 15) << 2) | (k >> 6),
        r = k & 63;
      e || ((r = 64), d || (n = 64));
      b.push(Rf[l], Rf[m], Rf[n], Rf[r]);
    }
    return b.join("");
  }
  function Vf(a) {
    function b(l) {
      for (; d < a.length; ) {
        var m = a.charAt(d++),
          n = Tf[m];
        if (null != n) return n;
        if (!/^[\s\xa0]*$/.test(m))
          throw Error("Unknown base64 encoding at char: " + m);
      }
      return l;
    }
    Rf = Rf || Sf();
    Tf = Tf || Qf();
    for (var c = "", d = 0; ; ) {
      var e = b(-1),
        f = b(0),
        h = b(64),
        k = b(64);
      if (64 === k && -1 === e) return c;
      c += String.fromCharCode((e << 2) | (f >> 4));
      64 != h &&
        ((c += String.fromCharCode(((f << 4) & 240) | (h >> 2))),
        64 != k && (c += String.fromCharCode(((h << 6) & 192) | k)));
    }
  }
  var Wf;
  var ag = function() {
      var a = Xf,
        b = Yf,
        c = $f(),
        d = function(h) {
          a(h.target || h.srcElement || {});
        },
        e = function(h) {
          b(h.target || h.srcElement || {});
        };
      if (!c.init) {
        mc(G, "mousedown", d);
        mc(G, "keyup", d);
        mc(G, "submit", e);
        var f = HTMLFormElement.prototype.submit;
        HTMLFormElement.prototype.submit = function() {
          b(this);
          f.call(this);
        };
        c.init = !0;
      }
    },
    bg = function(a, b, c, d, e) {
      var f = {
        callback: a,
        domains: b,
        fragment: 2 === c,
        placement: c,
        forms: d,
        sameHost: e,
      };
      $f().decorators.push(f);
    },
    cg = function(a, b, c) {
      for (var d = $f().decorators, e = {}, f = 0; f < d.length; ++f) {
        var h = d[f],
          k;
        if ((k = !c || h.forms))
          a: {
            var l = h.domains,
              m = a;
            if (l && (h.sameHost || m !== G.location.hostname))
              for (var n = 0; n < l.length; n++)
                if (l[n] instanceof RegExp) {
                  if (l[n].test(m)) {
                    k = !0;
                    break a;
                  }
                } else if (0 <= m.indexOf(l[n])) {
                  k = !0;
                  break a;
                }
            k = !1;
          }
        if (k) {
          var r = h.placement;
          void 0 == r && (r = h.fragment ? 2 : 1);
          r === b && Ha(e, h.callback());
        }
      }
      return e;
    },
    $f = function() {
      var a = gc("google_tag_data", {}),
        b = a.gl;
      (b && b.decorators) || ((b = { decorators: [] }), (a.gl = b));
      return b;
    };
  var dg = /(.*?)\*(.*?)\*(.*)/,
    eg = /^https?:\/\/([^\/]*?)\.?cdn\.ampproject\.org\/?(.*)/,
    fg = /^(?:www\.|m\.|amp\.)+/,
    gg = /([^?#]+)(\?[^#]*)?(#.*)?/;
  function hg(a) {
    return new RegExp("(.*?)(^|&)" + a + "=([^&]*)&?(.*)");
  }
  var jg = function(a) {
      var b = [],
        c;
      for (c in a)
        if (a.hasOwnProperty(c)) {
          var d = a[c];
          void 0 !== d &&
            d === d &&
            null !== d &&
            "[object Object]" !== d.toString() &&
            (b.push(c), b.push(Uf(String(d))));
        }
      var e = b.join("*");
      return ["1", ig(e), e].join("*");
    },
    ig = function(a, b) {
      var c = [
          window.navigator.userAgent,
          new Date().getTimezoneOffset(),
          window.navigator.userLanguage || window.navigator.language,
          Math.floor(new Date().getTime() / 60 / 1e3) - (void 0 === b ? 0 : b),
          a,
        ].join("*"),
        d;
      if (!(d = Wf)) {
        for (var e = Array(256), f = 0; 256 > f; f++) {
          for (var h = f, k = 0; 8 > k; k++)
            h = h & 1 ? (h >>> 1) ^ 3988292384 : h >>> 1;
          e[f] = h;
        }
        d = e;
      }
      Wf = d;
      for (var l = 4294967295, m = 0; m < c.length; m++)
        l = (l >>> 8) ^ Wf[(l ^ c.charCodeAt(m)) & 255];
      return ((l ^ -1) >>> 0).toString(36);
    },
    lg = function() {
      return function(a) {
        var b = af(F.location.href),
          c = b.search.replace("?", ""),
          d = Xe(c, "_gl", !0) || "";
        a.query = kg(d) || {};
        var e = $e(b, "fragment").match(hg("_gl"));
        a.fragment = kg((e && e[3]) || "") || {};
      };
    },
    mg = function() {
      var a = lg(),
        b = $f();
      b.data || ((b.data = { query: {}, fragment: {} }), a(b.data));
      var c = {},
        d = b.data;
      d && (Ha(c, d.query), Ha(c, d.fragment));
      return c;
    },
    kg = function(a) {
      var b;
      b = void 0 === b ? 3 : b;
      try {
        if (a) {
          var c;
          a: {
            for (var d = a, e = 0; 3 > e; ++e) {
              var f = dg.exec(d);
              if (f) {
                c = f;
                break a;
              }
              d = decodeURIComponent(d);
            }
            c = void 0;
          }
          var h = c;
          if (h && "1" === h[1]) {
            var k = h[3],
              l;
            a: {
              for (var m = h[2], n = 0; n < b; ++n)
                if (m === ig(k, n)) {
                  l = !0;
                  break a;
                }
              l = !1;
            }
            if (l) {
              for (
                var r = {}, t = k ? k.split("*") : [], p = 0;
                p < t.length;
                p += 2
              )
                r[t[p]] = Vf(t[p + 1]);
              return r;
            }
          }
        }
      } catch (u) {}
    };
  function ng(a, b, c, d) {
    function e(n) {
      var r = n,
        t = hg(a).exec(r),
        p = r;
      if (t) {
        var u = t[2],
          v = t[4];
        p = t[1];
        v && (p = p + u + v);
      }
      n = p;
      var w = n.charAt(n.length - 1);
      n && "&" !== w && (n += "&");
      return n + m;
    }
    d = void 0 === d ? !1 : d;
    var f = gg.exec(c);
    if (!f) return "";
    var h = f[1],
      k = f[2] || "",
      l = f[3] || "",
      m = a + "=" + b;
    d ? (l = "#" + e(l.substring(1))) : (k = "?" + e(k.substring(1)));
    return "" + h + k + l;
  }
  function og(a, b) {
    var c = "FORM" === (a.tagName || "").toUpperCase(),
      d = cg(b, 1, c),
      e = cg(b, 2, c),
      f = cg(b, 3, c);
    if (Ia(d)) {
      var h = jg(d);
      c ? pg("_gl", h, a) : qg("_gl", h, a, !1);
    }
    if (!c && Ia(e)) {
      var k = jg(e);
      qg("_gl", k, a, !0);
    }
    for (var l in f)
      if (f.hasOwnProperty(l))
        a: {
          var m = l,
            n = f[l],
            r = a;
          if (r.tagName) {
            if ("a" === r.tagName.toLowerCase()) {
              qg(m, n, r, void 0);
              break a;
            }
            if ("form" === r.tagName.toLowerCase()) {
              pg(m, n, r);
              break a;
            }
          }
          "string" == typeof r && ng(m, n, r, void 0);
        }
  }
  function qg(a, b, c, d) {
    if (c.href) {
      var e = ng(a, b, c.href, void 0 === d ? !1 : d);
      Ve.test(e) && (c.href = e);
    }
  }
  function pg(a, b, c) {
    if (c && c.action) {
      var d = (c.method || "").toLowerCase();
      if ("get" === d) {
        for (var e = c.childNodes || [], f = !1, h = 0; h < e.length; h++) {
          var k = e[h];
          if (k.name === a) {
            k.setAttribute("value", b);
            f = !0;
            break;
          }
        }
        if (!f) {
          var l = G.createElement("input");
          l.setAttribute("type", "hidden");
          l.setAttribute("name", a);
          l.setAttribute("value", b);
          c.appendChild(l);
        }
      } else if ("post" === d) {
        var m = ng(a, b, c.action);
        Ve.test(m) && (c.action = m);
      }
    }
  }
  var Xf = function(a) {
      try {
        var b;
        a: {
          for (var c = a, d = 100; c && 0 < d; ) {
            if (c.href && c.nodeName.match(/^a(?:rea)?$/i)) {
              b = c;
              break a;
            }
            c = c.parentNode;
            d--;
          }
          b = null;
        }
        var e = b;
        if (e) {
          var f = e.protocol;
          ("http:" !== f && "https:" !== f) || og(e, e.hostname);
        }
      } catch (h) {}
    },
    Yf = function(a) {
      try {
        if (a.action) {
          var b = $e(af(a.action), "host");
          og(a, b);
        }
      } catch (c) {}
    },
    rg = function(a, b, c, d) {
      ag();
      bg(a, b, "fragment" === c ? 2 : 1, !!d, !1);
    },
    sg = function(a) {
      ag();
      bg(a, [F.location.hostname], 3, !0, !0);
    },
    tg = function() {
      var a = G.location.hostname,
        b = eg.exec(G.referrer);
      if (!b) return !1;
      var c = b[2],
        d = b[1],
        e = "";
      if (c) {
        var f = c.split("/"),
          h = f[1];
        e = "s" === h ? decodeURIComponent(f[2]) : decodeURIComponent(h);
      } else if (d) {
        if (0 === d.indexOf("xn--")) return !1;
        e = d.replace(/-/g, ".").replace(/\.\./g, "-");
      }
      var k = a.replace(fg, ""),
        l = e.replace(fg, ""),
        m;
      if (!(m = k === l)) {
        var n = "." + l;
        m = k.substring(k.length - n.length, k.length) === n;
      }
      return m;
    },
    ug = function(a, b) {
      return !1 === a ? !1 : a || b || tg();
    };
  var vg = {};
  var wg = /^\w+$/,
    xg = /^[\w-]+$/,
    yg = /^~?[\w-]+$/,
    zg = { aw: "_aw", dc: "_dc", gf: "_gf", ha: "_ha", gp: "_gp" };
  function Ag(a) {
    return a && "string" == typeof a && a.match(wg) ? a : "_gcl";
  }
  var Cg = function() {
      var a = af(F.location.href),
        b = $e(a, "query", !1, void 0, "gclid"),
        c = $e(a, "query", !1, void 0, "gclsrc"),
        d = $e(a, "query", !1, void 0, "dclid");
      if (!b || !c) {
        var e = a.hash.replace("#", "");
        b = b || Xe(e, "gclid", void 0);
        c = c || Xe(e, "gclsrc", void 0);
      }
      return Bg(b, c, d);
    },
    Bg = function(a, b, c) {
      var d = {},
        e = function(f, h) {
          d[h] || (d[h] = []);
          d[h].push(f);
        };
      d.gclid = a;
      d.gclsrc = b;
      d.dclid = c;
      if (void 0 !== a && a.match(xg))
        switch (b) {
          case void 0:
            e(a, "aw");
            break;
          case "aw.ds":
            e(a, "aw");
            e(a, "dc");
            break;
          case "ds":
            e(a, "dc");
            break;
          case "3p.ds":
            (void 0 == vg.gtm_3pds ? 0 : vg.gtm_3pds) && e(a, "dc");
            break;
          case "gf":
            e(a, "gf");
            break;
          case "ha":
            e(a, "ha");
            break;
          case "gp":
            e(a, "gp");
        }
      c && e(c, "dc");
      return d;
    },
    Eg = function(a) {
      var b = Cg();
      Dg(b, a);
    };
  function Dg(a, b, c) {
    function d(r, t) {
      var p = Fg(r, e);
      p && Nf(p, t, h, f, l, !0);
    }
    b = b || {};
    var e = Ag(b.prefix),
      f = b.domain || "auto",
      h = b.path || "/",
      k = void 0 == b.Ma ? 7776e3 : b.Ma;
    c = c || Ea();
    var l = 0 == k ? void 0 : new Date(c + 1e3 * k),
      m = Math.round(c / 1e3),
      n = function(r) {
        return ["GCL", m, r].join(".");
      };
    a.aw && (!0 === b.Rh ? d("aw", n("~" + a.aw[0])) : d("aw", n(a.aw[0])));
    a.dc && d("dc", n(a.dc[0]));
    a.gf && d("gf", n(a.gf[0]));
    a.ha && d("ha", n(a.ha[0]));
    a.gp && d("gp", n(a.gp[0]));
  }
  var Hg = function(a, b, c, d, e) {
      for (var f = mg(), h = Ag(b), k = 0; k < a.length; ++k) {
        var l = a[k];
        if (void 0 !== zg[l]) {
          var m = Fg(l, h),
            n = f[m];
          if (n) {
            var r = Math.min(Gg(n), Ea()),
              t;
            b: {
              for (var p = r, u = Gf(m, G.cookie), v = 0; v < u.length; ++v)
                if (Gg(u[v]) > p) {
                  t = !0;
                  break b;
                }
              t = !1;
            }
            t ||
              Nf(
                m,
                n,
                c,
                d,
                0 == e ? void 0 : new Date(r + 1e3 * (null == e ? 7776e3 : e)),
                !0
              );
          }
        }
      }
      var w = { prefix: b, path: c, domain: d };
      Dg(Bg(f.gclid, f.gclsrc), w);
    },
    Fg = function(a, b) {
      var c = zg[a];
      if (void 0 !== c) return b + c;
    },
    Gg = function(a) {
      var b = a.split(".");
      return 3 !== b.length || "GCL" !== b[0] ? 0 : 1e3 * (Number(b[1]) || 0);
    };
  function Ig(a) {
    var b = a.split(".");
    if (3 == b.length && "GCL" == b[0] && b[1]) return b[2];
  }
  var Jg = function(a, b, c, d, e) {
      if (ra(b)) {
        var f = Ag(e);
        rg(
          function() {
            for (var h = {}, k = 0; k < a.length; ++k) {
              var l = Fg(a[k], f);
              if (l) {
                var m = Gf(l, G.cookie);
                m.length && (h[l] = m.sort()[m.length - 1]);
              }
            }
            return h;
          },
          b,
          c,
          d
        );
      }
    },
    Kg = function(a) {
      return a.filter(function(b) {
        return yg.test(b);
      });
    },
    Lg = function(a, b) {
      for (var c = Ag(b && b.prefix), d = {}, e = 0; e < a.length; e++)
        zg[a[e]] && (d[a[e]] = zg[a[e]]);
      C(d, function(f, h) {
        var k = Gf(c + h, G.cookie);
        if (k.length) {
          var l = k[0],
            m = Gg(l),
            n = {};
          n[f] = [Ig(l)];
          Dg(n, b, m);
        }
      });
    },
    Mg = function() {
      var a = ["", "aw.ds"],
        b = Cg(),
        c = b.gclid,
        d = b.gclsrc || "";
      c &&
        -1 !== a.indexOf(d) &&
        sg(function() {
          var e = { gclid: c };
          d && (e.gclsrc = d);
          return e;
        });
    };
  function Ng() {
    var a = Cg(),
      b = a.gclid,
      c = a.gclsrc;
    if (b && (!c || "aw.ds" === c)) {
      var d;
      Wc.reported_gclid || (Wc.reported_gclid = {});
      d = Wc.reported_gclid;
      if (!d[b]) {
        d[b] = !0;
        var e = "/pagead/landing?gclid=" + encodeURIComponent(b);
        c && (e += "&gclsrc=" + encodeURIComponent(c));
        tc("https://www.google.com" + e);
      }
    }
  }
  var Og;
  if (3 === Vc.Cb.length) Og = "g";
  else {
    var Pg = "G";
    Pg = "g";
    Og = Pg;
  }
  var Qg = {
      "": "n",
      UA: "u",
      AW: "a",
      DC: "d",
      G: "e",
      GF: "f",
      HA: "h",
      GTM: Og,
      OPT: "o",
    },
    Rg = function(a) {
      var b = Vc.s.split("-"),
        c = b[0].toUpperCase(),
        d = Qg[c] || "i",
        e = a && "GTM" === c ? b[1] : "OPT" === c ? b[1] : "",
        f;
      if (3 === Vc.Cb.length) {
        var h = void 0;
        h = h || (Wd() ? "s" : "o");
        f = "2" + (h || "w");
      } else f = "";
      return f + d + Vc.Cb + e;
    };
  var Sg = function(a) {
      var b = vf(a, "/pagead/conversion_async.js");
      return b
        ? b
        : -1 === navigator.userAgent.toLowerCase().indexOf("firefox")
        ? Q(
            "https://",
            "http://",
            "www.googleadservices.com/pagead/conversion_async.js"
          )
        : "https://www.google.com/pagead/conversion_async.js";
    },
    Tg = !1,
    Ug = [],
    Vg = ["aw", "dc"],
    Wg = function(a) {
      var b = F.google_trackConversion,
        c = a.gtm_onFailure;
      "function" == typeof b ? b(a) || c() : c();
    },
    Xg = function() {
      for (; 0 < Ug.length; ) Wg(Ug.shift());
    },
    Yg = function(a) {
      if (!Tg) {
        Tg = !0;
        Je();
        var b = function() {
          Xg();
          Ug = { push: Wg };
        };
        Wd()
          ? b()
          : ic(a, b, function() {
              Xg();
              Tg = !1;
            });
      }
    },
    Zg = function(a) {
      if (a) {
        for (var b = [], c = 0; c < a.length; ++c) {
          var d = a[c];
          d &&
            b.push({
              item_id: d.id,
              quantity: d.quantity,
              value: d.price,
              start_date: d.start_date,
              end_date: d.end_date,
            });
        }
        return b;
      }
    },
    $g = function(a, b, c, d) {
      var e = Sc(a),
        f = b == J.C,
        h = e.o[0],
        k = e.o[1],
        l = void 0 !== k,
        m = function(V) {
          return d.getWithConfig(V);
        },
        n = !1 !== m(J.Ea),
        r = m(J.Da) || m(J.S),
        t = m(J.O),
        p = m(J.Y),
        u = m(J.qa),
        v = Sg(u);
      if (f) {
        var w = m(J.na) || {};
        if (n) {
          ug(w[J.Wa], !!w[J.F]) && Hg(Vg, r, void 0, t, p);
          var x = { prefix: r, domain: t, Ma: p };
          Eg(x);
          Lg(["aw", "dc"], x);
        }
        w[J.F] && Jg(Vg, w[J.F], w[J.Za], !!w[J.Ya], r);
        var y = !1;
        y = !0;
        y ? ie(e, d) : ie(e);
        Ng();
      }
      var B = !1 === m(J.Fd) || !1 === m(J.cb);
      if (!f || (!l && !B))
        if ((!0 === m(J.Gd) && (l = !1), !1 !== m(J.X) || l)) {
          var z = {
            google_conversion_id: h,
            google_remarketing_only: !l,
            onload_callback: d.B,
            gtm_onFailure: d.w,
            google_conversion_format: "3",
            google_conversion_color: "ffffff",
            google_conversion_domain: "",
            google_conversion_label: k,
            google_conversion_language: m(J.Ga),
            google_conversion_value: m(J.aa),
            google_conversion_currency: m(J.ia),
            google_conversion_order_id: m(J.eb),
            google_user_id: m(J.fb),
            google_conversion_page_url: m(J.$a),
            google_conversion_referrer_url: m(J.ab),
            google_gtm: Rg(),
            google_transport_url: vf(u, "/"),
          };
          z.google_restricted_data_processing = m(J.vc);
          Wd() &&
            ((z.opt_image_generator = function() {
              return new Image();
            }),
            (z.google_enable_display_cookie_match = !1));
          !1 === m(J.X) && (z.google_allow_ad_personalization_signals = !1);
          z.google_read_gcl_cookie_opt_out = !n;
          n && r && (z.google_gcl_cookie_prefix = r);
          var A = (function() {
            var V = m(J.Ob),
              ca = { event: b };
            if (ra(V)) {
              jd("GTM", 26);
              for (var da = 0; da < V.length; ++da) {
                var M = V[da],
                  N = m(M);
                void 0 !== N && (ca[M] = N);
              }
              return ca;
            }
            var P = d.eventModel;
            if (!P) return null;
            D(P, ca);
            for (var T = 0; T < J.Cd.length; ++T) delete ca[J.Cd[T]];
            return ca;
          })();
          A && (z.google_custom_params = A);
          !l &&
            m(J.M) &&
            (z.google_gtag_event_data = { items: m(J.M), value: m(J.aa) });
          if (l && b == J.ma) {
            z.google_conversion_merchant_id = m(J.Od);
            z.google_basket_feed_country = m(J.Kd);
            z.google_basket_feed_language = m(J.Ld);
            z.google_basket_discount = m(J.Id);
            z.google_basket_transaction_type = b;
            z.google_disable_merchant_reported_conversions = !0 === m(J.Ud);
            Wd() && (z.google_disable_merchant_reported_conversions = !0);
            var E = Zg(m(J.M));
            E && (z.google_conversion_items = E);
          }
          var H = function(V, ca) {
            void 0 != ca &&
              "" !== ca &&
              ((z.google_additional_conversion_params =
                z.google_additional_conversion_params || {}),
              (z.google_additional_conversion_params[V] = ca));
          };
          l &&
            ("boolean" === typeof m(J.oc) && H("vdnc", m(J.oc)),
            H("vdltv", m(J.Qd)));
          var K = !0;
          K && Ug.push(z);
        }
      Yg(v);
    };
  var ah = function() {
      for (
        var a = ec.userAgent + (G.cookie || "") + (G.referrer || ""),
          b = a.length,
          c = F.history.length;
        0 < c;

      )
        a += c-- ^ b++;
      var d = 1,
        e,
        f,
        h;
      if (a)
        for (d = 0, f = a.length - 1; 0 <= f; f--)
          (h = a.charCodeAt(f)),
            (d = ((d << 6) & 268435455) + h + (h << 14)),
            (e = d & 266338304),
            (d = 0 != e ? d ^ (e >> 21) : d);
      return [
        Math.round(2147483647 * Math.random()) ^ (d & 2147483647),
        Math.round(Ea() / 1e3),
      ].join(".");
    },
    dh = function(a, b, c, d) {
      var e = bh(b);
      return Jf(a, e, ch(c), d);
    },
    eh = function(a, b, c, d) {
      var e = "" + bh(c),
        f = ch(d);
      1 < f && (e += "-" + f);
      return [b, e, a].join(".");
    },
    bh = function(a) {
      if (!a) return 1;
      a = 0 === a.indexOf(".") ? a.substr(1) : a;
      return a.split(".").length;
    },
    ch = function(a) {
      if (!a || "/" === a) return 1;
      "/" !== a[0] && (a = "/" + a);
      "/" !== a[a.length - 1] && (a += "/");
      return a.split("/").length - 1;
    };
  var fh = ["1"],
    gh = {},
    kh = function(a, b, c, d) {
      var e = hh(a);
      gh[e] || ih(e, b, c) || (jh(e, ah(), b, c, d), ih(e, b, c));
    };
  function jh(a, b, c, d, e) {
    var f = eh(b, "1", d, c);
    Nf(
      a,
      f,
      c,
      d,
      0 == e ? void 0 : new Date(Ea() + 1e3 * (void 0 == e ? 7776e3 : e))
    );
  }
  function ih(a, b, c) {
    var d = dh(a, b, c, fh);
    d && (gh[a] = d);
    return d;
  }
  function hh(a) {
    return (a || "_gcl") + "_au";
  }
  var lh = function() {
    for (
      var a = [],
        b = G.cookie.split(";"),
        c = /^\s*_gac_(UA-\d+-\d+)=\s*(.+?)\s*$/,
        d = 0;
      d < b.length;
      d++
    ) {
      var e = b[d].match(c);
      e && a.push({ jd: e[1], value: e[2] });
    }
    var f = {};
    if (!a || !a.length) return f;
    for (var h = 0; h < a.length; h++) {
      var k = a[h].value.split(".");
      "1" == k[0] &&
        3 == k.length &&
        k[1] &&
        (f[a[h].jd] || (f[a[h].jd] = []),
        f[a[h].jd].push({ timestamp: k[1], gg: k[2] }));
    }
    return f;
  };
  var mh = /^\d+\.fls\.doubleclick\.net$/;
  function nh(a) {
    var b = af(F.location.href),
      c = $e(b, "host", !1);
    if (c && c.match(mh)) {
      var d = $e(b, "path").split(a + "=");
      if (1 < d.length) return d[1].split(";")[0].split("?")[0];
    }
  }
  function oh(a, b) {
    if ("aw" == a || "dc" == a) {
      var c = nh("gcl" + a);
      if (c) return c.split(".");
    }
    var d = Ag(b);
    if ("_gcl" == d) {
      var e;
      e = Cg()[a] || [];
      if (0 < e.length) return e;
    }
    var f = Fg(a, d),
      h;
    if (f) {
      var k = [];
      if (G.cookie) {
        var l = Gf(f, G.cookie);
        if (l && 0 != l.length) {
          for (var m = 0; m < l.length; m++) {
            var n = Ig(l[m]);
            n && -1 === q(k, n) && k.push(n);
          }
          h = Kg(k);
        } else h = k;
      } else h = k;
    } else h = [];
    return h;
  }
  var ph = function() {
      var a = nh("gac");
      if (a) return decodeURIComponent(a);
      var b = lh(),
        c = [];
      C(b, function(d, e) {
        for (var f = [], h = 0; h < e.length; h++) f.push(e[h].gg);
        f = Kg(f);
        f.length && c.push(d + ":" + f.join(","));
      });
      return c.join(";");
    },
    qh = function(a, b, c, d, e) {
      kh(b, c, d, e);
      var f = gh[hh(b)],
        h = Cg().dc || [],
        k = !1;
      if (f && 0 < h.length) {
        var l = (Wc.joined_au = Wc.joined_au || {}),
          m = b || "_gcl";
        if (!l[m])
          for (var n = 0; n < h.length; n++) {
            var r = "https://adservice.google.com/ddm/regclk";
            r = r + "?gclid=" + h[n] + "&auiddc=" + f;
            tc(r);
            k = l[m] = !0;
          }
      }
      null == a && (a = k);
      if (a && f) {
        var t = hh(b),
          p = gh[t];
        p && jh(t, p, c, d, e);
      }
    };
  var rh = function(a) {
      return !(void 0 === a || null === a || 0 === (a + "").length);
    },
    sh = function(a, b) {
      var c;
      if (2 === b.W) return a("ord", wa(1e11, 1e13)), !0;
      if (3 === b.W) return a("ord", "1"), a("num", wa(1e11, 1e13)), !0;
      if (4 === b.W) return rh(b.sessionId) && a("ord", b.sessionId), !0;
      if (5 === b.W) c = "1";
      else if (6 === b.W) c = b.dd;
      else return !1;
      rh(c) && a("qty", c);
      rh(b.Jb) && a("cost", b.Jb);
      rh(b.transactionId) && a("ord", b.transactionId);
      return !0;
    },
    th = encodeURIComponent,
    uh = function(a, b) {
      function c(n, r, t) {
        f.hasOwnProperty(n) ||
          ((r += ""), (e += ";" + n + "=" + (t ? r : th(r))));
      }
      var d = a.Jc,
        e = a.protocol;
      e += a.cc
        ? "//" + d + ".fls.doubleclick.net/activityi"
        : "//ad.doubleclick.net/activity";
      e += ";src=" + th(d) + (";type=" + th(a.Mc)) + (";cat=" + th(a.hb));
      var f = a.Yf || {};
      C(f, function(n, r) {
        e += ";" + th(n) + "=" + th(r + "");
      });
      if (sh(c, a)) {
        rh(a.mc) && c("u", a.mc);
        rh(a.kc) && c("tran", a.kc);
        c("gtm", Rg());
        !1 === a.Cf && c("npa", "1");
        if (a.Ic) {
          var h = oh("dc", a.Ha);
          h && h.length && c("gcldc", h.join("."));
          var k = oh("aw", a.Ha);
          k && k.length && c("gclaw", k.join("."));
          var l = ph();
          l && c("gac", l);
          kh(a.Ha, void 0, a.Uf, a.Vf);
          var m = gh[hh(a.Ha)];
          m && c("auiddc", m);
        }
        rh(a.$c) && c("prd", a.$c, !0);
        C(a.ld, function(n, r) {
          c(n, r);
        });
        e += b || "";
        rh(a.Xb) && c("~oref", a.Xb);
        a.cc ? kc(e + "?", a.B) : lc(e + "?", a.B, a.w);
      } else I(a.w);
    };
  var vh = function(a, b, c, d, e, f) {
      var h = { config: a, gtm: Rg() };
      c && (kh(d, void 0, e, f), (h.auiddc = gh[hh(d)]));
      b && (h.loadInsecure = b);
      void 0 === F.__dc_ns_processor && (F.__dc_ns_processor = []);
      F.__dc_ns_processor.push(h);
      ic((b ? "http" : "https") + "://www.googletagmanager.com/dclk/ns/v1.js");
    },
    wh = function(a, b, c) {
      var d = /^u([1-9]\d?|100)$/,
        e = a.getWithConfig(J.vh) || {},
        f = Rd(b, c);
      f = Ff(a);
      var h = {},
        k = {};
      if (Pa(e))
        for (var l in e)
          if (e.hasOwnProperty(l) && d.test(l)) {
            var m = e[l];
            g(m) && (h[l] = m);
          }
      for (var n = 0; n < f.length; n++) {
        var r = f[n];
        d.test(r) && (h[r] = r);
      }
      for (var t in h) h.hasOwnProperty(t) && (k[t] = a.getWithConfig(h[t]));
      return k;
    },
    xh = function(a) {
      function b(l, m, n) {
        void 0 !== n &&
          0 !== (n + "").length &&
          d.push(l + m + ":" + c(n + ""));
      }
      var c = encodeURIComponent,
        d = [],
        e = a(J.M) || [];
      if (ra(e))
        for (var f = 0; f < e.length; f++) {
          var h = e[f],
            k = f + 1;
          b("i", k, h.id);
          b("p", k, h.price);
          b("q", k, h.quantity);
          b("c", k, a(J.uh));
          b("l", k, a(J.Ga));
        }
      return d.join("|");
    },
    yh = function(a) {
      var b = /^DC-(\d+)(\/([\w-]+)\/([\w-]+)\+(\w+))?$/.exec(a);
      if (b) {
        var c = {
          standard: 2,
          unique: 3,
          per_session: 4,
          transactions: 5,
          items_sold: 6,
          "": 1,
        }[(b[5] || "").toLowerCase()];
        if (c)
          return {
            containerId: "DC-" + b[1],
            U: b[3] ? a : "",
            wf: b[1],
            vf: b[3] || "",
            hb: b[4] || "",
            W: c,
          };
      }
    },
    Ah = function(a, b, c, d) {
      var e = yh(a);
      if (e) {
        var f = function(K) {
            return d.getWithConfig(K);
          },
          h = !1 !== f(J.Ea),
          k = f(J.Da) || f(J.S),
          l = f(J.O),
          m = f(J.Y),
          n = f(J.Ne),
          r = 3 === Xd();
        if (b === J.C) {
          var t = f(J.na) || {},
            p = f(J.wb),
            u = void 0 === p ? !0 : !!p;
          if (h) {
            if (ug(t[J.Wa], !!t[J.F])) {
              Hg(zh, k, void 0, l, m);
            }
            var v = { prefix: k, domain: l, Ma: m };
            Eg(v);
            Lg(zh, v);
            qh(u, k, void 0, l, m);
          }
          if (t[J.F]) {
            Jg(zh, t[J.F], t[J.Za], !!t[J.Ya], k);
          }
          if (n && n.exclusion_parameters && n.engines)
            if (Wd()) {
            } else vh(n, r, h, k, l, m);
          I(d.B);
        } else {
          var w = {},
            x = f(J.Le);
          if (Pa(x))
            for (var y in x)
              if (x.hasOwnProperty(y)) {
                var B = x[y];
                void 0 !== B && null !== B && (w[y] = B);
              }
          var z = "";
          if (5 === e.W || 6 === e.W) z = xh(f);
          var A = wh(d, e.containerId, e.U),
            E = !0 === f(J.lh);
          if (Wd() && E) {
            E = !1;
          }
          var H = {
            hb: e.hb,
            Ic: h,
            Uf: l,
            Vf: m,
            Ha: k,
            Jb: f(J.aa),
            W: e.W,
            Yf: w,
            Jc: e.wf,
            Mc: e.vf,
            w: d.w,
            B: d.B,
            Xb: Ze(af(F.location.href)),
            $c: z,
            protocol: r ? "http:" : "https:",
            dd: f(J.df),
            cc: E,
            sessionId: f(J.Tb),
            kc: void 0,
            transactionId: f(J.eb),
            mc: void 0,
            ld: A,
            Cf: !1 !== f(J.X),
          };
          uh(H);
        }
      } else I(d.w);
    },
    zh = ["aw", "dc"];
  var Ch = function(a) {
      var b;
      if (a.hasOwnProperty("conversion_data")) b = "conversion_data";
      else if (a.hasOwnProperty("price")) b = "price";
      else return;
      var c = b,
        d = Bh(JSON.stringify(a[c])),
        e = Bh(a.conversion_id),
        f =
          "https://www.googletraveladservices.com/travel/flights/clk/pagead/conversion";
      f = "https://www.google.com/travel/flights/click/conversion";
      var h = f + "/" + e + "/?" + c + "=" + d;
      if (a.conversionLinkerEnabled) {
        var k = oh("gf", a.cookiePrefix);
        if (k && k.length)
          for (var l = 0; l < k.length; l++) h += "&gclgf=" + Bh(k[l]);
      }
      lc(h, a.onSuccess, a.onFailure);
    },
    Bh = function(a) {
      return null === a || void 0 === a || 0 === String(a).length
        ? ""
        : encodeURIComponent(String(a));
    };
  var Dh = /.*\.google\.com(:\d+)?\/booking\/flights.*/,
    Fh = function(a, b, c, d) {
      var e = function(w) {
          return d.getWithConfig(w);
        },
        f = Sc(a).o[0],
        h = !1 !== e(J.Ea),
        k = e(J.Da) || e(J.S),
        l = e(J.O),
        m = e(J.Y);
      if (b === J.C) {
        if (h) {
          var n = { prefix: k, domain: l, Ma: m };
          Eg(n);
          Lg(["aw", "dc"], n);
        }
        I(d.B);
      } else {
        var r = {
            conversion_id: f,
            onFailure: d.w,
            onSuccess: d.B,
            conversionLinkerEnabled: h,
            cookiePrefix: k,
          },
          t = Dh.test(F.location.href);
        if (b !== J.ma) I(d.w);
        else {
          var u = {
              partner_id: f,
              trip_type: e(J.nf),
              total_price: e(J.aa),
              currency: e(J.ia),
              is_direct_booking: t,
              flight_segment: Eh(e(J.M)),
            },
            v = e(J.$d);
          v &&
            "object" === typeof v &&
            ((u.passengers_total = za(v.total)),
            (u.passengers_adult = za(v.adult)),
            (u.passengers_child = za(v.child)),
            (u.passengers_infant_in_seat = za(v.infant_in_seat)),
            (u.passengers_infant_in_lap = za(v.infant_in_lap)));
          r.conversion_data = u;
          Ch(r);
        }
      }
    },
    Eh = function(a) {
      if (a) {
        for (var b = [], c = 0, d = 0; d < a.length; ++d) {
          var e = a[d];
          !e ||
            (void 0 !== e.category &&
              "" !== e.category &&
              "FlightSegment" !== e.category) ||
            ((b[c] = {
              cabin: e.travel_class,
              fare_product: e.fare_product,
              booking_code: e.booking_code,
              flight_number: e.flight_number,
              origin: e.origin,
              destination: e.destination,
              departure_date: e.start_date,
            }),
            c++);
        }
        return b;
      }
    };
  var Kh = function(a, b, c, d) {
      var e = Sc(a),
        f = function(x) {
          return d.getWithConfig(x);
        },
        h = !1 !== f(J.Ea),
        k = f(J.Da) || f(J.S),
        l = f(J.O),
        m = f(J.Y);
      if (b === J.C) {
        var n = f(J.na) || {};
        if (h) {
          ug(n[J.Wa], !!n[J.F]) && Hg(Gh, k, void 0, l, m);
          var r = { prefix: k, domain: l, Ma: m };
          Eg(r);
          Lg(["aw", "dc"], r);
        }
        if (n[J.F]) {
          Jg(Gh, n[J.F], n[J.Za], !!n[J.Ya], k);
        }
        I(d.B);
      } else {
        var t = e.o[0];
        if (/^\d+$/.test(t)) {
          var p =
            "https://www.googletraveladservices.com/travel/clk/pagead/conversion/" +
            encodeURIComponent(t) +
            "/";
          if (b === J.ma) {
            var u = Hh(f(J.eb), f(J.aa), f(J.ia), f(J.M));
            u = encodeURIComponent(Ih(u));
            p += "?data=" + u;
          } else if (b === J.Ba) {
            var v = Jh(t, f(J.aa), f(J.Yd), f(J.ia), f(J.M));
            v = encodeURIComponent(Ih(v));
            p +=
              "?label=FH&guid=ON&script=0&ord=" +
              wa(0, 4294967295) +
              ("&price=" + v);
          } else {
            I(d.w);
            return;
          }
          if (h) {
            var w = b === J.Ba ? oh("aw", k) : oh("ha", k);
            p += w
              .map(function(x) {
                return "&gclha=" + encodeURIComponent(x);
              })
              .join("");
          }
          lc(p, d.B, d.w);
        } else I(d.w);
      }
    },
    Hh = function(a, b, c, d) {
      var e = {};
      Lh(a) && (e.hct_booking_xref = a);
      g(c) && (e.hct_currency_code = c);
      Lh(b) && ((e.hct_total_price = b), (e.hct_base_price = b));
      if (!ra(d) || 0 === d.length) return e;
      var f = d[0];
      if (!Pa(f)) return e;
      Lh(f[Mh.va]) && (e.hct_partner_hotel_id = f[Mh.va]);
      g(f[Mh.ja]) && (e.hct_checkin_date = f[Mh.ja]);
      g(f[Mh.Ra]) && (e.hct_checkout_date = f[Mh.Ra]);
      return e;
    },
    Jh = function(a, b, c, d, e) {
      function f(n) {
        void 0 === n && (n = 0);
        if (Lh(n)) return l + n;
      }
      function h(n, r, t) {
        t(r) && (k[n] = r);
      }
      var k = {};
      k.partner_id = a;
      var l = "USD";
      g(d) && (l = k.currency = d);
      Lh(b) &&
        ((k.base_price_value_string = f(b)),
        (k.display_price_value_string = f(b)));
      Lh(c) && (k.tax_price_value_string = f(c));
      g("LANDING_PAGE") && (k.page_type = "LANDING_PAGE");
      if (!ra(e) || 0 == e.length) return k;
      var m = e[0];
      if (!Pa(m)) return k;
      Lh(m[Mh.Jd]) && (k.total_price_value_string = f(m[Mh.Jd]));
      h("partner_hotel_id", m[Mh.va], Lh);
      h("check_in_date", m[Mh.ja], g);
      h("check_out_date", m[Mh.Ra], g);
      h("adults", m[Mh.ef], Nh);
      h(Mh.Nd, m[Mh.Nd], g);
      h(Mh.Md, m[Mh.Md], g);
      return k;
    },
    Ih = function(a) {
      var b = [];
      C(a, function(c, d) {
        b.push(c + "=" + d);
      });
      return b.join(";");
    },
    Lh = function(a) {
      return g(a) || Nh(a);
    },
    Nh = function(a) {
      return "number" === typeof a;
    },
    Mh = {
      va: "id",
      Jd: "price",
      ja: "start_date",
      Ra: "end_date",
      ef: "occupancy",
      Nd: "room_id",
      Md: "rate_rule_id",
    },
    Gh = ["ha"];
  var ai = function(a, b, c, d) {
      var e = "https://www.google-analytics.com/analytics.js",
        f = Qe();
      if (pa(f)) {
        var h = "gtag_" + a.split("-").join("_"),
          k = function(y) {
            var B = [].slice.call(arguments, 0);
            B[0] = h + "." + B[0];
            f.apply(window, B);
          },
          l = function() {
            var y = function(E, H) {
                for (var K = 0; H && K < H.length; K++) k(E, H[K]);
              },
              B = Sh(b, d);
            if (B) {
              var z = B.action;
              if ("impressions" === z) y("ec:addImpression", B.og);
              else if ("promo_click" === z || "promo_view" === z) {
                var A = B.ad;
                y("ec:addPromo", B.ad);
                A &&
                  0 < A.length &&
                  "promo_click" === z &&
                  k("ec:setAction", z);
              } else y("ec:addProduct", B.Na), k("ec:setAction", z, B.gb);
            }
          },
          m = function() {
            if (Wd()) {
            } else {
              var y = d.getWithConfig(J.Ye);
              y &&
                (k("require", y, { dataLayer: "dataLayer" }),
                k("require", "render"));
            }
          },
          n = Th(a, h, b, d);
        Uh(h, n.Ia) &&
          (f(function() {
            Oe() && Oe().remove(h);
          }),
          (Vh[h] = !1));
        f("create", a, n.Ia);
        (function() {
          var y = d.getWithConfig("custom_map");
          f(function() {
            if (Pa(y)) {
              var B = n.ka,
                z = Oe().getByName(h),
                A;
              for (A in y)
                if (
                  y.hasOwnProperty(A) &&
                  /^(dimension|metric)\d+$/.test(A) &&
                  void 0 != y[A]
                ) {
                  var E = z.get(Wh(y[A]));
                  Xh(B, A, E);
                }
            }
          });
        })();
        (function(y) {
          if (y) {
            var B = {};
            if (Pa(y))
              for (var z in Yh) Yh.hasOwnProperty(z) && Zh(Yh[z], z, y[z], B);
            k("require", "linkid", B);
          }
        })(n.linkAttribution);
        var t = n[J.na];
        if (t && t[J.F]) {
          var p = t[J.Za];
          Re(
            h + ".",
            t[J.F],
            void 0 === p ? !!t.use_anchor : "fragment" === p,
            !!t[J.Ya]
          );
        }
        var u = function(y, B, z) {
          z && (B = "" + B);
          n.ka[y] = B;
        };
        if (b === J.md) m(), k("send", "pageview", n.ka);
        else if (b === J.C) {
          m();
          var v = !1;
          v = !0;
          v ? ie(a, d) : ie(a);
          0 != n.sendPageView && k("send", "pageview", n.ka);
        } else
          "screen_view" === b
            ? k("send", "screenview", n.ka)
            : "timing_complete" === b
            ? (u("timingCategory", n.eventCategory, !0),
              u("timingVar", n.name, !0),
              u("timingValue", za(n.value)),
              void 0 !== n.eventLabel && u("timingLabel", n.eventLabel, !0),
              k("send", "timing", n.ka))
            : "exception" === b
            ? k("send", "exception", n.ka)
            : "optimize.callback" !== b &&
              (0 <=
                q(
                  [
                    J.fd,
                    "select_content",
                    J.Ba,
                    J.Eb,
                    J.Fb,
                    J.Ua,
                    "set_checkout_option",
                    J.ma,
                    J.Hb,
                    "view_promotion",
                    "checkout_progress",
                  ],
                  b
                ) && (k("require", "ec", "ec.js"), l()),
              u("eventCategory", n.eventCategory, !0),
              u("eventAction", n.eventAction || b, !0),
              void 0 !== n.eventLabel && u("eventLabel", n.eventLabel, !0),
              void 0 !== n.value && u("eventValue", za(n.value)),
              k("send", "event", n.ka));
        if (!$h) {
          $h = !0;
          Je();
          var w = d.w,
            x = function() {
              Oe().loaded || w();
            };
          Wd() ? I(x) : ic(e, x, w);
        }
      } else I(d.w);
    },
    $h,
    Vh = {},
    bi = {
      client_id: 1,
      client_storage: "storage",
      cookie_name: 1,
      cookie_domain: 1,
      cookie_expires: 1,
      cookie_path: 1,
      cookie_update: 1,
      cookie_flags: 1,
      sample_rate: 1,
      site_speed_sample_rate: 1,
      use_amp_client_id: 1,
      store_gac: 1,
      conversion_linker: "storeGac",
    },
    ci = {
      anonymize_ip: 1,
      app_id: 1,
      app_installer_id: 1,
      app_name: 1,
      app_version: 1,
      campaign: {
        name: "campaignName",
        source: "campaignSource",
        medium: "campaignMedium",
        term: "campaignTerm",
        content: "campaignContent",
        id: "campaignId",
      },
      currency: "currencyCode",
      description: "exDescription",
      fatal: "exFatal",
      language: 1,
      non_interaction: 1,
      page_hostname: "hostname",
      page_referrer: "referrer",
      page_path: "page",
      page_location: "location",
      page_title: "title",
      screen_name: 1,
      transport_type: "transport",
      user_id: 1,
    },
    di = {
      content_id: 1,
      event_category: 1,
      event_action: 1,
      event_label: 1,
      link_attribution: 1,
      linker: 1,
      method: 1,
      name: 1,
      send_page_view: 1,
      value: 1,
    },
    Yh = { cookie_name: 1, cookie_expires: "duration", levels: 1 },
    ei = {
      anonymize_ip: 1,
      fatal: 1,
      non_interaction: 1,
      use_amp_client_id: 1,
      send_page_view: 1,
      store_gac: 1,
      conversion_linker: 1,
    },
    Zh = function(a, b, c, d) {
      if (void 0 !== c)
        if (
          (ei[b] && (c = Aa(c)),
          "anonymize_ip" !== b || c || (c = void 0),
          1 === a)
        )
          d[Wh(b)] = c;
        else if (g(a)) d[a] = c;
        else
          for (var e in a)
            a.hasOwnProperty(e) && void 0 !== c[e] && (d[a[e]] = c[e]);
    },
    Wh = function(a) {
      return a && g(a)
        ? a.replace(/(_[a-z])/g, function(b) {
            return b[1].toUpperCase();
          })
        : a;
    },
    fi = function(a) {
      var b = "general";
      0 <=
      q(
        [
          J.Dd,
          J.Eb,
          J.Ed,
          J.Ua,
          "checkout_progress",
          J.ma,
          J.Hb,
          J.Fb,
          "set_checkout_option",
        ],
        a
      )
        ? (b = "ecommerce")
        : 0 <=
          q(
            "generate_lead login search select_content share sign_up view_item view_item_list view_promotion view_search_results".split(
              " "
            ),
            a
          )
        ? (b = "engagement")
        : "exception" === a && (b = "error");
      return b;
    },
    Xh = function(a, b, c) {
      a.hasOwnProperty(b) || (a[b] = c);
    },
    gi = function(a) {
      if (ra(a)) {
        for (var b = [], c = 0; c < a.length; c++) {
          var d = a[c];
          if (void 0 != d) {
            var e = d.id,
              f = d.variant;
            void 0 != e && void 0 != f && b.push(String(e) + "." + String(f));
          }
        }
        return 0 < b.length ? b.join("!") : void 0;
      }
    },
    Th = function(a, b, c, d) {
      var e = function(A) {
          return d.getWithConfig(A);
        },
        f = {},
        h = {},
        k = {},
        l = gi(e(J.Te));
      l && Xh(h, "exp", l);
      var m = e("custom_map");
      if (Pa(m))
        for (var n in m)
          if (
            m.hasOwnProperty(n) &&
            /^(dimension|metric)\d+$/.test(n) &&
            void 0 != m[n]
          ) {
            var r = e(String(m[n]));
            void 0 !== r && Xh(h, n, r);
          }
      var t = Rd(a);
      t = Ff(d);
      for (var p = 0; p < t.length; ++p) {
        var u = t[p],
          v = e(u);
        if (di.hasOwnProperty(u)) Zh(di[u], u, v, f);
        else if (ci.hasOwnProperty(u)) Zh(ci[u], u, v, h);
        else if (bi.hasOwnProperty(u)) Zh(bi[u], u, v, k);
        else if (/^(dimension|metric|content_group)\d+$/.test(u))
          Zh(1, u, v, h);
        else if ("developer_id" === u) {
        } else u === J.S && 0 > q(t, J.Kb) && (k.cookieName = v + "_ga");
      }
      Xh(k, "cookieDomain", "auto");
      Xh(h, "forceSSL", !0);
      Xh(f, "eventCategory", fi(c));
      0 <=
        q(
          [
            "view_item",
            "view_item_list",
            "view_promotion",
            "view_search_results",
          ],
          c
        ) && Xh(h, "nonInteraction", !0);
      "login" === c || "sign_up" === c || "share" === c
        ? Xh(f, "eventLabel", e(J.Xe))
        : "search" === c || "view_search_results" === c
        ? Xh(f, "eventLabel", e(J.kf))
        : "select_content" === c && Xh(f, "eventLabel", e(J.th));
      var x = f[J.na] || {},
        y = x[J.Wa];
      y || (0 != y && x[J.F])
        ? (k.allowLinker = !0)
        : !1 === y && Xh(k, "useAmpClientId", !1);
      if (!1 === e(J.nh) || !1 === e(J.X) || !1 === e(J.Sa))
        h.allowAdFeatures = !1;
      !1 === e(J.X) && jd("GTM", 27);
      k.name = b;
      h["&gtm"] = Rg(!0);
      h.hitCallback = d.B;
      var B = e(J.We) || Md("gtag.remote_config." + a + ".url", 2),
        z = e(J.Ue) || Md("gtag.remote_config." + a + ".dualId", 2);
      B && null != fc && (k._x_19 = B);
      z && (k._x_20 = z);
      f.ka = h;
      f.Ia = k;
      return f;
    },
    Sh = function(a, b) {
      function c(v) {
        var w = D(v);
        w.list = v.list_name;
        w.listPosition = v.list_position;
        w.position = v.list_position || v.creative_slot;
        w.creative = v.creative_name;
        return w;
      }
      function d(v) {
        for (var w = [], x = 0; v && x < v.length; x++) v[x] && w.push(c(v[x]));
        return w.length ? w : void 0;
      }
      function e(v) {
        return {
          id: f(J.eb),
          affiliation: f(J.Oe),
          revenue: f(J.aa),
          tax: f(J.Yd),
          shipping: f(J.Se),
          coupon: f(J.Qe),
          list: f(J.nd) || v,
        };
      }
      for (
        var f = function(v) {
            return b.getWithConfig(v);
          },
          h = f(J.M),
          k,
          l = 0;
        h && l < h.length && !(k = h[l][J.nd]);
        l++
      );
      var m = f("custom_map");
      if (Pa(m))
        for (var n = 0; h && n < h.length; ++n) {
          var r = h[n],
            t;
          for (t in m)
            m.hasOwnProperty(t) &&
              /^(dimension|metric)\d+$/.test(t) &&
              void 0 != m[t] &&
              Xh(r, t, r[m[t]]);
        }
      var p = null,
        u = f(J.Re);
      a === J.ma || a === J.Hb
        ? (p = { action: a, gb: e(), Na: d(h) })
        : a === J.Eb
        ? (p = { action: "add", Na: d(h) })
        : a === J.Fb
        ? (p = { action: "remove", Na: d(h) })
        : a === J.Ba
        ? (p = { action: "detail", gb: e(k), Na: d(h) })
        : a === J.fd
        ? (p = { action: "impressions", og: d(h) })
        : "view_promotion" === a
        ? (p = { action: "promo_view", ad: d(u) })
        : "select_content" === a && u && 0 < u.length
        ? (p = { action: "promo_click", ad: d(u) })
        : "select_content" === a
        ? (p = { action: "click", gb: { list: f(J.nd) || k }, Na: d(h) })
        : a === J.Ua || "checkout_progress" === a
        ? (p = {
            action: "checkout",
            Na: d(h),
            gb: { step: a === J.Ua ? 1 : f(J.Xd), option: f(J.Vd) },
          })
        : "set_checkout_option" === a &&
          (p = {
            action: "checkout_option",
            gb: { step: f(J.Xd), option: f(J.Vd) },
          });
      p && (p.Eh = f(J.ia));
      return p;
    },
    hi = {},
    Uh = function(a, b) {
      var c = hi[a];
      hi[a] = D(b);
      if (!c) return !1;
      for (var d in b) if (b.hasOwnProperty(d) && b[d] !== c[d]) return !0;
      for (var e in c) if (c.hasOwnProperty(e) && c[e] !== b[e]) return !0;
      return !1;
    };
  var ii = {},
    ji = ["G", "GP"];
  ii.Ke = "";
  var ki = ii.Ke.split(",");
  function li() {
    var a = Wc;
    return (a.gcq = a.gcq || new mi());
  }
  var ni = function(a, b, c) {
      li().register(a, b, c);
    },
    oi = function(a, b, c, d) {
      li().push("event", [b, a], c, d);
    },
    pi = function(a, b) {
      li().push("config", [a], b);
    },
    qi = {},
    ri = function() {
      this.status = 1;
      this.containerConfig = {};
      this.targetConfig = {};
      this.i = {};
      this.m = null;
      this.h = !1;
    },
    si = function(a, b, c, d, e) {
      this.type = a;
      this.m = b;
      this.U = c || "";
      this.h = d;
      this.i = e;
    },
    mi = function() {
      this.i = {};
      this.m = {};
      this.h = [];
    },
    ti = function(a, b) {
      var c = Sc(b);
      return (a.i[c.containerId] = a.i[c.containerId] || new ri());
    },
    ui = function(a, b, c, d) {
      if (d.U) {
        var e = ti(a, d.U),
          f = e.m;
        if (f) {
          var h = D(c),
            k = D(e.targetConfig[d.U]),
            l = D(e.containerConfig),
            m = D(e.i),
            n = D(a.m),
            r = Md("gtm.uniqueEventId"),
            t = Sc(d.U).prefix,
            p = Ef(
              Df(Cf(Bf(Af(zf(yf(h), k), l), m), n), function() {
                Gd(r, t, "2");
              }),
              function() {
                Gd(r, t, "3");
              }
            );
          try {
            Gd(r, t, "1");
            f(d.U, b, d.m, p);
          } catch (u) {
            Gd(r, t, "4");
          }
        }
      }
    };
  mi.prototype.register = function(a, b, c) {
    if (3 !== ti(this, a).status) {
      ti(this, a).m = b;
      ti(this, a).status = 3;
      c && (ti(this, a).i = c);
      var d = Sc(a),
        e = qi[d.containerId];
      if (void 0 !== e) {
        var f = Wc[d.containerId].bootstrap,
          h = d.prefix.toUpperCase();
        Wc[d.containerId]._spx && (h = h.toLowerCase());
        var k = Md("gtm.uniqueEventId"),
          l = h,
          m = Ea() - f;
        if (Cd && !td[k]) {
          k !== pd && (nd(), (pd = k));
          var n = l + "." + Math.floor(f - e) + "." + Math.floor(m);
          yd = yd ? yd + "," + n : "&cl=" + n;
        }
        delete qi[d.containerId];
      }
      this.flush();
    }
  };
  mi.prototype.push = function(a, b, c, d) {
    var e = Math.floor(Ea() / 1e3);
    a: if (c) {
      var f = Sc(c),
        h;
      if ((h = f)) {
        var k;
        if ((k = 1 === ti(this, c).status))
          b: {
            var l = f.prefix;
            k = !0;
          }
        h = k;
      }
      if (h)
        if (
          ((ti(this, c).status = 2),
          this.push("require", [], f.containerId),
          (qi[f.containerId] = Ea()),
          Wd())
        ) {
        } else {
          var n = encodeURIComponent(f.containerId),
            r =
              ("http:" != F.location.protocol ? "https:" : "http:") +
              "//www.googletagmanager.com";
          ic(r + "/gtag/js?id=" + n + "&l=dataLayer&cx=c");
        }
    }
    this.h.push(new si(a, e, c, b, d));
    d || this.flush();
  };
  mi.prototype.flush = function(a) {
    for (var b = this; this.h.length; ) {
      var c = this.h[0];
      if (c.i) (c.i = !1), this.h.push(c);
      else
        switch (c.type) {
          case "require":
            if (3 !== ti(this, c.U).status && !a) return;
            break;
          case "set":
            C(c.h[0], function(l, m) {
              D(Ka(l, m), b.m);
            });
            break;
          case "config":
            var d = c.h[0],
              e = !!d[J.Ub];
            delete d[J.Ub];
            var f = ti(this, c.U),
              h = Sc(c.U),
              k = h.containerId === h.id;
            e || (k ? (f.containerConfig = {}) : (f.targetConfig[c.U] = {}));
            (f.h && e) || ui(this, J.C, d, c);
            f.h = !0;
            delete d[J.ra];
            k ? D(d, f.containerConfig) : D(d, f.targetConfig[c.U]);
            break;
          case "event":
            ui(this, c.h[1], c.h[0], c);
        }
      this.h.shift();
    }
  };
  var vi = ["GP", "G"],
    wi = "G".split(/,/);
  wi.push("HA");
  var xi = !1;
  xi = !0;
  var yi = null,
    zi = {},
    Ai = {},
    Bi;
  function Ci(a, b) {
    var c = { event: a };
    b &&
      ((c.eventModel = D(b)),
      b[J.uc] && (c.eventCallback = b[J.uc]),
      b[J.xb] && (c.eventTimeout = b[J.xb]));
    return c;
  }
  var Di = function() {
      yi = yi || !Wc.gtagRegistered;
      Wc.gtagRegistered = !0;
      return yi;
    },
    Ei = function(a) {
      if (void 0 === Ai[a.id]) {
        var b;
        switch (a.prefix) {
          case "UA":
            b = rf("gtagua", { trackingId: a.id });
            break;
          case "AW":
            b = rf("gtagaw", { conversionId: a });
            break;
          case "DC":
            b = rf("gtagfl", { targetId: a.id });
            break;
          case "GF":
            b = rf("gtaggf", { conversionId: a });
            break;
          case "HA":
            b = rf("gtagha", { conversionId: a });
            break;
          case "GP":
            b = rf("gtaggp", { conversionId: a.id });
            break;
          default:
            return;
        }
        if (!Bi) {
          var c = zb("v", { name: "send_to", dataLayerVersion: 2 });
          pb.push(c);
          Bi = ["macro", pb.length - 1];
        }
        var d = { arg0: Bi, arg1: a.id, ignore_case: !1 };
        d[Fb.sa] = "_lc";
        rb.push(d);
        var e = { if: [rb.length - 1], add: [b] };
        e["if"] && (e.add || e.block) && qb.push(e);
        Ai[a.id] = b;
      }
    },
    Fi = function(a) {
      C(zi, function(b, c) {
        var d = q(c, a);
        0 <= d && c.splice(d, 1);
      });
    },
    Gi = Ga(function() {}),
    Hi = function(a) {
      if (a.containerId !== Vc.s && "G" !== a.prefix) {
        var b;
        switch (a.prefix) {
          case "UA":
            b = 14;
            break;
          case "AW":
            b = 15;
            break;
          case "DC":
            b = 16;
            break;
          default:
            b = 17;
        }
        jd("GTM", b);
      }
    };
  var Ii = {
      config: function(a) {
        var b = a[2] || {};
        if (2 > a.length || !g(a[1]) || !Pa(b)) return;
        var c = Sc(a[1]);
        if (!c) return;
        Fi(c.id);
        var d = c.id,
          e = b[J.nc] || "default";
        e = e.toString().split(",");
        for (var f = 0; f < e.length; f++)
          (zi[e[f]] = zi[e[f]] || []), zi[e[f]].push(d);
        delete b[J.nc];
        if (Di()) {
          hd();
          D(b);
          if ((xi && -1 !== q(wi, c.prefix)) || -1 !== q(vi, c.prefix)) {
            "G" === c.prefix && (b[J.ra] = !0);
            pi(b, c.id);
            return;
          }
          Ei(c);
          Hi(c);
        } else Gi();
        Sd("gtag.targets." + c.id, void 0);
        Sd("gtag.targets." + c.id, D(b));
        var h = {};
        h[J.oa] = c.id;
        return Ci(J.C, h);
      },
      event: function(a) {
        var b = a[1];
        if (g(b) && !(3 < a.length)) {
          var c;
          if (2 < a.length) {
            if (!Pa(a[2]) && void 0 != a[2]) return;
            c = a[2];
          }
          var d = Ci(b, c);
          var e;
          var f = c && c[J.oa];
          void 0 === f && ((f = Md(J.oa, 2)), void 0 === f && (f = "default"));
          if (g(f) || ra(f)) {
            for (
              var h = f
                  .toString()
                  .replace(/\s+/g, "")
                  .split(","),
                k = [],
                l = 0;
              l < h.length;
              l++
            )
              0 <= h[l].indexOf("-")
                ? k.push(h[l])
                : (k = k.concat(zi[h[l]] || []));
            e = Uc(k);
          } else e = void 0;
          var m = e;
          if (!m) return;
          hd();
          var n = Di();
          n || Gi();
          for (var r = [], t = 0; n && t < m.length; t++) {
            var p = m[t];
            Hi(p);
            if ((xi && -1 !== q(wi, p.prefix)) || -1 !== q(vi, p.prefix)) {
              var u = D(c);
              "G" === p.prefix && (u[J.ra] = !0);
              oi(b, u, p.id);
            } else Ei(p);
            r.push(p.id);
          }
          d.eventModel = d.eventModel || {};
          0 < m.length
            ? (d.eventModel[J.oa] = r.join())
            : delete d.eventModel[J.oa];
          return d;
        }
      },
      js: function(a) {
        if (2 == a.length && a[1].getTime)
          return { event: "gtm.js", "gtm.start": a[1].getTime() };
      },
      policy: function() {},
      set: function(a) {
        var b;
        2 == a.length && Pa(a[1])
          ? (b = D(a[1]))
          : 3 == a.length &&
            g(a[1]) &&
            ((b = {}),
            Pa(a[2]) || ra(a[2]) ? (b[a[1]] = D(a[2])) : (b[a[1]] = a[2]));
        if (b) {
          if (Di()) {
            var c = D(b);
            li().push("set", [c]);
            D(b);
          }
          b._clear = !0;
          return b;
        }
      },
    },
    Ji = { policy: !0 };
  var Ki = function(a, b) {
      var c = a.hide;
      if (c && void 0 !== c[b] && c.end) {
        c[b] = !1;
        var d = !0,
          e;
        for (e in c)
          if (c.hasOwnProperty(e) && !0 === c[e]) {
            d = !1;
            break;
          }
        d && (c.end(), (c.end = null));
      }
    },
    Mi = function(a) {
      var b = Li(),
        c = b && b.hide;
      c && c.end && (c[a] = !0);
    };
  var Ni = !1,
    Oi = [];
  function Pi() {
    if (!Ni) {
      Ni = !0;
      for (var a = 0; a < Oi.length; a++) I(Oi[a]);
    }
  }
  var Qi = function(a) {
    Ni ? I(a) : Oi.push(a);
  };
  var fj = function(a) {
    if (ej(a)) return a;
    this.h = a;
  };
  fj.prototype.kg = function() {
    return this.h;
  };
  var ej = function(a) {
    return !a || "object" !== Na(a) || Pa(a)
      ? !1
      : "getUntrustedUpdateValue" in a;
  };
  fj.prototype.getUntrustedUpdateValue = fj.prototype.kg;
  var gj = [],
    hj = !1,
    ij = function(a) {
      return F["dataLayer"].push(a);
    },
    jj = function(a) {
      var b = Wc["dataLayer"],
        c = b ? b.subscribers : 1,
        d = 0;
      return function() {
        ++d === c && a();
      };
    };
  function kj(a) {
    var b = a._clear;
    C(a, function(f, h) {
      "_clear" !== f && (b && Sd(f, void 0), Sd(f, h));
    });
    bd || (bd = a["gtm.start"]);
    var c = a.event;
    if (!c) return !1;
    var d = a["gtm.uniqueEventId"];
    d || ((d = hd()), (a["gtm.uniqueEventId"] = d), Sd("gtm.uniqueEventId", d));
    dd = c;
    var e = lj(a);
    dd = null;
    switch (c) {
      case "gtm.init":
        jd("GTM", 19), e && jd("GTM", 20);
    }
    return e;
  }
  function lj(a) {
    var b = a.event,
      c = a["gtm.uniqueEventId"],
      d,
      e = Wc.zones;
    d = e ? e.checkState(Vc.s, c) : se;
    return d.active
      ? qf(c, b, d.isWhitelisted, a.eventCallback, a.eventTimeout)
        ? !0
        : !1
      : !1;
  }
  function mj() {
    for (var a = !1; !hj && 0 < gj.length; ) {
      hj = !0;
      delete Jd.eventModel;
      Ld();
      var b = gj.shift();
      if (null != b) {
        var c = ej(b);
        if (c) {
          var d = b;
          b = ej(d) ? d.getUntrustedUpdateValue() : void 0;
          for (
            var e = ["gtm.whitelist", "gtm.blacklist", "tagTypeBlacklist"],
              f = 0;
            f < e.length;
            f++
          ) {
            var h = e[f],
              k = Md(h, 1);
            if (ra(k) || Pa(k)) k = D(k);
            Kd[h] = k;
          }
        }
        try {
          if (pa(b))
            try {
              b.call(Nd);
            } catch (v) {}
          else if (ra(b)) {
            var l = b;
            if (g(l[0])) {
              var m = l[0].split("."),
                n = m.pop(),
                r = l.slice(1),
                t = Md(m.join("."), 2);
              if (void 0 !== t && null !== t)
                try {
                  t[n].apply(t, r);
                } catch (v) {}
            }
          } else {
            var p = b;
            if (
              p &&
              ("[object Arguments]" == Object.prototype.toString.call(p) ||
                Object.prototype.hasOwnProperty.call(p, "callee"))
            ) {
              a: {
                if (b.length && g(b[0])) {
                  var u = Ii[b[0]];
                  if (u && (!c || !Ji[b[0]])) {
                    b = u(b);
                    break a;
                  }
                }
                b = void 0;
              }
              if (!b) {
                hj = !1;
                continue;
              }
            }
            a = kj(b) || a;
          }
        } finally {
          c && Ld(!0);
        }
      }
      hj = !1;
    }
    return !a;
  }
  function nj() {
    var a = mj();
    try {
      Ki(F["dataLayer"], Vc.s);
    } catch (b) {}
    return a;
  }
  var pj = function() {
      var a = gc("dataLayer", []),
        b = gc("google_tag_manager", {});
      b = b["dataLayer"] = b["dataLayer"] || {};
      Ae(function() {
        b.gtmDom || ((b.gtmDom = !0), a.push({ event: "gtm.dom" }));
      });
      Qi(function() {
        b.gtmLoad || ((b.gtmLoad = !0), a.push({ event: "gtm.load" }));
      });
      b.subscribers = (b.subscribers || 0) + 1;
      var c = a.push;
      a.push = function() {
        var d;
        if (0 < Wc.SANDBOXED_JS_SEMAPHORE) {
          d = [];
          for (var e = 0; e < arguments.length; e++)
            d[e] = new fj(arguments[e]);
        } else d = [].slice.call(arguments, 0);
        var f = c.apply(a, d);
        gj.push.apply(gj, d);
        if (300 < this.length)
          for (jd("GTM", 4); 300 < this.length; ) this.shift();
        var h = "boolean" !== typeof f || f;
        return mj() && h;
      };
      gj.push.apply(gj, a.slice(0));
      oj() && I(nj);
    },
    oj = function() {
      var a = !0;
      return a;
    };
  var qj = {};
  qj.yb = new String("undefined");
  var rj = function(a) {
    this.h = function(b) {
      for (var c = [], d = 0; d < a.length; d++)
        c.push(a[d] === qj.yb ? b : a[d]);
      return c.join("");
    };
  };
  rj.prototype.toString = function() {
    return this.h("undefined");
  };
  rj.prototype.valueOf = rj.prototype.toString;
  qj.sf = rj;
  qj.Cc = {};
  qj.Wf = function(a) {
    return new rj(a);
  };
  var sj = {};
  qj.Yg = function(a, b) {
    var c = hd();
    sj[c] = [a, b];
    return c;
  };
  qj.fe = function(a) {
    var b = a ? 0 : 1;
    return function(c) {
      var d = sj[c];
      if (d && "function" === typeof d[b]) d[b]();
      sj[c] = void 0;
    };
  };
  qj.ug = function(a) {
    for (var b = !1, c = !1, d = 2; d < a.length; d++)
      (b = b || 8 === a[d]), (c = c || 16 === a[d]);
    return b && c;
  };
  qj.Og = function(a) {
    if (a === qj.yb) return a;
    var b = hd();
    qj.Cc[b] = a;
    return 'google_tag_manager["' + Vc.s + '"].macro(' + b + ")";
  };
  qj.Eg = function(a, b, c) {
    a instanceof qj.sf && ((a = a.h(qj.Yg(b, c))), (b = oa));
    return { Oc: a, B: b };
  };
  var tj = function(a, b, c) {
      function d(f, h) {
        var k = f[h];
        return k;
      }
      var e = {
        event: b,
        "gtm.element": a,
        "gtm.elementClasses": d(a, "className"),
        "gtm.elementId": a["for"] || oc(a, "id") || "",
        "gtm.elementTarget": a.formTarget || d(a, "target") || "",
      };
      c && (e["gtm.triggers"] = c.join(","));
      e["gtm.elementUrl"] =
        (a.attributes && a.attributes.formaction ? a.formAction : "") ||
        a.action ||
        d(a, "href") ||
        a.src ||
        a.code ||
        a.codebase ||
        "";
      return e;
    },
    uj = function(a) {
      Wc.hasOwnProperty("autoEventsSettings") || (Wc.autoEventsSettings = {});
      var b = Wc.autoEventsSettings;
      b.hasOwnProperty(a) || (b[a] = {});
      return b[a];
    },
    vj = function(a, b, c) {
      uj(a)[b] = c;
    },
    wj = function(a, b, c, d) {
      var e = uj(a),
        f = Fa(e, b, d);
      e[b] = c(f);
    },
    xj = function(a, b, c) {
      var d = uj(a);
      return Fa(d, b, c);
    };
  var yj = ["input", "select", "textarea"],
    zj = ["button", "hidden", "image", "reset", "submit"],
    Aj = function(a) {
      var b = a.tagName.toLowerCase();
      return !va(yj, function(c) {
        return c === b;
      }) ||
        ("input" === b &&
          va(zj, function(c) {
            return c === a.type.toLowerCase();
          }))
        ? !1
        : !0;
    },
    Bj = function(a) {
      return a.form
        ? a.form.tagName
          ? a.form
          : G.getElementById(a.form)
        : rc(a, ["form"], 100);
    },
    Cj = function(a, b, c) {
      if (!a.elements) return 0;
      for (
        var d = b.getAttribute(c), e = 0, f = 1;
        e < a.elements.length;
        e++
      ) {
        var h = a.elements[e];
        if (Aj(h)) {
          if (h.getAttribute(c) === d) return f;
          f++;
        }
      }
      return 0;
    };
  var Dj = !!F.MutationObserver,
    Ej = void 0,
    Fj = function(a) {
      if (!Ej) {
        var b = function() {
          var c = G.body;
          if (c)
            if (Dj)
              new MutationObserver(function() {
                for (var e = 0; e < Ej.length; e++) I(Ej[e]);
              }).observe(c, { childList: !0, subtree: !0 });
            else {
              var d = !1;
              mc(c, "DOMNodeInserted", function() {
                d ||
                  ((d = !0),
                  I(function() {
                    d = !1;
                    for (var e = 0; e < Ej.length; e++) I(Ej[e]);
                  }));
              });
            }
        };
        Ej = [];
        G.body ? b() : I(b);
      }
      Ej.push(a);
    };
  var ak = F.clearTimeout,
    bk = F.setTimeout,
    S = function(a, b, c) {
      if (Wd()) {
        b && I(b);
      } else return ic(a, b, c);
    },
    ck = function() {
      return F.location.href;
    },
    dk = function(a) {
      return $e(af(a), "fragment");
    },
    ek = function(a) {
      return Ze(af(a));
    },
    U = function(a, b) {
      return Md(a, b || 2);
    },
    fk = function(a, b, c) {
      var d;
      b
        ? ((a.eventCallback = b), c && (a.eventTimeout = c), (d = ij(a)))
        : (d = ij(a));
      return d;
    },
    gk = function(a, b) {
      F[a] = b;
    },
    W = function(a, b, c) {
      b && (void 0 === F[a] || (c && !F[a])) && (F[a] = b);
      return F[a];
    },
    hk = function(a, b, c) {
      return Gf(a, b, void 0 === c ? !0 : !!c);
    },
    ik = function(a, b) {
      if (Wd()) {
        b && I(b);
      } else kc(a, b);
    },
    jk = function(a) {
      return !!xj(a, "init", !1);
    },
    kk = function(a) {
      vj(a, "init", !0);
    },
    lk = function(a, b) {
      var c = (void 0 === b ? 0 : b) ? "www.googletagmanager.com/gtag/js" : ad;
      c += "?id=" + encodeURIComponent(a) + "&l=dataLayer";
      S(Q("https://", "http://", c));
    },
    mk = function(a, b) {
      var c = a[b];
      return c;
    };
  var nk = qj.Eg;
  var Kk = new xa();
  function Lk(a, b) {
    function c(h) {
      var k = af(h),
        l = $e(k, "protocol"),
        m = $e(k, "host", !0),
        n = $e(k, "port"),
        r = $e(k, "path")
          .toLowerCase()
          .replace(/\/$/, "");
      if (
        void 0 === l ||
        ("http" == l && "80" == n) ||
        ("https" == l && "443" == n)
      )
        (l = "web"), (n = "default");
      return [l, m, n, r];
    }
    for (var d = c(String(a)), e = c(String(b)), f = 0; f < d.length; f++)
      if (d[f] !== e[f]) return !1;
    return !0;
  }
  function Mk(a) {
    return Nk(a) ? 1 : 0;
  }
  function Nk(a) {
    var b = a.arg0,
      c = a.arg1;
    if (a.any_of && ra(c)) {
      for (var d = 0; d < c.length; d++)
        if (Mk({ function: a["function"], arg0: b, arg1: c[d] })) return !0;
      return !1;
    }
    switch (a["function"]) {
      case "_cn":
        return 0 <= String(b).indexOf(String(c));
      case "_css":
        var e;
        a: {
          if (b) {
            var f = [
              "matches",
              "webkitMatchesSelector",
              "mozMatchesSelector",
              "msMatchesSelector",
              "oMatchesSelector",
            ];
            try {
              for (var h = 0; h < f.length; h++)
                if (b[f[h]]) {
                  e = b[f[h]](c);
                  break a;
                }
            } catch (v) {}
          }
          e = !1;
        }
        return e;
      case "_ew":
        var k, l;
        k = String(b);
        l = String(c);
        var m = k.length - l.length;
        return 0 <= m && k.indexOf(l, m) == m;
      case "_eq":
        return String(b) == String(c);
      case "_ge":
        return Number(b) >= Number(c);
      case "_gt":
        return Number(b) > Number(c);
      case "_lc":
        var n;
        n = String(b).split(",");
        return 0 <= q(n, String(c));
      case "_le":
        return Number(b) <= Number(c);
      case "_lt":
        return Number(b) < Number(c);
      case "_re":
        var r;
        var t = a.ignore_case ? "i" : void 0;
        try {
          var p = String(c) + t,
            u = Kk.get(p);
          u || ((u = new RegExp(c, t)), Kk.set(p, u));
          r = u.test(b);
        } catch (v) {
          r = !1;
        }
        return r;
      case "_sw":
        return 0 == String(b).indexOf(String(c));
      case "_um":
        return Lk(b, c);
    }
    return !1;
  }
  var Ok = function(a, b) {
    var c = function() {};
    c.prototype = a.prototype;
    var d = new c();
    a.apply(d, Array.prototype.slice.call(arguments, 1));
    return d;
  };
  var Pk = {},
    Qk = encodeURI,
    X = encodeURIComponent,
    Rk = lc;
  var Sk = function(a, b) {
    if (!a) return !1;
    var c = $e(af(a), "host");
    if (!c) return !1;
    for (var d = 0; b && d < b.length; d++) {
      var e = b[d] && b[d].toLowerCase();
      if (e) {
        var f = c.length - e.length;
        0 < f && "." != e.charAt(0) && (f--, (e = "." + e));
        if (0 <= f && c.indexOf(e, f) == f) return !0;
      }
    }
    return !1;
  };
  var Tk = function(a, b, c) {
    for (var d = {}, e = !1, f = 0; a && f < a.length; f++)
      a[f] &&
        a[f].hasOwnProperty(b) &&
        a[f].hasOwnProperty(c) &&
        ((d[a[f][b]] = a[f][c]), (e = !0));
    return e ? d : null;
  };
  Pk.vg = function() {
    var a = !1;
    return a;
  };
  var fm = function() {
    var a = (F.gaGlobal = F.gaGlobal || {});
    a.hid = a.hid || wa();
    return a.hid;
  };
  var qm = window,
    rm = document,
    sm = function(a) {
      var b = qm._gaUserPrefs;
      if ((b && b.ioo && b.ioo()) || (a && !0 === qm["ga-disable-" + a]))
        return !0;
      try {
        var c = qm.external;
        if (c && c._gaUserPrefs && "oo" == c._gaUserPrefs) return !0;
      } catch (f) {}
      for (var d = Gf("AMP_TOKEN", rm.cookie, !0), e = 0; e < d.length; e++)
        if ("$OPT_OUT" == d[e]) return !0;
      return rm.getElementById("__gaOptOutExtension") ? !0 : !1;
    };
  var vm = function(a) {
    C(a, function(c) {
      "_" === c.charAt(0) && delete a[c];
    });
    var b = a[J.ca] || {};
    C(b, function(c) {
      "_" === c.charAt(0) && delete b[c];
    });
  };
  var zm = function(a, b, c) {
      oi(b, c, a);
    },
    Am = function(a, b, c) {
      oi(b, c, a, !0);
    },
    Cm = function(a, b) {};
  function Bm(a, b) {}
  var Z = { a: {} };

  (Z.a.gtagha = ["google"]),
    (function() {
      (function(a) {
        Z.__gtagha = a;
        Z.__gtagha.b = "gtagha";
        Z.__gtagha.g = !0;
        Z.__gtagha.priorityOverride = 0;
      })(function(a) {
        var b = a.vtp_conversionId,
          c = dd,
          d = U("eventModel");
        ni(b.id, Kh);
        if (c === J.C) {
          var e = U("gtag.targets." + b.id);
          pi(e, b.id);
        } else oi(c, d, b.id);
        I(a.vtp_gtmOnSuccess);
      });
    })();
  (Z.a.e = ["google"]),
    (function() {
      (function(a) {
        Z.__e = a;
        Z.__e.b = "e";
        Z.__e.g = !0;
        Z.__e.priorityOverride = 0;
      })(function(a) {
        return String(Ud(a.vtp_gtmEventId, "event"));
      });
    })();

  (Z.a.v = ["google"]),
    (function() {
      (function(a) {
        Z.__v = a;
        Z.__v.b = "v";
        Z.__v.g = !0;
        Z.__v.priorityOverride = 0;
      })(function(a) {
        var b = a.vtp_name;
        if (!b || !b.replace) return !1;
        var c = U(b.replace(/\\\./g, "."), a.vtp_dataLayerVersion || 1);
        return void 0 !== c ? c : a.vtp_defaultValue;
      });
    })();

  (Z.a.gtagaw = ["google"]),
    (function() {
      (function(a) {
        Z.__gtagaw = a;
        Z.__gtagaw.b = "gtagaw";
        Z.__gtagaw.g = !0;
        Z.__gtagaw.priorityOverride = 0;
      })(function(a) {
        var b = a.vtp_conversionId,
          c = dd;
        ni(b.id, $g);
        if (c === J.C) {
          var d = U("gtag.targets." + b.id);
          pi(d, b.id);
        } else {
          var e = U("eventModel");
          oi(c, e, b.id);
        }
        I(a.vtp_gtmOnSuccess);
      });
    })();

  (Z.a.get = ["google"]),
    (function() {
      (function(a) {
        Z.__get = a;
        Z.__get.b = "get";
        Z.__get.g = !0;
        Z.__get.priorityOverride = 0;
      })(function(a) {
        if (a.vtp_isAutoTag) {
          var b = String(a.vtp_trackingId),
            c = dd || "",
            d = {};
          if (c === J.C) {
            var e = U("gtag.targets." + b);
            D(e, d);
            d[J.ra] = !0;
            pi(d, b);
          } else {
            var f = U("eventModel");
            D(f, d);
            d[J.ra] = !0;
            oi(c, d, b);
          }
        } else {
          var h = a.vtp_settings;
          (a.vtp_deferrable ? Am : zm)(
            String(h.streamId),
            String(a.vtp_eventName),
            h.eventParameters || {}
          );
        }
        a.vtp_gtmOnSuccess();
      });
    })();

  (Z.a.gtagfl = []),
    (function() {
      (function(a) {
        Z.__gtagfl = a;
        Z.__gtagfl.b = "gtagfl";
        Z.__gtagfl.g = !0;
        Z.__gtagfl.priorityOverride = 0;
      })(function(a) {
        var b = a.vtp_targetId,
          c = dd,
          d = U("eventModel");
        ni(b, Ah);
        if (c === J.C) {
          var e = U("gtag.targets." + b);
          pi(e, b);
        } else oi(c, d, b);
        I(a.vtp_gtmOnSuccess);
      });
    })();

  (Z.a.gtaggf = ["google"]),
    (function() {
      (function(a) {
        Z.__gtaggf = a;
        Z.__gtaggf.b = "gtaggf";
        Z.__gtaggf.g = !0;
        Z.__gtaggf.priorityOverride = 0;
      })(function(a) {
        var b = a.vtp_conversionId,
          c = dd,
          d = U("eventModel");
        ni(b.id, Fh);
        if (c === J.C) {
          var e = U("gtag.targets." + b.id);
          pi(e, b.id);
        } else oi(c, d, b.id);
        I(a.vtp_gtmOnSuccess);
      });
    })();

  (Z.a.gtagua = ["google"]),
    (function() {
      (function(a) {
        Z.__gtagua = a;
        Z.__gtagua.b = "gtagua";
        Z.__gtagua.g = !0;
        Z.__gtagua.priorityOverride = 0;
      })(function(a) {
        var b = a.vtp_trackingId,
          c = dd,
          d = U("eventModel");
        ni(b, ai);
        if (c === J.C) {
          var e = U("gtag.targets." + b);
          pi(e, b);
        } else oi(c, d, b);
        I(a.vtp_gtmOnSuccess);
      });
    })();

  var Dm = {};
  (Dm.macro = function(a) {
    if (qj.Cc.hasOwnProperty(a)) return qj.Cc[a];
  }),
    (Dm.onHtmlSuccess = qj.fe(!0)),
    (Dm.onHtmlFailure = qj.fe(!1));
  Dm.dataLayer = Nd;
  Dm.callback = function(a) {
    fd.hasOwnProperty(a) && pa(fd[a]) && fd[a]();
    delete fd[a];
  };
  function Em() {
    Wc[Vc.s] = Dm;
    Ha(gd, Z.a);
    xb = xb || qj;
    yb = re;
  }
  function Fm() {
    vg.gtm_3pds = !0;
    Wc = F.google_tag_manager = F.google_tag_manager || {};
    if (Wc[Vc.s]) {
      var a = Wc.zones;
      a && a.unregisterChild(Vc.s);
    } else {
      for (
        var b = data.resource || {}, c = b.macros || [], d = 0;
        d < c.length;
        d++
      )
        pb.push(c[d]);
      for (var e = b.tags || [], f = 0; f < e.length; f++) sb.push(e[f]);
      for (var h = b.predicates || [], k = 0; k < h.length; k++) rb.push(h[k]);
      for (var l = b.rules || [], m = 0; m < l.length; m++) {
        for (var n = l[m], r = {}, t = 0; t < n.length; t++)
          r[n[t][0]] = Array.prototype.slice.call(n[t], 1);
        qb.push(r);
      }
      ub = Z;
      vb = Mk;
      Em();
      pj();
      ve = !1;
      we = 0;
      if (
        ("interactive" == G.readyState && !G.createEventObject) ||
        "complete" == G.readyState
      )
        ye();
      else {
        mc(G, "DOMContentLoaded", ye);
        mc(G, "readystatechange", ye);
        if (G.createEventObject && G.documentElement.doScroll) {
          var p = !0;
          try {
            p = !F.frameElement;
          } catch (x) {}
          p && ze();
        }
        mc(F, "load", ye);
      }
      Ni = !1;
      "complete" === G.readyState ? Pi() : mc(F, "load", Pi);
      a: {
        if (!Cd) break a;
        F.setInterval(Dd, 864e5);
      }
      cd = new Date().getTime();
      Dm.bootstrap = cd;
    }
  }
  Fm();
})();

window.dataLayer = window.dataLayer || [];
function GTag() {
  dataLayer.push(arguments);
}

export { GTag };
