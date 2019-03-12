module.exports = {
  website: {
    assets: "./assets",
    css: ["heimu.css"]
  },
  hooks: {
    page: function(page) {
      var cfg = this.config.values.pluginsConfig.heimu;
      page.content = page.content
        .replace(
          `<${cfg.keyword}>`,
          `<span class="heimu" title="${cfg.title}">`
        )
        .replace(`</${cfg.keyword}>`, "</span>");
      return page;
    }
  }
};
