# Grocery Bud 🛍️

> PROD [Live] : https://react-grocery-bud-v2-prod.netlify.app/

#### Grocery Bud consists of a straightforward user interface where there is a

- **Input** box which takes the names of a grocery item and adds it to the list along with the page title *Grocery Bud*.
- Functionality is 
  - By default when the application loads, the input will be empty.
  - Once an item name is provided in the input and click **`Submit`**, the item gets added to the list with an toast **Item Added To The List**.
  - Every single item added to the list has **`Checkbox`** and **`Delete`** buttons along with the name.
  - If the user wants to edit an item to complete, the `Checkbox` button can be clicked which gives a strikethrough indicating that item is completed.
  - If the user wants to delete an item, the `Delete` button can be clicked which deletes the item from the list with an alert **Item Deleted**.
  - **Local storage** has been implemented to persist the data when the user revisits the application and the sorting order of the other items don't get affected when an item is edited or deleted.
- Styles are handled by `index.css` and toast messages are implemented using `React Toastify`
- To run the project locally, clone the repo, `npm install` to install the dependencies, and `npm run dev` to start up the development server on default port 5173.
- 
#### Languages
HTML, CSS, JavaScript, ECMAScript, React - Hooks ~ useState

#### Packages
[Nano ID](https://www.npmjs.com/package/nanoid)

[React Toastify](https://www.npmjs.com/package/react-toastify)

#### Deployment / Hosting
Netlify

---

_Note: I have developed this project ~ [11] as part of React 18 Tutorial and Projects Course (2023) taught by John Smilga._
