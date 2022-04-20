
const express = require("express");
const app = express();

app.use(express.static("public"));

app.get('/',(request, response) => {

  const template = 
  `
  <h1>Hello express</h1>
  <a href="/static.html">html</a><br>
  <a href="./river.jpg">img file</a>
  `;
  //pdf, zip, 오디오, 비디오파일 static에 넣을 수있음
  response.send(template);
});

app.listen(8080, () => {
  console.log("Server running at http://127.0.0.1:8080");
});