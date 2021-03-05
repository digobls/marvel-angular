import { Injectable } from '@angular/core';

const getApiUrl = () => {
  return 'https://gateway.marvel.com:443/';
};

@Injectable()
export class Constants {
  public static readonly API_ENDPOINT: string = getApiUrl();
  public static readonly API_LIST_CHARACTERS: string =
    Constants.API_ENDPOINT + 'v1/public/characters';
  public static readonly API_CHARACTER: string =
    Constants.API_ENDPOINT + 'v1/public/characters/';
}

