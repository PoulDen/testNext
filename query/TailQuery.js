import { gql } from "@apollo/client";
export const GET_LONG_TAILS = gql`
  {
    long_tails {
      id
      tail
      json_id
    }
  }
`;

export const GET_ONE_LONG_TAIL = gql`
  query LongTail($tail: String) {
    long_tails_aggregate(where: { tail: { _eq: $tail } }) {
      nodes {
        id
        json_id
        tail
      }
    }
  }
`;
