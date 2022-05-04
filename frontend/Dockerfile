#base image
#docker hub에서 image를 pull (node version 17에 issue)
FROM node:16.13.0-alpine

# set working directory
#작업을 수행할 디렉토리를 지정
WORKDIR /app

#현재 경로에 있는 것을 app으로 복사
COPY . /app

# 이미지가 빌드 될때 실행
RUN npm install

#https://iagreebut.tistory.com/153?category=777928
#https://leonkong.cc/posts/dockerizing-react-app.html
#https://github.com/litsynp/docker-example
#https://gitlab.com/yalco/practice-docker
