import { gql } from 'apollo-server';

const typeDefs = gql`

    type Todo {
        id: ID!,
        title: String!,
        completed: Boolean!,
        tags: [String]!
    }

    type Query {
        getTodos: [Todo]!
    }

    type Mutation {
        addTodo(title: String!, tags: [String]!) : Todo
    }

`;


export default typeDefs;