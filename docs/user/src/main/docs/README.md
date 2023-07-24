# Fastly CloudFormation Resources

This collection of CloudFormation resource types allow Fastly to be controlled using AWS CloudFormation.

### Why would I want to do this?

Infrastructure-as-code such as CloudFormation is one of the best ways to create and maintain infrastructure that is reliable and secure. Or a CloudFormation template might just be more convenient for some types of automation.

Here is a sample use case this supports:

* [Set up a new Fastly service](stories/creating-a-service)

### How do I get started?

In the AWS CloudFormation UI, find the Fastly types in the third-party registry and activate them.
Alternatively follow the [Developer](docs/dev) instructions to install them manually.

You will need to set up a [Type Configuration](https://awscli.amazonaws.com/v2/documentation/api/latest/reference/cloudformation/set-type-configuration.html)
for each of the activated types, containing a Fastly **[API Token](https://docs.fastly.com/en/guides/using-api-tokens)** in order to reach the Fastly API correctly.
It is recommended to set the token into Systems Manager's secure parameter store,
e.g. as `/path/to/fastly/token` and then it can be applied any of the Fastly types,
e.g. `Fastly::Services::Service`, using:

```
aws cloudformation set-type-configuration \
--region eu-north-1 \
--type RESOURCE \
--type-name Fastly::Services::Service \
--configuration-alias default \
--configuration '{"FastlyAccess": {"Token": "{{resolve:ssm-secure:/path/to/fastly/token}}"}}'
```

You should then be able to run the example use cases above or build your own using the full reference below.

### What is supported?

This project does not support all the objects nor concepts in Fastly.
For many things there just isn't a compelling use case, and of course there are a lot.
We have focussed on those objects and properties which have seemed most useful.
If we missed something, open an issue to let us know, or even better, contribute an extension!

The **Full Fastly CloudFormation Resources Reference** is available [here](resources).

### Implementation notes

For the Fastly::Services::Version resource, Fastly does not support the deletion of service versions. In order
to support the CFN framework, which requires that resources can be deleted, the comment field is set to "CFN-DELETED"
when a service resource is deleted, which causes the version to be ignored by subsequent list and get operations.

Once a Fastly::Services::Version resource has been activated by the creation of a Fastly::Services::ActiveVersion resource,
it, along with its dependent domains becomes immutable, and can no longer be edited or deleted via the Fastly API. Child
resources created as part of a Fastly::Services::Service resource will be deleted upon deletion of the parent Fastly::Services::Service
resource