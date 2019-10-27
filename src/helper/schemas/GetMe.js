import {gql} from 'apollo-boost';

const GetMe = gql`
  {
    me{
      username
      mail
      avatar{
        media
      }
      rank{
          rank
      }
      authority{
          name
          level
      }
      details{
        country
        location
        firstName
        lastName
        phone
        birthday
      }
    }
  }
`;
export default GetMe;
