import axios from './axios'

async function getText() {
  const result = await axios.get('https://v1.hitokoto.cn')
  if (result.status === 200) return result.data.hitokoto + ' ——来自 ' + result.data.from
  return '获取失败'
}

const hitokoto = {
  getText: getText
}

export default hitokoto
