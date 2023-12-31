// Generated by https://quicktype.io

export interface FetchPersonDto {
  results: Result[];
  info: Info;
}

export interface Info {
  seed: string;
  results: number;
  page: number;
  version: string;
}

export interface Result {
  gender: Gender;
  name: Name;
  location: Location;
  email: string;

  phone: string;
  cell: string;
  id: ID;

  nat: string;
}

export enum Gender {
  Female = "female",
  Male = "male",
}

export interface ID {
  name: string;
  value: string;
}

export interface Name {
  title: string;
  first: string;
  last: string;
}
