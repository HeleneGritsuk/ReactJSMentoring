# ReactJSMentoring Program

## Task 1 (Core concepts lecture)
### Setting up the environment

Install and launch “blank” node.js application. You’ll need it in further development for implementing SSR. Commit this changes to repository.
Don’t use any generators (like create-react-app)
Create components in different ways, using:
-	React.createElement
-	React.Component
-	React.PureComponent
-	functional components
Note: To implement this task you could use React online sandbox,
[optional] or start to configure basic project build from task 2.
Share sandbox link with your mentor or commit to your repository

Evaluation criteria:

2 | 3 | 4 | 5
--- | --- | --- | ---
Install blank express.js application | Render blank message (Hello World) with react | Use at least 2 methods of creating react components | Use all methods which mentioned in task, to create react components


## Task 2 (Webpack lecture)

Create package.json file and install React, Redux, React-Redux, React-Router, Jest.
Install and configure webpack & babel to get build artifact by running npm command
Set DEV and PROD build configuration. Use env variables, dev server, optimizations for PROD build
Set up testing. You should have test command in your package.json file, which will run your future tests. Don’t use React boilerplate for this task.


Evaluation criteria:

2 | 3 | 4 | 5
--- | --- | --- | ---
Installed React, Redux, React-Redux, React-Router, Jest | Configured webpack | Configured babel. Configured tests script | Have dev and prod build commands(use evn variables)


## Task 3 (Components lecture)

Write components implementing HTML markup for required design (see images at the beginning of the document)
Use ErrorBoundary component for catching and displaying errors ( https://reactjs.org/docs/error-boundaries.html ). You could create one component and wrap all your application, or use several components.
Use smart/dumb components approach
100% decomposition ( estimated by mentor )

Evaluation criteria:

2 | 3 | 4 | 5
--- | --- | --- | ---
Markup is done with React Components | Use ErrorBoundary component for catching and displaying errors | Use smart/dumb components approach | 100% decomposition ( evaluated by mentor )

## Task 4 (Testing lecture)

Coverage > 60% Write tests using enzyme and jest

Use snapshot testing

Use coverage tool

Write at least one e2e test using library from the list: Cypress, CasperJS, Protractor, Nightwatch, Webdriver

Evaluation criteria:

2 | 3 | 4 | 5
--- | --- | --- | ---
Coverage >60% | Use snapshot testing | Coverage > 80%. Functional testing with enzyme and jest | Write at least one e2e test

## Task 5 (Flux + Redux)
Go through API docs in swagger: http://react-cdp-api.herokuapp.com/api-docs API Endpoint: http://react-cdp-api.herokuapp.com/

Make your components perform real AJAX requests.

Move data fetches to actions and pass data to your components with redux.

Cover actions and reducers with unit tests.

Add the ability to store your apps state offline and use it to start-up the app. You can take a look at redux-persist library for further reference.

Evaluation criteria:

2 | 3 | 4 | 5
--- | --- | --- | ---
All data fetches moved to actions & received from store by components| Filtering and sorting is done as redux actions | Actions and reducers covered with unit tests (~60%+, can be amended by mentor) | Offline data storage & store restoration (coverage ~100%)

## Task 6 (Routing)
Create routing for your application.
Link app states between each other with React router.
By default user lands on a new page with empty results state (caption 0).

When user clicks on a film item, redirect him to:
localhost/film/id

Handle invalid URLs, display create a 404 page, where user will be redirected in case of invalid URL.
On switching search type or sorting type you shouldn’t switch any routes.
When user performs a new search, you should redirect him to:
localhost/search/Search%20Query

When a new user lands on the page with such URL, you should perform search and display results.

Evaluation criteria:

2 | 3 | 4 | 5
--- | --- | --- | ---
Have 2+ pages which displays on different URLs | Implement displaying 404 page for all invalid URLs | By default user lands on a new page with empty results state | - When user performs a search on the page, change URL and show search results
- When new user enters the site using direct link with search parameters - show search results


## Task 7 (Server Side Rendering)

Implement server rendering in your NodeJS application.
Use async actions, redux should provide initial state from server.
Server should handle query parameters to compute correct initial state.
Implement route masking. Next.js provides this functionality out of the box, but its usage is not required. Example of route masking:
localhost/search/Hello%20Friend
localhost/film/id

Add code splitting to your app. You can use dynamic import() syntax in conjunction with webpack, some library (react-loadable), or next.js.

Evaluation criteria:

2 | 3 | 4 | 5
--- | --- | --- | ---
Async actions, redux provides initial state from server | Server app handles query params to compute initial state | Route masking. Can be implemented, or mentee can switch to next.js for SSR | Code splitting for optimized performance. Goes OOTB with next.js


## Task 8 (Useful libraries)

After lecture, review your app. Find libraries that are applicable for your app and can simplify it. Integrate those libraries.
Discuss your choices with mentor. Mentor evaluates your work on his own choice.
Evaluation criteria:

2 | 3 | 4 | 5
--- | --- | --- | ---
Apply Airbnb best practices to your project:  clean up the code of your application: follow the required naming convention, make sure code has proper alignment and there are no redundant spaces, order all your methods in a right way | Add storybook to your project; Use flow instead of Prop Types | Use styled components / jss | Use reselect/immutable
