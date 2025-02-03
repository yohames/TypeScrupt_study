import { User } from "./Model/User";

const user1Data = { id: 1 };
const user1 = new User(user1Data);

// ========= GET =========
// console.log(user1.get("name"));

// ========= SET =========
user1.set({ name: "Abreham", age: 27 });
// console.log(user1.get("name"));

// ========= ON event listener =========
user1.events.on("click", () => {
  console.log("hey this is a custom event trigger");
});

user1.events.trigger("click");

// =========== Data fetching ===========
user1.fetch();
// setTimeout(() => {
//   console.log("show me the user", user1);
// }, 3000);

// ============== Data Inserting ==============
user1.save();

// axios.post("http://localhost:3000/users", {
//   id: 1,
//   name: "abebe",
//   age: 32,
// });
