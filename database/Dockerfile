FROM mysql:5

ENV MYSQL_ROOT_PASSWORD 1234
ENV MYSQL_DATABASE cucarpool
ENV MYSQL_USER test
ENV MYSQL_PASSWORD 1234
ENV TZ Asia/Bangkok

COPY *.sql /docker-entrypoint-initdb.d/