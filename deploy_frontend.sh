# This script is for automating deployment of frontend
echo "Deploying Frontend..."
npm run build
aws s3 sync build/ s3://superripe-frontend --acl public-read
