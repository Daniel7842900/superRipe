# This script is for automating deployment of api
echo "Deploying Backend..."
aws ecr get-login-password --region us-west-2 | docker login --username AWS --password-stdin 951561436580.dkr.ecr.us-west-2.amazonaws.com
docker build -t superripe-api .
docker tag superripe-api:latest 951561436580.dkr.ecr.us-west-2.amazonaws.com/superripe-api:latest
docker push 951561436580.dkr.ecr.us-west-2.amazonaws.com/superripe-api:latest
cd aws_deploy
eb deploy