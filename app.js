class Media {
    constructor(title) {
      this._title = title;
      this._isCheckedOut = false;
      this._ratings = [];
    }
  
    // Getter for title
    get title() {
      return this._title;
    }
  
    // Getter for isCheckedOut
    get isCheckedOut() {
      return this._isCheckedOut;
    }
  
    // Setter for isCheckedOut
    set isCheckedOut(value) {
      this._isCheckedOut = value;
    }
  
    // Getter for ratings
    get ratings() {
      return this._ratings;
    }
  
    // Method to toggle the checkout status
    toggleCheckOutStatus() {
      this._isCheckedOut = !this._isCheckedOut;
    }
  
    // Method to get the average rating
    getAverageRating() {
      const sum = this._ratings.reduce((accumulator, rating) => accumulator + rating, 0);
      return sum / this._ratings.length;
    }
  
    // Method to add a rating
    addRating(rating) {
      this._ratings.push(rating);
    }
  }
  
  class Book extends Media {
    constructor(author, title, pages) {
      super(title); // Call the parent class's constructor with the title argument
      this._author = author;
      this._pages = pages;
    }
  
    // Getter for author
    get author() {
      return this._author;
    }
  
    // Getter for pages
    get pages() {
      return this._pages;
    }
  }
  
  class Movie extends Media {
    constructor(director, title, runTime) {
      super(title);
      this._director = director;
      this._runTime = runTime;
    }
  
    // Getter for director
    get director() {
      return this._director;
    }
  
    // Getter for runTime
    get runTime() {
      return this._runTime;
    }
  }
  
  // Create a Book instance
  const historyOfEverything = new Book('Bill Bryson', 'A Short History of Nearly Everything', 544);
  
  // Call .toggleCheckOutStatus() on the historyOfEverything instance
  historyOfEverything.toggleCheckOutStatus();

  // Log the value saved to the isCheckedOut property in the historyOfEverything instance
  console.log(historyOfEverything.isCheckedOut); // Output: true

  //ratings
  historyOfEverything.addRating(4);
  historyOfEverything.addRating(5);
  historyOfEverything.addRating(5);
  
  // Call .getAverageRating() on historyOfEverything
  console.log(historyOfEverything.getAverageRating()); // Output: 4.666666666666667  

  // Example use
  console.log(historyOfEverything.title); // Output: A Short History of Nearly Everything
  console.log(historyOfEverything.author); // Output: Bill Bryson
  console.log(historyOfEverything.pages); // Output: 544

  // Create a Movie instance
  const speed = new Movie('Jan de Bont', 'Speed', 116); 

  // Call .toggleCheckOutStatus() on the speed instance
  speed.toggleCheckOutStatus();

  //log the value saved to the isCheckedOut property in the speed instance 
  console.log(speed.isCheckedOut); // Output: true

  
  // Add ratings to speed
  speed.addRating(1);
  speed.addRating(1);
  speed.addRating(5);

  // Log the ratings and the average rating for speed
  console.log(speed.getAverageRating()); // Output: 2.3333333333333335

  //example use
  console.log(speed.title); // Output: Speed
  console.log(speed.director); // Output: Jan de Bont
  console.log(speed.runTime); // Output: 116

  