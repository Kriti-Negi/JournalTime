import Principal "mo:base/Principal";
import Debug "mo:base/Debug";
import Nat "mo:base/Nat";

actor class Entry(title: Text, content: Text, author: Principal) = this {
    
    private var entryTitle = title;
    private var entryContent = content;
    private var entryAuthor = author;
    private var meeToos = 0;

    private var isPublic = false;
    
    public query func getTitle(): async Text{
        return entryTitle;
    };

    public query func getContent(): async Text{
        return entryContent;
    };

    public query func getAuthor(): async Principal{
        return entryAuthor;
    };

    public query func getPrincipal(): async Principal{
        return Principal.fromActor(this);
    };

    public func setIsPublic(isP: Bool): async Text{
        isPublic := isP;
        return "done";
    };

    public query func getIsPublic(): async Text{
        if(isPublic){
            return "Yes";
        }else{
            return "No";
        }
    };

    public func incrementMeeTooCount(){
        meeToos := meeToos + 1;
    };

    public query func getMeToos(): async Text{
        return Nat.toText(meeToos);
    }
}