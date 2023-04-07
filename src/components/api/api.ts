import { ICharacter, ICharactersInfo } from './api-interfaces';
import { IMessageFunction } from '../message/message-interfaces';

const BASE_LINK = 'https://rickandmortyapi.com/api';
const API_LINKS = {
  BY_PAGE: (pageNumber: number) => `${BASE_LINK}/character/?page=${pageNumber}`,
  BY_ID: (characterId: number) => `${BASE_LINK}/character/${characterId}`,
  BY_SEARCH: (search: string, pageNumber: number) =>
    `${BASE_LINK}/character/?page=${pageNumber}&name=${search}`,
};

export const getCharacters = {
  all: (pageNumber: number, message: IMessageFunction): Promise<ICharactersInfo | void> =>
    getRequest(API_LINKS.BY_PAGE(pageNumber), message),
  one: (characterId: number, message: IMessageFunction): Promise<ICharacter | void> =>
    getRequest(API_LINKS.BY_ID(characterId), message),
  bySearch: (
    search: string,
    pageNumber: number,
    message: IMessageFunction
  ): Promise<ICharactersInfo | void> =>
    getRequest(API_LINKS.BY_SEARCH(search, pageNumber), message),
};

export function getRequest(link: string, message: IMessageFunction) {
  return fetch(link)
    .then((response) => response.json())
    .then((result) => {
      if (!result.error) return result;

      message({
        type: 'error',
        text: result.error,
      });
    });
}
