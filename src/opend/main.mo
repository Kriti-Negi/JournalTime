import Principal "mo:base/Principal";
import HashMap "mo:base/HashMap";
import List "mo:base/List";
import Debug "mo:base/Debug";
import Array "mo:base/Array";
import Nat "mo:base/Nat";
import EntryActorClass "../Entry/entry";

actor OpenD{

  var journalEntriesByOwner = HashMap.HashMap<Principal, List.List<Principal>>(1, Principal.equal, Principal.hash);
  var anonymousJournalEntries = HashMap.HashMap<Principal, List.List<Principal>>(1, Principal.equal, Principal.hash);
  
  public shared(msg) func addEntry(entryTitle: Text, entryContent: Text): async Text{

    let prin : Principal = msg.caller;

    let newEntry = await EntryActorClass.Entry(entryTitle, entryContent, prin);
    let newEntryId : Principal = await newEntry.getPrincipal();

    var entryList : List.List<Principal> = switch(journalEntriesByOwner.get(prin)){
      case null List.nil<Principal>();
      case (?result) result;
    };
    
    entryList := List.push(newEntryId, entryList);
    journalEntriesByOwner.put(msg.caller, entryList);
    return Principal.toText(prin);
    
  };

  public query func getAllEntriesOfOwner(id: Principal): async [Principal] {
    Debug.print(Principal.toText(id));
    var ownersEntries : List.List<Principal> = switch(journalEntriesByOwner.get(id)){
      case null List.nil<Principal>();
      case (?result) result;
    };
    return List.toArray(ownersEntries);
  };

  public query func getAllEntriesAnonymous(id: Principal): async [Principal] {
    var anonEntries : List.List<Principal> = switch(anonymousJournalEntries.get(id)){
      case null List.nil<Principal>();
      case (?result) result;
    };
    return List.toArray(anonEntries);
  };

  public shared(msg) func addAnonEntry(objectPrincipal: Principal): async Text{

    var author : Principal = msg.caller;

    var authorAnonEntries : List.List<Principal> = switch(anonymousJournalEntries.get(author)){
      case null List.nil<Principal>();
      case (?result) result;
    };

    authorAnonEntries := List.push(objectPrincipal, authorAnonEntries);

    anonymousJournalEntries.put(author, authorAnonEntries);
    return "did something";
  };
};
