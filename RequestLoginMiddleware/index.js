const express=require('express')
const  responseTime = require('response-time')
const morgan=require('morgan')
const requestIp = require('request-ip');
const app = express();
const logger = (req, res, next) => {
  console.log("Name : Mohit");
  console.log("method:", req.method);
  console.log("url:", req.url);
  // console.log("url:", requestIp);
  console.log("timestamp:", Date.now());
  console.log("response time:", req.responseTime);
  console.log("ip address =", req.socket.localAddress);
  console.log("URL=", req.url);

  next();
};

app.use(responseTime());
app.use(morgan("dev"));
app.use(logger);

app.get("/", (req, res) => {
  res.json({
    success: true,
    message: "request success",
  });
});
app.listen(9000, () => console.log("Listening on port 8000"));
