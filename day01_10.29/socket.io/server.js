var app=require("express")();
var http=require("http").createServer(app);
var io=require("socket.io")(http);

app.get("/",function(req,res){
    res.sendFile(__dirname+"/index.html");
});

io.on("connection",function(client){

    //事件的绑定
    client.on("sendMessage",function(msg){
        //emit用来触发事件
        io.emit("clientMessage",msg);
    });
    client.on("disconnect",function(){
        console.log("用户离开了");
    });
});

http.listen(3000,function(){
    console.log("listening on *:3000");
})