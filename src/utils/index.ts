interface NumberFormatObj {
  [prop: string]: number
}

export function formatTime (value: number | string, fmt: string = 'yyyy-MM-dd hh:mm:ss') {
  const time = new Date(value)
  const obj: NumberFormatObj = {
    'M+': time.getMonth() + 1,
    'd+': time.getDate(),
    'h+': time.getHours(),
    'm+': time.getMinutes(),
    's+': time.getSeconds(),
    'q+': ~~((time.getMonth() + 3) / 3),
    S: time.getMilliseconds(),
  }

  if (/(y+)/.test(fmt)) {
    fmt = fmt.replace(
      RegExp.$1,
      (time.getFullYear() + '').substr(4 - RegExp.$1.length)
    )
  }

  for (const k in obj) {
    if (new RegExp(`(${k})`).test(fmt)) {
      fmt = fmt.replace(
        RegExp.$1,
        RegExp.$1.length === 1
          ? ((obj[k] as unknown) as string)
          : ('00' + obj[k]).substr(('' + obj[k]).length)
      )
    }
  }

  return fmt
}
