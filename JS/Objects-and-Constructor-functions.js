// a single js object
var houseKeeper = {
    name: "Cindy",
    age: 49,
    years_experience: 12
}
// instantiate it
cindy = houseKeeper;
cindy.name;


// a factory (or constructor) function
function HouseKeeper(name, age, years_experience) {
    this.name = name,
    this.age = age,
    this.years_experience = years_experience
}

var bob = new HouseKeeper("bob", 21, 4);
bob.age;