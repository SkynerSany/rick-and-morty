export interface ICharactersInfo {
  info: {
    count: number;
    pages: number;
    next: null | string;
    prev: null | string;
  };
  results: ICharacter[];
}

export type IApiError = {
  error: string;
};

export interface ICharacter {
  id: number;
  name: string;
  status: string;
  species: string;
  type: string;
  gender: string;
  origin: {
    name: string;
    url: string;
  };
  location: {
    name: string;
    url: string;
  };
  image: string;
  episode: [string];
  url: string;
  created: string;
}
