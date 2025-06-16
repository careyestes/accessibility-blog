// imageLoader.js
export default function imageLoader({ src }) {
  // just return the raw src so <Image> renders to a simple <img src="…">
  return src;
}
