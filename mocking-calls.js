let users = [
  { ID: 1, name: "Jacob", email: "Jacob@gmail.com" },
  { ID: 2, name: "Nikki", email: "Nikki@gmail.com" },
  { ID: 3, name: "Big Spooky", email: "Dog@gmail.com" },
  { ID: 4, name: "Chester", email: "Cat@gmail.com" },
];
//function that takes id
function fetchUserById(id) {
  // return either resolve or reject values
  return new Promise((resolve, reject) => {
    //delay 1 sec
    setTimeout(() => {
      //find user and store user as a variable
      const userInfo = users.find((user) => user.ID === id);
      // check to see if I have a user
      if (userInfo) {
        // If I do, resolve with that user as the variable
        resolve(userInfo);
        // If I don't, reject with the message below
      } else {
        reject(console.log("No User with that ID"));
      }
    });
  }, 1000);
}

//Tried using async/await for practice, apparently can't work with .find
// async function fetchUserById(id) {
//   try {
//     const user = await users.find((userInfo) => userInfo.ID === id);
//     console.log(user);
//   } catch (error) {
//     console.log("No User with that ID");
//   }
// }
//fetchUserById(1);

// call function
fetchUserById(1)
  // if resolve THEN take the resolve data and print variable
  .then((user) => console.log(user))
  // if reject CATCH the reject error and do what is in reject
  .catch((error) => error);
fetchUserById(2)
  .then((user) => console.log(user))
  .catch((error) => error);
fetchUserById(3)
  .then((user) => console.log(user))
  .catch((error) => error);
fetchUserById(4)
  .then((user) => console.log(user))
  .catch((error) => error);
fetchUserById(5)
  .then((user) => console.log(user))
  .catch((error) => error);
