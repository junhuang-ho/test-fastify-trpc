curl -i -X GET http://localhost:2022/trpc/posts.list
curl -i -X POST -H 'Content-Type: application/json' http://localhost:2022/trpc/posts.reset
curl -i -X POST -H 'Content-Type: application/json' -d '{title:FIRST}' http://localhost:2022/trpc/posts.create

curl -i -X POST -H 'Content-Type: application/json' http://localhost:2022/trpc/posts.create2