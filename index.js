// const express=require("express");
// const app=express();
// const path=require("path")

// const staticPath=path.join(__dirname,"/invitation");

// app.use(express.static(staticPath));

// app.get("/01",(req,res)=>{
//     res.sendFile(__dirname+"/invitation/savaliya_family.html");
// });


// app.get("/02",(req,res)=>{
//     res.sendFile(__dirname+"/sorathiya_family.html");
// });
// // app.get("",(req,res)=>{
// //     res.render("index");
// // });
// app.listen(9000)



// let express = require('express');
// let app = express();

// app.listen(process.env.PORT, (listener) => {
//   console.log(`Your app is listening on port ${listener.address().port}`);
// });

// app.get("/hitesh", (request, response) => {
//   response.sendFile("/invitation/savaliya_family.html")
// })


// var mainUrl = window.location.href;




// // window.onload = function () {
// //     // window.history.replaceState( null, null, mainUrl );
// //     // window.location.href = "www.Google.com";
// //     window.location.assign = mainUrl;
// //     window.history.replaceState( null, null, window.location.href );
// // }

// // window.location.href = oldurl;
// // window.history.replaceState( null, null, oldurl );

// var url = mainUrl;
// url = url.split('.html')[0];
// //url = url.substring(0, url.lastIndexOf("."));
// window.history.replaceState( null, null, url );

// window.onhashchange = function(){
//     window.location.assign = mainUrl;
//     window.history.replaceState( null, null, window.location.href );
// }

// var mainUrl = location.href;
// // location.href = "https://google.com"; 

// var url = mainUrl;
// url = url.split('.html')[0];
// url = url.substring(0, url.lastIndexOf("."));
// window.history.replaceState( null, null, url );


// window.onbeforeunload = function (){
//     location.href = "https://google.com"; 
// }


// window.onload = function(){
//     location.href = mainUrl;
// }

// window.location.reload()


// var btn = document.querySelector(".btn-reload"); 

// btn.addEventListener("click", function(e){
//  e.preventDefault();
// location.href = mainUrl;
//  location.reload(true); 
// location.href = "https://google.com"; 
// }); 



const express = require('express');
const path = require('path');

const app = express();
const publicPath =  path.join(__dirname,'/invitation');

app.use(express.static(publicPath));


app.get('/009',(res,resp)=>{
    resp.sendFile(`${publicPath}/savaliya_family.html`)
})

// app.listen(5553);