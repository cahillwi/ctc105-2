## Get MongoDB container up and running using the docker-compose.yml file in project
This requires a MongoDB container to be running. 

docker-compose up -d

## Create a .env file
Update .env with a JWT_SECRET

curl --request POST 'localhost:3000/users' --header 'Content-Type: application/json' --data-raw '{
    "password":"password",
    "email":"bill.cahill2@toptal.com"
}'


## Questions
- Why is dotenv not being called ahead of authController instantiation?
- How does next() work? 
    - I don't see the callback being passed in, or I see a bunch of callbacks being passed in.
- What is locals in res.locals.jwt.permissionFlags I have seen it used in a few places.
    - I believe res.locals is a cache, can that be chaned out with Redis?


wVk5c0BLK

curl --request DELETE "localhost:3000/users/$REST_API_EXAMPLE_ID" --header 'Content-Type: application/json'

curl --request GET "localhost:3000/users/wVk5c0BLK" --header 'Content-Type: application/json'

curl --request POST 'localhost:3000/auth' \
--header 'Content-Type: application/json' \
--data-raw '{
    "password":"password",
    "email":"bill.cahill@toptal.com"
}'

{
	"email": "bill.cahill3@toptal.com",
	"password": "password",
	"firstName": "bill",
	"lastName": "Cahill",
	"permissionFlags": 8
}

{"accessToken":"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiJrMC1ieEdEY24iLCJlbWFpbCI6Im1hcmNvcy5oZW5yaXF1ZUB0b3B0YWwuY29tIiwicGVybWlzc2lvbkZsYWdzIjoxLCJyZWZyZXNoS2V5Ijp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjpbMjEsMTAzLDIwNiwyMzIsMjUyLDIzNSwxNTksMjI2LDc0LDc5LDIxLDIxLDk5LDExNCwxNDksNTVdfSwiaWF0IjoxNjIzODQ0OTEzLCJleHAiOjE2MjM4ODA5MTN9.NXdINECZudSz3hRkCRjf5mKLo9R4vm-5I7_qKCWiDYA","refreshToken":"eqOkeswYfBl0aTGdftpc78bUnHi/qDTydpmpfxoew3nsIPzSRuJjXG9WoPpnGXGvON7cMn9AYvNJMlKBHyXVKA=="}
REST_API_EXAMPLE_ACCESS="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiJrMC1ieEdEY24iLCJlbWFpbCI6Im1hcmNvcy5oZW5yaXF1ZUB0b3B0YWwuY29tIiwicGVybWlzc2lvbkZsYWdzIjoxLCJyZWZyZXNoS2V5Ijp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjpbMjEsMTAzLDIwNiwyMzIsMjUyLDIzNSwxNTksMjI2LDc0LDc5LDIxLDIxLDk5LDExNCwxNDksNTVdfSwiaWF0IjoxNjIzODQ0OTEzLCJleHAiOjE2MjM4ODA5MTN9.NXdINECZudSz3hRkCRjf5mKLo9R4vm-5I7_qKCWiDYA"
REST_API_EXAMPLE_REFRESH="eqOkeswYfBl0aTGdftpc78bUnHi/qDTydpmpfxoew3nsIPzSRuJjXG9WoPpnGXGvON7cMn9AYvNJMlKBHyXVKA=="


## Testing blog creation

user ID "nPVezkhbI"

Then post to auth with email and password to get tokens

{
    "accessToken": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiJuUFZlemtoYkkiLCJlbWFpbCI6ImJpbGwuY2FoaWxsQHRvcHRhbC5jb20iLCJwZXJtaXNzaW9uRmxhZ3MiOjEsInJlZnJlc2hLZXkiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOls5OCwxOSw0MiwyMjUsMjIzLDIxLDEyNCwyMjIsMzgsMTQ5LDE3MCwxNDAsODQsMjE5LDQ5LDUyXX0sImlhdCI6MTYyMzkzODAxOCwiZXhwIjoxNjIzOTc0MDE4fQ.DZTEm6fnSYY64kCTPIdM9YmL3Tp0yYOzjssOgjRJwa0",
    "refreshToken": "Gyvzl3O2wIWGLaHoXeNTZR/iuxcUZANOH8WIr4M9Wrib8bV0RwGT5ITEof0+Il3EpWrpNCdhrrvOlRo/clORgA=="
}

Then update permission flag to 2 with token

get new token 

{
    "accessToken": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiJuUFZlemtoYkkiLCJlbWFpbCI6ImJpbGwuY2FoaWxsQHRvcHRhbC5jb20iLCJwZXJtaXNzaW9uRmxhZ3MiOjIsInJlZnJlc2hLZXkiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOlsxOTgsOTQsMTM4LDIwLDcyLDIxNyw5OCw4MCwxNzEsNjQsMTc1LDE5NCwzMSw3LDIzMSw1M119LCJpYXQiOjE2MjM5Mzg2NTcsImV4cCI6MTYyMzk3NDY1N30.R72BZylhc3xoxHnZFfut_W9v4OzFVO-n6esrtY2Xm94",
    "refreshToken": "vo9t66JYcKn4+JhZW9YDvFKlKxHSkSVOYubJbgIE64cSw8p5tTuT334gTP6mbbkHMU4UrjirzqpndvyQ1LcAtQ=="
}