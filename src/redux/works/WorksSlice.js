import { createSlice } from "@reduxjs/toolkit";
import rentEaze from '../../assets/RentEaze.png';
import easyCook from '../../assets/easyCook-banner.png';
import japanFestival from '../../assets/japan-festival-banner.png';
import tvShows from '../../assets/TVShows-banner.png';
import BudgetTrack from '../../assets/Budget-track-banner.png';
import skyBlog from '../../assets/SkyBlog-banner.png';

const initialState = {
  works: [
    { 
      'name': 'RentEaze',
      'description': 'RentEaze is a rental booking app that allows users to easily reserve visits of places for rent. Browse available listings, view details, check calendars and instantly book visits. Property owners can also publish and manage their rental listings, set rates and availability, and approve booking requests all through the intuitive app interface.',
      'link': 'https://rent-eaze.onrender.com/',
      'github': 'https://github.com/Luffytaro22/final-capstone-front-end',
      'image': rentEaze,
      'tech': ['React.js', 'Redux', 'TailwindCSS', 'Ruby on Rails', 'JavaScript', 'Ruby', 'PostgreSQL'],
    },
    {
      'name': 'easyCook',
      'description': 'A web application built on Ruby on Rails and TailwindCSS that allows you to save ingredients, keep track of what you have, create recipes, and generate a shopping list based on what you have and what you are missing from a recipe.',
      'link': 'https://recipe-app-zxdn.onrender.com/',
      'github': 'https://github.com/Luffytaro22/Recipe-app',
      'image': easyCook,
      'tech': ['Ruby', 'Ruby on Rails', 'PostgreSQL', 'CSS3'],
    },
    {
      'name': 'Budget --track',
      'description': 'A mobile web application built on Ruby on Rails where you can manage your budget: you have a list of transactions associated with a category, so that you can see how much money you spent and on what.',
      'link': 'https://budget-app-8wpl.onrender.com/',
      'github': 'https://github.com/Luffytaro22/Budget-app',
      'image': BudgetTrack,
      'tech': ['Ruby', 'Ruby on Rails', 'PostgreSQL', 'CSS3'],
    },
    {
      'name': 'Japanese Culture Festival',
      'description': 'The goal is to emulate a Conference Web Page with our own tematic. In my case, I decided to make a web Page about a Japanese Culture Festival.',
      'link': 'https://luffytaro22.github.io/Capstone-Japan/',
      'github': 'https://github.com/Luffytaro22/Capstone-Japan',
      'image': japanFestival,
      'tech': ['HTML5', 'CSS3', 'JavaScript', 'Sass'],
    },
    {
      'name': 'SkyBlog',
      'description': 'Blog App is an application that allows different users to log in, make posts, and comment and like other posts.',
      'link': 'https://blog-app-efud.onrender.com/',
      'github': 'https://github.com/Luffytaro22/Blog-App',
      'image': skyBlog,
      'tech': ['Ruby', 'Ruby on Rails', 'PostgreSQL', 'CSS3'],
    },
    {
      'name': 'TV Shows',
      'description': 'Is an application that fetches tv shows from TVMaze API and also has a feature of posting and fetching Likes, Comments and Reservations from an involvement API.',
      'link': 'https://demesameneshoa.github.io/JavaScript-Capstone/',
      'github': 'https://github.com/Luffytaro22/JavaScript-Capstone',
      'image': tvShows,
      'tech': ['HTML5', 'CSS3', 'JavaScript', 'Webpack'],
    },
  ]
}

const worksSlice = createSlice({
  name: 'works',
  initialState,
  reducers: {}
});

export default worksSlice.reducer;
