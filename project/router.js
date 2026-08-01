// Maps the design system's absolute nav hrefs to the project's page files.
(function () {
  var map = {
    "/": "Home.dc.html",
    "/wdbx": "WDBX.dc.html",
    "/abi": "ABI.dc.html",
    "/abbey": "Abbey.dc.html",
    "/research": "Research.dc.html",
    "/platform": "Platform.dc.html",
    "/services": "Services.dc.html",
    "/architecture": "Architecture.dc.html",
    "/company": "About.dc.html",
    "/investors": "Investors.dc.html",
    "/contact": "Contact.dc.html"
  };
  document.addEventListener("click", function (e) {
    var a = e.target && e.target.closest ? e.target.closest("a") : null;
    if (!a) return;
    var href = a.getAttribute("href");
    if (!href) return;
    var hash = "";
    var base = href;
    var i = href.indexOf("#");
    if (i > 0) { base = href.slice(0, i); hash = href.slice(i); }
    if (map[base]) {
      e.preventDefault();
      window.location.href = map[base] + hash;
    }
  }, true);
})();
