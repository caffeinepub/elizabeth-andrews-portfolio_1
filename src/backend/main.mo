import Text "mo:core/Text";
import Time "mo:core/Time";
import Array "mo:core/Array";
import Map "mo:core/Map";
import Iter "mo:core/Iter";
import Principal "mo:core/Principal";

actor {
  // Types
  type Message = {
    name : Text;
    email : Text;
    message : Text;
    timestamp : Time.Time;
  };

  type PortfolioItem = {
    title : Text;
    category : Text;
    url : Text;
    context : Text;
    date : Time.Time;
  };

  let messages = Map.empty<Text, Message>();
  let portfolioItems = Map.empty<Text, PortfolioItem>();
  let pageContent = Map.empty<Text, Text>();

  // Contact Form Submission
  public shared ({ caller }) func submitContactForm(name : Text, email : Text, message : Text) : async () {
    let timestamp = Time.now();
    let newMessage : Message = {
      name;
      email;
      message;
      timestamp;
    };
    messages.add(timestamp.toText(), newMessage);
  };

  // Get All Messages (Admin Only)
  public query ({ caller }) func getAllMessages(adminId : Principal) : async [Message] {
    // Simple admin check (replace with actual admin validation)
    if (adminId.isAnonymous()) {
      return [];
    };
    messages.values().toArray();
  };

  // Portfolio Management
  public shared ({ caller }) func addPortfolioItem(title : Text, category : Text, url : Text, context : Text, date : Time.Time) : async () {
    let newItem : PortfolioItem = {
      title;
      category;
      url;
      context;
      date;
    };
    portfolioItems.add(title, newItem);
  };

  public query ({ caller }) func getPortfolioByCategory(category : Text) : async [PortfolioItem] {
    portfolioItems.values().toArray().filter(func(item) { item.category == category });
  };

  public query ({ caller }) func getAllPortfolioItems() : async [PortfolioItem] {
    portfolioItems.values().toArray();
  };

  // Page Content Management
  public shared ({ caller }) func updatePageContent(key : Text, content : Text) : async () {
    pageContent.add(key, content);
  };

  public query ({ caller }) func getPageContent(key : Text) : async Text {
    switch (pageContent.get(key)) {
      case (null) { "" };
      case (?content) { content };
    };
  };

  public query ({ caller }) func getAllPageContent() : async [(Text, Text)] {
    pageContent.toArray();
  };
};
