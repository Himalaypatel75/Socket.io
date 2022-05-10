const express = require('express');
const app = express();
const http = require('http');
const server = http.createServer(app);
const { Server } = require("socket.io")
const io = new Server(server,{
    cors: {
        origin: "http://localhost:4200",
    }
})


io.on('connection', function(socket){
    console.log("A user connected");

    sendData(socket);
});

function sendData(socket){

    let DealId=['M16439002567','M16439006143','M16439007924','M16439009164','M16439004962'];
    let TimeDate=['03/05/2022 11:03 PM','02/03/2022 09:05 AM','05/03/2022 12:08 PM','07/02/2022 10:09 AM','04/01/2022 10:15 AM'];
    let Status=['Pending','Success','Pending','Success','Pending'];
    let Size=['95','32','53','26','41'];
    let STRATEGY=['NDF','NFT','IBR','MSE','DXY'];
    let CURRENCY=['EURUSD','USDINR','RUBIND','CNYINR','USDCYN'];
    let TENOR=['1.1M','2.5M','6.2M','0.5M','3.5M'];
    let LEVEL=['2.0','1.5','1.3','5.2','4.3'];
    let BUYER=['MSCO','IND','USA','SHI','UAE'];
    let SELLER=['HSBC','REL','TATA','DMART','TESLA'];
    let VENUE=['Manual','Auto','Manual','Auto','Manual'];


    DealId = DealId.sort(() => Math.random() - 0.5)
    TimeDate = TimeDate.sort(() => Math.random() - 0.5)
    Status = Status.sort(() => Math.random() - 0.5)
    Size = Size.sort(() => Math.random() - 0.5)
    STRATEGY = STRATEGY.sort(() => Math.random() - 0.5)
    CURRENCY = CURRENCY.sort(() => Math.random() - 0.5)
    TENOR = TENOR.sort(() => Math.random() - 0.5)
    LEVEL = LEVEL.sort(() => Math.random() - 0.5)
    BUYER = BUYER.sort(() => Math.random() - 0.5)
    SELLER = SELLER.sort(() => Math.random() - 0.5)
    VENUE = VENUE.sort(() => Math.random() - 0.5)

    data={ "DealId": DealId, "TimeDate":TimeDate, "Status" : Status, "Size" :Size,"STRATEGY" : STRATEGY,"CURRENCY" : CURRENCY,"TENOR" : TENOR,"LEVEL" : LEVEL,"BUYER" : BUYER,"SELLER" : SELLER,"VENUE" : VENUE}

    socket.emit('test1', data);
    setTimeout(() =>{
        sendData(socket);
    }, 1000);
}

server.listen(3000, () =>{
    console.log("Socket.io server is listening on port 3000");
});
