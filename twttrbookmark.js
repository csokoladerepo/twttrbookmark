(function () {
    function B(M) {
        var N = [],
            L = 0,
            K = M.length;
        for (; L < K; L++) {
            N.push(M[L])
        }
        return N
    }
    function H(K) {
        return encodeURIComponent(K).replace(/\+/g, "%2B")
    }
    function C(M) {
        var L = [],
            K;
        for (K in M) {
            if (M[K] !== null && typeof M[K] !== "undefined") {
                L.push(H(K) + "=" + H(M[K]))
            }
        }
        return L.sort().join("&")
    }
    function I() {
        var L = document.getElementsByTagName("a"),
            R = document.getElementsByTagName("link"),
            K = /\bme\b/,
            N = /^https?\:\/\/(www\.)?twitter.com\/([a-zA-Z0-9_]+)$/,
            Q = B(L).concat(B(R)),
            P, T, M, O = 0,
            S;
        for (;
        (S = Q[O]); O++) {
            T = S.getAttribute("rel");
            M = S.getAttribute("href");
            if (T && M && T.match(K) && (P = M.match(N))) {
                return P[2]
            }
        }
    }
    function G() {
        var K = window.getSelection && String(window.getSelection());
        return K && "�" + K.replace(/\n/, " ").replace(/(^\s+)|(\s+$)/, "") + "�"
    }
    function F(L) {
        var K;
        if (L.match(/^https?:\/\//)) {
            return L
        } else {
            K = location.host;
            if (location.port.length > 0) {
                K += ":" + location.port
            }
            if (L.match(/^\/[^\/]/)) {
                return [location.protocol, "//", K, L].join("")
            } else {
                return [location.protocol, "//", K, location.pathname.replace(/\/([^\/]+)$/, "/"), L].join("")
            }
        }
    }
    function J() {
        var K = document.getElementsByTagName("link");
        for (var L = 0, M;
        (M = K[L]); L++) {
            if (M.getAttribute("rel") == "canonical") {
                return F(M.getAttribute("href"))
            }
        }
        return null
    }
    var D = (function () {
        var L = {
            text: G() || decodeURIComponent(document.title),
            url: (J() || location.href),
            _: ((new Date()).getTime())
        }, K = I();
        if (K) {
            L.via = K
        }
        return C(L)
    }());
    var E = window.twttrbookmark.shareUrl,
	var X = "data-via=@twttrbookmark",
        A = "https://twitter.com/share?" + D + X;
    if (null === E) {
        window.location.href = A
    } else {
        if (E && E.open) {
            E.location.href = A;
            E.focus()
        }
    }
}());