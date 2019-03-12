module.exports = {
  website: {
    assets: "./assets",
    css: ["heimu.css"]
  },
  hooks: {
    page: function(page) {
      page.content = page.content
        .replace("<black>", `<span class="heimu">`)
        .replace("</black>", "</span>");
      return page;
    }
  }
};
