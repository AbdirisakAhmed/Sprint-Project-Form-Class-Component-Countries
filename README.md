# Sprint Project: Forms and Class Components

This Project allows you to practice the concepts and techniques learned over the past Sprint and apply them in a concrete project. This Sprint explored Form Management, Class Components and Component Lifecyle. In your Project for this Sprint, you will demonstrate proficiency by creating a Single Page Application that performs CRUD (Create, Read, Update, Delete) operations on a locally hosted API, Countries.

## Instructions

**Read these instructions carefully. Understand exactly what is expected _before_ starting this Sprint Challenge.**

This is an individual assessment. All work must be your own. Your Project score is a measure of your ability to work independently using the material covered through this sprint. You need to demonstrate proficiency in the concepts and objectives introduced and practiced in preceding days.

You are not allowed to collaborate during the Sprint Project. However, you are encouraged to follow the twenty-minute rule and seek support from your Instructor in your cohort help channel on Slack. Your work reflects your proficiency ReactJS Fundamentals and your command of the concepts and techniques in the Function Components and Class Components.

You have 2 days to complete this project. Plan your time accordingly.

## Commits

Commit your code regularly and meaningfully. This helps both you (in case you ever need to return to old code for any number of reasons and your project manager).


## Self-Study/Essay Questions

Demonstrate your understanding of this Sprint's concepts by answering the following free-form questions. Edit this document to include your answers after each question. Make sure to leave a blank line above and below your answer so it is clear and easy to read by your project manager.

- [ ] What is the difference between forms in HTML and forms in React.
1. There is no more difference between them, the forms in HTML can create specially but the forms in React needs The Handle Submit and Handle change Functions also the react form you can validate the form but the HTML form you need a programming Language to validate.
- [ ] What is HTTP Request?
2.An HTTP request is made by a client, to a named host, which is located on a server. The aim of the request is to access a resource on the server.
- [ ] Why does the React team moved away from Class Components?
3.  clear difference is the syntax. Just like in their names, a functional component is just a plain JavaScript function that returns JSX. A class component is a JavaScript class that extends React. ... The JSX to render will be returned inside the render method.
- [ ] What are the three component lifecycles?.
4.The Constructor, Render and ComponentDidMount
- [ ] How do you change the state in Class Component?.
5.this.setState({
  stateName : Data
})

## Project Set Up

Follow these steps to set up and work on your project:

- [ ] Create a forked copy of this project.
- [ ] Add Instructor as collaborator on Github.
- [ ] Clone your OWN version of Repo (Not Gabi's by mistake!).
- [ ] Create a new Branch on the clone: git checkout -b `<firstName-lastName>`.
- [ ] Implement the project on this Branch, committing changes regularly.
- [ ] Push commits: git push origin `<firstName-lastName>`.
- [ ] **RUN** `yarn install or npm install` at the root to retrieve all the dependencies for the node server. You will not need to create any react apps here nor will you need to install any other dependencies. You should have all you need in this repo.
- [ ] **LOOK** at all the files you've been given for this project. One important file to note is `server.js`. This file contains an **API** that you are going to be interfacing with. Below is documentation on how to interact with the **API**.
- [ ] **RUN** `yarn start or npm start` to get your API up and running on `http://localhost:3333`. This is the **URL** you're going to need to use within your React app in order to make AJAX requests for data.
- [ ] After your API is up and running, you can open chrome and type in `http://localhost:3333/countries`. You should see an Array `[]` with a country returned to you. This is an array that your **API** will be using to store our Country Data.
- [ ] **LOOK** at your `country` directory and notice it's just a plain ol' React App that we've built using `create-react-app`.
- [ ] **cd** into `country` and run `yarn install or npm install` to retrieve the client side dependencies.
- [ ] **RUN** `yarn start or npm start` to fire up your React application.

Follow these steps for completing your project:

- [ ] Submit a Pull-Request to merge <firstName-lastName> Branch into master (student's  Repo).
- [ ] Add your instructor as a Reviewer on the Pull-request
- [ ] PM then will count the HW as done by  merging the branch back into main.


## Minimum Viable Product

The MVP of this project will be broken up between 2 stages. Follow each step and be sure to use your design/style skills to make this application look professional.

### Stage 1

Examine all the components we created for you, you will not need to create more components.

- [ ] Construct an AXIOS request to retrieve an array all the Countries in the Country DB simply write a `GET` to the endpoint `/countries`.
- [ ] Display those countries in a list on the screen.
- [ ] Setup the `Form` component to add new Countries to the list, make sure each Country has a unique ID.
- [ ] Construct an AXIOS request to `POST` to add a Country to the Country DB you'll need all three fields.
- [ ] Display all Countries underneath the `Form` component
- [ ] If a Country is created correctly, you should see a response that is an array of Countries.

- Example:

```js
[
  {
    name: 'United States',
    population: 370000000,
    land_area: 2568000,
    id: 0
  }
];
```

### Stage 2

Add Style to your components.

- [ ] We added some classes for you in each component, you can add more classes if you like.
- [ ] You can use any style package such as ReactStrap and Material UI
- [ ] You can also use your own CSS to style all aspects of the application
- [ ] You need to have a good looking form and list of countries.



## STRETCH PROBLEMS

**HTTP/Axios Stretch Problems**

- [ ] The following two endpoints are here for you if you'd like to push yourselves a little further.

- [ ] **HINT** if you are going to be working on Stretch Problem, you'll need to use that unique `id`.

**DELETE '/countries/123', where 123 is the Id of the country you want to remove**

- [ ] For this endpoint to work, all you need is an id sent up as part of the request url.

- [ ] If your delete worked, you'll get a list of the countries back.
- [ ] Example:

```js
[
  {
    name: 'United States',
    population: 370000000,
    land_area: 2568000,
    id: 0
  },
  {
    name: 'Canada',
    population: 650000000,
    land_area: 28068000,
    id: 1
  }
];
```

**PUT '/countries/123', where 123 is the Id of the country you want to modify**

- [ ] For this endpoint to work, you'll need an `id` added to the URL, and at least one field to update on the Country object. `name` `population` `land_area`.

Example:

```js
input:
{
  id: 1,
  name: 'France'
}
output:
[
  {
    name: 'Germany',
    population: 42342000,
    land_area: 320000,
    id: 1
  },
  {
    name: 'Mexico',
    population: 39480000,
    land_area: 493000,
    id: 0
  }
]
```

