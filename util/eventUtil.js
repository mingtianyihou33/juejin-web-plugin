export function scrollLoadMore (cb) {
  let loading = false
  return async function (e) {
    let target = e.target
    if (!loading && target.scrollTop + target.clientHeight === target.scrollHeight) {
      loading = true
      try {
        await cb()
      } catch (e) {
        console.log(e)
      }
      loading = false
    }
  }
}
