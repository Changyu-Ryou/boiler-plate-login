# boiler-plate-login
> [Node.js and React] 노드,리액트, 몽고DB를 이용한 '회원가입/로그인' 보일러 플레이트 만들기
  <br/><br/>

## 📖 Introduction 
node.js, React와 MongoDB를 이용한 '회원가입/로그인' 보일러 플레이트를 제작합니다.<br/><br/>

## 📝 list
제작할 코드와 문서들입니다.<br/>
<br/>

ver 1.0
- [x] [💻] node js와 expres js 설치
- [x] [💻] MongoDB 연결
- [x] [💻] MongoDB Model & Schema 생성
- [x] [💻] github 연결
  
ver 1.1
- [x] [💻] BodyPaser
- [x] [💻] PostMan을 이용한 회원가입 기능 확인

feat: add nodemon dev
- [x] [💻] nodemon을 이용해 코드 변경시 바로 반영

feat: Protection of confidential information about DB access
- [x] [💻] heroku를 이용해서 앱 배포와 git commit시에 DB 정보에 대한 내용을 보호

feat: Password encryption using bcrypt
- [x] [💻] bcrypt를 이용해 비밀번호를 암호화 DB에 저장

feat: add login function
- [x] [💻] bcrypt를 이용한 로그인 기능 구현
- [x] [💻] jsonwebtoken을 이용한 토큰 생성

fix: login bug fix
- [x] [🔨] 로그인 기능 동작 중 오류 발생으로 인한 코드 수정
