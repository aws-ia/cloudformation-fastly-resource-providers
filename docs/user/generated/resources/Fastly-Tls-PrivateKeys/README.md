# Fastly::Tls::PrivateKeys

Manage the Tls Private Key upload

## Syntax

To declare this entity in your AWS CloudFormation template, use the following syntax:

### JSON

<pre>
{
    "Type" : "Fastly::Tls::PrivateKeys",
    "Properties" : {
        "<a href="#type" title="Type">Type</a>" : <i>String</i>,
        "<a href="#attributes" title="Attributes">Attributes</a>" : <i><a href="attributes.md">Attributes</a></i>
    }
}
</pre>

### YAML

<pre>
Type: Fastly::Tls::PrivateKeys
Properties:
    <a href="#type" title="Type">Type</a>: <i>String</i>
    <a href="#attributes" title="Attributes">Attributes</a>: <i><a href="attributes.md">Attributes</a></i>
</pre>

## Properties

#### Type

Resource type. [Default tls_private_key]

_Required_: No

_Type_: String

_Allowed Values_: <code>tls_private_key</code>

_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

#### Attributes

_Required_: Yes

_Type_: <a href="attributes.md">Attributes</a>

_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

## Return Values

### Ref

When you pass the logical ID of this resource to the intrinsic `Ref` function, Ref returns the Id.

### Fn::GetAtt

The `Fn::GetAtt` intrinsic function returns a value for a specified attribute of this type. The following are the available attributes and sample return values.

For more information about using the `Fn::GetAtt` intrinsic function, see [Fn::GetAtt](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/intrinsic-function-reference-getatt.html).

#### Id

Alphanumeric string identifying a private Key

#### KeyType

Returns the <code>KeyType</code> value.

#### KeyLength

Returns the <code>KeyLength</code> value.

#### PublicKeySha1

Returns the <code>PublicKeySha1</code> value.

#### Replace

Returns the <code>Replace</code> value.

