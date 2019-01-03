const mongoose = require('mongoose');
mongoose.connect("mongodb://localhost:27017/YourDB", { useNewUrlParser: true });
const Schema = mongoose.Schema;


const personSchema = new Schema({
  firstName: String,
  lastName: String,
  age: Number
});

const Person = mongoose.model('Person', personSchema);
let david = new Person({ firstName: "David", lastName: "Smith", age: 25 });
console.log(david);

david.save();