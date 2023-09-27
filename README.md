# React Internship Assignment

This is a React application created for the Internship Assignment, implementing the specified functionalities using TypeScript, Vite, and Material-UI (MUI) components.


Live Now : [click here](https://64bd2531ee386821c826c9bc--pureshwarg.netlify.app/)


## Table of Contents

- [Objective](#objective)
- [Technologies Used](#technologies-used)
- [Installation](#installation)
- [Project Structure](#project-structure)
- [Functionality](#functionality)
- [Deployment](#deployment)
- [Contributing](#contributing)
- [License](#license)

## Objective

The objective of this React Internship Assignment is to create a new React application that implements the following functionality:

- **Task 1: Application Configuration**
  - Create a new React application using TypeScript and Vite.
  - Configure the application with MUI, ensuring that all components within the application (e.g., buttons, text fields, dialogs) use MUI components.

- **Task 2: First Page of the Application**
  - Create a form to collect the following information from the user:
    - Name
    - Phone number
    - Email
  - Upon completion, save the user details in local storage and route the user to the second page.
  - If the user attempts to access the second page without providing the necessary information, redirect them back to the first page with a message indicating that they must enter their details before accessing the page.

- **Task 3: Second Page of the Application [Component 1]**
  - Fetch a list of JSON details from an API (e.g., https://jsonplaceholder.typicode.com/posts).
  - Convert the retrieved JSON data into a model/interface in TypeScript.
  - Display the data in a table using MUI Data Grid.

- **Task 4: Second Page of the Application [Component 2]**
  - Create another component to display a list of departments and their sub-departments.
  - Allow users to select departments or sub-departments.
  - If a user selects a department, all of its sub-departments must be selected as well in the UI.
  - If a user selects all sub-departments of a department, the parent department must get selected as well in the UI.

## Technologies Used

The project is built using the following technologies:

- React
- TypeScript
- Vite
- Material-UI (MUI)

## Installation

To run the application locally, follow these steps:

1. Clone the repository:
git clone <repository_url>

2. Install dependencies:
cd react-internship-assignment
npm install


3. Run the application:
npm start


The application will be available at `http://localhost:3000`.

## Snapshots
![Screenshot (174)](https://github.com/PureshwarGonekar/React-ts-project/assets/88015818/62a8d70a-5f43-4516-b5d5-25a494d76851)
![Screenshot (175)](https://github.com/PureshwarGonekar/React-ts-project/assets/88015818/59841d86-b5a1-48ef-8de4-c4369a3f4f6e)



## Functionality

- **Form**
  - Allows users to enter their Name, Phone number, and Email.
  - On form submission, the user details are saved in local storage, and the user is routed to the second page.
  - If the user attempts to access the second page without providing the necessary information, they are redirected back to the first page with an appropriate message.

- **Second Page**
  - Component 1: Displays data in a table using MUI Data Grid.
  - Component 2: Displays a list of departments and sub-departments. Users can select departments or sub-departments, and the UI will handle parent and child selection logic.

## Deployment

The application is deployed to [Netlify](https://www.netlify.com/) at the following URL: [click here](https://64bd2531ee386821c826c9bc--pureshwarg.netlify.app/)

You can access the deployed application at the above URL.

## Contributing

Contributions to the project are welcome. If you find any issues or have suggestions for improvements, please feel free to open an issue or submit a pull request.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
