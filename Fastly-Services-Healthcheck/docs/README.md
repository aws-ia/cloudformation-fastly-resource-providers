# Fastly::Services::Healthcheck

Manage a Fastly service health check.

## Syntax

To declare this entity in your AWS CloudFormation template, use the following syntax:

### JSON

<pre>
{
    "Type" : "Fastly::Services::Healthcheck",
    "Properties" : {
        "<a href="#checkinterval" title="CheckInterval">CheckInterval</a>" : <i>Integer</i>,
        "<a href="#comment" title="Comment">Comment</a>" : <i>String</i>,
        "<a href="#expectedresponse" title="ExpectedResponse">ExpectedResponse</a>" : <i>Integer</i>,
        "<a href="#host" title="Host">Host</a>" : <i>String</i>,
        "<a href="#httpversion" title="HttpVersion">HttpVersion</a>" : <i>String</i>,
        "<a href="#initial" title="Initial">Initial</a>" : <i>Integer</i>,
        "<a href="#method" title="Method">Method</a>" : <i>String</i>,
        "<a href="#name" title="Name">Name</a>" : <i>String</i>,
        "<a href="#path" title="Path">Path</a>" : <i>String</i>,
        "<a href="#threshold" title="Threshold">Threshold</a>" : <i>Integer</i>,
        "<a href="#timeout" title="Timeout">Timeout</a>" : <i>Integer</i>,
        "<a href="#window" title="Window">Window</a>" : <i>Integer</i>,
        "<a href="#serviceid" title="ServiceId">ServiceId</a>" : <i>String</i>,
        "<a href="#versionid" title="VersionId">VersionId</a>" : <i>String</i>,
        "<a href="#healthcheckname" title="HealthcheckName">HealthcheckName</a>" : <i>String</i>,
    }
}
</pre>

### YAML

<pre>
Type: Fastly::Services::Healthcheck
Properties:
    <a href="#checkinterval" title="CheckInterval">CheckInterval</a>: <i>Integer</i>
    <a href="#comment" title="Comment">Comment</a>: <i>String</i>
    <a href="#expectedresponse" title="ExpectedResponse">ExpectedResponse</a>: <i>Integer</i>
    <a href="#host" title="Host">Host</a>: <i>String</i>
    <a href="#httpversion" title="HttpVersion">HttpVersion</a>: <i>String</i>
    <a href="#initial" title="Initial">Initial</a>: <i>Integer</i>
    <a href="#method" title="Method">Method</a>: <i>String</i>
    <a href="#name" title="Name">Name</a>: <i>String</i>
    <a href="#path" title="Path">Path</a>: <i>String</i>
    <a href="#threshold" title="Threshold">Threshold</a>: <i>Integer</i>
    <a href="#timeout" title="Timeout">Timeout</a>: <i>Integer</i>
    <a href="#window" title="Window">Window</a>: <i>Integer</i>
    <a href="#serviceid" title="ServiceId">ServiceId</a>: <i>String</i>
    <a href="#versionid" title="VersionId">VersionId</a>: <i>String</i>
    <a href="#healthcheckname" title="HealthcheckName">HealthcheckName</a>: <i>String</i>
</pre>

## Properties

#### CheckInterval

How often to run the healthcheck in milliseconds.

_Required_: No

_Type_: Integer

_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

#### Comment

A freeform descriptive note.

_Required_: No

_Type_: String

_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

#### ExpectedResponse

The status code expected from the host.

_Required_: No

_Type_: Integer

_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

#### Host

Which host to check.

_Required_: No

_Type_: String

_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

#### HttpVersion

Whether to use version 1.0 or 1.1 HTTP.

_Required_: No

_Type_: String

_Allowed Values_: <code>1.0</code> | <code>1.1</code>

_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

#### Initial

When loading a config, the initial number of probes to be seen as OK.

_Required_: No

_Type_: Integer

_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

#### Method

Which HTTP method to use.

_Required_: No

_Type_: String

_Allowed Values_: <code>HEAD</code> | <code>GET</code> | <code>POST</code>

_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

#### Name

The name of the healthcheck.

_Required_: Yes

_Type_: String

_Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)

#### Path

The path to check.

_Required_: No

_Type_: String

_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

#### Threshold

How many healthchecks must succeed to be considered healthy.

_Required_: No

_Type_: Integer

_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

#### Timeout

Timeout in milliseconds.

_Required_: No

_Type_: Integer

_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

#### Window

The number of most recent healthcheck queries to keep for this healthcheck.

_Required_: No

_Type_: Integer

_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

#### ServiceId

Alphanumeric string identifying the service.

_Required_: Yes

_Type_: String

_Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)

#### VersionId

Alphanumeric string identifying the service version.

_Required_: Yes

_Type_: String

_Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)

#### HealthcheckName

The name of the healthcheck.

_Required_: No

_Type_: String

_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

## Return Values

### Fn::GetAtt

The `Fn::GetAtt` intrinsic function returns a value for a specified attribute of this type. The following are the available attributes and sample return values.

For more information about using the `Fn::GetAtt` intrinsic function, see [Fn::GetAtt](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/intrinsic-function-reference-getatt.html).

#### Version

Integer identifying a healthcheck version. Read-only.

#### CreatedAt

Date and time in ISO 8601 format. Read-only.

#### UpdatedAt

Date and time in ISO 8601 format. Read-only.

#### DeletedAt

Date and time in ISO 8601 format. Read-only.

