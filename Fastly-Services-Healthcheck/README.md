# Fastly::Services::Healthcheck

This resource type manages a [Fastly Service Health Check][3]

 [Documentation][4]

## Prerequisites
* [AWS Account][14]
* [AWS CLI][15]
* [Fastly account][16] and [API Token][17]
## AWS Management Console

To get started:

1. Sign in to the [AWS Management Console][11] with your account and navigate to CloudFormation.

2. Select "Public extensions" from the left hand pane and filter Publisher by "Third Party".

3. Use the search bar to filter by the "Fastly" prefix.

  Note: All official  Fastly resources begin with `Fastly::` and specify that they are `Published by Fastly`.

4. Select the desired resource name to view more information about its schema, and click **Activate**.

5. On the **Extension details** page, specify:
  - Extension name
  - Execution role ARN
  - Automatic updates for minor version releases
  - Configuration

6. In your terminal, specify the configuration data for the registered Fastly CloudFormation resource type, in the given account and region by using the **SetTypeConfiguration** operation:


  For example:

  ```Bash
  $ aws cloudformation set-type-configuration \
  --region us-west-2 --type RESOURCE \
  --type-name Fastly::Services::Backend \
  --configuration-alias default \
  --configuration "{ \"FastlyAccess\":{\"Token\":\"YOURTOKEN\"}}"
  ```

7. After you have your resource configured, [create your AWS stack][12] that includes any of the activated Fastly resources.

For more information about available commands and workflows, see the official [AWS documentation][13].

## Supported regions

The Fastly CloudFormation resources are available on the CloudFormation Public Registry in the following regions:

| Code            | Name                      |
|-----------------|---------------------------|
| us-east-1       | US East (N. Virginia)     |
| us-east-2       | US East (Ohio)            |
| us-west-1       | US West (N. California)   |
| us-west-2       | US West (Oregon)          |
| ap-south-1      | Asia Pacific (Mumbai)     |
| ap-northeast-1  | Asia Pacific (Tokyo)      |
| ap-northeast-2  | Asia Pacific (Seoul)      |
| ap-southeast-1  | Asia Pacific (Singapore)  |
| ap-southeast-2  | Asia Pacific (Sydney)     |
| ca-central-1    | Canada (Central)          |
| eu-central-1    | Europe (Frankfurt)        |
| eu-west-1       | Europe (Ireland)          |
| eu-west-2       | Europe (London)           |
| eu-west-3       | Europe (Paris)            |
| eu-north-1      | Europe (Stockholm)        |
| sa-east-1       | South America (São Paulo) |

**Note**: To privately register a resource in any other region, use the provided packages.

## Examples


### Shows how to create a Health Check in Fastly
```yaml
---
AWSTemplateFormatVersion: '2010-09-09'
Description: Shows how to create a Health Check in Fastly
Resources:
  MySampleProject:
    Type: Fastly::Services::Healthcheck
    Properties:
        ServiceId: abc123xyz,
        VersionId: 2,
        Name: Test healthcheck,
        CheckInterval: 60000,
        Host: aws.amazon.com,
        Initial: 1,
        Threshold: 1,
        Timeout: 5000,
        Window: 2
```


# Development

Congratulations on starting development! Next steps:

1. Write the JSON schema describing your resource, [fastly-services-healthcheck.json](./fastly-services-healthcheck.json)
2. Implement your resource handlers in [handlers.ts](./fastly-services-healthcheck/handlers.ts)

> Don't modify [models.ts](./fastly-services-healthcheck/models.ts) by hand, any modifications will be overwritten when the `generate` or `package` commands are run.

Implement CloudFormation resource here. Each function must always return a ProgressEvent.

```typescript
const progress = ProgressEvent.builder<ProgressEvent<ResourceModel>>()

    // Required
    // Must be one of OperationStatus.InProgress, OperationStatus.Failed, OperationStatus.Success
    .status(OperationStatus.InProgress)
    // Required on SUCCESS (except for LIST where resourceModels is required)
    // The current resource model after the operation; instance of ResourceModel class
    .resourceModel(model)
    .resourceModels(null)
    // Required on FAILED
    // Customer-facing message, displayed in e.g. CloudFormation stack events
    .message('')
    // Required on FAILED a HandlerErrorCode
    .errorCode(HandlerErrorCode.InternalFailure)
    // Optional
    // Use to store any state between re-invocation via IN_PROGRESS
    .callbackContext({})
    // Required on IN_PROGRESS
    // The number of seconds to delay before re-invocation
    .callbackDelaySeconds(0)

    .build()
```

While importing the [@amazon-web-services-cloudformation/cloudformation-cli-typescript-lib](https://github.com/eduardomourar/cloudformation-cli-typescript-plugin) library, failures can be passed back to CloudFormation by either raising an exception from `exceptions`, or setting the ProgressEvent's `status` to `OperationStatus.Failed` and `errorCode` to one of `HandlerErrorCode`. There is a static helper function, `ProgressEvent.failed`, for this common case.

Keep in mind, during runtime all logs will be delivered to CloudWatch if you use the `log()` method from `LoggerProxy` class.

[1]: https://docs.aws.amazon.com/cloudformation-cli/latest/userguide/resource-types.html
[2]: https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/Welcome.html
[3]: https://docs.fastly.com/en/guides/working-with-health-checks
[4]: ./docs/README.md
[11]: https://aws.amazon.com/console/
[12]: https://console.aws.amazon.com/cloudformation/home
[13]: https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/registry.html
[14]: https://aws.amazon.com/account/
[15]: https://aws.amazon.com/cli/
[16]: https://Fastly.com/
[17]: https://docs.fastly.com/en/guides/using-api-tokens