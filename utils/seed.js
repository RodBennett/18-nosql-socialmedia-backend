const connection = require('../config/connection');
const { User, Thought } = require('../models');
const { getRandomName, getRandomThought } = require('./data');

connection.on('error', (err) => err);

connection.once('open', async () => {
  console.log('connected');

  // Drop existing Users
  await User.deleteMany({});

  // Drop existing students
 await Thought.deleteMany({});

  // Create empty array to hold the users
  const users = [];

  // Loop 20 times -- add students to the students array
  for (let i = 0; i < 20; i++) {
    // Get some random assignment objects using a helper function that we imported from ./data
    const thoughts = getRandomThought(20);
    const userName = getRandomName();
    // const email = 

    users.push({
      userName,
      thoughts
    //   email
    });
  }

  // Add students to the collection and await the results
//   await User.collection.insertMany(users);

  // Add Users to the collection and await the results
//   await User.collection.insertOne({
//     UserName: 'UCLA',
//     inPerson: false,
//     students: [...students],
//   });

  // Log out the seed data to indicate what should appear in the database
  console.table(users);
  console.info('Seeding complete! 🌱');
  process.exit(0);
});
