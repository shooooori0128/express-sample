FROM mysql:8.0.23

RUN apt-get update
RUN apt-get install -y vim

ADD ./my.cnf /etc/mysql/conf.d/my.cnf

CMD ["mysqld"]