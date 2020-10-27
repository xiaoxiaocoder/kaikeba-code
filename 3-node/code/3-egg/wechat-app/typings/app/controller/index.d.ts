// This file is created by egg-ts-helper@1.25.8
// Do not modify this file!!!!!!!!!

import 'egg';
import ExportAuth from '../../../app/controller/Auth';
import ExportHome from '../../../app/controller/Home';
import ExportMenu from '../../../app/controller/Menu';
import ExportReceiveMsg from '../../../app/controller/ReceiveMsg';
import ExportUser from '../../../app/controller/User';
import ExportAdminWeChat from '../../../app/controller/admin/WeChat';

declare module 'egg' {
  interface IController {
    auth: ExportAuth;
    home: ExportHome;
    menu: ExportMenu;
    receiveMsg: ExportReceiveMsg;
    user: ExportUser;
    admin: {
      weChat: ExportAdminWeChat;
    }
  }
}
