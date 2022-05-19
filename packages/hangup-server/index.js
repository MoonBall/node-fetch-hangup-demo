const http = require('http');

const json = { name: 'MoonBall' };

let connCount = 0;
const server = http.createServer((req, res) => {
  const body = Buffer.from(JSON.stringify(json, null, 2), 'utf-8');
  console.log('length of body: ', body.length);
  const total = 10; // 10s
  let cur = 0;

  ++connCount;
  console.log('current connection count:', connCount);

  res.setHeader('content-type', 'application/json');
  const timer = setInterval(() => {
    const curBody = body.slice(cur, cur + 1);
    res.write(curBody);
    if (++cur === total) {
      // res.end(body.slice(cur));
      // setTimeout(() => {
      //   res.destroy();
      // }, 2000);
      clearInterval(timer);
    }
  }, 1000);
});

const PORT = 9999;
server.listen(PORT, function () {
  console.log('hangup server listening:', PORT);
});
