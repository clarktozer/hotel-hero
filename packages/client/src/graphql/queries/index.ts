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

export const PLACES = gql`
    query Autocomplete($input: String!) {
        autocomplete(input: $input) {
            id
            title
            subtitle
        }
    }
`;
