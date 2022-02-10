export default interface IContactsData {
  id: number;
  name: string;
  phone: string;
  username: string;
  email: string;
  website: string;
  address: {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
    geo: {
      lat: string;
      lng: string;
    };
  };
  company: {
    bs: string;
    catchPhrase: string;
    name: string;
  };
}
