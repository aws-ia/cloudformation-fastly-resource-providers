#!/bin/bash
#
# This script runs in the buildspec before testing
#
# It relies on environment variables to be set to replace placeholder
# values in `example-inputs`.
#
#   FASTLY_SERVICE_ID
#   FASTLY_VERSION_ID
#   Example:
#
#    GITHUB_ORG=ericzbeard-aws-cep-testing GITHUB_REPO=test-stable-1 AWS_PROFILE=ezbeard-cep GITHUB_SHA=6907b5086cfdc46381af05d94c2e41ac6812a962 ./setup.sh

mkdir -p inputs

RANDOM_DICTIONARY=$(uuidgen | sed 's/[-]//g')

cat example-inputs/inputs_1_create.json | sed "s/<RANDOM_DICTIONARY>/${RANDOM_DICTIONARY}/g" | sed "s/<FASTLY_SERVICE_ID>/${FASTLY_SERVICE_ID}/g" | sed "s/<FASTLY_VERSION_ID>/${FASTLY_VERSION_ID}/g" > inputs/inputs_1_create.json
cat example-inputs/inputs_1_update.json | sed "s/<RANDOM_DICTIONARY>/${RANDOM_DICTIONARY}/g" | sed "s/<FASTLY_SERVICE_ID>/${FASTLY_SERVICE_ID}/g" | sed "s/<FASTLY_VERSION_ID>/${FASTLY_VERSION_ID}/g" > inputs/inputs_1_update.json
cp example-inputs/inputs_1_invalid.json inputs/
cat test/integ.yml | sed "s/<RANDOM_DICTIONARY>/${RANDOM_DICTIONARY}/g" | sed "s/<FASTLY_SERVICE_ID>/${FASTLY_SERVICE_ID}/g" | sed "s/<FASTLY_VERSION_ID>/${FASTLY_VERSION_ID}/g" > test/integ-unique.yml

python3 ../get_type_configuration.py
