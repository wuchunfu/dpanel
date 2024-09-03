FROM alpine

ARG APP_VERSION
ARG TARGETARCH

ENV APP_ENV=production
ENV APP_NAME=dpanel
ENV APP_VERSION=$APP_VERSION
ENV APP_SERVER_PORT=8080
ENV DOCKER_HOST=unix:///var/run/docker.sock
ENV STORAGE_LOCAL_PATH=/dpanel
ENV DB_DATABASE=${STORAGE_LOCAL_PATH}/dpanel.db

ENV INSTALL_USERNAME=""
ENV INSTALL_PASSWORD=""

RUN sed -i 's/dl-cdn.alpinelinux.org/mirrors.tuna.tsinghua.edu.cn/g' /etc/apk/repositories && \
  apk add --no-cache --update nginx musl inotify-tools docker-compose curl openssl && \
  mkdir -p /tmp/nginx/body /var/lib/nginx/cache/public /var/lib/nginx/cache/private && \
  curl https://get.acme.sh | sh

COPY ./docker/nginx/nginx.conf /etc/nginx/nginx.conf
COPY ./docker/nginx/include /etc/nginx/conf.d/include

COPY ./runtime/dpanel-musl-${TARGETARCH} /app/server/dpanel
COPY ./runtime/config.yaml /app/server/config.yaml

COPY ./docker/entrypoint.sh /docker/entrypoint.sh

WORKDIR /app
VOLUME [ "/dpanel" ]

EXPOSE 443
EXPOSE 80
EXPOSE 8080

ENTRYPOINT [ "sh", "/docker/entrypoint.sh" ]