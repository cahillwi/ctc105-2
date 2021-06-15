This requires a mysql container to be running. 

docker-compose up -d

curl --request POST 'localhost:3000/users' --header 'Content-Type: application/json' --data-raw '{
    "password":"password",
    "email":"bill.cahill2@toptal.com"
}'

wVk5c0BLK

curl --request DELETE "localhost:3000/users/$REST_API_EXAMPLE_ID" --header 'Content-Type: application/json'

curl --request GET "localhost:3000/users/wVk5c0BLK" --header 'Content-Type: application/json'