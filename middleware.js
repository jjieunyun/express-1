//미들웨어 확인을 위한 서버

const express = require("express");
//미들웨어 모듈 가져오기(morgan, cookie-parser,body-parser)
const morgan = require('morgan');
const cookieParser = require('cookie-parser')
const bodyParser = require('body-parser')

const app = express();

//app.use를 통해 morgan 미들웨어 사용
app.use(morgan('combined'))
//app.use를 통해 cookie-parser 미들웨어 사용
app.use(cookieParser())
//app.use를 통해 body-parser 미들웨어 사용
//(1) MIME type중 application/x-www-form-urlencoded타입 파싱(가져옴)
app.use(bodyParser.urlencoded({ extended: false }))
//(2) apllication/json 타입 파싱
app.use(bodyParser.json());


//서버통신내용
app.get('/',(request, response) => {
    console.log('cookies : ', request.cookies);
    //form에서 action을 작성하지 않으면 root주소인 path : /로 가고 
    //action을 넣으면 지정된 주소로 이동한다
    const template = 
    `
    <form method="post" action="/post">
            <p>이름을 작성해주세요</p>
        <input type="text" name="name">
        <input type="submit" vlaue="전송">
    </form>
    `
    response.send(template);
});


/*
쿠키(Cookie)
*/
app.get('/get',(request,response) => {
    //쿠키전달(path : /get)
    response.cookie('cookiename','쿠키값',
        {httpOnly : true, maxAge : 36000});
    response.send('쿠키를보냈습니다.')
})


/*
nickname을 전달받는 '/name' url을 가진 get(nickname을 입력받음)과 post(bodypaser를 이용하여 출력)작성
*/
app.get('/name',(request,response)=> {
    const template = 
    `
    <form method="post" action="/name">
        <p>닉네임을 작성해주세요</p>
        <input type="text" name="nickname">
        <input type="submit" value="전송">
    </form>
    `
    response.send(template);
})

app.post('/name',(request, response)=> {
    const nickname = request.body.nickname;
    response.send(`<h1>전달받은 nickname : ${nickname}</h1>`);
})



//postman을 통해서 post메소드 실행확인
app.post('/a',(request, response) => {
    response.send("post");
  });




app.listen(8080, () => {
  console.log("Server running at http://127.0.0.1:8080");
});