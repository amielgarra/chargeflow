# Chargeflow Coding Assignment

## Provisioning AWS Services

This is the sequence of the CloudFormation scripts to be run:

1. Serverless Deployment Bucket
2. Managed Policies
3. API Gateway
4. SQS

First, you should export variable names:

```bash
SET PROJECT_NAME=chargeflow
SET STAGE=dev
```

Moving on to the CloudFormation, to create the Serverless Deployment Bucket, run:

```bash
aws cloudformation create-stack --stack-name %PROJECT_NAME%-%STAGE%-serverless-bucket --template-body file://infrastructure/serverless-deployment-bucket.yaml --parameters ParameterKey=ProjectName,ParameterValue=%PROJECT_NAME% ParameterKey=Stage,ParameterValue=%STAGE%
```

Next would be the Managed Policies:

```bash
aws cloudformation create-stack --stack-name %PROJECT_NAME%-%STAGE%-managed-policy --template-body file://infrastructure/managed-policies.yaml --parameters ParameterKey=ProjectName,ParameterValue=%PROJECT_NAME% ParameterKey=Stage,ParameterValue=%STAGE% --capabilities CAPABILITY_IAM --capabilities CAPABILITY_NAMED_IAM
```

API Gateway"

```bash
aws cloudformation create-stack --stack-name %PROJECT_NAME%-%STAGE%-apigw --template-body file://infrastructure/apigw.yaml --parameters ParameterKey=ProjectName,ParameterValue=%PROJECT_NAME% ParameterKey=Stage,ParameterValue=%STAGE%
```

SQS:

```bash
aws cloudformation create-stack --stack-name %PROJECT_NAME%-%STAGE%-sqs --template-body file://infrastructure/sqs.yaml --parameters ParameterKey=ProjectName,ParameterValue=%PROJECT_NAME% ParameterKey=Stage,ParameterValue=%STAGE%
```

## Test the project offline

Go to the `microservices/product` folder then run:

```bash
npm install
```

To run the application, run:

```bash
sls offline
```
