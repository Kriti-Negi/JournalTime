export const idlFactory = ({ IDL }) => {
  return IDL.Service({
    'addAnonEntry' : IDL.Func([IDL.Principal], [IDL.Text], []),
    'addEntry' : IDL.Func([IDL.Text, IDL.Text], [IDL.Text], []),
    'getAllEntriesAnonymous' : IDL.Func(
        [IDL.Principal],
        [IDL.Vec(IDL.Principal)],
        ['query'],
      ),
    'getAllEntriesOfOwner' : IDL.Func(
        [IDL.Principal],
        [IDL.Vec(IDL.Principal)],
        ['query'],
      ),
  });
};
export const init = ({ IDL }) => { return []; };
