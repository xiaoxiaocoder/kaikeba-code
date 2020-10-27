// This file is created by egg-ts-helper@1.25.8
// Do not modify this file!!!!!!!!!

import 'egg';
import ExportUser from '../../../app/model/User';
import ExportWeChat from '../../../app/model/WeChat';

declare module 'egg' {
  interface IModel {
    User: ReturnType<typeof ExportUser>;
    WeChat: ReturnType<typeof ExportWeChat>;
  }
}
