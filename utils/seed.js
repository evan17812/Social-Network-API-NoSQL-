const connection = require("../config/connection");
const { Thoughts, Users } = require("../models");
const {
  getRandomName,
  getRandomThoughts,
  getRandomEmail,
  usernames,
} = require("./data");



connection.on("error", (err) => err);

connection.once("open", async () => {
  console.log("connected");

  let thoughtsCheck = await connection.db
    .listCollections({ name: "thoughts" })
    .toArray();
  if (thoughtsCheck.length) {
    await connection.dropCollection("thoughts");
  }

  let usersCheck = await connection.db
    .listCollections({ name: "users" })
    .toArray();
  if (usersCheck.length) {
    await connection.dropCollection("users");
  }

  const thoughts = getRandomThoughts(15);

  const thoughtsData = await Thoughts.insertMany(thoughts);

  const users = [];
  usernames.forEach((username) => {
    const email = getRandomEmail(username);
    const userThoughts = thoughtsData
      .filter((thought) => thought.username === username)
      .map((thought) => thought._id);
    users.push({ username, email, thoughts: userThoughts });
  });

  await Users.insertMany(users);


  console.table(users);
  console.table(thoughts);
  console.info("Seeding complete! 🌱");
  process.exit(0);
});