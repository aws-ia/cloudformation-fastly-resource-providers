# Fastly::Logging::Splunk

Manage a Fastly Splunk Log.

## Syntax

To declare this entity in your AWS CloudFormation template, use the following syntax:

### JSON

<pre>
{
    "Type" : "Fastly::Logging::Splunk",
    "Properties" : {
        "<a href="#formatversion" title="FormatVersion">FormatVersion</a>" : <i>Integer</i>,
        "<a href="#name" title="Name">Name</a>" : <i>String</i>,
        "<a href="#placement" title="Placement">Placement</a>" : <i>String</i>,
        "<a href="#requestmaxbytes" title="RequestMaxBytes">RequestMaxBytes</a>" : <i>Integer</i>,
        "<a href="#requestmaxentries" title="RequestMaxEntries">RequestMaxEntries</a>" : <i>Integer</i>,
        "<a href="#responsecondition" title="ResponseCondition">ResponseCondition</a>" : <i>String</i>,
        "<a href="#tlscacert" title="TlsCaCert">TlsCaCert</a>" : <i>String</i>,
        "<a href="#tlsclientcert" title="TlsClientCert">TlsClientCert</a>" : <i>String</i>,
        "<a href="#tlsclientkey" title="TlsClientKey">TlsClientKey</a>" : <i>String</i>,
        "<a href="#tlshostname" title="TlsHostname">TlsHostname</a>" : <i>String</i>,
        "<a href="#token" title="Token">Token</a>" : <i>String</i>,
        "<a href="#url" title="Url">Url</a>" : <i>String</i>,
        "<a href="#usetls" title="UseTls">UseTls</a>" : <i>Integer</i>,
        "<a href="#serviceid" title="ServiceId">ServiceId</a>" : <i>String</i>,
        "<a href="#versionid" title="VersionId">VersionId</a>" : <i>Double</i>,
        "<a href="#version" title="Version">Version</a>" : <i>String</i>
    }
}
</pre>

### YAML

<pre>
Type: Fastly::Logging::Splunk
Properties:
    <a href="#formatversion" title="FormatVersion">FormatVersion</a>: <i>Integer</i>
    <a href="#name" title="Name">Name</a>: <i>String</i>
    <a href="#placement" title="Placement">Placement</a>: <i>String</i>
    <a href="#requestmaxbytes" title="RequestMaxBytes">RequestMaxBytes</a>: <i>Integer</i>
    <a href="#requestmaxentries" title="RequestMaxEntries">RequestMaxEntries</a>: <i>Integer</i>
    <a href="#responsecondition" title="ResponseCondition">ResponseCondition</a>: <i>String</i>
    <a href="#tlscacert" title="TlsCaCert">TlsCaCert</a>: <i>String</i>
    <a href="#tlsclientcert" title="TlsClientCert">TlsClientCert</a>: <i>String</i>
    <a href="#tlsclientkey" title="TlsClientKey">TlsClientKey</a>: <i>String</i>
    <a href="#tlshostname" title="TlsHostname">TlsHostname</a>: <i>String</i>
    <a href="#token" title="Token">Token</a>: <i>String</i>
    <a href="#url" title="Url">Url</a>: <i>String</i>
    <a href="#usetls" title="UseTls">UseTls</a>: <i>Integer</i>
    <a href="#serviceid" title="ServiceId">ServiceId</a>: <i>String</i>
    <a href="#versionid" title="VersionId">VersionId</a>: <i>Double</i>
    <a href="#version" title="Version">Version</a>: <i>String</i>
</pre>

## Properties

#### FormatVersion

The version of the custom logging format used for the configured endpoint.

_Required_: No

_Type_: Integer

_Allowed Values_: <code>1</code> | <code>2</code>

_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

#### Name

The name for the real-time logging configuration.

_Required_: Yes

_Type_: String

_Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)

#### Placement

Where in the generated VCL the logging call should be placed.

_Required_: No

_Type_: String

_Allowed Values_: <code>none</code> | <code>waf_debug</code>

_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

#### RequestMaxBytes

The maximum number of bytes sent in one request. Defaults 0 for unbounded. [Default 0]

_Required_: No

_Type_: Integer

_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

#### RequestMaxEntries

The maximum number of logs sent in one request. Defaults 0 for unbounded. [Default 0]

_Required_: No

_Type_: Integer

_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

#### ResponseCondition

The name of an existing condition in the configured endpoint, or leave blank to always execute.

_Required_: No

_Type_: String

_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

#### TlsCaCert

A secure certificate to authenticate a server with. Must be in PEM format.

_Required_: No

_Type_: String

_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

#### TlsClientCert

The client certificate used to make authenticated requests. Must be in PEM format.

_Required_: No

_Type_: String

_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

#### TlsClientKey

The client private key used to make authenticated requests. Must be in PEM format.

_Required_: No

_Type_: String

_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

#### TlsHostname

The hostname to verify the server's certificate. This should be one of the Subject Alternative Name (SAN) fields for the certificate. Common Names (CN) are not supported.

_Required_: No

_Type_: String

_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

#### Token

A Splunk token for use in posting logs over HTTP to your collector.

_Required_: Yes

_Type_: String

_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

#### Url

The URL to post logs to.

_Required_: Yes

_Type_: String

_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

#### UseTls

Whether to use TLS. [Default 0]

_Required_: No

_Type_: Integer

_Allowed Values_: <code>0</code> | <code>1</code>

_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

#### ServiceId

Alphanumeric string identifying the service. Read-only.

_Required_: No

_Type_: String

_Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)

#### VersionId

Id identifying the service version.

_Required_: No

_Type_: Double

_Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)

#### Version

Integer identifying a domain version. Read-only.

_Required_: No

_Type_: String

_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

## Return Values

### Fn::GetAtt

The `Fn::GetAtt` intrinsic function returns a value for a specified attribute of this type. The following are the available attributes and sample return values.

For more information about using the `Fn::GetAtt` intrinsic function, see [Fn::GetAtt](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/intrinsic-function-reference-getatt.html).

#### CreatedAt

Date and time in ISO 8601 format. Read-only.

#### DeletedAt

Date and time in ISO 8601 format. Read-only.

#### UpdatedAt

Date and time in ISO 8601 format. Read-only.

