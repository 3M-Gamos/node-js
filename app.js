//console.log('Welcome to Node Tutorial')
//console.log(__dirname)
//const os = require('os')
//const path = require('path')
// info abt me
//const user = os.userInfo()
//console.log(user)
// methods retuns system runtime in sec
//console.log(`The Systeme uptime is ${os.uptime()} in secondss`);
//const currentos = {
  //  name:os.type(),
    //release:os.release(),
   // totalmem:os.totalmem(),
   // freemem:os.freemem(),
//}
//console.log(currentos)
//console.log(data)
//const jhon = "hassan"
//const sayHi = (name) => {//

//    console.log(`Hello there ${name}`)
//}
//sayHi('reda')
//const num1 = 5
//const num2 = 10
//const addValues = (num1,num2) => {
//    console.log(`the sum is: ${num1+num2}`);
//}
//addValues()
//sayHi(names.john)
//const {readFileSync,writeFileSync}= require('fs')
//const {readFile,writeFile}= require('fs')

//console.log('start')
//const first = readFile('./content/first.txt','utf8',(err,result)=>{
  //  if (err){
    //    console.log(err)
      //  return
    //}
    //const first = result;
    //readFile('./content/second.txt','utf8',(err,result)=>{
      //  if (err){
        //    console.log(err)
          //  return
       // }
        //const second = result;
        //writeFile('./content/result-async.txt',`Here comes the D ${first}, and the ${second}`,(err,result)=>{
          //  if (err){
            //    console.log(err)
              //  return
           // }
            //console.log(result)
        //})
    //})
//})
//const second = readFileSync('./content/second.txt', 'utf8')

//writeFileSync(
  //'./content/result-sync.txt',
  //`Here is the result : ${first}, ${second}`,{flag:'a'}
//)
//const http = require('http');
//const server = http.createServer((req,res)=>{
  //  if(req.url ==='/'){
  //  res.end('Baby Welcome to the party')
//    }
  //  if(req.url ==='/about'){
 //   res.end('give me hip')
//    }
//  res.end(`
  //  <h1>Oops</h1>
   // <p>We can't seem to find shit</p>
    //<a href="/">back home</a>`)
    
//})
//server.listen(5000)
const _ = require('lodash')
const items = [1,[2,[3,[4]]]]
const newItems = _.flattenDeep(items)
console.log(newItems)
