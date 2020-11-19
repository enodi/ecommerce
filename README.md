# Pangaea Project

Project link: https://acme-mu.vercel.app/

## Application setup

- Clone the application `git clone https://github.com/enodi/acme.git`

* Open a new tab on your terminal
* Navigate to the application root directory e.g `$ cd pangaea`
  - run `yarn install` to install project dependencies
  - run `yarn start` to start the react application
* Navigate to the app on your [browser](http://localhost:3000)
* Enjoy!

## How to Test

To run all tests use the command: `yarn test`

## Discussion

I used the following technologies and tools: html, scss, react, react-apollo, react-router-dom, node-sass, jest, enzyme-to-json, and enzyme.
I used create-react-app to generate the scaffolding for the application.

### Requirements

#### Using the luminskin.com product page, recreate the product page that does the following:

- retrieve all products from graphql endpoint display them in a grid
- When a user clicks "Add to Cart" on an item it should open the cart sidebar and add the item in.
- should increment or decrement item quantity using the "+" or "-" respectively.
- selecting a new currency should update corresponding price and currency across the app.

I built a ProductPage component to display all products in a grid. On a large screen, items are displayed in a grid of 3 items while on small screens, items are displayed in a grid of 2 items.
The ProductPage contains other components like the Header component, the Sidebar Component etc.

The Header component contains the app navigation and the shopping cart that indicates how many items have been added to the cart.

The Sidebar component keeps track of all items added to the cart. The Sidebar component also contains the CurrencySelector component which updates the app with the new price and currency selected.

### Bonuses

#### Persist Cart Item

I persisted the items in the cart by using localStorage. When items are added/removed from the cart, they're added to localStorage to peersist data.

### Further Enhancements

- Ability to filter by product typee
- Ability to Hide/Show navbar on small screen
