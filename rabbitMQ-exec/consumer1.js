// 构建消费者
const amqp = require('amqplib');

async function consumer() {
    console.log('消费者1启动---------->');
    // 1. 创建链接对象
    const connection = await amqp.connect('amqp://localhost');

    // 2. 获取通道
    const channel = await connection.createChannel();

    // channel.prefetch(1)

    // 3. 声明参数
    const queueName = 'test';
  
    // 4. 声明队列，交换机默认为 AMQP default
    await channel.assertQueue(queueName);

    // 5. 消费
    await channel.consume(queueName, msg => {
        console.log('Consumer1：', msg.content.toString());
        channel.ack(msg);
    }, {noAck: false});
}

consumer();