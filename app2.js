const express = require("express");
const app = express();
app.get("/index2", (req, res) => {
  res.json({
    code: 200,
    message: "哈哈哈index2",
  });
});
app.listen("3001", () => {
  console.log("3001启动了",'http://localhost:3001/index2');
});
