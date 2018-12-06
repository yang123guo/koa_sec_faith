// 引入router
const router = require('koa-router')();

router.prefix('/users');


// user父路由对应的处理
router.get('/', function (ctx, next) {
  ctx.body = 'this is a users response!'
})


// user/bar 对应的处理
router.get('/bar', function (ctx, next) {
  ctx.body = 'this is a users/bar response'
})

module.exports = router;
