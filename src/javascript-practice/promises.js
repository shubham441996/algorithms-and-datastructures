let promise = new Promise((resolve, reject) => {
  console.log("Hey buddy");
  resolve(
    setTimeout(() => {
      console.log("I am resolved");
    }, 100)
  );
});
promise
  .then(() => {
    console.log("Hey");
  })
  .catch((err) => {
    console.log(err);
  });

Promise.resolve().then(() => console.log(2));
console.log("hi Shubham");
