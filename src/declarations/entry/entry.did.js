export const idlFactory = ({ IDL }) => {
  const Entry = IDL.Service({
    'getAuthor' : IDL.Func([], [IDL.Principal], ['query']),
    'getContent' : IDL.Func([], [IDL.Text], ['query']),
    'getIsPublic' : IDL.Func([], [IDL.Text], ['query']),
    'getMeToos' : IDL.Func([], [IDL.Text], ['query']),
    'getPrincipal' : IDL.Func([], [IDL.Principal], ['query']),
    'getTitle' : IDL.Func([], [IDL.Text], ['query']),
    'incrementMeeTooCount' : IDL.Func([], [], ['oneway']),
    'setIsPublic' : IDL.Func([IDL.Bool], [IDL.Text], []),
  });
  return Entry;
};
export const init = ({ IDL }) => {
  return [IDL.Text, IDL.Text, IDL.Principal];
};
