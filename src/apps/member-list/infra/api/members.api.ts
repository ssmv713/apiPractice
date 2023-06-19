import axios, { AxiosResponse } from 'axios';

import {
  FetchMemberListDto,
  FetchMemberListQuery,
} from '../dto';

const API_ORIGIN = "https://randomuser.me/";

export class MembersApi2 {
  static fetchMemberList(
    query: FetchMemberListQuery
  ): Promise<AxiosResponse<FetchMemberListDto>> {
    const path = `${API_ORIGIN}/api/`;

    return axios.get(path, {
      params: { ...query, seed: "foobar" },
    });
  }

  // static fetchMember(id: number): Promise<AxiosResponse<FetchMemberListDto>> {
  //   const path = `${API_ORIGIN}/api/${id}`;

  //   return axios.get(path);
  // }

  // static createMember(
  //   query: FetchMemberListQuery
  // ): Promise<AxiosResponse<FetchMemberListDto>> {
  //   const path = `${API_ORIGIN}/api/`;

  //   return axios.post(path, {
  //     params: query,
  //   });
  // }

  // static updateMember(
  //   query: UpdateMemberQuery
  // ): Promise<AxiosResponse<FetchMemberListDto>> {
  //   const path = `${API_ORIGIN}/api/`;

  //   return axios.put(path, {
  //     params: query,
  //   });
  // }

  // static deleteMember(
  //   query: FetchMemberListQuery
  // ): Promise<AxiosResponse<FetchMemberListDto>> {
  //   const path = `${API_ORIGIN}/api/`;

  //   return axios.delete(path, {
  //     params: query,
  //   });
  // }

  // fetchMember
  // createMember
  // updateMember
  // deleteMember
}
