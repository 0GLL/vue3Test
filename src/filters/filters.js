export function isLogin(val) {
  let value = ''
  switch (val) {
    case '00':
      value = '已登录'
      break
    case '01':
      value = '未登录'
      break
  }
  return value
}

export function isPerson(val) {
  let value = ''
  switch (val) {
    case '10':
      value = '人类'
      break
    case '20':
      value = '动物'
      break
  }
  return value
}
