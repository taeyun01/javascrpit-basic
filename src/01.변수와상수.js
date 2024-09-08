// 변수 선언
let name = "안녕";
console.log(name);

// 변수 재할당
name = "안녕2";
console.log(name);

//* 변수명에는 $기호와 _기호를 제외한 다른 기호는 사용할 수 없다.
//* 변수명의 맨 앞에는 숫자를 사용할 수 없다.
//* 변수명에는 예약어를 사용할 수 없다. (예약어는 프로그래밍 내에서 이미 사용되고 있는 의미, 문법들 (var, class, const, let, false 등등...))

let $name = "안녕$";
let _name = "안녕_";
console.log($name);
console.log(_name);

//* 카멜표기법
let userInfo = "유저 정보";
let isTrueOrFalse = true;
console.log(userInfo);
console.log(isTrueOrFalse);

//* 상수 : 변하지 않는 값을 저장하는 저장소
//* const를 사용하고, 재할당 할 수 없다.
//* 왜 사용함?? 변수의 값을 변경되는 것을 방지하기 위함. (ex, 생일, 이름 등등)
const birthday = "2020-02-09";
console.log(birthday);

// 상수를 별칭으로 사용
const EMAIL_ADDRESS = "test@test.com";
console.log(EMAIL_ADDRESS);
