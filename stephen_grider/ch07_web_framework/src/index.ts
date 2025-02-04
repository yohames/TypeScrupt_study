import { User } from "./Model/User";

const user1Data = { id: "1" };
const user1 = new User(user1Data);

// ========= GET =========
console.log(user1.get("id"));

// ========= SET =========
user1.set({ name: "Manaye Abreham Latest", age: 27 });
console.log(user1.get("name"));

// ========= ON event listener =========
user1.on("change", () => {
  console.log("Change detected", user1);
});

// =========== Data fetching ===========
user1.fetch();

// ============== Data Inserting ==============
user1.save();
