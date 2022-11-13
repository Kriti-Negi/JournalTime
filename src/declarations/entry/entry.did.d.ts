import type { Principal } from '@dfinity/principal';
export interface Entry {
  'getAuthor' : () => Promise<Principal>,
  'getContent' : () => Promise<string>,
  'getIsPublic' : () => Promise<string>,
  'getMeToos' : () => Promise<string>,
  'getPrincipal' : () => Promise<Principal>,
  'getTitle' : () => Promise<string>,
  'incrementMeeTooCount' : () => Promise<undefined>,
  'setIsPublic' : (arg_0: boolean) => Promise<string>,
}
export interface _SERVICE extends Entry {}
