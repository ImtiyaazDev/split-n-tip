# 💰 Split-n-Tip

Split-n-Tip is a bill and tip calculating application built with React. This project includes a responsive design for mobile (or desktop) users. This project developed my confidence as a developer. I tried my best to structure the code and file structure for reusability and scalability.

## 🛠 Technologies

- `Vite`
- `React.js`
- `TailwindCSS`
- `Redux Toolkit`
- `Vercel` for deployment

## ⚙️ Features

Here's what you can do with Split-n-Tip:

- **User Management**: Add and remove payees dynamically and input names and bill amounts for each payee.
- **Real-Time Bill Calculation**: Calulate the total bill, the amount for each individual whilst factoring in the tip percentage (it can be adjusted) and display the total amounts each individual should pay.
- **Responsive UI**: An intuitive UI for mobile and desktop devices.

## 👨‍🍳 The Process

I initially begun with a rough idea in Figma to create a general layout of the whole UI. 

From there, I simply built out a static interface of all the components in React in order to see the overall layout and design of the UI.

Thereafter, I began by making the app responsive across different devices and once I was happy with the interface, I began by using dynamic data. This was not too difficult to get working right, but I then ended up working with the calculations to get all the amounts and totals correctly calculated and displayed.

Lastly, I just wanted to fine tune everything which is what you will see before you when you open the app - [Split-n-Tip](https://split-n-tip.vercel.app)

## 📚 What I Learned

Building this project has taught helped me learn a lot about project planning. More than that, I also learnt a lot more about Redux Toolkit and building with React. I also learnt about different utility classes using Tailwind which helped in the overall design of the app.

## 🗂 Folder Structure

The idea behind the folder structure, although quite large for such a small project, is that if, in the future, I would like to update the app to include more features and functionality, the folder structure allows me to do this much easier and wouldn't require a lot of refactoring and changes.

Lastly, each component and function is within its corresponding folder where it is required to be.

## 💭 How can it be improved?

- Add user authentication features
- Database integration for more persistent data
- Provide support for multiple currencies

## 🚦 Running the Project

To run the project in your local environment, follow these steps:

1. Clone the repository to your local machine.
2. Run `npm install` or `yarn` in the project directory to install the required dependencies.
3. Run `npm run start` or `yarn start` to get the project started.
4. Open [http://localhost:5173](http://localhost:5173) (or the address shown in your console) in your web browser to view the app.
