const express = require('express')
const res = require('express/lib/response')
//express는 함수처럼 호출한다
const app = express()
const port = 3000

/*
1.express의 구조
콜백함수를 우리가 알고있는 형태로 쉽게 바꿈 
app.get('/', function(req,res){
    return res.send('hello World!')
});

(1) get구조
app.get(path, callback [, callback ...])
get method : route, routing역할
*/
app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/page/:pageID/:chapterID', (request, response) => {
    response.send(request.params.pageID)
  })

app.get('/create',(request,response)=>{
    response.send('html')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

/*
2. middle wea
(1)남이만든 미들웨어 ; Third-party middlewear
const bodyParser = require('body-parser'); -> API에서 요청받은 body 값을 파싱하는 역할
const comporession = require('compression'); -> 캐시파일 압축된 방식으로 보내기
(2)내가 만든 미들웨어
미들웨어 기본구조 :  app.use('path',(req객체,res객체,next라는 값을가진 함수)=>{})
app.use('/user/:id', (req, res, next) => {
    console.log('Request Type:', req.method)
    next()
})

app.use(function(request,response,next){
    //함수내용 ~~ 아래 fs~이부분은 생코에서 구현하려고 하는 코드임
    fs.readdir('./data', function(error,filelist){
    request.list=filelist; -> 
    next();
    });
});5
--> 하다보니 쓸데없이 가져오게 되서 좀 비효율적임 그래서 get방식으로 가져옴
app.get('*',function(...){...})

*/

/*
3. 정적인 파일 서비스
express.static(root, [options])
app.use(express.static('디렉토리이름'))

*/ 

/*
4.에러처리 : express 404 - 페이지가 없다면 에러를 페이지를 전달
app.use((req, res, next) => {
    res.status(404).send("Sorry can't find that!")
})

*/

/*
5. 라우터

*/