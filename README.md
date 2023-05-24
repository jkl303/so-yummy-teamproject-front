A food recipe application where the user can search recipes by title or category, add recipes to favorites or create his own recipe that other people can use. User can also work with the ingredients for the selected recipe(add them to shopping list, check if you had them, etc.). Each ingredient has an image from our database. The site has 3 breakpoints for mobile, tablet and desktop screens. User can switch between light and dark themes. This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app), using the [Redux](https://redux.js.org/) and [Redux Toolkit](https://redux-toolkit.js.org/) template.

![Desktop Screenshot 2023 05 22 - 18 04 05 50](https://github.com/jkl303/so-yummy-teamproject-front/assets/103362175/75302e4f-a608-4895-a310-6414f39c54da)

There was a learning team project with its own [backend](https://github.com/jkl303/so-yummy-teamproject-back.git) and database built using MongoDB.

In front-end part of app, I was responsible for the "Add recipe" page. In my work I used react hooks, redux, formik, react select and other libraries.

![Desktop Screenshot 2023 05 22 - 19 40 30 06](https://github.com/jkl303/so-yummy-teamproject-front/assets/103362175/59117570-11f8-4d0a-9b54-0b58fe21a75d)

Here user can add his own recipe to the BD. User can add image, description, category and cooking time for his recipe. User can add any number of ingredients: clicking - or + changes the number of  ingredient fields. Fields validates with Formik using Yup scheme. After adding a recipe user navigates to a page with a list of all his recipes.





