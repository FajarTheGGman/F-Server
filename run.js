var fs = require('fs');
var x = require("express")()
var load = require("ora")
var js = require("jsome")
var bx = require("boxen")
var style = require("chalk")

// Default Argument
x.get("/", (req,res) => {
    fs.createReadStream(__dirname + "/default/default.html").pipe(res)
})

x.get("/bgmusic", (req,res) => {
    fs.createReadStream(__dirname + "/default/default.mp3").pipe(res)
})

//icon

x.get("/ig_icon", (req,res) => {
    fs.createReadStream(__dirname + "/icon/ig.png").pipe(res)
})

x.get("/tw_icon", (req,res) => {
    fs.createReadStream(__dirname + "/icon/tw.png").pipe(res)
})

x.get("/git_icon", (req,res) => {
    fs.createReadStream(__dirname + "/icon/git.png").pipe(res)
})

fs.readdir(__dirname + "/htdocs", (err, files) => {
  files.forEach(file => {
      x.get("/" + file, (req,res) => {
          fs.createReadStream(__dirname + "/htdocs/" + file).pipe(res)
      })
  });
  var port = 8080
  x.listen(port, () => {
    console.log(style.green("  ,_,     [F-Server]     |"))
    console.log(style.green(" (O,O)       [By]        |"))
    console.log(style.green(" (   )   [Fajar Firdaus] |"))
    console.log(style.green(" '=='=====================\n\n"))

    js({
        "Coder" : "</Fajar Firdaus>",
        "Fb" : "</Fajar Firdaus>",
        "IG" : "</fajar_firdaus_7>",
        "YT" : "</iTech7732>"
    })

    console.log(style.red("\n [!] Type Ctrl + C to exit"))
    console.log(style.green(bx("Server Run at port " + port, {padding:1})))
    console.log(style.blue("[-] Copy This Link To Access The Server : http://localhost:8080"))
})
});