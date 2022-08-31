# Fastly::Services::Service

Manage a Fastly service.

## Syntax

To declare this entity in your AWS CloudFormation template, use the following syntax:

### JSON

<pre>
{
    "Type" : "Fastly::Services::Service",
    "Properties" : {
        "<a href="#name" title="Name">Name</a>" : <i>String</i>,
        "<a href="#comment" title="Comment">Comment</a>" : <i>String</i>,
    }
}
</pre>

### YAML

<pre>
Type: Fastly::Services::Service
Properties:
    <a href="#name" title="Name">Name</a>: <i>String</i>
    <a href="#comment" title="Comment">Comment</a>: <i>String</i>
</pre>

## Properties

#### Name

The name of the service.

_Required_: Yes

_Type_: String

_Minimum_: <code>1</code>

_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

#### Comment

A freeform descriptive note.

_Required_: No

_Type_: String

_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

## Return Values

### Ref

When you pass the logical ID of this resource to the intrinsic `Ref` function, Ref returns the Id.

### Fn::GetAtt

The `Fn::GetAtt` intrinsic function returns a value for a specified attribute of this type. The following are the available attributes and sample return values.

For more information about using the `Fn::GetAtt` intrinsic function, see [Fn::GetAtt](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/intrinsic-function-reference-getatt.html).

#### Id

Alphanumeric string identifying the service. Read-only.

#### ActiveVersionId

The number of the active version.

#### LatestVersionId

The number of the latest version.

#### Type

The type of this service.

#### Paused

Whether the service is paused. Services are paused due to a lack of traffic for an extended period of time. Services are resumed either when a draft version is activated or a locked version is cloned and reactivated.

#### CustomerId

Alphanumeric string identifying the customer. Ready-only.

#### CreatedAt

Date and time in ISO 8601 format. Read-only.

#### UpdatedAt

Date and time in ISO 8601 format. Read-only.

#### DeletedAt

Date and time in ISO 8601 format. Read-only.

