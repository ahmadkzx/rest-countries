# Rest Countries
Front-End interview task 

  ‌

## 🪁 Deployed Version
[https://whimsical-faloodeh-ed10dc.netlify.app/](https://whimsical-faloodeh-ed10dc.netlify.app/)

  ‌

## 🚀 Local Version

Requirements:
 - node
 - yarn
 - @vue/cli
 - docker

### Run Manually
```bash
# install dependencies
yarn

# serve on localhost:8080
yarn serve
```



### Run With Docker
```bash
# build image
yarn docker:build

# run image on localhost:8080
yarn docker:run 
```

  ‌

## 🔎 Testing
```bash
yarn test:unit
```


  ‌

## ✅ Check List
### Necessities:
 - [X] See all countries from the API on the homepage
 - [X] Search for a country using an input field
 - [X] Filter countries by region
 - [X] Click on a country to see more detailed information on a separate page (client-side routing)
 - [X] Clicking on border countries on the detail page should link the user to the detail of those countries

### Bonuses:
 - [X] Toggle the color scheme between light and dark mode without using any 3rd party libraries
 - [X] Searching using the keywords Grmany or Grmny should also work
 - [X] Add sort functionality for both Population and Country Name
 - [ ] Make all content server-side rendered and also have a fallback if the server-side render faces an error
 - [ ] Collect analytical data (in whichever way you prefer) using Google Analytics
 - [X] Make sure styles are loaded whenever they're really needed. e.g., The styles for the details page don't load on the homepage
 - [X] Make sure the ratio for the country flags is 4:3 or any other ratio you find suitable
 - [X] Dockerize your application by creating an efficient Dockerfile
 - [ ] Add unit tests for components
 - [X] Store the filters in the URL query strings and sync it with the component filter object
 - [X] Add lazy loading for country images and list

  ‌

## ℹ️ Things I Wanted To Do But I Didn't Have Not Enough Time:
 - Migrate to Nuxt 3 For SSR
 - Skeleton Loading For All Sections
 - Improve Unit Tests