# Fastly::Services::Domain Domain

## Syntax

To declare this entity in your AWS CloudFormation template, use the following syntax:

### JSON

<pre>
{
    "<a href="#serviceid" title="ServiceId">ServiceId</a>" : <i>String</i>,
    "<a href="#name" title="Name">Name</a>" : <i>String</i>,
    "<a href="#comment" title="Comment">Comment</a>" : <i>String</i>,
    "<a href="#createdat" title="CreatedAt">CreatedAt</a>" : <i>String</i>,
    "<a href="#updatedat" title="UpdatedAt">UpdatedAt</a>" : <i>String</i>,
    "<a href="#deletedat" title="DeletedAt">DeletedAt</a>" : <i>String</i>,
    "<a href="#version" title="Version">Version</a>" : <i>Integer</i>
}
</pre>

### YAML

<pre>
<a href="#serviceid" title="ServiceId">ServiceId</a>: <i>String</i>
<a href="#name" title="Name">Name</a>: <i>String</i>
<a href="#comment" title="Comment">Comment</a>: <i>String</i>
<a href="#createdat" title="CreatedAt">CreatedAt</a>: <i>String</i>
<a href="#updatedat" title="UpdatedAt">UpdatedAt</a>: <i>String</i>
<a href="#deletedat" title="DeletedAt">DeletedAt</a>: <i>String</i>
<a href="#version" title="Version">Version</a>: <i>Integer</i>
</pre>

## Properties

#### ServiceId

Alphanumeric string identifying the service.

_Required_: No

_Type_: String

_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

#### Name

The name of the service.

_Required_: No

_Type_: String

_Minimum_: <code>1</code>

_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

#### Comment

A freeform descriptive note.

_Required_: No

_Type_: String

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

Integer identifying a domain version.

_Required_: No

_Type_: Integer

_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

