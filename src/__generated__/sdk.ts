import { DocumentNode } from 'graphql';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  /** The `ID` scalar type represents a unique identifier, often used to refetch an object or as key for a cache. The ID type appears in a JSON response as a String; however, it is not intended to be human-readable. When expected as an input type, any string (such as `"4"`) or integer (such as `4`) input value will be accepted as an ID. */
  ID: string;
  /** The `String` scalar type represents textual data, represented as UTF-8 character sequences. The String type is most often used by GraphQL to represent free-form human-readable text. */
  String: string;
  Boolean: boolean;
  Int: number;
  /** The `Float` scalar type represents signed double-precision fractional values as specified by [IEEE 754](https://en.wikipedia.org/wiki/IEEE_floating_point). */
  Float: number;
};

export type Query = {
  __typename?: 'Query';
  /** GET /users/{args.page} */
  users?: Maybe<UserResponse>;
};


export type QueryUsersArgs = {
  page?: Maybe<Scalars['ID']>;
};

export type UserResponse = {
  __typename?: 'UserResponse';
  /** User pulled from the REST API */
  data?: Maybe<User>;
};

export type User = {
  __typename?: 'User';
  id?: Maybe<Scalars['Float']>;
  email?: Maybe<Scalars['String']>;
  first_name?: Maybe<Scalars['String']>;
  last_name?: Maybe<Scalars['String']>;
  avatar?: Maybe<Scalars['String']>;
};

export type GetUserQueryVariables = Exact<{
  page?: Maybe<Scalars['ID']>;
}>;


export type GetUserQuery = (
  { __typename?: 'Query' }
  & { users?: Maybe<(
    { __typename?: 'UserResponse' }
    & { data?: Maybe<(
      { __typename?: 'User' }
      & Pick<User, 'id' | 'email' | 'first_name' | 'last_name' | 'avatar'>
    )> }
  )> }
);


export const GetUserDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"getUser"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"page"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"users"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"page"},"value":{"kind":"Variable","name":{"kind":"Name","value":"page"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"first_name"}},{"kind":"Field","name":{"kind":"Name","value":"last_name"}},{"kind":"Field","name":{"kind":"Name","value":"avatar"}}]}}]}}]}}]} as unknown as DocumentNode;
export type Requester<C= {}> = <R, V>(doc: DocumentNode, vars?: V, options?: C) => Promise<R>
export function getSdk<C>(requester: Requester<C>) {
  return {
    getUser(variables?: GetUserQueryVariables, options?: C): Promise<GetUserQuery> {
      return requester<GetUserQuery, GetUserQueryVariables>(GetUserDocument, variables, options);
    }
  };
}
export type Sdk = ReturnType<typeof getSdk>;