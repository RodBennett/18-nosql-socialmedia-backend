# 18 Social Network API


## Overview

The code contained in this repository is a backend api for a social networking site that includes Restful CRUD routes for finding, creating, updating and deleting users, comments, friends, and reactions.

## Table of Contents

- [User Story](#user-story)
- [Acceptance Criteria](#acceptance-criteria)
- [Screenshot](#static-screenshots)
- [Challenges](#challenges)
- [Future Development](#future-development)
- [Contributors](#contributing)
- [Technology Used](#technologies)
- [Contact Info](#contact)

### [Walkthrough Video]()

## User Story

```md
AS A social media startup
I WANT an API for my social network that uses a NoSQL database
SO THAT my website can handle large amounts of unstructured data
```

## Acceptance Criteria
```md
GIVEN a social network API
WHEN I enter the command to invoke the application
THEN my server is started and the Mongoose models are synced to the MongoDB database
WHEN I open API GET routes in Insomnia for users and thoughts
THEN the data for each of these routes is displayed in a formatted JSON
WHEN I test API POST, PUT, and DELETE routes in Insomnia
THEN I am able to successfully create, update, and delete users and thoughts in my database
WHEN I test API POST and DELETE routes in Insomnia
THEN I am able to successfully create and delete reactions to thoughts and add and remove friends to a user’s friend list.
```
## Static Screenshots

<img width="1352" alt="Screen Shot 2022-10-27 at 10 22 11 PM" src="https://user-images.githubusercontent.com/106923428/198501971-1a4b9046-e004-4137-8d70-820ec8ad0cf2.png">


## Challenges

This was a very straightforward project that had surprisingly few challenges.  It enabled us to use MongoDB and the Mongoose wrapper for modeling and flexible JSON data storage. The only challenging part for me was getting the "friends" property to accept and delete posts, but after a bit of trial error was able to figure it out.

## Future Development

The backend code and routes contained in this repo will be used in the near future for a social media site that I plan to program for my final project at the University of Denver bootcamp. There will be more backend development necessary for that project, but the code contained herein will be the bedrock.

## Technologies

- [Express.js](https://www.npmjs.com/package/express): for routing and server
- [Mongoose, Compasss](https://www.npmjs.com/package/mongoose): for database
- [Insomnia](https://insomnia.rest/): for testing routes
- [node.js](node.js)
- nodemon: for real-time testing
## Contributing
As this is an assignment for a coding bootcamp, it is not open to public contributions.

## Contact
All code created by the owner of this Repository.  If you have any questions or comments, please contact me at:
- [Rod's Email](rod.bennett75@gmail.com)
- [Rod's Github Profile](https://github.com/RodBennett)




