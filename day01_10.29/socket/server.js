const net = require("net");

//创建服务，http是单向请求，请求一次就会断开，而socket保持持久通信
const server=net.createServer();

//声明一个数组，存放所有的客户端
let clients=[];

//当用户连接服务器的时候
server.on("connection",(client)=>{
    //当用户连接进来的时候做一个唯一的表示用于用户退出时删除该用户
    client.id=clients.length;
    clients.push(client);
    //接收客户端传递的消息
    client.on("data",(data)=>{
        //将消息发送给客户端
        clients.forEach((item)=>{
            if(item){
                item.write(data);
            }
        })
    })

    //当用户离开的时候
    client.on("close",()=>{
        clients[client.id]=null;
    })
})
server.listen(9000);