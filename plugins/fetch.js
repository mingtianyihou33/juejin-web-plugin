import fetch from "isomorphic-unfetch";

const API_URL = 'https://extension-ms.juejin.im/'

export default async function fetcher(path, options) {
  const res = await fetch(API_URL + path, options)
  const json = await res.json()
  if (json.code === 200) {
    return json.data
  } else {
    throw new Error(json.code)
  }
}
