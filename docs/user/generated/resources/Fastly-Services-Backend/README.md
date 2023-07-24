# Fastly::Services::Backend

Manage a Fastly service backend.

## Syntax

To declare this entity in your AWS CloudFormation template, use the following syntax:

### JSON

<pre>
{
    "Type" : "Fastly::Services::Backend",
    "Properties" : {
        "<a href="#address" title="Address">Address</a>" : <i>String</i>,
        "<a href="#autoloadbalance" title="AutoLoadbalance">AutoLoadbalance</a>" : <i>Boolean</i>,
        "<a href="#betweenbytestimeout" title="BetweenBytesTimeout">BetweenBytesTimeout</a>" : <i>Integer</i>,
        "<a href="#clientcert" title="ClientCert">ClientCert</a>" : <i>String</i>,
        "<a href="#comment" title="Comment">Comment</a>" : <i>String</i>,
        "<a href="#connecttimeout" title="ConnectTimeout">ConnectTimeout</a>" : <i>Integer</i>,
        "<a href="#firstbytetimeout" title="FirstByteTimeout">FirstByteTimeout</a>" : <i>Integer</i>,
        "<a href="#healthcheck" title="Healthcheck">Healthcheck</a>" : <i>String</i>,
        "<a href="#ipv4" title="Ipv4">Ipv4</a>" : <i>String</i>,
        "<a href="#ipv6" title="Ipv6">Ipv6</a>" : <i>String</i>,
        "<a href="#maxconn" title="MaxConn">MaxConn</a>" : <i>Integer</i>,
        "<a href="#maxtlsversion" title="MaxTlsVersion">MaxTlsVersion</a>" : <i>String</i>,
        "<a href="#mintlsversion" title="MinTlsVersion">MinTlsVersion</a>" : <i>String</i>,
        "<a href="#name" title="Name">Name</a>" : <i>String</i>,
        "<a href="#overridehost" title="OverrideHost">OverrideHost</a>" : <i>String</i>,
        "<a href="#port" title="Port">Port</a>" : <i>Integer</i>,
        "<a href="#requestcondition" title="RequestCondition">RequestCondition</a>" : <i>String</i>,
        "<a href="#shield" title="Shield">Shield</a>" : <i>String</i>,
        "<a href="#sslcacert" title="SslCaCert">SslCaCert</a>" : <i>String</i>,
        "<a href="#sslcerthostname" title="SslCertHostname">SslCertHostname</a>" : <i>String</i>,
        "<a href="#sslcheckcert" title="SslCheckCert">SslCheckCert</a>" : <i>Boolean</i>,
        "<a href="#sslciphers" title="SslCiphers">SslCiphers</a>" : <i>String</i>,
        "<a href="#sslclientcert" title="SslClientCert">SslClientCert</a>" : <i>String</i>,
        "<a href="#sslclientkey" title="SslClientKey">SslClientKey</a>" : <i>String</i>,
        "<a href="#sslsnihostname" title="SslSniHostname">SslSniHostname</a>" : <i>String</i>,
        "<a href="#usessl" title="UseSsl">UseSsl</a>" : <i>Boolean</i>,
        "<a href="#weight" title="Weight">Weight</a>" : <i>Integer</i>,
        "<a href="#serviceid" title="ServiceId">ServiceId</a>" : <i>String</i>,
        "<a href="#backendname" title="BackendName">BackendName</a>" : <i>String</i>,
        "<a href="#versionid" title="VersionId">VersionId</a>" : <i>String</i>,
    }
}
</pre>

### YAML

<pre>
Type: Fastly::Services::Backend
Properties:
    <a href="#address" title="Address">Address</a>: <i>String</i>
    <a href="#autoloadbalance" title="AutoLoadbalance">AutoLoadbalance</a>: <i>Boolean</i>
    <a href="#betweenbytestimeout" title="BetweenBytesTimeout">BetweenBytesTimeout</a>: <i>Integer</i>
    <a href="#clientcert" title="ClientCert">ClientCert</a>: <i>String</i>
    <a href="#comment" title="Comment">Comment</a>: <i>String</i>
    <a href="#connecttimeout" title="ConnectTimeout">ConnectTimeout</a>: <i>Integer</i>
    <a href="#firstbytetimeout" title="FirstByteTimeout">FirstByteTimeout</a>: <i>Integer</i>
    <a href="#healthcheck" title="Healthcheck">Healthcheck</a>: <i>String</i>
    <a href="#ipv4" title="Ipv4">Ipv4</a>: <i>String</i>
    <a href="#ipv6" title="Ipv6">Ipv6</a>: <i>String</i>
    <a href="#maxconn" title="MaxConn">MaxConn</a>: <i>Integer</i>
    <a href="#maxtlsversion" title="MaxTlsVersion">MaxTlsVersion</a>: <i>String</i>
    <a href="#mintlsversion" title="MinTlsVersion">MinTlsVersion</a>: <i>String</i>
    <a href="#name" title="Name">Name</a>: <i>String</i>
    <a href="#overridehost" title="OverrideHost">OverrideHost</a>: <i>String</i>
    <a href="#port" title="Port">Port</a>: <i>Integer</i>
    <a href="#requestcondition" title="RequestCondition">RequestCondition</a>: <i>String</i>
    <a href="#shield" title="Shield">Shield</a>: <i>String</i>
    <a href="#sslcacert" title="SslCaCert">SslCaCert</a>: <i>String</i>
    <a href="#sslcerthostname" title="SslCertHostname">SslCertHostname</a>: <i>String</i>
    <a href="#sslcheckcert" title="SslCheckCert">SslCheckCert</a>: <i>Boolean</i>
    <a href="#sslciphers" title="SslCiphers">SslCiphers</a>: <i>String</i>
    <a href="#sslclientcert" title="SslClientCert">SslClientCert</a>: <i>String</i>
    <a href="#sslclientkey" title="SslClientKey">SslClientKey</a>: <i>String</i>
    <a href="#sslsnihostname" title="SslSniHostname">SslSniHostname</a>: <i>String</i>
    <a href="#usessl" title="UseSsl">UseSsl</a>: <i>Boolean</i>
    <a href="#weight" title="Weight">Weight</a>: <i>Integer</i>
    <a href="#serviceid" title="ServiceId">ServiceId</a>: <i>String</i>
    <a href="#backendname" title="BackendName">BackendName</a>: <i>String</i>
    <a href="#versionid" title="VersionId">VersionId</a>: <i>String</i>
</pre>

## Properties

#### Address

A hostname, IPv4, or IPv6 address for the backend. This is the preferred way to specify the location of your backend.

_Required_: No

_Type_: String

_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

#### AutoLoadbalance

Whether or not this backend should be automatically load balanced. If true, all backends with this setting that don't have a request_condition will be selected based on their weight.

_Required_: No

_Type_: Boolean

_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

#### BetweenBytesTimeout

Maximum duration in milliseconds that Fastly will wait while receiving no data on a download from a backend. If exceeded, the response received so far will be considered complete and the fetch will end. May be set at runtime using bereq.between_bytes_timeout.

_Required_: No

_Type_: Integer

_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

#### ClientCert

Unused

_Required_: No

_Type_: String

_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

#### Comment

A freeform descriptive note.

_Required_: No

_Type_: String

_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

#### ConnectTimeout

Maximum duration in milliseconds to wait for a connection to this backend to be established. If exceeded, the connection is aborted and a synthethic 503 response will be presented instead. May be set at runtime using bereq.connect_timeout.

_Required_: No

_Type_: Integer

_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

#### FirstByteTimeout

Maximum duration in milliseconds to wait for the server response to begin after a TCP connection is established and the request has been sent. If exceeded, the connection is aborted and a synthethic 503 response will be presented instead. May be set at runtime using bereq.first_byte_timeout.

_Required_: No

_Type_: Integer

_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

#### Healthcheck

The name of the healthcheck to use with this backend.

_Required_: No

_Type_: String

_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

#### Ipv4

IPv4 address of the backend. May be used as an alternative to address to set the backend location.

_Required_: No

_Type_: String

_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

#### Ipv6

IPv6 address of the backend. May be used as an alternative to address to set the backend location.

_Required_: No

_Type_: String

_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

#### MaxConn

Maximum number of concurrent connections this backend will accept.

_Required_: No

_Type_: Integer

_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

#### MaxTlsVersion

Maximum allowed TLS version on SSL connections to this backend. If your backend server is not able to negotiate a connection meeting this constraint, a synthetic 503 error response will be generated.

_Required_: No

_Type_: String

_Allowed Values_: <code>1</code> | <code>1.0</code> | <code>1.1</code> | <code>1.2</code> | <code>1.3</code>

_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

#### MinTlsVersion

Minimum allowed TLS version on SSL connections to this backend. If your backend server is not able to negotiate a connection meeting this constraint, a synthetic 503 error response will be generated.

_Required_: No

_Type_: String

_Allowed Values_: <code>1</code> | <code>1.0</code> | <code>1.1</code> | <code>1.2</code> | <code>1.3</code>

_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

#### Name

The name of the backend.

_Required_: Yes

_Type_: String

_Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)

#### OverrideHost

If set, will replace the client-supplied HTTP Host header on connections to this backend. Applied after VCL has been processed, so this setting will take precedence over changing bereq.http.Host in VCL.

_Required_: No

_Type_: String

_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

#### Port

Port on which the backend server is listening for connections from Fastly. Setting port to 80 or 443 will also set use_ssl automatically (to false and true respectively), unless explicitly overridden by setting use_ssl in the same request.

_Required_: No

_Type_: Integer

_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

#### RequestCondition

Name of a Condition, which if satisfied, will select this backend during a request. If set, will override any auto_loadbalance setting. By default, the first backend added to a service is selected for all requests.

_Required_: No

_Type_: String

_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

#### Shield

Identifier of the POP to use as a shield (https://docs.fastly.com/en/guides/shielding).

_Required_: No

_Type_: String

_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

#### SslCaCert

CA certificate attached to origin.

_Required_: No

_Type_: String

_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

#### SslCertHostname

Overrides ssl_hostname, but only for cert verification. Does not affect SNI at all.

_Required_: No

_Type_: String

_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

#### SslCheckCert

Be strict on checking SSL certs. [Default true]

_Required_: No

_Type_: Boolean

_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

#### SslCiphers

List of OpenSSL ciphers (https://www.openssl.org/docs/manmaster/man1/ciphers.html) to support for connections to this origin. If your backend server is not able to negotiate a connection meeting this constraint, a synthetic 503 error response will be generated.

_Required_: No

_Type_: String

_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

#### SslClientCert

Client certificate attached to origin.

_Required_: No

_Type_: String

_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

#### SslClientKey

Client key attached to origin.

_Required_: No

_Type_: String

_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

#### SslSniHostname

Overrides ssl_hostname, but only for SNI in the handshake. Does not affect cert validation at all.

_Required_: No

_Type_: String

_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

#### UseSsl

Whether or not to require TLS for connections to this backend.

_Required_: No

_Type_: Boolean

_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

#### Weight

Weight used to load balance this backend against others. May be any positive integer. If auto_loadbalance is true, the chance of this backend being selected is equal to its own weight over the sum of all weights for backends that have auto_loadbalance set to true.

_Required_: No

_Type_: Integer

_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

#### ServiceId

Alphanumeric string identifying the service. Read-only.

_Required_: Yes

_Type_: String

_Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)

#### BackendName

The name of the backend. Read-only

_Required_: No

_Type_: String

_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

#### VersionId

Alphanumeric string identifying the service version.

_Required_: Yes

_Type_: String

_Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)

## Return Values

### Fn::GetAtt

The `Fn::GetAtt` intrinsic function returns a value for a specified attribute of this type. The following are the available attributes and sample return values.

For more information about using the `Fn::GetAtt` intrinsic function, see [Fn::GetAtt](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/intrinsic-function-reference-getatt.html).

#### Version

Integer identifying a backend version. Read-only.

#### CreatedAt

Date and time in ISO 8601 format. Read-only.

#### UpdatedAt

Date and time in ISO 8601 format. Read-only.

#### DeletedAt

Date and time in ISO 8601 format. Read-only.

