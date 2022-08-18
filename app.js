const express = require("express");
const os = require("os");

const app = express();

app.get("/index", (req, res) => {
  res.json({
    code: 200,
    message: "哈哈哈1",
    list:os.cpus()
  });
});

app.listen("3000", () => {
  console.log("3000启动了",'http://localhost:3000/index');
});
/**
 * npm install -g pm2
 * 
 * 启动：pm2 start app.js
 * 重启：pm2 restart app.js
 * 停止特定的应用：pm2 stop app_name | app_id
 * 停止全部的应用：pm2 stop all
 * 删除特定的应用：pm2 delete app_name | app_id
 * 删除全部的应用：pm2 delete all
 * 查看有哪些进程：pm2 list
 * 日志查看：pm2 logs
 * 看当前通过 pm2 运行的进程的状态：pm2 monit
 * 
 * --watch：监听应用目录的变化，一旦发生变化，自动重启。
 * -i or --instance：启用多少个实例，可用于负载均衡，如果 -i 0 或者 -i max，则根据当前机器核数确定实例数目。
 * --ignore-watch：排除监听的目录或文件，可以是特定的文件名，也可以是正则。
 * 
 * pm2 start app.js -i 3 // 开启三个进程
 * pm2 start app.js -i max // 根据机器CPU核数，开启对应数目的进程 
 */