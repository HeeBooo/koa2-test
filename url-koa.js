const Koa = require('koa2');
const app = new Koa();

app.use(async (ctx, next) => {
  if (ctx.path === '/') {
    ctx.body = 'index page';
  } else {
    await next();
  }
});

app.use(async (ctx, next) => {
  if (ctx.path === '/test') {
    ctx.body = 'test page';
  } else {
    await next();
  }
})

app.use(async (ctx, next) => {
  if (ctx.paht === '/error') {
    ctx.body = 'error page';
  } else {
    await next();
  }
})

app.listen(3000, () => {
  console.log('server is running at port 3000');
});