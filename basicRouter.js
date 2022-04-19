const express = require("express");

const app = express();

app.get('/', function(request, response) {
    response.send("router");
});

//parameter로 가져옴
app.get('/page/:id', function(request, response) {
    response.send(`<h1>${request.params.id} page</h1>`);
});

//쿼리값으로 가져옴
app.get('/user', function(request, response) {
    //주소에 /user?user=dess 입력해야 확인가능
    const user = request.query.user;
    response.send(`<h1>${user} page</h1>`);
});

//get연습
//(1)주소 /user/:id 를 이용하여 화면에 id값 출력
app.get('/user/:id', function(request, response) {
    const id = request.params.id;
    response.send(`<h1>id값 출력 : ${id}</h1>`);
})
//(2) 주소 /board 에 쿼리를 이용하여 화면에 id값 출력
app.get('/board', function(request,response){
    const id = request.query.id;
    response.send(`<h1>쿼리값 출력 : ${id}</h1>`);
})



//post로 사용 - 주로 값을 전달할때 -> body(bodyparser사용)
app.post("/user", function(request, response) {
    console.log("post에 접근했습니다");
    response.send("post에 접근했습니다")
    //const user = request.body.user;
    //response.send(`<h1>post : ${user}</h1>`)
});

app.put("/user", function(request, response){
    console.log("put으로 접근했습니다");
    response.send("put에 접근했습니다")
});

app.delete("/user", function(request, response){
    console.log("delete으로 접근했습니다");
    response.send("delete에 접근했습니다")
});



app.listen(8080, function() {
    console.log("Server Running at http://127.0.0.1:8080");
});

