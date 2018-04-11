const Koa = require('koa2');
const app = new Koa();

app.use( async (ctx, next) => {
  const start = new Date().getTime();
  await next();
  const ms = new Date().getTime() - start;
  
  console.log(`${ctx.method} ${ctx.url}: ${ms}ms`);

  ctx.set('X-Response-Time', `${ms}ms`);
});

app.use( async (ctx, next) => {
  await next();
  ctx.type = 'text/html';
  ctx.body = '<h1>23123123123</h1>'
});

app.listen(3000, () => {
  console.log('server is running at port 3000');
});