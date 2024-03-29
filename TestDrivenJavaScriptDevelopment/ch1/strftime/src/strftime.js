/**
 * Created by TomoakiTANAKA on 2017/10/14.
 */
Date.prototype.strftime = (function () {
  function strftime(format) {
    var date = this;

    return (format + "").replace(/%([a-zA-Z])/g,
      function (m, f) {
        var formatter = Date.formats && Date.formats[f];

        if (formatter == "function") {
          return formatter.call(Date.formats, date);
        } else {
          return date.strftime(formatter);
        }

        return f;
      });
  }

  // 内部ヘルパー
  function zeroPad(num) {
    return (+num < 10 ? "0" : "") + num;
  }

  Date.formats = {
    // 整形メソッド群
    d: function (date) {
      return zeroPad(date.getDate());
    },

    m: function (date) {
      return zeroPad(date.getMonth());
    },

    y: function (date) {
      return zeroPad(date.getYear() % 100);
    },

    Y: function (date) {
      return zeroPad(date.getFullYear());
    },

    // フォーマット略記法
    F: "%Y-%m-%d",
    D: "%m %d %y"
  };

  return strftime;
}());
