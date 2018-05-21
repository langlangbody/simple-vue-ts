import Api_key_str from "@/config/api-params";
import axios from 'axios';
export const wechatInit = async (getshareimg:string,username:string)=> {
  // fetch wechat signature
  let shareUrl = window.location.href
  let params: object = {
    url: shareUrl,
    api_key: Api_key_str
  }
  let signResp = await axios.post('/wechat/signature', params)
  let signData = signResp.data.data,
    signCode = signResp.data.result
  if (signCode === 'success') {
    let wx = require('weixin-js-sdk')
    let shareTitle = getshareimg ? `室友${username}在爬520脱单墙，请帮TA点赞扶TA上墙` : '520，帮室友脱单大作战有奖活动',
      shareDesc = getshareimg ? '多点一个赞，就能为室友脱单多一份可能性' :'身为中国好室友，帮室友脱单义不容辞。何况还有好室友大奖拿！快来点赞支持室友上墙吧！',
      shareCover = getshareimg ? getshareimg : 'http://cdn.shiyi.co/cleen_520/avatar/dog_avatar.png'
    // append host url
    // shareCover = 'http://cleen.io' + shareCover

    // wx sdk init
    wx.config({
      debug: false, // 开启调试模式,调用的所有api的返回值会在客户端alert出来，若要查看传入的参数，可以在pc端打开，参数信息会通过log打出，仅在pc端时才会打印。
      appId: signData.appId, // 必填，公众号的唯一标识
      timestamp: signData.timestamp, // 必填，生成签名的时间戳
      nonceStr: signData.nonceStr, // 必填，生成签名的随机串
      signature: signData.signature,// 必填，签名，见附录1
      jsApiList: [
        'checkJsApi',
        'onMenuShareTimeline',
        'onMenuShareAppMessage',
        // 'onMenuShareQQ',
        // 'onMenuShareWeibo',
        // 'onMenuShareQZone',
      ] // 必填，需要使用的JS接口列表，所有JS接口列表见附录2
    })

    wx.ready(function () {
      console.log('ready')
      // config信息验证后会执行ready方法，
      // 所有接口调用都必须在config接口获得结果之后，
      // config是一个客户端的异步操作，所以如果需要在页面加载时就调用相关接口，
      // 则须把相关接口放在ready函数中调用来确保正确执行。对于用户触发时才调用的接口，则可以直接调用，不需要放在ready函数中。
      wx.onMenuShareTimeline({
        title: shareTitle, // 分享标题
        link: shareUrl, // 分享链接，该链接域名或路径必须与当前页面对应的公众号JS安全域名一致
        imgUrl: shareCover, // 分享图标
        success: function () {
          console.log('share success')
          // 用户确认分享后执行的回调函数
        },
        cancel: function () {
          console.log('share failed')
          // 用户取消分享后执行的回调函数
        }
      })
      wx.onMenuShareAppMessage({
        title: shareTitle, // 分享标题
        desc: shareDesc, // 分享描述
        link: shareUrl, // 分享链接，该链接域名或路径必须与当前页面对应的公众号JS安全域名一致
        imgUrl: shareCover, // 分享图标
        type: 'link', // 分享类型,music、video或link，不填默认为link
        dataUrl: '', // 如果type是music或video，则要提供数据链接，默认为空
        success: function () {
          console.log('share success')
          // 用户确认分享后执行的回调函数
        },
        cancel: function () {
          console.log('share failed')
          // 用户取消分享后执行的回调函数
        }
      });
    })
  }
}