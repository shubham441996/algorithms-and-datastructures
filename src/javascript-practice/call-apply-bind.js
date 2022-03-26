// Different way of borrowing a function from other object.
let obj1 = {
  firstName: "John",
  lastName: "Rachel",
  printFullName: function (...skills) {
    console.log(this.firstName + " " + this.lastName + " Skills " + skills);
  },
};

let obj2 = {
  firstName: "Shubham",
  lastName: "Paliwal",
};

//obj1.printFullName("Javascript", "React", "Angular");

// Call Apply Bind
//Call
obj1.printFullName.call(obj2, "From Call", "Javascript", "Angular");

//Apply
obj1.printFullName.apply(obj2, ["From Apply", "Javascript", "Angular"]);

//Bind
let printMyDetails = obj1.printFullName.bind(
  obj2,
  "From Bind",
  "Javascript",
  "Angular"
);

printMyDetails();

Function.prototype.myBind = function (...args) {
  let self = this;
  console.log(self, args);
  let rest = args.slice(1);
  return function (...args2) {
    self.call(args[0], [...rest, ...args2]);
  };
};

let printMyDetailsFromMyBind = obj1.printFullName.myBind(
  obj2,
  "From My Bind",
  "Javascript",
  "Angular"
);

printMyDetailsFromMyBind("This will Work");
