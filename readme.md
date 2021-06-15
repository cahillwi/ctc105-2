## Get MongoDB container up and running using the docker-compose.yml file in project
This requires a MongoDB container to be running. 

docker-compose up -d

## Create a .env file
Update .env with a JWT_SECRET

curl --request POST 'localhost:3000/users' --header 'Content-Type: application/json' --data-raw '{
    "password":"password",
    "email":"bill.cahill2@toptal.com"
}'

wVk5c0BLK

curl --request DELETE "localhost:3000/users/$REST_API_EXAMPLE_ID" --header 'Content-Type: application/json'

curl --request GET "localhost:3000/users/wVk5c0BLK" --header 'Content-Type: application/json'