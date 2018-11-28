const router = require('koa-router')();

router.get('/', async (ctx, next) => {
  await ctx.render('index', {
    title: 'Hello Koa 2!'
  })
})

router.get('/string', async (ctx, next) => {
  console.log(ctx.request.query, 'get请求中获取query')
  console.log(ctx.request.body, 'get请求中获取body')
  ctx.body = 'koa2 string'
})

router.post('/post', async (ctx, next) => {
  console.log(ctx.request.query, 'post请求中获取query')
  console.log(ctx.request.body, 'post请求中获取body')
  ctx.body = 'koa2 string'
})

router.get('/json', async (ctx, next) => {
  ctx.body = {
    title: 'koa2 json'
  }
})

module.exports = router;
