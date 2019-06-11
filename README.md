# Angular Test Task
The main goal of the task is to show your skills in the best way possible.
Think of you starting to work on a new project that has many issues and bad code. Your task is make it to work and make the code perfect!
Please investigate the project, follow the steps below and improve the code accordingly.
You have **2 hours maximum** to complete the tasks.

*Note: This Angular project requires Node.js version 10.x or later.*

1. Check the Angular project provided to you. The project is a simple user management system. It has 2 views: Users List and User Card. The card can be opened from List, where it fetches data from a remote API. The users list has pagination and every page fetches data from this API.
2. Some implementations in the project work correct, some - not. In a few words: you should make this project to work **correct**.

## What is «correct»? 
These are the tasks you actually need to perform:

**1. From the code side**
- The code should have correct formatting, implemented interfaces, etc. The best way would be if you follow the Angular style guide.

**2. From the Angular side**
- The project should have correct and clear structure: modules, lazy modules, correct imports of modules inside each others, etc. If you think that project should have any kind of Angular-specific features: resolvers, services, interceptors and modules, please implement them. 

**3. From UI side**
- The UI doesn't need to be perfect or super complex, however it has to have these 2 basics:
1. Simple and neat
2. Responsive

As the project already has Material components inside, its a good practice to use it.
If you see any UI bugs in current implementation, ensure that they are being solved.

*Note: that user card component could use the implementation of a new design, but remember: simple, neat and responsive.*
Don't forget to add some spinner, animations,  etc.

**4. From architecture side**
- Run the project and check how it works: 
1. Check http requests
2. Check the behavior of the user list and pagination. 

Potentially it has bugs. Refactoring is a possibility, fixing bugs as well.
At the end we would like to see that your code **works correct** and that **code is correct itself**.

## What is the «code works correct»? 
1. The user see what he expects at any time: change of page number in pagination, see new users in list and open the user card after click on username in list.
2. The system should not do http requests twice.
3. The system should not have runtime errors.
4. The commands «npm run start», «npm run build» and «npm run build:prod» should work.

# Finished? Checklist
- Project has no runtime issues
- Project has no build issues in dev and prod modes
- System don’t do twice requests
- Pagination in users list works as expected
- It is possible to open user card by clicking on the username in list
- The user card has simple but working UI
- The users list and user card has a responsive UI
- You are sure about the quality of your typescript code
- You are sure about the project architecture

Good luck!
