import {resource} from "./handlers";
import {ResourceModel, TypeConfigurationModel} from "./models";
import {Account} from "aws-sdk";

var createdModel: ResourceModel;
jest.setTimeout(1000000);

describe("ApplicationHandler tests", () => {
    it("should create app", async () => {
            createdModel = new ResourceModel(<ResourceModel>{
                name: "MyDictionary",
                serviceId: "0lA7DJyR4OghKSdVc4Zpjv",
                versionId: "2"
            });

            let updateModel = new ResourceModel(<ResourceModel>{
                name: "UpdatedDictionary",
                serviceId: "0lA7DJyR4OghKSdVc4Zpjv",
                versionId: "2"
            });

            let typeConfiguration: TypeConfigurationModel = new TypeConfigurationModel(<TypeConfigurationModel>{
                    fastlyAccess: {
                        token: "A9AWnOVTFMkpePK9iYUTBJV1axAk5xDQ"
                    }
                }
            )
            let c = await resource.create(createdModel, typeConfiguration);
            let g = await resource.get(createdModel, typeConfiguration);
            let u = await resource.update(updateModel, typeConfiguration, createdModel)
            g = await resource.get(updateModel, typeConfiguration);
            let foo = await resource.list(createdModel, typeConfiguration);
            console.log(foo);
        }
    )

})