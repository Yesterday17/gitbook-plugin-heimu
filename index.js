module.exports = {
  website: {
    assets: "./assets",
    css: ["heimu.css"]
  },
  hooks: {
    page: function(page) {
      var cfg = this.config.values.pluginsConfig.heimu;
      var open = new RegExp(`<${cfg.keyword}>`, "g");
      var close = new RegExp(`</${cfg.keyword}>`, "g");
      page.content = page.content
        .replace(open, `<span class="heimu" title="${cfg.title}">`)
        .replace(close, "</span>");
      return page;
    }
  }
};
