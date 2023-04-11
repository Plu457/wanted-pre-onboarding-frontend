## 실행 방법

---

<br />

```bash
git clone https://github.com/Plu457/wanted-pre-onboarding-frontend
npm install
npm start
```

<br />

## [배포 링크](https://wanted-pre-onboarding-frontend-navy.vercel.app/)

<br />

## 1. 로그인 / 회원가입

---

- ✅ /signup 경로에 회원가입 기능을 개발
- ✅ /signin 경로에 로그인 기능을 개발

- ✅ 이메일 input에 data-testid="email-input" 속성을 부여
- ✅ 패스워드 input에 data-testid="password-input" 속성을 부여
- ✅ 회원가입 페이지에는 회원가입 button에 data-testid="signup-button" 속성을 부여
- ✅ 로그인 페이지에는 로그인 button에 data-testid="signin-button" 속성을 부여

<br />

### Assignment 1

회원가입과 로그인 페이지에 이메일과 비밀번호의 유효성 검사기능을 구현하기

- ✅ 이메일 조건: @ 포함
- ✅ 비밀번호 조건: 8자 이상
- ✅ 입력된 이메일과 비밀번호가 유효성 검사를 통과하지 못한다면 button에 disabled 속성을 부여

<br />

### Assignment 2

- ✅ 회원가입 페이지에서 버튼 클릭 시 회원가입을 완료하고, 정상적으로 완료되면 /signin 경로로 이동

<br />

### Assignment 3

- ✅ 로그인 페이지에서 버튼 클릭 시 로그인을 완료하고, 정상적으로 완료되면 /todo 경로로 이동

<br />

### Assignment 4

- ✅ 로그인 여부에 따른 리다이렉트 처리를 구현

<br />
<br />

## 2. TODO LIST

---

### Assignment 5

- ✅ /todo경로에 접속하면 투두 리스트의 목록을 볼 수 있도록 구현
- ✅ 목록에서는 TODO의 내용과 완료 여부가 표시되어야함
- ✅ TODO의 완료 여부는 `<input type="checkbox" />`를 통해 표현
- ✅ TODO는 `<li>` tag를 이용해 감싸주세요

<br />

### Assignment 6

리스트 페이지에 새로운 TODO를 입력할 수 있는 input과 추가 button을 만들기

- ✅ TODO 입력 input에는 data-testid="new-todo-input" 속성을 부여
- ✅ TODO 추가 button에는 data-testid="new-todo-add-button" 속성을 부여
- ✅ 추가 button을 클릭하면 입력 input의 내용이 새로운 TODO로 추가
- ✅ TODO를 추가 한 뒤 새로고침을 해도 추가한 TODO가 목록에 보여야함

<br />

### Assignment 7

TODO의 체크박스를 통해 완료 여부를 수정할 수 있어야함

<br />

### Assignment 8

TODO 우측에 수정버튼과 삭제 버튼을 만들어주세요

- ✅ 수정 버튼에는 data-testid="modify-button" 속성을 부여
- ✅ 삭제 버튼에는 data-testid="delete-button" 속성을 부여

### Assignment 9

투두 리스트의 삭제 기능을 구현

### Assignment 10

투두 리스트의 수정 기능을 구현

- ✅ TODO 우측의 수정 버튼을 누르면 수정모드가 활성화
- ✅ 수정모드에서는 TODO의 내용을 변경가능
- ✅ 수정모드에서는 TODO의 내용이 input창 안에 입력된 형태로 변경
- ✅ 수정 input창에는 data-testid="modify-input" 속성을 부여
- ✅ 수정모드에서는 TODO의 우측에 제출버튼과 취소버튼이 표시
- ✅ 제출버튼에는 `data-testid="submit-button"` 속성을 부여
- ✅ 취소버튼에는 `data-testid="cancel-button"` 속성을 부여
- ✅ 제출버튼을 누르면 수정한 내용을 제출해서 내용이 업데이트
- ✅ 취소버튼을 누르면 수정한 내용을 초기화 하고, 수정모드를 비활성화
