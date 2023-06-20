import axios, { AxiosResponse } from 'axios';

import { FetchPictureDto } from '../dto/fetch-picture.dto';
import { FetchPictureQuery } from '../dto/fetch-picture.query';

const API_ORIGIN = "https://picsum.photos/";

export class PictureApi {
  static fetchPictures(
    query: FetchPictureQuery
  ): Promise<AxiosResponse<FetchPictureDto[]>> {
    const path = `${API_ORIGIN}v2/list/`;

    return axios.get(path, { params: { ...query, seed: "foobar" } });
  }

  static fetchPicture(id: number): Promise<AxiosResponse<FetchPictureDto>> {
    const path = `${API_ORIGIN}id/${id}/info`;

    return axios.get(path);
  }

  static updatePicture(id: number): Promise<AxiosResponse<FetchPictureDto>> {
    const path = `${API_ORIGIN}id/${id}/info`;
    return axios.put(path);
  }
}
