const net=require("net");
const client=new net.Socket();

//逐行读取，读取终端中的内容
const readline=require("readline");

//创建读写流
const rl=readline.createInterface({
    input:process.stdin,
    output:process.stdout
})

//连接服务器
client.connect(9000,"127.0.0.1",()=>{
    //向服务器发送信息
    client.write("大家好");

    //接收服务端的消息
    client.on("data",(data)=>{
        console.log(data+"");
    })
})

rl.on("line",(val)=>{
    client.write(val);
})