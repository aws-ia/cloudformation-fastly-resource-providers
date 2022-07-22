# Fastly::Services::Service Version

A Version represents a specific instance of the configuration for a service. A Version can be cloned, locked, activated, or deactivated.

## Syntax

To declare this entity in your AWS CloudFormation template, use the following syntax:

### JSON

<pre>
{
    "<a href="#active" title="Active">Active</a>" : <i>Boolean</i>,
    "<a href="#comment" title="Comment">Comment</a>" : <i>String</i>,
    "<a href="#deployed" title="Deployed">Deployed</a>" : <i>Boolean</i>,
    "<a href="#locked" title="Locked">Locked</a>" : <i>Boolean</i>,
    "<a href="#number" title="Number">Number</a>" : <i>Integer</i>,
    "<a href="#staging" title="Staging">Staging</a>" : <i>Boolean</i>,
    "<a href="#testing" title="Testing">Testing</a>" : <i>Boolean</i>,
    "<a href="#serviceid" title="ServiceId">ServiceId</a>" : <i>String</i>,
    "<a href="#createdat" title="CreatedAt">CreatedAt</a>" : <i>String</i>,
    "<a href="#deletedat" title="DeletedAt">DeletedAt</a>" : <i>String</i>,
    "<a href="#updatedat" title="UpdatedAt">UpdatedAt</a>" : <i>String</i>
}
</pre>

### YAML

<pre>
<a href="#active" title="Active">Active</a>: <i>Boolean</i>
<a href="#comment" title="Comment">Comment</a>: <i>String</i>
<a href="#deployed" title="Deployed">Deployed</a>: <i>Boolean</i>
<a href="#locked" title="Locked">Locked</a>: <i>Boolean</i>
<a href="#number" title="Number">Number</a>: <i>Integer</i>
<a href="#staging" title="Staging">Staging</a>: <i>Boolean</i>
<a href="#testing" title="Testing">Testing</a>: <i>Boolean</i>
<a href="#serviceid" title="ServiceId">ServiceId</a>: <i>String</i>
<a href="#createdat" title="CreatedAt">CreatedAt</a>: <i>String</i>
<a href="#deletedat" title="DeletedAt">DeletedAt</a>: <i>String</i>
<a href="#updatedat" title="UpdatedAt">UpdatedAt</a>: <i>String</i>
</pre>

## Properties

#### Active

Whether this is the active version or not. [Default false]

_Required_: No

_Type_: Boolean

_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

#### Comment

A freeform descriptive note.

_Required_: No

_Type_: String

_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

#### Deployed

Unused at this time.

_Required_: No

_Type_: Boolean

_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

#### Locked

Whether this version is locked or not. Objects can not be added or edited on locked versions. [Default false]

_Required_: No

_Type_: Boolean

_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

#### Number

The number of this version. Read-only.

_Required_: No

_Type_: Integer

_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

#### Staging

Unused at this time. [Default false]

_Required_: No

_Type_: Boolean

_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

#### Testing

Unused at this time. [Default false]

_Required_: No

_Type_: Boolean

_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

#### ServiceId

Alphanumeric string identifying the service. Read-only.

_Required_: No

_Type_: String

_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

#### CreatedAt

Date and time in ISO 8601 format. Read-only.

_Required_: No

_Type_: String

_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

#### DeletedAt

Date and time in ISO 8601 format. Read-only.

_Required_: No

_Type_: String

_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

#### UpdatedAt

Date and time in ISO 8601 format. Read-only.

_Required_: No

_Type_: String

_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

