FROM node:14.16.0

RUN apt-get update
RUN apt-get install -y vim

# 慣習的にNODEの実行環境を表す変数名として利用されるらしい
ENV NODE_ENV = 'development'

WORKDIR /src