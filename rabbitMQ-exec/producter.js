const amqp = require("amqplib");

async function product(params) {
  console.log("------生产者启动------");
  // 1. 创建链接对象
  const connection = await amqp.connect("amqp://localhost");

  // 2. 获取通道
  const channel = await connection.createChannel();

  // 3. 声明参数
  const routingKey = "test";

  const msg = "hello world";

  for (let i = 0; i < 100000; i++) {
    // 4. 发送消息
    await channel.publish("", routingKey, Buffer.from(`${msg} 第${i}条消息`));
  }
    // 5. 关闭通道
    await channel.close();
    // 6. 关闭连接
    await connection.close();
}
product();
