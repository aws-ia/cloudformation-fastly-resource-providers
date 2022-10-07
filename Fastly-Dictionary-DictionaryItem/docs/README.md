# Fastly::Dictionary::DictionaryItem

Manage a Fastly service dictionary item.

## Syntax

To declare this entity in your AWS CloudFormation template, use the following syntax:

### JSON

<pre>
{
    "Type" : "Fastly::Dictionary::DictionaryItem",
    "Properties" : {
        "<a href="#itemkey" title="ItemKey">ItemKey</a>" : <i>String</i>,
        "<a href="#itemvalue" title="ItemValue">ItemValue</a>" : <i>String</i>,
        "<a href="#dictionaryid" title="DictionaryId">DictionaryId</a>" : <i>String</i>,
        "<a href="#serviceid" title="ServiceId">ServiceId</a>" : <i>String</i>,
    }
}
</pre>

### YAML

<pre>
Type: Fastly::Dictionary::DictionaryItem
Properties:
    <a href="#itemkey" title="ItemKey">ItemKey</a>: <i>String</i>
    <a href="#itemvalue" title="ItemValue">ItemValue</a>: <i>String</i>
    <a href="#dictionaryid" title="DictionaryId">DictionaryId</a>: <i>String</i>
    <a href="#serviceid" title="ServiceId">ServiceId</a>: <i>String</i>
</pre>

## Properties

#### ItemKey

Item key

_Required_: Yes

_Type_: String

_Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)

#### ItemValue

Item key

_Required_: No

_Type_: String

_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

#### DictionaryId

Alphanumeric string identifying a Dictionary.

_Required_: Yes

_Type_: String

_Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)

#### ServiceId

Alphanumeric string identifying the service. Read-only.

_Required_: Yes

_Type_: String

_Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)

## Return Values

### Fn::GetAtt

The `Fn::GetAtt` intrinsic function returns a value for a specified attribute of this type. The following are the available attributes and sample return values.

For more information about using the `Fn::GetAtt` intrinsic function, see [Fn::GetAtt](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/intrinsic-function-reference-getatt.html).

#### CreatedAt

Date and time in ISO 8601 format.

#### DeletedAt

Date and time in ISO 8601 format.

#### UpdatedAt

Date and time in ISO 8601 format. Read-only.

