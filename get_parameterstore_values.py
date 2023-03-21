import boto3
import os
import sys

def updateFile(fileName,envKey,key):
    # Read in the file
    with open(fileName, 'r') as file :
        filedata = file.read()

    # Replace the target string
    filedata = filedata.replace(key, os.environ[envKey])

    # Write the file out again
    with open(fileName, 'w') as file:
        file.write(filedata)

def getParameterStoreValue(parameterName):
    ssm = boto3.client('ssm')
    parameter = ssm.get_parameter(Name=parameterName, WithDecryption=True)
    os.environ[parameterName] = parameter['Parameter']['Value']
    print(os.environ[parameterName])

print(sys.argv[2])
getParameterStoreValue(sys.argv[1])

updateFile('inputs/inputs_1_update.json', sys.argv[1], sys.argv[2])
updateFile('inputs/inputs_1_create.json', sys.argv[1], sys.argv[2])
updateFile('test/integ-unique.yml', sys.argv[1], sys.argv[2])