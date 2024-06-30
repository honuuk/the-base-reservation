# the-base-reservation
[용산 더베이스 풋살장](https://futsalbase.com/home#) 예약하기

### Prerequisites
- npm
```
npm install
```
- 더베이스 풋살장 회원가입
- 아래 커맨드로 내 계정의 szId(더베이스 사이트에서 계정에 부여하는 id) 확인
```
// 비밀번호에 특수문자 있으면 \로 escape 필요
// ex) password123!@ -> password123\!\@

npm run get-sz-id --id=${아이디} --password=${비밀번호}
```

### Usage
- reserve.js 파일의 DATES 변수에 예약하려는 날짜 지정 후 아래 커맨드 실행
```
npm run reserve --szid=${위에서 확인한 szId}
```
