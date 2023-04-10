import { ICharacter, ICharactersInfo } from './api-interfaces';
import store from '../../redux/store';
import { setMessage } from '../../redux/reducers';

const BASE_LINK = 'https://rickandmortyapi.com/api';
const API_LINKS = {
  BY_PAGE: (pageNumber: number) => `${BASE_LINK}/character/?page=${pageNumber}`,
  BY_ID: (characterId: number) => `${BASE_LINK}/character/${characterId}`,
  BY_SEARCH: (search: string, pageNumber: number) =>
    `${BASE_LINK}/character/?page=${pageNumber}&name=${search}`,
};

export const getCharacters = {
  all: (pageNumber: number): Promise<ICharactersInfo | void> =>
    getRequest(API_LINKS.BY_PAGE(pageNumber)),
  one: (characterId: number): Promise<ICharacter | void> =>
    getRequest(API_LINKS.BY_ID(characterId)),
  bySearch: (search: string, pageNumber: number): Promise<ICharactersInfo | void> =>
    getRequest(API_LINKS.BY_SEARCH(search, pageNumber)),
};

export function getRequest(link: string) {
  return fetch(link)
    .then((response) => response.json())
    .then((result) => {
      if (!result.error) return result;
      store.dispatch(
        setMessage({
          type: 'error',
          text: result.error,
        })
      );
    });
}
