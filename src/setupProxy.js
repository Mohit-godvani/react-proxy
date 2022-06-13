const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = function (app) {
  const client_host = process.env.REACT_APP_CLIENTHOST;
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
    "/abc/",
    createProxyMiddleware({
      target: "http://localhost:123",
      changeOrigin: true,
      pathRewrite: {
        "^/abc/posdfir@3!!": "/api/login", // rewrite path
        "^/abc/ks!djf!!ksdf": "/api/users", // rewrite path
        "^/abc/uidij!23&dd": "/api/create", // rewrite path
        "^/abc/ji@213sd@": "/api/logout", // rewrite path
      },
      router: {
        "https://fluffy-dieffenbachia-e726b7.netlify.app": "http://localhost:8080",
      },
      onProxyReq(proxyReq, req, res) {
        // add custom header to request
        console.log(req.headers.cookie);
        //console.log(req);
        proxyReq.setHeader("x-monty", "belyfe");
        proxyReq.setHeader("cookie", req.headers.cookie + "; dummycookie = fightforce");
        // or log the req
      },
    })
  );
};
