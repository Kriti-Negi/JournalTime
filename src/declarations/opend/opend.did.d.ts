import type { Principal } from '@dfinity/principal';
export interface _SERVICE {
  'addAnonEntry' : (arg_0: Principal) => Promise<string>,
  'addEntry' : (arg_0: string, arg_1: string) => Promise<string>,
  'getAllEntriesAnonymous' : (arg_0: Principal) => Promise<Array<Principal>>,
  'getAllEntriesOfOwner' : (arg_0: Principal) => Promise<Array<Principal>>,
}
