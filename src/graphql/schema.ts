import { makeExecutableSchema } from 'graphql-tools'
const users: any[] = [
    {
        id: 1,
        name: 'Luciano',
        email: 'lucianobragaweb@gmail.com'
    },
    {
        id: 1,
        name: 'Andreza',
        email: 'andreza@gmail.com'
    }
]

const typeDefs = `
    type User {
        id: ID!
        name: String!
        email: String!
    }

    type Query {
        allUsers: [User!]!
    }
`

const resolvers = {
    Query: {
        allUsers: () => users
    }
}

export default makeExecutableSchema({ typeDefs, resolvers})