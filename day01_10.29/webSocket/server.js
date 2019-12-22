const webSocket=require("ws");


const server=new webSocket.Server({port:3000});

server.on("connection",(client)=>{
    console.log("连接成功");
    client.on("message",(data)=>{
        server.clients.forEach((item)=>{
            if(item.readyState===webSocket.OPEN){
                item.send(data);
            }
        })
    })
})
