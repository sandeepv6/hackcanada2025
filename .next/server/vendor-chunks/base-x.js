/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/base-x";
exports.ids = ["vendor-chunks/base-x"];
exports.modules = {

/***/ "(ssr)/./node_modules/base-x/index.js":
/*!**************************************!*\
  !*** ./node_modules/base-x/index.js ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("// base-x encoding\n// Forked from https://github.com/cryptocoinjs/bs58\n// Originally written by Mike Hearn for BitcoinJ\n// Copyright (c) 2011 Google Inc\n// Ported to JavaScript by Stefan Thomas\n// Merged Buffer refactorings from base58-native by Stephen Pair\n// Copyright (c) 2013 BitPay Inc\n\nvar Buffer = (__webpack_require__(/*! safe-buffer */ \"(ssr)/./node_modules/safe-buffer/index.js\").Buffer)\n\nmodule.exports = function base (ALPHABET) {\n  var ALPHABET_MAP = {}\n  var BASE = ALPHABET.length\n  var LEADER = ALPHABET.charAt(0)\n\n  // pre-compute lookup table\n  for (var z = 0; z < ALPHABET.length; z++) {\n    var x = ALPHABET.charAt(z)\n\n    if (ALPHABET_MAP[x] !== undefined) throw new TypeError(x + ' is ambiguous')\n    ALPHABET_MAP[x] = z\n  }\n\n  function encode (source) {\n    if (source.length === 0) return ''\n\n    var digits = [0]\n    for (var i = 0; i < source.length; ++i) {\n      for (var j = 0, carry = source[i]; j < digits.length; ++j) {\n        carry += digits[j] << 8\n        digits[j] = carry % BASE\n        carry = (carry / BASE) | 0\n      }\n\n      while (carry > 0) {\n        digits.push(carry % BASE)\n        carry = (carry / BASE) | 0\n      }\n    }\n\n    var string = ''\n\n    // deal with leading zeros\n    for (var k = 0; source[k] === 0 && k < source.length - 1; ++k) string += ALPHABET[0]\n    // convert digits to a string\n    for (var q = digits.length - 1; q >= 0; --q) string += ALPHABET[digits[q]]\n\n    return string\n  }\n\n  function decodeUnsafe (string) {\n    if (string.length === 0) return Buffer.allocUnsafe(0)\n\n    var bytes = [0]\n    for (var i = 0; i < string.length; i++) {\n      var value = ALPHABET_MAP[string[i]]\n      if (value === undefined) return\n\n      for (var j = 0, carry = value; j < bytes.length; ++j) {\n        carry += bytes[j] * BASE\n        bytes[j] = carry & 0xff\n        carry >>= 8\n      }\n\n      while (carry > 0) {\n        bytes.push(carry & 0xff)\n        carry >>= 8\n      }\n    }\n\n    // deal with leading zeros\n    for (var k = 0; string[k] === LEADER && k < string.length - 1; ++k) {\n      bytes.push(0)\n    }\n\n    return Buffer.from(bytes.reverse())\n  }\n\n  function decode (string) {\n    var buffer = decodeUnsafe(string)\n    if (buffer) return buffer\n\n    throw new Error('Non-base' + BASE + ' character')\n  }\n\n  return {\n    encode: encode,\n    decodeUnsafe: decodeUnsafe,\n    decode: decode\n  }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvYmFzZS14L2luZGV4LmpzIiwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLGFBQWEsNEZBQTZCOztBQUUxQztBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLGtCQUFrQixxQkFBcUI7QUFDdkM7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQSxvQkFBb0IsbUJBQW1CO0FBQ3ZDLHlDQUF5QyxtQkFBbUI7QUFDNUQ7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBLG9CQUFvQiwwQ0FBMEM7QUFDOUQ7QUFDQSxvQ0FBb0MsUUFBUTs7QUFFNUM7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0Esb0JBQW9CLG1CQUFtQjtBQUN2QztBQUNBOztBQUVBLHFDQUFxQyxrQkFBa0I7QUFDdkQ7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLG9CQUFvQiwrQ0FBK0M7QUFDbkU7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL2hlbGxvLW5lYXIvLi9ub2RlX21vZHVsZXMvYmFzZS14L2luZGV4LmpzPzVmMTciXSwic291cmNlc0NvbnRlbnQiOlsiLy8gYmFzZS14IGVuY29kaW5nXG4vLyBGb3JrZWQgZnJvbSBodHRwczovL2dpdGh1Yi5jb20vY3J5cHRvY29pbmpzL2JzNThcbi8vIE9yaWdpbmFsbHkgd3JpdHRlbiBieSBNaWtlIEhlYXJuIGZvciBCaXRjb2luSlxuLy8gQ29weXJpZ2h0IChjKSAyMDExIEdvb2dsZSBJbmNcbi8vIFBvcnRlZCB0byBKYXZhU2NyaXB0IGJ5IFN0ZWZhbiBUaG9tYXNcbi8vIE1lcmdlZCBCdWZmZXIgcmVmYWN0b3JpbmdzIGZyb20gYmFzZTU4LW5hdGl2ZSBieSBTdGVwaGVuIFBhaXJcbi8vIENvcHlyaWdodCAoYykgMjAxMyBCaXRQYXkgSW5jXG5cbnZhciBCdWZmZXIgPSByZXF1aXJlKCdzYWZlLWJ1ZmZlcicpLkJ1ZmZlclxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGJhc2UgKEFMUEhBQkVUKSB7XG4gIHZhciBBTFBIQUJFVF9NQVAgPSB7fVxuICB2YXIgQkFTRSA9IEFMUEhBQkVULmxlbmd0aFxuICB2YXIgTEVBREVSID0gQUxQSEFCRVQuY2hhckF0KDApXG5cbiAgLy8gcHJlLWNvbXB1dGUgbG9va3VwIHRhYmxlXG4gIGZvciAodmFyIHogPSAwOyB6IDwgQUxQSEFCRVQubGVuZ3RoOyB6KyspIHtcbiAgICB2YXIgeCA9IEFMUEhBQkVULmNoYXJBdCh6KVxuXG4gICAgaWYgKEFMUEhBQkVUX01BUFt4XSAhPT0gdW5kZWZpbmVkKSB0aHJvdyBuZXcgVHlwZUVycm9yKHggKyAnIGlzIGFtYmlndW91cycpXG4gICAgQUxQSEFCRVRfTUFQW3hdID0gelxuICB9XG5cbiAgZnVuY3Rpb24gZW5jb2RlIChzb3VyY2UpIHtcbiAgICBpZiAoc291cmNlLmxlbmd0aCA9PT0gMCkgcmV0dXJuICcnXG5cbiAgICB2YXIgZGlnaXRzID0gWzBdXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBzb3VyY2UubGVuZ3RoOyArK2kpIHtcbiAgICAgIGZvciAodmFyIGogPSAwLCBjYXJyeSA9IHNvdXJjZVtpXTsgaiA8IGRpZ2l0cy5sZW5ndGg7ICsraikge1xuICAgICAgICBjYXJyeSArPSBkaWdpdHNbal0gPDwgOFxuICAgICAgICBkaWdpdHNbal0gPSBjYXJyeSAlIEJBU0VcbiAgICAgICAgY2FycnkgPSAoY2FycnkgLyBCQVNFKSB8IDBcbiAgICAgIH1cblxuICAgICAgd2hpbGUgKGNhcnJ5ID4gMCkge1xuICAgICAgICBkaWdpdHMucHVzaChjYXJyeSAlIEJBU0UpXG4gICAgICAgIGNhcnJ5ID0gKGNhcnJ5IC8gQkFTRSkgfCAwXG4gICAgICB9XG4gICAgfVxuXG4gICAgdmFyIHN0cmluZyA9ICcnXG5cbiAgICAvLyBkZWFsIHdpdGggbGVhZGluZyB6ZXJvc1xuICAgIGZvciAodmFyIGsgPSAwOyBzb3VyY2Vba10gPT09IDAgJiYgayA8IHNvdXJjZS5sZW5ndGggLSAxOyArK2spIHN0cmluZyArPSBBTFBIQUJFVFswXVxuICAgIC8vIGNvbnZlcnQgZGlnaXRzIHRvIGEgc3RyaW5nXG4gICAgZm9yICh2YXIgcSA9IGRpZ2l0cy5sZW5ndGggLSAxOyBxID49IDA7IC0tcSkgc3RyaW5nICs9IEFMUEhBQkVUW2RpZ2l0c1txXV1cblxuICAgIHJldHVybiBzdHJpbmdcbiAgfVxuXG4gIGZ1bmN0aW9uIGRlY29kZVVuc2FmZSAoc3RyaW5nKSB7XG4gICAgaWYgKHN0cmluZy5sZW5ndGggPT09IDApIHJldHVybiBCdWZmZXIuYWxsb2NVbnNhZmUoMClcblxuICAgIHZhciBieXRlcyA9IFswXVxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgc3RyaW5nLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgdmFsdWUgPSBBTFBIQUJFVF9NQVBbc3RyaW5nW2ldXVxuICAgICAgaWYgKHZhbHVlID09PSB1bmRlZmluZWQpIHJldHVyblxuXG4gICAgICBmb3IgKHZhciBqID0gMCwgY2FycnkgPSB2YWx1ZTsgaiA8IGJ5dGVzLmxlbmd0aDsgKytqKSB7XG4gICAgICAgIGNhcnJ5ICs9IGJ5dGVzW2pdICogQkFTRVxuICAgICAgICBieXRlc1tqXSA9IGNhcnJ5ICYgMHhmZlxuICAgICAgICBjYXJyeSA+Pj0gOFxuICAgICAgfVxuXG4gICAgICB3aGlsZSAoY2FycnkgPiAwKSB7XG4gICAgICAgIGJ5dGVzLnB1c2goY2FycnkgJiAweGZmKVxuICAgICAgICBjYXJyeSA+Pj0gOFxuICAgICAgfVxuICAgIH1cblxuICAgIC8vIGRlYWwgd2l0aCBsZWFkaW5nIHplcm9zXG4gICAgZm9yICh2YXIgayA9IDA7IHN0cmluZ1trXSA9PT0gTEVBREVSICYmIGsgPCBzdHJpbmcubGVuZ3RoIC0gMTsgKytrKSB7XG4gICAgICBieXRlcy5wdXNoKDApXG4gICAgfVxuXG4gICAgcmV0dXJuIEJ1ZmZlci5mcm9tKGJ5dGVzLnJldmVyc2UoKSlcbiAgfVxuXG4gIGZ1bmN0aW9uIGRlY29kZSAoc3RyaW5nKSB7XG4gICAgdmFyIGJ1ZmZlciA9IGRlY29kZVVuc2FmZShzdHJpbmcpXG4gICAgaWYgKGJ1ZmZlcikgcmV0dXJuIGJ1ZmZlclxuXG4gICAgdGhyb3cgbmV3IEVycm9yKCdOb24tYmFzZScgKyBCQVNFICsgJyBjaGFyYWN0ZXInKVxuICB9XG5cbiAgcmV0dXJuIHtcbiAgICBlbmNvZGU6IGVuY29kZSxcbiAgICBkZWNvZGVVbnNhZmU6IGRlY29kZVVuc2FmZSxcbiAgICBkZWNvZGU6IGRlY29kZVxuICB9XG59XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/base-x/index.js\n");

/***/ })

};
;