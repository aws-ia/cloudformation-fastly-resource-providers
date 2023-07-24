# Fastly::Services::ActiveVersion

Manage a Fastly service active version.

## Syntax

To declare this entity in your AWS CloudFormation template, use the following syntax:

### JSON

<pre>
{
    "Type" : "Fastly::Services::ActiveVersion",
    "Properties" : {
        "<a href="#serviceid" title="ServiceId">ServiceId</a>" : <i>String</i>,
        "<a href="#versionnumber" title="VersionNumber">VersionNumber</a>" : <i>Integer</i>
    }
}
</pre>

### YAML

<pre>
Type: Fastly::Services::ActiveVersion
Properties:
    <a href="#serviceid" title="ServiceId">ServiceId</a>: <i>String</i>
    <a href="#versionnumber" title="VersionNumber">VersionNumber</a>: <i>Integer</i>
</pre>

## Properties

#### ServiceId

Alphanumeric string identifying the service. Read-only.

_Required_: Yes

_Type_: String

_Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)

#### VersionNumber

The number of the version to be activated.

_Required_: Yes

_Type_: Integer

_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

## Return Values

### Ref

When you pass the logical ID of this resource to the intrinsic `Ref` function, Ref returns the ServiceId.
