# Chapter 1 Serialization

> 이 문서는 AI에 의해 생성되었습니다.

## 직렬화의 목적

1. **데이터 저장**: 객체를 파일, 데이터베이스 또는 메모리에 저장할 수 있는 형식으로 변환
2. **데이터 전송**: 네트워크를 통해 객체를 전송할 수 있는 형식으로 변환
3. **상태 복원**: 직렬화된 데이터를 다시 원래의 객체나 데이터 구조로 변환하는 역직렬화(Deserialization) 과정

## 직렬화된 형식

* **JSON**: 사람이 읽을 수 있는 텍스트 형식
* **XML**: 또 다른 텍스트 기반 형식
* **Binary**: 더 효율적인 전송을 위해 이진 형식으로 변환된 데이터 (예: 이미지, 비디오)
* **Protocol Buffers**: 구글에서 제공하는 효율적인 바이너리 직렬화 형식

## 직렬화 예시

### JSON 직렬화

객체 { name: "Alice", age: 25 } → {"name":"Alice","age":25} (JSON 형식으로 변환)

이진 직렬화:
객체를 이진 형식으로 변환하여 더 효율적으로 저장하거나 전송할 수 있습니다.

직렬화 과정

1.객체의 속성과 상태를 데이터 포맷으로 변환.
2.변환된 데이터는 텍스트 형식이나 이진 형식이 될 수 있으며, 이를 통해 다른 시스템으로 전송하거나 저장할 수 있습니다.

결론

직렬화는 객체를 저장하거나 네트워크를 통해 전송할 수 있도록 변환하는 과정이며, 저장 형식으로는 주로 JSON, XML, 바이너리 형식 등이 사용됩니다.

[Object.freeze()](https://chatgpt.com/share/6798c5e4-8950-8000-b1b5-1ecc491f5e38)
[ClassSerializerInterceptor 사용하지 않고 목적 달성하기](https://velog.io/@intellik/Serialize%EB%8A%94-%EB%A8%B9%EB%8A%94-%EA%B2%8C-%EC%95%84%EB%8B%99%EB%8B%88%EB%8B%A4-%EC%A7%81%EB%A0%AC%ED%99%94-%EA%B0%9C%EB%85%90%EA%B3%BC-NestJS%EC%97%90%EC%84%9C%EC%9D%98-%EC%A7%81%EB%A0%AC%ED%99%94)
[NestJS에서 응답/요청 객체 직렬화 (Serialization) 하기](https://jojoldu.tistory.com/610)
[NestJS - Serialization](https://docs.nestjs.com/techniques/serialization)
