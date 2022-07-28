const fs = require("fs");

var date = new Date();

var content= "Date: "+date.getDate()+
          "/"+(date.getMonth()+1)+
          "/"+date.getFullYear()+
          "\n"+"Tmie: "+date.getHours()+
          ":"+date.getMinutes()+
          ":"+date.getSeconds();
        


const fse = require("fs-extra");



const http = require("http");
const server = http.createServer((req, res) => {
  if (req.url === "/users") {
    res.write("File Created Successfully in the of test.txt");
    fs.writeFileSync("test.txt", content);
  } else if (req.url === "/posts") {
    res.write(
      "moved"
    );
    fse.move("test.txt", "destination/test.txt");
  } else {
    res.write("{}");
  }
  res.end();
});

server.listen(3001);



