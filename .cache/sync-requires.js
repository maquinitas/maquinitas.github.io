const { hot } = require("react-hot-loader/root")

// prefer default export if available
const preferDefault = m => m && m.default || m


exports.components = {
  "component---cache-dev-404-page-js": hot(preferDefault(require("/Users/montoyamoraga/github/maquinitas/maquinitas.github.io/.cache/dev-404-page.js"))),
  "component---src-pages-contact-js": hot(preferDefault(require("/Users/montoyamoraga/github/maquinitas/maquinitas.github.io/src/pages/contact.js"))),
  "component---src-pages-flavors-js": hot(preferDefault(require("/Users/montoyamoraga/github/maquinitas/maquinitas.github.io/src/pages/flavors.js"))),
  "component---src-pages-gallery-js": hot(preferDefault(require("/Users/montoyamoraga/github/maquinitas/maquinitas.github.io/src/pages/gallery.js"))),
  "component---src-pages-index-js": hot(preferDefault(require("/Users/montoyamoraga/github/maquinitas/maquinitas.github.io/src/pages/index.js"))),
  "component---src-pages-instruments-js": hot(preferDefault(require("/Users/montoyamoraga/github/maquinitas/maquinitas.github.io/src/pages/instruments.js")))
}

