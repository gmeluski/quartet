# quartet

1. Clone the repo to local
2. get set up `npm install`
3. run webserver: `npm start`
4. run test suite: `npm test`

The core issue to address was allowing the user to give and change answers while maintining a running total and tracking the score for each answer. This was addressed by using an array as a data store, and allowing the keys of the array to correlate with the question number (starting at 0 of course).

Each respective question passes data back up to the parent state when a user clicks on one of the possible answers, and the component acting as the maintainer of state uses the answerStore to track the answers and update the UI as necessary.

With that store being updated outside of the UI Components, a listener is maintined (leaning on react's state / prop system) that passes the total down to a component reponsible for displaying the Doctors once a certain threshold is reached. When a doctor is selected, it passses that info up to the parent state and that handles the notification of the component responsible for displaying user feedback
