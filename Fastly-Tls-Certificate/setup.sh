#!/bin/bash
#
# This script runs in the buildspec before testing
#
# It relies on environment variables to be set to replace placeholder
# values in `example-inputs`.
#
mkdir -p inputs

cat example-inputs/inputs_1_create.json  > inputs/inputs_1_create.json
cat example-inputs/inputs_1_update.json  > inputs/inputs_1_update.json
cp example-inputs/inputs_1_invalid.json inputs/
cat test/integ.yml > test/integ-unique.yml
python3 ../get_parameterstore_values.py cep-fastly-tls-certificate FASTLY_TLS_CERTIFICATE

echo "Printing inputs/inputs_1_create.json"
cat inputs/inputs_1_create.json

python3 ../get_type_configuration.py
