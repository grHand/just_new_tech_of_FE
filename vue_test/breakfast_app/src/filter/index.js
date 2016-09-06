export function domain (url) {
  urlParser.href = url
  return urlParser.hostname
}