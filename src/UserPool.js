import { CognitoUserPool } from "amazon-cognito-identity-js";

const poolData = {
    UserPoolId: "eu-west-2_7oOtO9RNY",
    ClientId: "uromb9i1k07s9emlpmiclatgf"
}

export default new CognitoUserPool(poolData);