const ctx = require.context('@icons/svg', false, /\.svg$/)
const RE_SVG = /\.\/(.*)\.svg/

const icons: string[] = ctx.keys().map(i => (i.match(RE_SVG) || '')[1])

export default icons
