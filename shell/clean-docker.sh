#!/bin/bash
# 執行完docker build 後清除沒用到的
echo "Cleaning up after docker build prod..."

STOPPED_CONTAINERS=$(docker ps -aq --filter name=nextjs-container)
if [ -n "${STOPPED_CONTAINERS}" ]; then
    echo "Removing stopped containers..."
    docker rm ${STOPPED_CONTAINERS}
fi

DANGLING_IMAGES=$(docker images -aqf dangling=true)
if [ -n "${DANGLING_IMAGES}" ]; then
    echo "Removing Dangling Images..."
    docker rmi ${DANGLING_IMAGES}
fi

DANGLING_VOLUMES=$(docker volume ls -qf dangling=true)
if [ -n "${DANGLING_VOLUMES}" ]; then
    echo "Removing Dangling Volumes..."
    docker volume rm ${DANGLING_VOLUMES}
fi

echo "Done"
