import { Application } from 'egg';

export default (app: Application) => {
  const { controller, router } = app;

  router.get('/wechat', controller.auth.index);
  router.post('/wechat', controller.receiveMsg.index);

  router.get('/getFollowers', controller.user.index);
  router.get('/user/info', controller.user.info);

  router.post('/menu/create', controller.menu.index);
  router.get('/menu/list', controller.menu.list);
  router.get('/', controller.home.index);
};
