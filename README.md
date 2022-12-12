# Fastly CloudFormation Resources Types

This collection of [AWS CloudFormation resource types][1] allow Fastly to be controlled using [AWS CloudFormation][2].

The resources are created by the [fastly][21] npm package. 

See the [end-user documentation](docs/user/generated) including:

* [examples](docs/user/generated/stories)
* [supported GitHub resource types](docs/user/generated/resources)

| Resource | Description | Documentation |
| --- | --- | --- |
| Fastly::Services::Service | This resource type manages a service for [Fastly Service][9] | [/Fastly-Services-Service][18] |
| Fastly::Services::Backend | This resource type manages a [Fastly Backend][7] | [/Fastly-Services-Backend][8] |
| Fastly::Services::Domain | This resource type manages a [Fastly Domain ][20] | [/Fastly-Services-Domain][10] |
| Fastly::Dictionary::Dictionary | This resource type manages a [Fastly Dictionary][3] | [/Fastly-Dictionary-Dictionary][4] |
| Fastly::Dictionary::DictionaryItem | This resource type manages a [Fastly  Dictionary Item][5] | [/Fastly-Dictionary-DictionaryItem][6] |
| Fastly::Services::Healthcheck | This resource type manages a [Fastly Health Check ][24] | [/Fastly-Services-Healthcheck][19] |
| Fastly::Logging::S3 | This resource type manages a [Fastly Logging for S3][25] | [/Fastly-Logging-S3][26] |
| Fastly::Logging::Splunk | This resource type manages a [Fastly Logging for Splunk ][27] | [/Fastly-Logging-Splunk][28] |
| Fastly::Tls::Certificate | This resource type manages a custom [Fastly Tls Certificate][29] | [/Fastly-Tls-Certificate][30] |
| Fastly::Tls::Domain | This resource type manages a [Fastly Tls Domain Activation][31] | [/Fastly-Tls-Domain][32] |

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

### [Sample use case][23]

### Shows how to create an Deliver Service in Fastly

```yaml
---
AWSTemplateFormatVersion: '2010-09-09'
Description: Shows how to create a Service in Fastly
Resources:
  MySampleProject:
    Type: Fastly::Services::Service
    Properties:
        Name: Example Service Name
```

### Shows how to attach a Domain in Fastly.
```yaml
---
AWSTemplateFormatVersion: '2010-09-09'
Description: Shows how to create a Domain in Fastly
Resources:
  MySampleProject:
    Type: Fastly::Services::Domain
    Properties:
        Name: example.co.uk,
        ServiceId: abc123xyz,
        VersionId: 2,
        Comment: This is a domain
```

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

### Shows how to create a Backend in Fastly
```yaml
---
AWSTemplateFormatVersion: '2010-09-09'
Description: Shows how to create a Backend in Fastly
Resources:
  MySampleProject:
    Type: Fastly::Services::Backend
    Properties:
        ServiceId: abc1234xyz,
        VersionId: 2,
        Name: aws.amazon.com,
        Address: aws.amazon.com,
        Comment: Hello AWS,
        Port: 443,
        UseSsl: true,
        MinTlsVersion: 1.0,
        MaxTlsVersion: 1.3,
        Weight: 1,
        BetweenBytesTimeout: 4096,
        ConnectTimeout: 500,
        FirstByteTimeout: 50,
        MaxConn: 10
```

### Shows how to create a Dictionary in Fastly
```yaml
---
AWSTemplateFormatVersion: '2010-09-09'
Description: Shows how to create a Dictionary in Fastly
Resources:
  MySampleProject:
    Type: Fastly::Dictionary::Dictionary
    Properties:
      ServiceId: 3504143
      VersionId: 123
      Name: Dictionary Example Name
```

### Shows how to create a Dictionary Item in Fastly
```yaml
---
AWSTemplateFormatVersion: '2010-09-09'
Description: Shows how to create a Dictionary in Fastly
Resources:
  MySampleProject:
    Type: Fastly::Dictionary::DictionaryItem
    Properties:
      ServiceId: 3504143
      DictionaryId: 123
      ItemKey: Example Item Dictionary Key
      ItemValue: Value of Dictionary Key
```

### Shows how to create a Logging S3 Endpoint in Fastly
```yaml
---
AWSTemplateFormatVersion: '2010-09-09'
Description: Shows how to create a Logging S3 Endpoint in Fastly
Resources:
  MySampleProject:
    Type: Fastly::Logging::S3
    Properties:
      ServiceId: 3504143
      VersionId: 123
      Name: S3 Example Name
      AccessKey: MyAWSAccessKey
      SecretKey: MyAWSSecretKey
      BucketName: MyS3BucketName
```

### Shows how to create a Logging Splunk Endpoint in Fastly
```yaml
---
AWSTemplateFormatVersion: '2010-09-09'
Description: Shows how to create a Logging Splunk Endpoint in Fastly
Resources:
  MySampleProject:
    Type: Fastly::Logging::Splunk
    Properties:
      ServiceId: 3504143
      VersionId: 123
      Name: Splunk Example Name
      Token: MySplunkToken
      Url: "https://mysplunkhost:8088/services/collector/event/1.0"
```

### Shows how to upload a custom Tls Certificate to Fastly
```yaml
---
AWSTemplateFormatVersion: '2010-09-09'
Description: Shows how to upload a custom Tls Certificate to Fastly
Resources:
  MySampleProject:
    Type: Fastly::Tls::Certificate
    Properties:
        Type: tls_certificate,
        Attributes: 
            CertBlob: -----BEGIN CERTIFICATE-----\n ... \n-----END CERTIFICATE-----,
            Name: Tls name

```

### Shows how to activate a custom Tls Domain for Fastly
```yaml
---
AWSTemplateFormatVersion: '2010-09-09'
Description: Shows how to activate a custom Tls Domain for Fastly
Resources:
  MySampleProject:
    Type: Fastly::Tls::Domain
    Properties:
        Type: tls_activation
        Relationships: 
            TlsCertificate: 
                Data: 
                    Id: tlsCertId123,
                    Type: tls_certificate
            TlsDomain: 
                Data:
                    Id: example.com,
                    Type: tls_domain
            TlsConfiguration: 
                Data:
                    Id: tlsConfigId123,
                    Type: tls_configuration
```

[1]: https://docs.aws.amazon.com/cloudformation-cli/latest/userguide/resource-types.html
[2]: https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/Welcome.html
[3]: https://docs.fastly.com/en/guides/working-with-dictionaries-using-the-web-interface#creating-a-dictionary-container
[4]: ./Fastly-Alert-AlertsPolicy/
[5]: https://docs.fastly.com/en/guides/working-with-dictionaries-using-the-web-interface#creating-a-dictionary-item
[6]: ./Fastly-Dictionary-DictionaryItem/
[7]: https://docs.fastly.com/en/guides/working-with-hosts#adding-a-host
[8]: ./Fastly-Services-Backend/
[9]: https://docs.fastly.com/en/guides/working-with-services#creating-a-new-service
[10]: ./Fastly-Services-Domain/
[11]: https://aws.amazon.com/console/
[12]: https://console.aws.amazon.com/cloudformation/home
[13]: https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/registry.html
[14]: https://aws.amazon.com/account/
[15]: https://aws.amazon.com/cli/
[16]: https://Fastly.com/
[17]: https://docs.fastly.com/en/guides/using-api-tokens
[18]: ./Fastly-Services-Domain/
[19]: ./Fastly-Services-Healthcheck/
[20]: https://docs.fastly.com/en/guides/working-with-domains
[21]: https://www.npmjs.com/package/fastly
[22]: ./docs/
[23]: ./docs/user/src/main/docs/stories/creating-a-service/
[24]: https://docs.fastly.com/en/guides/working-with-health-checks
[25]: https://docs.fastly.com/en/guides/log-streaming-amazon-s3
[26]: /Fastly-Logging-S3/
[27]: https://docs.fastly.com/en/guides/log-streaming-splunk
[28]: /Fastly-Logging-Splunk/
[29]: https://docs.fastly.com/products/tls-service-options
[30]: /Fastly-Tls-Certificate/
[31]: https://developer.fastly.com/reference/api/tls/custom-certs/activations/
[32]: /Fastly-Tls-Domain/