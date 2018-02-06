#!/bin/bash

cd `dirname $0`

docker rm -f midwest86cup || true
docker run --name midwest86cup -p 80:80 -v `pwd`:/usr/share/nginx/html:ro -d nginx:alpine

echo "Done: Server listening on http://localhost:80/"

