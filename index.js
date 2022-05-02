// const fs = require('fs')

// console.log(__filename)

// const http = require('http');
// const { y } = require('./App');

// http.createServer((req,res)=>{
//     res.write("hello")
//     res.end()
// }).listen(4500)

// http.createServer(demo).listen(4000)

// function demo(req,resp){
//     resp.write("<h1>hi from port 4000</h1>")
//     resp.end()
// }



//creating api

// const d = require("./data.api")

// http.createServer((req,resp)=>{
//     resp.writeHead(200,{'content-type':'app\json'})
//     resp.write(JSON.stringify(d))
//     resp.end()
// }).listen(4000)

// reading html file
// const http = require('http')
// const fs = require('fs')

// http.createServer((req, res) => {
//     fs.readFile('demo.html',function(err,data) {
//         res.writeHead(200,{'content-type':'text/html'})
//         res.write(data)
//         res.end()
//     })
// }).listen(4500)

// argument in nodejs

// console.log(process.argv[4])





//file system

// import * as fs from "fs";
// const fs = require('fs');
// const path = require('path');

// const dirPath = path.join(__dirname,'files')
// console.warn(dirPath)

// for(i=0; i<4;i++) {
//     fn = `hello${i}.txt`
//     content = `content in file hello${i}.txt`
//     fs.writeFileSync(dirPath+"/"+fn, content)
// }

// fs.readdir(dirPath,(err,data)=>{
//     data.forEach((d)=>{
//         fs.unlinkSync(`${dirPath}/${d}`)
//     })
// })


// sendresponse
// const express = require('express')
const path = require('path')

// const app = express()
const dp = path.join(__dirname,"public")
// const dp2 = path.join(__dirname,"")

// // app.use(express.static("./public"))
// app.get('', (req, res)=>{
//     res.sendFile(`${dp}/about.html`)
// })

// app.get('*',(req, res)=>{
//     res.sendFile(`${dp}/404.html`)
// })
// app.listen(4000)



//ejs module example
const express = require('express')
const app = express()
const port = 4000

app.get('', (req, res)=>{
    res.sendFile(`${dp}/about.html`)
})

app.set('view engine', 'ejs')

app.get('/dy', (req, res) => {
    res.render('dynamic')
})
app.listen(port, () => {
  console.log(`App listening at port ${port}`)
})