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


wVk5c0BLK

curl --request DELETE "localhost:3000/users/$REST_API_EXAMPLE_ID" --header 'Content-Type: application/json'

curl --request GET "localhost:3000/users/wVk5c0BLK" --header 'Content-Type: application/json'

curl --request POST 'localhost:3000/auth' \
--header 'Content-Type: application/json' \
--data-raw '{
    "password":"password",
    "email":"bill.cahill@toptal.com"
}'


{"accessToken":"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiJrMC1ieEdEY24iLCJlbWFpbCI6Im1hcmNvcy5oZW5yaXF1ZUB0b3B0YWwuY29tIiwicGVybWlzc2lvbkZsYWdzIjoxLCJyZWZyZXNoS2V5Ijp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjpbMjEsMTAzLDIwNiwyMzIsMjUyLDIzNSwxNTksMjI2LDc0LDc5LDIxLDIxLDk5LDExNCwxNDksNTVdfSwiaWF0IjoxNjIzODQ0OTEzLCJleHAiOjE2MjM4ODA5MTN9.NXdINECZudSz3hRkCRjf5mKLo9R4vm-5I7_qKCWiDYA","refreshToken":"eqOkeswYfBl0aTGdftpc78bUnHi/qDTydpmpfxoew3nsIPzSRuJjXG9WoPpnGXGvON7cMn9AYvNJMlKBHyXVKA=="}
REST_API_EXAMPLE_ACCESS="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiJrMC1ieEdEY24iLCJlbWFpbCI6Im1hcmNvcy5oZW5yaXF1ZUB0b3B0YWwuY29tIiwicGVybWlzc2lvbkZsYWdzIjoxLCJyZWZyZXNoS2V5Ijp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjpbMjEsMTAzLDIwNiwyMzIsMjUyLDIzNSwxNTksMjI2LDc0LDc5LDIxLDIxLDk5LDExNCwxNDksNTVdfSwiaWF0IjoxNjIzODQ0OTEzLCJleHAiOjE2MjM4ODA5MTN9.NXdINECZudSz3hRkCRjf5mKLo9R4vm-5I7_qKCWiDYA"
REST_API_EXAMPLE_REFRESH="eqOkeswYfBl0aTGdftpc78bUnHi/qDTydpmpfxoew3nsIPzSRuJjXG9WoPpnGXGvON7cMn9AYvNJMlKBHyXVKA=="