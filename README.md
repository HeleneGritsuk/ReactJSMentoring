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
