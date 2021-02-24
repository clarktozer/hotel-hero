import { gql } from "@apollo/client";

export const ME = gql`
    query {
        me {
            id
            email
            name
            avatar
        }
    }
`;

export const LOG_OUT = gql`
    mutation {
        logout
    }
`;