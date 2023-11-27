import { createSlice } from "@reduxjs/toolkit";
import rentEaze from '../../assets/RentEaze.png';
import easyCook from '../../assets/easyCook-banner.png';
import japanFestival from '../../assets/japan-festival-banner.png';
import tvShows from '../../assets/TVShows-banner.png';
import BudgetTrack from '../../assets/Budget-track-banner.png';
import todoList from '../../assets/Todo-banner.png';

const initialState = {
  works: [
    { 
      'name': 'RentEaze',
      'description': 'RentEaze is a rental booking app that allows users to easily reserve visits of places for rent. Browse available listings, view details, check calendars and instantly book visits. Property owners can also publish and manage their rental listings, set rates and availability, and approve booking requests all through the intuitive app interface.',
      'link': 'https://rent-eaze.onrender.com/',
      'github': 'https://github.com/Luffytaro22/final-capstone-front-end',
      'image': rentEaze,
    },
    {
      'name': 'easyCook',
      'description': 'A web application build on Ruby on Rails and TailwindCSS that allows you to save ingredients, keep track of what you have, create recipes, and generate a shopping list based on what you have and what you are missing from a recipe.',
      'link': 'https://recipe-app-zxdn.onrender.com/',
      'github': 'https://github.com/Luffytaro22/Recipe-app',
      'image': easyCook,
    },
    {
      'name': 'Budget --track',
      'description': 'A mobile web application build on Ruby on Rails where you can manage your budget: you have a list of transactions associated with a category, so that you can see how much money you spent and on what.',
      'link': 'https://budget-app-8wpl.onrender.com/',
      'github': 'https://github.com/Luffytaro22/Budget-app',
      'image': BudgetTrack,
    },
    {
      'name': 'Japanese Culture Festival',
      'description': 'The goal is to emulate a Conference Web Page with our own tematic. In my case, I decided to make a web Page about a Japanese Culture Festival.',
      'link': 'https://luffytaro22.github.io/Capstone-Japan/',
      'github': 'https://github.com/Luffytaro22/Capstone-Japan',
      'image': japanFestival,
    },
    {
      'name': 'TV Shows',
      'description': 'Is an application that fetches tv shows from TVMaze API and also has a feature of posting and fetching Likes, Comments and Reservations from an involvement API.',
      'link': 'https://demesameneshoa.github.io/JavaScript-Capstone/',
      'github': 'https://github.com/Luffytaro22/JavaScript-Capstone',
      'image': tvShows,
    },
    {
      'name': 'Todo List',
      'description': 'Todo List allows the user to enter a task and mark it as completed or not. It also lets removing the done tasks and save them in the local storage.',
      'link': 'https://luffytaro22.github.io/To-do-list/',
      'github': 'https://github.com/Luffytaro22/To-do-list',
      'image': todoList,
    }
  ]
}

const worksSlice = createSlice({
  name: 'works',
  initialState,
  reducers: {}
});

export default worksSlice.reducer;
