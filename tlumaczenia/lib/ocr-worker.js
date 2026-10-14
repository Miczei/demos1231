/* Couders demo: dane językowe OCR ładowane z plików .js obok strony (zamiast .gz). */
(function () {
  var origFetch = self.fetch.bind(self);
  self.fetch = function (input, init) {
    var url = typeof input === "string" ? input : (input && input.url) || "";
    var m = /\/([a-z_]+)\.traineddata(\.gz)?$/.exec(url);
    if (!m) return origFetch(input, init);
    var lang = m[1];
    try {
      if (!self.__TESSDATA || !self.__TESSDATA[lang]) importScripts(new URL("../tessdata/" + lang + ".js", self.location.href).href);
      var bin = atob(self.__TESSDATA[lang]), bytes = new Uint8Array(bin.length);
      for (var i = 0; i < bin.length; i++) bytes[i] = bin.charCodeAt(i);
      delete self.__TESSDATA[lang];
      return Promise.resolve(new Response(bytes, { status: 200, headers: { "Content-Type": "application/octet-stream" } }));
    } catch (e) {
      return Promise.reject(e);
    }
  };
  importScripts("worker.min.js");
})();
