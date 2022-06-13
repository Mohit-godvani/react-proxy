const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = function (app) {
  app.use(
    "/anyPath",
    createProxyMiddleware({
      target: "http://localhost:4002",
      changeOrigin: true,
      pathRewrite: {
        "^/abc": "/", // rewrite path
      },
      router: {
        // when request.headers.host == 'dev.localhost:3000',
        // override target 'http://www.example.org' to 'http://localhost:8000'
        "localhost:3000": "http://localhost:8080",
      },
    })
  );
  app.use(
    "^/abc/",
    createProxyMiddleware({
      target: "http://localhost:8080",
      changeOrigin: true,
      pathRewrite: {
        "^/abc/posdfir@3!!": "/api/login", // rewrite path
        "^/abc/ks!djf!!ksdf": "/api/users", // rewrite path
        "^/abc/uidij!23&dd": "/api/create", // rewrite path
        "^/abc/ji@213sd@": "/api/logout", // rewrite path
      },
      router: {
        //"8c7b-2405-201-2010-4004-fd7d-d8b8-872e-af2c.ngrok.io": "http://localhost:8080",
      },
      onProxyReq(proxyReq, req, res) {
        // add custom header to request
        console.log(req.headers.cookie);
        //console.log(req);
        proxyReq.setHeader("x-monty", "belyfe");
        proxyReq.setHeader("cookie", req.headers.cookie + "; dummycookie = fightforce");
        // or log the req
      },
      onError(err, req, res) {
        console.log(err);
        console.log(res);
      },
    })
  );
};
