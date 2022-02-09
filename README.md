# nest.js 연습용 프로젝트입니다.

## ExceptionFilter 를 활용한 예외 처리
![http-exception.filter.ts](https://user-images.githubusercontent.com/46738141/149394900-3f80dd03-4b12-40cb-bd68-7a56fb0d5c8b.png)

## pipe를 이용한 요청 데이터 유효성 검사 및 변환 수행
![image](https://user-images.githubusercontent.com/46738141/152974309-0f74d881-dbe4-4abb-b5d4-7428f9882b06.png)
![image](https://user-images.githubusercontent.com/46738141/152974532-6f91cc01-3fe2-457a-aee9-26a391ab00ff.png)


## interceptors를 이용한 success.interceptor 구현
![image](https://user-images.githubusercontent.com/46738141/149394499-ffe348ae-101d-4e3d-a2df-7da466f71eab.png)


## Class Validator를 활용한 dto validation
![image](https://user-images.githubusercontent.com/46738141/149458101-6144485a-dca8-4578-8922-9968531645f5.png)

## schema class를 활용하여 재사용성 확보 및 PickType을 이용한 원하는 정보만을 extends 하도록 구현
![image](https://user-images.githubusercontent.com/46738141/149515502-883b42f9-f781-43b3-9034-99d4a6d7150f.png)

## Repository pattern을 활용

![image](https://user-images.githubusercontent.com/46738141/149608414-56b73743-b6d8-4b8a-9531-8decd300ccb5.png)


![image](https://user-images.githubusercontent.com/46738141/149536103-4dcd832c-93b6-4388-a558-4cd875248df5.png)

<h5>비즈니스 로직은 프로그램의 핵심이 되는 요소이며, 비즈니스 로직을 잘 짜야 원하는 결과를 올바르게 도출할 수 있다. 이때 비즈니스 로직은 보통 데이터베이스나 웹서비스 등의 데이터 저장소에 접근하게 되는데 이 과정에서 여러 문제가 발생할 수 있다. 주로 중복되는 코드, 오류를 발생할 가능성이 있는 코드, 오타, 비즈니스 로직 테스트의 어려움 등이 있다.</h5>

![image](https://user-images.githubusercontent.com/46738141/149536434-2f951a49-3e68-44e2-a9e4-2b33319b88be.png)

<h5>repository pattern 사용 이유
(1) 데이터가 있는 여러 저장소(Local Data Source, Remote Data Source)를 추상화하여 중앙 집중 처리 방식을 구현할 수 있다.

(2) 데이터를 사용하는 Domain에서는 비즈니스 로직에만 집중할 수 있다.
예를 들어, ViewModel에서는 데이터가 로컬 DB에서 오는지, 서버에서 API 응답을 통해 오는 것인지 출처를 몰라도 된다. Repository를 참조하여 Repository가 제공해주는 데이터를 이용하기만 하면 된다.

(3) Repository가 추상화되어 있으므로 항상 같은 Interface로 데이터를 요청할 수 있다.
ViewModel이 여러 Repository를 공유하더라도 일관된 Interface를 통해 데이터의 일관성 또한 유지할 수 있다.

장점
(1) 데이터 로직과 비즈니스 로직을 분리할 수 있다

(2) Domain에서는 일관된 인터페이스를 통해 데이터를 요청할 수 있다.

(3) 데이터 저장소의 데이터를 캡슐화할 수 있다. 객체지향적인 프로그래밍에 더 적합하다.

(4) 단위 테스트를 통한 검증이 가능하다.

(5) 객체 간의 결합도가 감소한다.

(6) 어플리케이션의 전체적인 디자인이 바뀌더라도 적용할 수 있는 유연한 아키텍쳐이다.</h5>

## Module forward reference를 활용한 모듈간 순환 종속성 해결
![image](https://user-images.githubusercontent.com/46738141/149620910-3d6249fc-9327-4046-873e-ae0dff47c899.png)
![image](https://user-images.githubusercontent.com/46738141/149620917-036f41d5-aee8-4a33-9605-72715d97b090.png)

## Swagger 작성 및 express-basic-auth로 간단한 보안 적용
![image](https://user-images.githubusercontent.com/46738141/153183736-8f20b5d4-ebb3-4e54-9d58-5b6ab904f70a.png)
![image](https://user-images.githubusercontent.com/46738141/153184349-39af02bc-5ad7-421e-8a5e-487be44d3ae8.png)
![image](https://user-images.githubusercontent.com/46738141/153184484-0b847fbc-5a03-4c58-9391-37f04f1eb8dd.png)
<br>
간단한 보안 적용
![image](https://user-images.githubusercontent.com/46738141/149714775-4c524943-bd35-49e4-bb19-ae199474fe47.png)
![image](https://user-images.githubusercontent.com/46738141/149715382-e0d2406a-bc3c-487e-94bb-3d410007d6fe.png)

## 스키마에 모델이 등록되어 있지 않다는 에러 이슈
![image](https://user-images.githubusercontent.com/46738141/149809071-e0054e70-299a-486f-9f9d-3433b786a08b.png)
<h5>populate 하는 과정에서</h5>

![image](https://user-images.githubusercontent.com/46738141/149808897-7543556b-89b0-4591-93b0-2e2785ac7a78.png)

<h5>이런식으로 계속 나오며 막혀버리는 오류가 발생하였다.</h5>

<h5>1시간 넘게 구글링을 하던 끝에 mongoose와 @nestjs/mongoose의 버젼을 낮추어서 해결하였다.</h5>

![image](https://user-images.githubusercontent.com/46738141/149809593-eeb4f9a3-3c05-4666-af96-e7089c2bbe89.png)

<h5>솔직히 아직까지는 모듈을 파헤쳐봐도 뭐가 뭔지 모르겠어서 원인파악이 힘들었다.</h5>


## nest-multer-extended를 활용해 이미지 S3에 저장
![image](https://user-images.githubusercontent.com/46738141/149960128-cab6cb7b-3cee-428f-b45a-a394e7f2cca7.png)

## The bucket does not allow ACLs 에러 발생

<h5> S3 bucket 스토리지에 이미지를 업로드 하는 것을 구현하던 중에
The bucket does not allow ACLs 라는 오류가 발생하였다.</h5>

![image](https://user-images.githubusercontent.com/46738141/149960750-70d0be87-c012-41da-ab50-b391bfbbe143.png)


<h5> ACL이란
Access List => 접근하는 것을 허용 또는 거부하는 접근제어 리스트 ACL을 통해 필터링 이라는 기능을 수행할 수 있는데 특정 주소를 가진 호스트의 접근을 막거나 특정 서비스를 차단하는 등의 여러 목적으로 사용될 수 있다.
쉽게 설명해서 파티 초대장 리스트 같은 것이라 생각할 수 있다.
예를 들어 파티를 할때 초대장을 지인들에게 나누어 주는데 초대장을 받은 사람은 파티에 들어올 수 있고, 받지 못한 사람은 들어올 수 없도록 하는 것이다. 초대 받은사람인지 아닌지를 확인하기 위해 만들어진 초청자 목록이 있는데 이 목록이 바로 ACL이라고 할 수 있다.
출처 : https://net-gate.tistory.com/18
 </h5>

![image](https://user-images.githubusercontent.com/46738141/149960595-efcbe152-3373-4f56-b0cc-6c5581f94137.png)


<h5> S3의 권한 탭에서 밑으로 스크롤 하여</h5>

![image](https://user-images.githubusercontent.com/46738141/149960573-b8e0ad12-2909-4f26-ba3e-968e2644ebd3.png)

<h5>객체 소유권을 찾은 후에 편집에 들어가</h5>

![image](https://user-images.githubusercontent.com/46738141/149960559-eba6b703-ca8a-448a-a6f6-3c29f902fa8c.png)

<h5>ACL 활성화됨을 체크 후에 밑에 !부분의 ACL이 복원된다는 것을 확인합니다. 까지 체크 한 후에 변경 사항 저장을 눌러주면 해결된다.</h5>

![image](https://user-images.githubusercontent.com/46738141/149960538-628dd07b-902b-4f63-b32f-f6c8315fc7f9.png)


<h5>콘솔로그에 이미지 업로드가 잘 되는 것을 확인하였고</h5>

![image](https://user-images.githubusercontent.com/46738141/149960506-cdfca3b4-2469-4a75-83dd-d1852eaeeb84.png)

<h5>이미지 또한 확인하였다.</h5>

## gitignore에 .env가 없다는 것을 발견
nest.js에서 기본적으로 gitignore에 .env가 포함되어 있을줄 알았는데 안되어있어서 깜작 놀랬다...
메일로 관련한 내용이 날아와서 급하게 s3 access키를 비활성화하고 새로 받았다. 몽고디비 아틀라스도 전부 바꿨다... 정말 간담이 서늘했다.
블로그 정리 : https://velog.io/@shinsw627/.env%EC%9D%98-%EB%85%B8%EC%B6%9C-%EC%82%AC%EA%B1%B4
