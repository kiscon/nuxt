/*
* Created by xujishan on 2017/12/20
* Last Modified by xujishan on 2018/01/26
* */
import { PAY_OK, OK, RES_OK } from '@/api/config'
import axios from 'axios'

export default function as(args) {
  let {url, method = 'post', params = {}, timeout = 10000} = {...args}
  return new Promise((resolve, reject) => {
    axios({
      method: method,
      url: url,
      data: params,
      timeout: timeout
    }).then((response) => {
      // console.log(`axios返回数据：`, response)
      // 拿自定义的data
      let result = response.data
      // xhr通信成功
      if (response.status === OK) {
        // 拿自定义的meta信息
        let meta = result.meta
        // 拿后台返回的全部信息
        let body = result.body
        // console.log(`支付返回的信息：`, body)
        // 自定义meta中的code信息：0-表示正常，其他均为错误
        switch (meta.code) {
          case RES_OK:
            // 后台支付code：0000-表示正常，其他均为错误(包括整体返回undefined/null/空)
            if (body && (body.code === PAY_OK || parseInt(body.code) === RES_OK)) {
              resolve(body)
            } else {
              reject(body)
            }
            break
          default:
            // 后台直接报错
            reject(body)
        }
      } else {
        // 通信失败
        reject(result)
      }
    }).catch((error) => {
      // 通信错误
      console.log(`通信错误：`, error)
      if (error.message.indexOf(`timeout of`) >= 0) {
        error.message = `请求超时，稍后再试`
      }
      reject(error)
    })
  })
}
