'use strict'; //设置为严格模式

/**
 * @description 回复文本消息
 * @param {String} toUser 接收用户
 * @param {String} fromUser 发送用户
 * @param {String} content 发送消息
 */
function txtMsg(toUser, fromUser, content) {
  var xmlContent = '<xml><ToUserName><![CDATA[' + toUser + ']]></ToUserName>';
  xmlContent += '<FromUserName><![CDATA[' + fromUser + ']]></FromUserName>';
  xmlContent += '<CreateTime>' + new Date().getTime() + '</CreateTime>';
  xmlContent += '<MsgType><![CDATA[text]]></MsgType>';
  xmlContent += '<Content><![CDATA[' + content + ']]></Content></xml>';
  return xmlContent;
}

/**
 * @description 回复图片消息
 * @param {String} toUser 接收用户
 * @param {String} fromUser 发送用户
 * @param {String} content 发送消息
 */
function imageMsg(toUser, fromUser, mediaId) {
  var xmlContent = '<xml><ToUserName><![CDATA[' + toUser + ']]></ToUserName>';
  xmlContent += '<FromUserName><![CDATA[' + fromUser + ']]></FromUserName>';
  xmlContent += '<CreateTime>' + new Date().getTime() + '</CreateTime>';
  xmlContent += '<MsgType><![CDATA[image]]></MsgType>';
  xmlContent += '<Image><MediaId><![CDATA[' + mediaId + ']]></MediaId></Image></xml>';
  return xmlContent;
}

/**
 * @description 回复【文章/新增/图文】消息
 * @param {String} toUser 接收用户
 * @param {String} fromUser 发送用户
 * @param {Array} contentArr 图文信息集合
 */
function graphicMsg(toUser, fromUser, contentArr) {
  var xmlContent = '<xml><ToUserName><![CDATA[' + toUser + ']]></ToUserName>';
  xmlContent += '<FromUserName><![CDATA[' + fromUser + ']]></FromUserName>';
  xmlContent += '<CreateTime>' + new Date().getTime() + '</CreateTime>';
  xmlContent += '<MsgType><![CDATA[news]]></MsgType>';
  xmlContent += '<ArticleCount>' + contentArr.length + '</ArticleCount>';
  xmlContent += '<Articles>';
  contentArr.map(function (item, index) {
    xmlContent += '<item>';
    xmlContent += '<Title><![CDATA[' + item.Title + ']]></Title>';
    xmlContent += '<Description><![CDATA[' + item.Description + ']]></Description>';
    xmlContent += '<PicUrl><![CDATA[' + item.PicUrl + ']]></PicUrl>';
    xmlContent += '<Url><![CDATA[' + item.Url + ']]></Url>';
    xmlContent += '</item>';
  });
  xmlContent += '</Articles></xml>';
  return xmlContent;
}


export { txtMsg, imageMsg, graphicMsg }