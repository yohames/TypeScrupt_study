import { User } from "./Model/User";
import { UserEdit } from "./View/UserEdit";
const rootUrl = "http://localhost:3000/users";

// const users = new Collection<User, UserProps>(rootUrl, (json: UserProps) => {
//   return User.buildUser(json);
// });
// const users = User.buildUserCollection();

// users.on("change", () => {
//   console.log("All Users Fetched :", users);
// });
// users.fetch();

const user = User.buildUser({ name: "NAME", age: 20 });
const root = document.getElementById("root");
if (root) {
  const userEdit = new UserEdit(root, user);
  userEdit.render();
}

// const user1Data = { id: "1" };
// const user1 = User.buildUser(user1Data);
// const user1 = new User(user1Data);

// ========= GET =========
// console.log(user1.get("id"));

// // ========= SET =========
// user1.set({ name: "ooooooooo Abreham Latest", age: 27 });
// console.log(user1.get("name"));

// // ========= ON event listener =========
// user1.on("change", () => {
//   console.log("Change detected", user1);
// });

// // =========== Data fetching ===========
// user1.fetch();

// // ============== Data Inserting ==============
// user1.save();

// console.log("Is user Admin:", user1.isAdminUser());
