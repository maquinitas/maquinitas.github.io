// prefer default export if available
const preferDefault = m => m && m.default || m

exports.components = {
  "component---src-pages-contact-js": () => import("/Users/montoyamoraga/github/maquinitas/maquinitas.github.io/src/pages/contact.js" /* webpackChunkName: "component---src-pages-contact-js" */),
  "component---src-pages-flavors-js": () => import("/Users/montoyamoraga/github/maquinitas/maquinitas.github.io/src/pages/flavors.js" /* webpackChunkName: "component---src-pages-flavors-js" */),
  "component---src-pages-gallery-js": () => import("/Users/montoyamoraga/github/maquinitas/maquinitas.github.io/src/pages/gallery.js" /* webpackChunkName: "component---src-pages-gallery-js" */),
  "component---src-pages-index-js": () => import("/Users/montoyamoraga/github/maquinitas/maquinitas.github.io/src/pages/index.js" /* webpackChunkName: "component---src-pages-index-js" */),
  "component---src-pages-instruments-js": () => import("/Users/montoyamoraga/github/maquinitas/maquinitas.github.io/src/pages/instruments.js" /* webpackChunkName: "component---src-pages-instruments-js" */),
  "component---src-pages-license-js": () => import("/Users/montoyamoraga/github/maquinitas/maquinitas.github.io/src/pages/license.js" /* webpackChunkName: "component---src-pages-license-js" */)
}

exports.data = () => import(/* webpackChunkName: "pages-manifest" */ "/Users/montoyamoraga/github/maquinitas/maquinitas.github.io/.cache/data.json")

