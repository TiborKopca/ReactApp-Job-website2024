# Job Listing App
## Full CRUD SPA 
#### React.js 18 and Tailwind CSS
#### Showing job list, handle adding, deleting and updating jobs from the form.

</br>

## Purpose
- Practice of the React Framework

## Technologies
- [React Router 6.22.3](https://www.npmjs.com/package/react-router-dom/v/6.22.3?activeTab=versions)
- [React-icons 5.0.1](https://www.npmjs.com/package/react-icons/v/5.0.1)
- [React-spinners 0.13.8](https://www.npmjs.com/package/react-spinners)
- [React-toastify 10.0.5](https://www.npmjs.com/package/react-toastify)
- [JSON-Server 1.0.0-alpha.23](https://www.npmjs.com/package/json-server)
- [Postcss 8.4.38](https://postcss.org/)
- [Tailwindcss 3.4.1](https://tailwindcss.com/)
- [Vite 5.2.0](https://vite.dev/)


## Description & Functionality
- File structure by Vite
- Using Link element of React Router
- Using JSON Server for mock API
- Using PropTypes for validation
- Using React Icons for Icons(Font Awesome 5)
- Using JSON Object for the data, loaded from the JSON file by JSON server, using useEffect + fetch(fetch on render)
- UseNavigate Hook for go back button
- Using Spinner for showing animation when waiting on loading data from API
- Background 404 image by [Vecteezy](vecteezy.com)
- Forms with Fields Validation, Error Handling and Toaster Notification
- Used regular expressions for format checks for email and phone number.
- Using Validation Feedback: 
    1.Conditional rendering for error messages below input fields.
    2.Centralized Validation to handle all validation logic.
    3.Displayed error messages using formErrors
- Using Toastify for displaying success of adding new job, deleting job and updating job, and error messages

## Usage
1. Run JSON Server running on localhost:4000
```js
npm run server
```
2. Run App running on localhost:3000
```js
npm run dev
```

3. Preview App for Production
```js
npm run preview
```

4. Build App
```js
npm run build
```

<!-- <ol>
    <li>npm run dev</li>
    <li>npm run server</li>
</ol> -->

<br>

## Online Link
[Netlify](https://react-job-web.netlify.app/)

## Screenshots
![Home](./src/assets/images/screenshots/screenshotHome.png)
![Jobs](./src/assets/images/screenshots/screenshotJobs.png)
![Job Detail](./src/assets/images/screenshots/screenshotJobDetail.png)
![Add Job](./src/assets/images/screenshots/screenshotAddJob.png)
![Form Validation](./src/assets/images/screenshots/screenshotFormValidation.png)
![Update Job](./src/assets/images/screenshots/screenshotUpdateJob.png)
![404](./src/assets/images/screenshots/screenshot404.png)


## Author
[With the use of Traversy Media tutorial](https://github.com/bradtraversy/react-crash-2024)
[TiborKopca](https://github.com/TiborKopca) @ 2024