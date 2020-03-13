let ws = require("nodejs-websocket");
console.log("开始建立连接...")

let server = ws.createServer(function (conn) {
  conn.on("text", function (str) {
    giveMes(str)
  })

  conn.on("close", function (code, reason) {
    console.log("关闭连接")
  });

  conn.on("error", function (code, reason) {
    console.log("异常关闭")
  });

})
  .listen(3000, function () {
    console.log("WebSocket建立完毕")
  })


  function giveMes(str) {
    server.connections.forEach(function(conn){
      conn.sendText(str)
    })
  }