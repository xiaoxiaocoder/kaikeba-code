import { Controller } from 'egg';
import * as xml2js from 'xml2js';

const builder = new xml2js.Builder();

export default class ReceiveMsgController extends Controller {
  public async index() {
    const { ctx, app } = this
    const msg = ctx.request.body;
    app.logger.info("Receive:", msg);
    let result = ''
    let { MsgType, Event } = msg
    // 事件推送
    if (MsgType && Event) {
      result = handleEventPush(msg)
    } else { // 接收普通消息
      result = handleNormalMsgPush(msg)
    }
    ctx.body = result;
  }
}

interface WeChatMessageBase {
  /**
   * 开发者微信号
   */
  ToUserName: string;
  /**
   * 发送方帐号（一个OpenID）
   */
  FromUserName: string;
  /**
   * 消息创建时间 （整型）
   */
  CreateTime: string;
  /**
   * 消息id，64位整型
   */
  MsgId: string
}

interface WeChatTextMessage extends WeChatMessageBase{
  MsgType: 'text';
  /**
   * 文本消息内容
   */
  Content: string;
}

interface WeChatImageMessage extends WeChatMessageBase{
  MsgType: 'image';
  /**
   * 图片链接（由系统生成）
   */
  PicUrl: string;
  /**
   * 图片消息媒体id，可以调用获取临时素材接口拉取数据。
   */
  MediaId: string;
}

interface WeChatVoiceMessage extends WeChatMessageBase{
  MsgType: 'voice';
  /**
   * 语音消息媒体id，可以调用获取临时素材接口拉取数据。
   */
  MediaId: string;
  /**
   * 语音格式，如amr，speex等
   */
  Format: string;
  /**
   * 语音识别结果，UTF8编码
   */
  Recognition: string;
}

interface WeChatVedioMessage extends WeChatMessageBase{
  MsgType: 'video';
  /**
   * 视频消息媒体id，可以调用获取临时素材接口拉取数据。
   */
  MediaId: string;
  /**
   * 视频消息缩略图的媒体id，可以调用多媒体文件下载接口拉取数据。
   */
  ThumbMediaId: string;
}

interface WeChatShortVedioMessage extends WeChatMessageBase{
  MsgType: 'shortvideo';
  /**
   * 视频消息媒体id，可以调用获取临时素材接口拉取数据。
   */
  MediaId: string;
  /**
   * 视频消息缩略图的媒体id，可以调用多媒体文件下载接口拉取数据。
   */
  ThumbMediaId: string;
}

interface WeChatLocationMessage extends WeChatMessageBase{
  MsgType: 'location';
  /**
   * 视频消息媒体id，可以调用获取临时素材接口拉取数据。
   */
  MediaId: string;
  /**
   * 	地理位置纬度
   */
  Location_X: string;
  /**
   * 地理位置经度
   */
  Location_Y: string;	
  /**
   * 地图缩放大小
   */
  Scale: string;	
  /**
   * 	地理位置信息
   */
  Label: string;
}

type WeChatMessage = 
  WeChatTextMessage 
  | WeChatImageMessage 
  | WeChatVoiceMessage
  | WeChatVedioMessage
  | WeChatShortVedioMessage
  | WeChatLocationMessage

function handleEventPush (msg: WeChatMessage) {
  console.log('msg', msg)
  return ''
}

function handleNormalMsgPush (msg: WeChatMessage) {
  let result = ''
  if (msg.MsgType === 'location') {
    // msg.
  } else if (msg.MsgType === 'text') {
    result = builder.buildObject({
      xml: {
        ToUserName: msg.FromUserName,
        FromUserName: msg.ToUserName,
        CreateTime: Date.now(),
        MsgType: msg.MsgType,
        Content: "Hello " + msg.Content,
      },
    });
  }
  return result
}