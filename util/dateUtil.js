const ONE_HOUR = 1000 * 60 * 60
const ONE_DAY = ONE_HOUR * 24

export function getTimeToNow (date) {
  let sub = new Date().getTime() - new Date(date).getTime() - 8 * ONE_HOUR
  if (sub < ONE_DAY) {
    return new Date(sub).getHours() + '小时前'
  } else {
    return new Date(sub).getDate() + '天前'
  }
}
