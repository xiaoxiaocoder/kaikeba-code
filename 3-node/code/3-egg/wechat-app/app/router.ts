import { Application } from 'egg';

export default (app: Application) => {
  const { controller, router } = app;

  // 动态路由  {appId}/wechat  以达到数据隔离的目的
  router.get('/wechat', controller.auth.index);
  router.post('/wechat', controller.receiveMsg.index);

  router.get('/getFollowers', controller.user.index);
  router.get('/user/info', controller.user.info)
  router.get('/user/list', controller.user.list);

  router.post('/menu/create', controller.menu.index);
  router.get('/menu/list', controller.menu.list);
  router.post('/admin/wechat/create', controller.admin.weChat.create);
  router.get('/', controller.home.index);
};
