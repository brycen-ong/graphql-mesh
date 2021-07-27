import { getSdk } from "./__generated__/sdk";
import { findAndParseConfig } from '@graphql-mesh/config';
import { getMesh } from '@graphql-mesh/runtime';

async function getUser() {
  const meshConfig = await findAndParseConfig();
  const { sdkRequester } = await getMesh(meshConfig);
  const sdk = getSdk(sdkRequester);

  const { users } = await sdk.getUser({ page: "1" });
  console.log(users);
}

getUser();