#!/bin/bash

cd api
PACKAGE_VERSION=$(cat package.json \
  | grep version \
  | head -1 \
  | awk -F: '{ print $2 }' \
  | sed 's/[",]//g' \
  | tr -d '[[:space:]]')

API_IMAGE_NAME=$DOCKER_API_REPO:$PACKAGE_VERSION
API_IMAGE_NAME_LATEST=$DOCKER_API_REPO:latest

docker login

docker build -t $API_IMAGE_NAME -t $API_IMAGE_NAME_LATEST -f Dockerfile.prod .
docker push $API_IMAGE_NAME
docker push $API_IMAGE_NAME_LATEST

cd ../frontend

FRONTEND_IMAGE_NAME=$DOCKER_FRONTEND_REPO:$PACKAGE_VERSION
FRONTEND_IMAGE_NAME_LATEST=$DOCKER_FRONTEND_REPO:latest

docker build -t $FRONTEND_IMAGE_NAME -t $FRONTEND_IMAGE_NAME_LATEST -f Dockerfile.prod .
docker push $FRONTEND_IMAGE_NAME
docker push $FRONTEND_IMAGE_NAME_LATEST
