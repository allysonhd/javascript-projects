// Define your Book class here:
class Book {
  constructor(title, author, copyrightdate, isbn, numberpages, timescheckedout, bookdiscarded) {
    this.title           = title;
    this.author          = author;
    this.copyrightdate   = copyrightdate;
    this.isbn            = isbn;
    this.numberpages     = numberpages;
    this.timescheckedout = timescheckedout;
    this.bookdiscarded   = bookdiscarded;
  }
  checkOut(uses = 1) {
    this.timescheckedout += uses;
  }
}
//let Story = new Book('Golden', 'Ally Scott', 1989,'F600ING', 372,);
//console.log(Story);

// Define your Manual and Novel classes here:
//Manuals must be thrown out if they are over 5 years old
class Manual extends Book {
  constructor(title, author, copyrightdate, isbn, numberpages, timescheckedout, bookdiscarded) {
   super(title, author, copyrightdate, isbn, numberpages, timescheckedout, bookdiscarded);
  }
  throwOut(currentYear) {
    if (currentYear - this.copyrightdate > 5) {
      this.bookdiscarded = "yes";
    }
  }
}
//Novels must be thrown out if they have been checked out over 100 times
class Novel extends Book {
  constructor(title, author, copyrightdate, isbn, numberpages, timescheckedout, bookdiscarded) {
    super(title, author,copyrightdate, isbn, numberpages, timescheckedout,bookdiscarded);
  }
  throwOut() {
    if (this.timescheckedout > 100) {
      this.bookdiscarded = "yes";
    }
  }
}
// Declare the objects for exercises 2 and 3 here:
let novelOne = new Novel(
  "Pride and Prejudice",
  "Jane Austen",
  1813,
  "1111111111111",
  432,
  32,
  "No"
);

let manualOne = new Manual(
  "Top Secret Shuttle Building Manual",
  "Redacted",
  2013,
  "0000000000000",
  1147,
  1,
  "No"
);
// Code exercises 4 & 5 here:

novelOne.checkOut();
console.log(novelOne);
novelOne.throwOut();
console.log(novelOne);
manualOne.throwOut(2024);
console.log(manualOne);
