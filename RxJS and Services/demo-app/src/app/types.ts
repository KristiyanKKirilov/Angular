export interface SimpleUser {
    name: string;
    age: number;
}

interface Address {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
    geo: Geo;

}

interface Geo{
    lat: string;
    lng: string;
}

interface Company{
    name: string;
    catchPhrase: string;
    bs: string;
}

interface UserDetails{
    id: number;
    name: string;
    username: string;
    email: string;
    phone: string;
}
export interface ComplexUser extends UserDetails{ 
    adddres: Address
    website: string;
    company: Company;
}
