# 執行完 docker build 後建立 cdn 用 static 檔案（搬移）
# rm -rf _next
# mkdir -p _next
# mkdir -p _next/static
# docker cp nextjs-container:/usr/app/.next/static/. _next/static


# 將 docker 內部的 public 與 .next copy 出來
# rm -rf cdn
# mkdir -p cdn
# mkdir -p cdn/public
# mkdir -p cdn/_next
# mkdir -p cdn/_next/static
# docker cp nextjs-container:/usr/app/public/static/. cdn/public/static
# docker cp nextjs-container:/usr/app/.next/static/. cdn/_next/static

CDNPATH="/opt/lottery-static"
rm -rf $CDNPATH/cdn
mkdir -p $CDNPATH/cdn
mkdir -p $CDNPATH/cdn/public
mkdir -p $CDNPATH/cdn/_next
mkdir -p $CDNPATH/cdn/_next/static
docker cp nextjs-container:/usr/app/public/static/. $CDNPATH/cdn/public/static
docker cp nextjs-container:/usr/app/.next/static/. $CDNPATH/cdn/_next/static

ls -l $CDNPATH/cdn
