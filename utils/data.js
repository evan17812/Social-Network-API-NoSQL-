// Array of common usernames
const usernames = [
    "Aaran",
    "Aaren",
    "Aarez",
    "Aarman",
    "Aaron",
    "Zechariah",
    "Zeek",
    "Zeeshan",
    "Zeid",
    "Zein",
    "Zen",
    "Zendel",
    "Zenith",
    "Zennon",
  ];
  // Array of common email extensions
  const emailExt = ["@gmail.com", "@live.com", "@yahoo.com"];
  // Array of example thoughts
  const thoughts = [
    "How to disagree with someone",
    "iPhone review",
    "how-to video",
    "video essay on the history of video games",
    "How to make money on the App Store",
    "Learn NextJS in five minutes (Not clickbate)",
    "Movie trailer",
    "Hello world",
    "Another possible solution to the algorithm",
    "Apology video",
    "Submission for startup pitch",
  ];
  // Array of example reactions
  const reactions = [
    "love",
    "grinning",
    "smiling",
    "star-struck",
    "thinking",
    "smirking",
    "grimacing",
    "worried",
    "frowning",
    "anxious ",
    "fearful",
    "anguish",
    "tired",
    "weary",
    "angry",
    "furious",
    "indifferent",
  ];
  // Array to hold generated user data
  const usersData = [];
  // Function to get a random item from an array
  const getRandomArrItem = (arr) => arr[Math.floor(Math.random() * arr.length)];
  // Function to get a random username from the usernames array
  const getRandomName = () => `${getRandomArrItem(usernames)}`;
  
  `${getRandomArrItem(thoughts)}`;
  // Function to get a random email based on a username and an email extension
  const getRandomEmail = (username) => `${username}${getRandomArrItem(emailExt)}`;
  // Function to generate random thoughts data
  const getRandomThoughts = (int) => {
    let results = [];
    for (let i = 0; i < int; i++) {
      results.push({
        thoughtsText: getRandomArrItem(thoughts),
        username: getRandomName(),
        reactions: [...getRandomReactions(3)],
      });
    }
    return results;
  };
  // Function to generate random reactions data
  const getRandomReactions = (int) => {
    let results = [];
    for (let i = 0; i < int; i++) {
      results.push({
        reactionBody: getRandomArrItem(reactions),
        username: getRandomName(),
      });
      return results;
    }
  };
  
  // Export the functions for use in seed.js
  module.exports = {
    getRandomName,
    getRandomThoughts,
    getRandomEmail,
    usernames,
  };