# nest.js 연습용 프로젝트입니다.

## todo 기술들 다시 정리하고 왜 이것들을 사용했는지 각각 적을 것. swagger 스샷 배포 후 수정할 것

## HttpExceptionFilter 를 활용한 error 처리
![http-exception.filter.ts](https://user-images.githubusercontent.com/46738141/149394900-3f80dd03-4b12-40cb-bd68-7a56fb0d5c8b.png)

## pipe를 이용한 요청 데이터 유효성 검사 및 변환 수행

## request의 lifecycle
![image](https://user-images.githubusercontent.com/46738141/149090415-b7ddcef3-1175-4de3-ad0a-c3f94cc6a863.png)

## interceptors를 이용한 success.interceptor 구현
![image](https://user-images.githubusercontent.com/46738141/149394499-ffe348ae-101d-4e3d-a2df-7da466f71eab.png)


## Class Validator
![image](https://user-images.githubusercontent.com/46738141/149461726-36676a3b-4c93-49b6-b4aa-a7c12f35e7c3.png)

## Class Validator를 활용한 dto validation
![image](https://user-images.githubusercontent.com/46738141/149458101-6144485a-dca8-4578-8922-9968531645f5.png)
  <h5>  class를 사용하므로 재사용성에 이점이 있다.</h5>

## dto aop
![Nest.js design pattern](https://user-images.githubusercontent.com/46738141/149457626-2605d845-37a4-4dd8-8ef2-cbee434138bc.png)

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
![image](https://user-images.githubusercontent.com/46738141/149714775-4c524943-bd35-49e4-bb19-ae199474fe47.png)
![image](https://user-images.githubusercontent.com/46738141/149715382-e0d2406a-bc3c-487e-94bb-3d410007d6fe.png)
<h5>보안로그인화면 배포 후 다시 찍을 것</h5>

## 스키마에 모델이 등록되어 있지 않다는 에러 이슈
![image](https://user-images.githubusercontent.com/46738141/149809071-e0054e70-299a-486f-9f9d-3433b786a08b.png)
<h5>populate 하는 과정에서</h5>
![image](https://user-images.githubusercontent.com/46738141/149808897-7543556b-89b0-4591-93b0-2e2785ac7a78.png)
<h5>이런식으로 계속 나오며 막혀버리는 오류가 발생하였다.</h5>

<h5>1시간 넘게 구글링을 하던 끝에 mongoose와 @nestjs/mongoose의 버젼을 낮추어서 해결하였다.</h5>
![image](https://user-images.githubusercontent.com/46738141/149809593-eeb4f9a3-3c05-4666-af96-e7089c2bbe89.png)

<h5>솔직히 아직까지는 모듈을 파헤쳐봐도 뭐가 뭔지 모르겠어서 원인파악이 힘들었다. 나중에 성장하게 되면 보이게 될지 궁금하다...</h5>
