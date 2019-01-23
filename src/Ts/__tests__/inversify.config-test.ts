import resolver from "../inversify.config";
import { APIs } from "../Types";
import { interfaces } from "inversify";
import { AuthorizeApi } from "../Api";

it("Authorize API resolve instance", async () => {
  const factory = resolver.get<interfaces.Factory<AuthorizeApi>>(
    APIs.AuthorizeApi
  );

  let instance = <AuthorizeApi>factory();
  console.log(instance);
  // instance.test();
  var apiCall = await instance.mobileToken({
    username: "11111111111",
    password: "123"
  });

  console.log("APICALL:", apiCall);
});
