# cloudformation-fastly

## Set up local type configuration

When running contract or SAM tests locally, the resources expect the Fastly token to be available via the type configuration.
Executing this in the console from the project root will add it. Replace the values inside the __square__ brackets with the actual values for testing
```bash
cat << EOF >> ~/.cfn-cli/typeConfiguration.json
{
  "FastlyAccess": {
    "Token": "[fastlyAccessToken]"
  }
}
EOF
```

## Set up git filter

This project uses a filter set up in the [.gitattributes](.gitattributes) file to replace private values for testing within the different `overrides.json` on each resource.

The filter has to be added manually inside the `.git/config` file once the repository has been cloned.

Executing this in the console from the project root will add it. Replace the values inside the __square__ brackets with the actual values for testing

```bash
cat << EOF >> .git/config
[filter "fastly"]
clean = sed \
        -e 's:[existingFastlyServiceId]:<FASTLY_SERVICE_ID>:g' \
        -e 's:[existingFastlyServiceVersionId]:<FASTLY_VERSION_ID>:g'
smudge = sed \
        -e 's:<FASTLY_SERVICE_ID>:[existingFastlyServiceId]:g' \
        -e 's:<FASTLY_VERSION_ID>:[existingFastlyServiceVersionId]:g'
EOF
```