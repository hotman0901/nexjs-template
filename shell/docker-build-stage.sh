# 將之前的 docker-compose shut down
docker-compose down

# 刪掉
# docker image rm -f nextjs-image

# 刪除沒用到的 image
docker rmi -f $(docker images -f "dangling=true" -q) 

# 重新build
docker-compose -f docker-compose-stage.yml up --build

echo "wait 10s with docker start"

sleep 10s

echo "wait 10s with docker end"

