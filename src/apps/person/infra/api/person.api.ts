import axios, { AxiosResponse } from 'axios';

import { FetchPersonDto } from '../dto/fetch-person.dto';
import { FetchPersonQuery } from '../dto/fetch-person.query';

const API_ORIGIN = "https://randomuser.me/";

export class PersonApi {
  static fetchPerson(
    query: FetchPersonQuery
  ): Promise<AxiosResponse<FetchPersonDto>> {
    const path = `${API_ORIGIN}api/`;
    return axios.get(path, { params: query });
  }
}
