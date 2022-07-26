# Fastly::Services::Healthcheck Healthcheck

## Syntax

To declare this entity in your AWS CloudFormation template, use the following syntax:

### JSON

<pre>
{
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
    "<a href="#createdat" title="CreatedAt">CreatedAt</a>" : <i>String</i>,
    "<a href="#updatedat" title="UpdatedAt">UpdatedAt</a>" : <i>String</i>,
    "<a href="#deletedat" title="DeletedAt">DeletedAt</a>" : <i>String</i>,
    "<a href="#version" title="Version">Version</a>" : <i>Integer</i>
}
</pre>

### YAML

<pre>
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
<a href="#createdat" title="CreatedAt">CreatedAt</a>: <i>String</i>
<a href="#updatedat" title="UpdatedAt">UpdatedAt</a>: <i>String</i>
<a href="#deletedat" title="DeletedAt">DeletedAt</a>: <i>String</i>
<a href="#version" title="Version">Version</a>: <i>Integer</i>
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

_Required_: No

_Type_: String

_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

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

#### CreatedAt

Date and time in ISO 8601 format. Read-only.

_Required_: No

_Type_: String

_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

#### UpdatedAt

Date and time in ISO 8601 format. Read-only.

_Required_: No

_Type_: String

_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

#### DeletedAt

Date and time in ISO 8601 format. Read-only.

_Required_: No

_Type_: String

_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

#### Version

Integer identifying a healthcheck version. Read-only.

_Required_: No

_Type_: Integer

_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

