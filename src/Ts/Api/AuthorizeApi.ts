import { OperationResult, OperationResultOfT } from "../Models/OperationResult";
import { LoginViewModel } from "../Models/LoginViewModel";
import { LoginResult } from "../Models/LoginResult";
import { ApiContract } from "./";
import { httpMethod } from "../Decorators";

export class AuthorizeApi extends ApiContract {
  constructor() {
    super("main", "api/authorize");
  }

  test = function() {
    return null;
  };

  @httpMethod({ httpMethod: "post" })
  mobileToken = (
    model: LoginViewModel
  ): Promise<OperationResultOfT<LoginResult>> | Promise<OperationResult> =>
    null;

  // default http method is get
  operation = (
    i: number,
    s: string,
    l: number,
    date: Date
  ): Promise<OperationResultOfT<any>> | Promise<OperationResult> => null;

  getType = (): string => "AuthorizeApi";
}
