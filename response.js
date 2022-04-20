//서버를 만들때는 아래와 같이 사용하면된다
const express = require("express");

const app = express();

//'*' -> 모든내용을 실행하라는뜻
//'/test/*' -> test뒤에 아무말이나 들어가면 실행
app.get('/test/*',(request, response) => {
    //status : 응답 코드를 지정해줄 수 있다. (200 : ok, 404 : 페이지x)
  response.status(404);
  response.type('text/plain');
  response.set('methodA', 'abcd');
  response.send('임의로 바꾼 설정입니다');
});


app.get('/', (request,response)=>{
    //npm install -g nodemon으로 노드몬 설치함
    //현재폴더에 바로 있다면 nodemon실행할 js파일 
    response.send('nodemon으로 실행중입니다');
});

app.listen(8080, () => {
  console.log("Server running at http://127.0.0.1:8080");
});
