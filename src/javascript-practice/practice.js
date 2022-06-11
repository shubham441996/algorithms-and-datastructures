let obj1 = {
  firstName: "Shubham",
  lastName: "Paliwal",
  printFullName: function (...args) {
    console.log(`${this.firstName} ${this.lastName} Args-${args}`);
  },
};

let obj2 = {
  firstName: "Keshav",
  lastName: "Paliwal",
};

obj1.printFullName.call(obj2, "Angular", "React");
obj1.printFullName.apply(obj2, ["Angular", "React"]);

Function.prototype.myBind = function myBind(...args) {
  let self = this;
  let rest = args.slice(1);
  return function (restArgs) {
    self.call(args[0], ...rest, ...restArgs);
  };
};

printFullName = obj1.printFullName.myBind(obj2);
printFullName(["Angular", "React"]);
