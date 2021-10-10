export const schema = gql`
  type Setting {
    id: String!
    darkMode: Boolean
    userId: String!
    user: User!
  }

  type Query {
    settings: [Setting!]! @requireAuth
    setting(id: String!): Setting @requireAuth
  }

  input CreateSettingInput {
    darkMode: Boolean
    userId: String!
  }

  input UpdateSettingInput {
    darkMode: Boolean
    userId: String
  }

  type Mutation {
    createSetting(input: CreateSettingInput!): Setting! @requireAuth
    updateSetting(id: String!, input: UpdateSettingInput!): Setting!
      @requireAuth
    deleteSetting(id: String!): Setting! @requireAuth
  }
`
