import { Injectable } from '@angular/core';
import { ApiHttpService } from './api-http.service';
import { Constants } from '../../config/constants';

@Injectable({
  providedIn: 'root'
})

export class CharactersApiService {
  TIMES_TAMP = '1565045589';
  PUBLIC_KEY = 'b50ffb3d60de609a4650c26b7958d4bd';
  HASH = 'b08a2d5d134d73eef481e4deba6a7b88';
  URL_PARAM = `?ts=${this.TIMES_TAMP}&apikey=${this.PUBLIC_KEY}&hash=${this.HASH}&limit=20`;

  constructor(private apiService: ApiHttpService) { }

  getAllCharacters(): Promise<any> {
    return this.apiService.get(`${Constants.API_LIST_CHARACTERS}${this.URL_PARAM}`).toPromise();
  }

  getDataCharacter(id: string): Promise<any> {
    return this.apiService.get(`${Constants.API_CHARACTER}/${id}${this.URL_PARAM}`).toPromise();
  }
}
