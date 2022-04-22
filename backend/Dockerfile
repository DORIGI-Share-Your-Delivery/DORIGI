#java 11 사용하므로 openjdk:11 image사용 (8 error)
FROM openjdk:11-jdk

#기본 작업 디렉토리 설정
WORKDIR /app

#https://iagreebut.tistory.com/171?category=887117
#jar파일 복사
ADD build/libs/backend-0.0.1-SNAPSHOT.jar /app/app.jar

#컨테이너가 실행될 때 명령어 수행
ENTRYPOINT ["java","-jar","/app/app.jar"]
