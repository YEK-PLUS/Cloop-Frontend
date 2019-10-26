import { gql } from 'apollo-boost';

const GetTranslates = gql`
{
  translates{
    word,
    translate{
        translated_word,
        lang,
    }
  }
}
`;
export default GetTranslates;
