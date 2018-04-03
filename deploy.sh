docker stop nginx-xhj-mobile
docker rm nginx-xhj-mobile
docker build -t nginx/xhj-mobile .
docker run --name nginx-xhj-mobile \
-d -p 8888:80 \
-v "$PWD"/dist:/usr/share/nginx/html \
nginx/xhj-mobile