const { error } = require("console")
const Calculator = require("./Calculator")
const fs = require("fs")
// console.log(Calculator)
// console.log(Calculator.add(2,3))
// console.log("my first node app");
fs.readFile('Calculator.js' , 'utf-8', (err , data ) =>{
    if(err){
        console.log(`Error : ${err}`)
    }else{
        console.log(`data: ${data}`)
    }
})
// console.table(Calculator.add(3,5))
fs.writeFileSync('test.txt' , 'This Text was written by using fs.writeFile')
fs.writeFile('test2.txt' , 'This text file Was Genrated By using fs.writeFile',(err , data) =>{
    if(err){
        throw new Error("Error: " + err)
    }else{
        console.log(data)
    }
} )
fs.appendFileSync('test.txt' , `\n\nComplete File Heandling before 12:00 Current Time - ${new Date().getTime().to }`)