# Fastly::Tls::Certificate Attributes

## Syntax

To declare this entity in your AWS CloudFormation template, use the following syntax:

### JSON

<pre>
{
    "<a href="#name" title="Name">Name</a>" : <i>String</i>,
    "<a href="#certblob" title="CertBlob">CertBlob</a>" : <i>String</i>,
    "<a href="#createdat" title="CreatedAt">CreatedAt</a>" : <i>String</i>,
    "<a href="#issuer" title="Issuer">Issuer</a>" : <i>String</i>,
    "<a href="#notafter" title="NotAfter">NotAfter</a>" : <i>String</i>,
    "<a href="#notbefore" title="NotBefore">NotBefore</a>" : <i>String</i>,
    "<a href="#signaturealgorithm" title="SignatureAlgorithm">SignatureAlgorithm</a>" : <i>String</i>,
    "<a href="#serialnumber" title="SerialNumber">SerialNumber</a>" : <i>String</i>,
    "<a href="#updatedat" title="UpdatedAt">UpdatedAt</a>" : <i>String</i>,
    "<a href="#replace" title="Replace">Replace</a>" : <i>String</i>,
    "<a href="#issuedto" title="IssuedTo">IssuedTo</a>" : <i>String</i>
}
</pre>

### YAML

<pre>
<a href="#name" title="Name">Name</a>: <i>String</i>
<a href="#certblob" title="CertBlob">CertBlob</a>: <i>String</i>
<a href="#createdat" title="CreatedAt">CreatedAt</a>: <i>String</i>
<a href="#issuer" title="Issuer">Issuer</a>: <i>String</i>
<a href="#notafter" title="NotAfter">NotAfter</a>: <i>String</i>
<a href="#notbefore" title="NotBefore">NotBefore</a>: <i>String</i>
<a href="#signaturealgorithm" title="SignatureAlgorithm">SignatureAlgorithm</a>: <i>String</i>
<a href="#serialnumber" title="SerialNumber">SerialNumber</a>: <i>String</i>
<a href="#updatedat" title="UpdatedAt">UpdatedAt</a>: <i>String</i>
<a href="#replace" title="Replace">Replace</a>: <i>String</i>
<a href="#issuedto" title="IssuedTo">IssuedTo</a>: <i>String</i>
</pre>

## Properties

#### Name

A customizable name for your certificate. Defaults to the certificate's Common Name or first Subject Alternative Names (SAN) entry. Optional.

_Required_: No

_Type_: String

_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

#### CertBlob

The PEM-formatted certificate blob. Required.

_Required_: Yes

_Type_: String

_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

#### CreatedAt

Date and time in ISO 8601 format. Read-only.

_Required_: No

_Type_: String

_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

#### Issuer

The certificate authority that issued the certificate. Read-only.

_Required_: No

_Type_: String

_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

#### NotAfter

Time-stamp (GMT) when the certificate will expire. Must be in the future to be used to terminate TLS traffic. Read-only.

_Required_: No

_Type_: String

_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

#### NotBefore

Time-stamp (GMT) when the certificate will become valid. Must be in the past to be used to terminate TLS traffic. Read-only.

_Required_: No

_Type_: String

_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

#### SignatureAlgorithm

The algorithm used to sign the certificate. Read-only.

_Required_: No

_Type_: String

_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

#### SerialNumber

A value assigned by the issuer that is unique to a certificate. Read-only.

_Required_: No

_Type_: String

_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

#### UpdatedAt

Date and time in ISO 8601 format. Read-only.

_Required_: No

_Type_: String

_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

#### Replace

A recommendation from Fastly indicating the key associated with this certificate is in need of rotation. Read-only.

_Required_: No

_Type_: String

_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

#### IssuedTo

The hostname for which a certificate was issued. Read-only.

_Required_: No

_Type_: String

_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

