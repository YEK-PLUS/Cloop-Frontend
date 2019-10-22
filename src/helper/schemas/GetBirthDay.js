import { gql } from 'apollo-boost';

function formatDate() {
	const date = new Date();
	const day = date.getDate();
	const month = date.getMonth();
	const year = date.getFullYear();

	return `${year}-${month}-${day}`;
}
const GetBirthDay = (type, date = formatDate()) => gql`
  {
    birthdays(date:"${date}",type:"${type}"){
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
export default GetBirthDay;
