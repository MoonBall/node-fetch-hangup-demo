const http = require('http');

const server = http.createServer(async (req, res) => {
  const fetchModule = await import('node-fetch');
  const fetch = fetchModule.default;

  res.setHeader('content-type', 'application/json');
  try {
    const res = await fetch('http://127.0.0.1:9999', { timeout: 3000 });
    const body = await res.json();
    res.end(JSON.stringify(body, null, 2));
  } catch (err) {
    res.end(JSON.stringify({ err: { message: err.message } }));
  }
});

const PORT = 3001;
server.listen(PORT, function () {
  console.log('fetch-demo server listening: ', PORT);
});

setInterval(() => {
  console.log(
    'ActiveHandles: ',
    process._getActiveHandles().length,
    ', ActiveRequests: ',
    process._getActiveRequests().length,
  );
}, 1000);
