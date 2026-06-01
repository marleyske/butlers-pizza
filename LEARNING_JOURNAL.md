# The Introduction to React Course Learning Journal

**Mission:** I will be doing a 3-7 week sprint to not just learn react but reverse engineer the Inner Circle and The Vault and all its components applying react skills I learn during this course.

## Independent Learning Loop

- **Observe:** Identify the pattern (e.g., "This is a middleware pattern").

- **Implement:** Build it in a sandbox project first.

- **Refactor:** Apply it to your main project.

- **Journal:** Record the "Why" in your journal.

## Session: The first lesson & module - Complete Intro to React, V9

### Basic React App: React without a build step

- **Ran in NPX Serve:** Could open it directly in bowser but opened it in http://localhost:3000 in the browser.

- **Created project direcotry inside the repo:** Named it butlers-pizza a pizza ordering system.

- **Created a index.HTML:** I created it in my VS Code editor and added the markup.

- **We're adding a root div:** We'll render our React app here in a sec. It doesn't have to be called root, just a common practice.

- **We have two script tags:** The first is the React library. This library is the interface of how to interact with React; all the methods (except one) will be via this library. It contains no way of rendering itself though; it's just the API.

The second library is the rendering layer. Since we're rendering to the browser, we're using React DOM. There are other React libraries like React Native, React Unity, React Babylon.js, React Email, React Figma, React Blessed, and others. You need both script tags. The order is not important.

The last script tag is where we're going to put our code. You don't typically do this but I wanted to start as simple as possible. This script tag must come after the other two.

- **Two components:** A function component and a class component.

- **Function component:** Must return markup (which is what react.createElement generates)

- **The components render funtion:** It has to be fast as it will be called alot it's a hot code path.

- **Inside of the reder function:** You cannot modify any sort of state. Put in functional terms, this function must be pure. You don't know how or when the function will be called so it can't modify any ambient state.

- **React.createElement:** Creates one instance of some component. If it's passed as a string, it will create a DOM tag with that as the string. I used h1 and div, those tags are output to the DOM. If I put x-custom-date-picker, it'll output that (web components are posssible too.)

- **The second empty object:** Is attributes we're passing to the tag or component. Whatever we put in this will be output to the element (like id or style.)

- **document.getElementByID:** This is what we're using to grab an existing div out of the HTML document. Then we take that element (which I called container) and pass that into ReactDOM.createRoot. This is how we signal to React where we want it to render our app. Now later I can root.render again to change what the root of our React app looks like (I rarely need to do this.)

- **React.createElement with App:** We're using React.createElement with App as a parameter to root.render. We need an instance of App to render out. App is a class of components and we need to render one instance of a class. That's waht React.createElement does: it makes an instance of a class. An analogy is that App as a class of components is like Honda has a line of cars called Civics. It's a whole line of cars various different options and parameters. An instance of a Civic would be a individual car. It's a concrete instance of the Civic car line.

- **ReactDOM.createRoot vs. ReactDOM.render:** createRoot is a new API as of Reactv18. The old .render is still available (and deprecated) but it'll render your app in "legacy" mode which won't use all the fun new features packe into Reactv18.

### The Architects Decision Log

- **Feature Name:** Component, App

- **The Goal:** Add this feature helps me organize my beats into pillars for easy search by subject.

- **Architectural Decision:** I feel it'll be easy to apply for me and I think it fit's the feature well.

- **The "Waiter Model" Model:** ReactDOM.createRoot is a new API as of Reactv18. That can use React v18's new features.

- **Future Debt:** I will need to refactor the old pillars section. For my document.getElementByID I will possbily have to refactor the id as I add my ecomomerce products to the shop.

## The Architects Integration Protocol

- **The Learning Log (Journal Entry):** I learned there are two types of components a "funciton component" and a "class component" A functon component must return markup (which is what react.createElement does).

## The Learning Log (Journal Entry):\*\*

- **What I Learned:** I learned that there are two types of components a "funciton component" and a "class component" also they must return markup (which is what react.createElement does). Also, Inside the render function you cannot modify any state. (The function must be pure.) The React.createElement, document.getElemenentById, and ReactDOM.creatRoot all help make up the simplest React App you can build.

- **How it applies to the Vault:** I can now can see that my current 'Shop' button essetially 'function components' that return markup, and I under stand why my previous code needed to be fast.

## The "Bridge" Tasks (Roadmap Item):

- **The Challenge:** Instead of just one h1 inside your div, try to create a second h1 or a p tag inside the same createElement call.

- **The Goal:** See how the "children" argument (the third parameter) handles multiple elements. Does it get messy? Does it feel hard to read?

- **The Reason:** This will lead you directly into the "Why" of JSX (which you will learn soon). Once you see how hard it is to write complex apps with createElement, you will have a deep, personal appreciation for why the React team invented JSX.

## The "Why" Test:

- **Remember that React.createElement takes:** (Type, Props, ...Children). Any number of arguments you pass after the first two will be treated as children of that element.

## Independent Learning Loop

- **Observe:** Identify the pattern (e.g., "This is a middleware pattern").

- **Implement:** Build it in a sandbox project first.

- **Refactor:** Apply it to your main project.

- **Journal:** Record the "Why" in your journal.

# Session: The first lesson - Complete Intro to React, V9

### Basic React App: Vanilla React Components

- **To make an element have multiple children:** Just pass it as a array of elements.

- **Created second new component:** The Pizza component this component represents one pizza. When you have distinct ideas represented as markup, that's a good idea to seperate theat into a component like I did here.

- **The New Pizza component:** Can be used multiple times. I can just use multiple calls to React.createElement.

- **In createElement:** The last two parameters are optional. Since pizza had no props or children (I eventually added then but from the start I didn't use them yet) we can just leave them off.

- **Props:** Make it so each component can be different, that is far more useful than it was since this Pizza component can represent not just a pepperoni, but any pizza.

- **The power of React:** We can make multiple, re-usable components. We can then use these components to build larger components, which in turn make up yet-larger components.

### The Architects Decision Log

- **Feature Name:** Curated Playlist

- **The Goal:** I'm giving users their choice to choose which tracks they want in rotation instead of defulting to my playlist control.

- **Architectural Decision:** I chose this tool because I know curating playlist will need various arrays to keep things organized and with variation.

- **The "Waiter Model" Model:** The API call will get the tracks in the DB availible in the DB and if available for isStreaming it will be added to the playlist of the user.

- **Future Debt:** I will need to refactor my createElement function to add on more playlist as I scale.


## Independent Learning Loop

- **Observe:** Identify the pattern (e.g., "This is a middleware pattern").

- **Implement:** Build it in a sandbox project first.

- **Refactor:** Apply it to your main project.

- **Journal:** Record the "Why" in your journal.

# Session: Lesson 4 - Complete Intro to React, V9


### JSX in React: Module JSX, Configuring ESLint for JSX, Setup API, Adding Static Assets

- **JSX way of doing createElement:** If I wrote React.createElement("h1", { id: "main-title" }, "My Website"); what am I actually trying ot have rendered out? <h1 id="main-title">My Website</h1> , to be exact. JSX tries to shortcut this translation layer in my brain so I can just write what I mean.

- **Creating my first JSX file:** I named it Pizza.jsx not useing .js because Vite won't do JSX transpilation if its not named witha. JSX file extension.

- **When using expressions:** that's just anything that can go on the right side of an assignment operator in JS. e.g., <anything that can go here>.  If you take away {} it will literally output 'props.name' to the DOM.

- **ESLint fix:** as JSX adds new twits and turns we need help with. Installed npm i -D eslint-plugin-react@7.37.1 .

- **Added to my eslint.config.mjs:** Had to add two configs, one that allows ESLint to understand React and add some basic React rules, and one to modernize it as React 17 changed a bit how ESLint interacts with React. (Check that file for the updates.)

- **Turned off two rules:** I don't find them particularyly usefuel: no-unescaped-entities (which make you change things like ' into &aptos) and react/prop-types which no one has used in a decade at this point. 

- **I converted the App.js:** Renamed it to App.jsx and deleted the React import. I also deleted the Pizza component.

- **I changed the Index.html file:** changed the <scritp>type="module" src="./App.jsx"></script> which switch App.js to App.jsx.

- **The component difference:** Notice I have Pizza as a component. Notie that the P in Pizza is captalized. It has to be if it's lowercase it will try to have pizza as a web componnet not a React component.

- **The API/Image Server:** For this project I used a little Fastify server. It's in the api directory. I used Vite.js to proxy to this API Server. It's usual to do for local development if you have a separate frontend in a backend.

- **For the proxy to API Server:** I had to use TWO terminal windows running. One terminal running the API sercer (which I don't have to touch once it's running). The other terminal is the Vite server for our web app.

- **The vite.config.js:** I replaced export in the file and added server and proxy and public in the code. (check the code for the indepth syntax).

- **Running the API Server:** I added the api directory to my cloned repo. I opened the terminal and navigate to the api directory and used 'npm install' and then 'npm run dev'.

- **To comfirm it works:** It should be on port 3000 and the url should be http://localhost:3000/api/pizzas.

- **Adding the images:** In the return inside Pizza, inside the div, under <p> I added <img src={props.image} alt={props.name} /> next added to each pizza in App.jsx the image={"/public/pizzas/pepperoni.webp"} (which is the image={"/image path"}) all images are rendered in the App.jsx file.

- **Using stylesheet:** I used <link> tag rel="stylesheet" and href pointing to the stylesheet path to style the App.jsx file.

### The Architects Decision Log
- **Feature Name:** Curated Playlist

- **The Goal:** Now that I see how static images work I can use this to fix my playlist image issue I was having with them appearing in my dev enviorenment but not loading when live after pushing to github and vercel.

- **Architectural Decision:** Sice google created .webp as more reliable compressed images it'll solve the issue easily also reserve me some bandwith in my database which was a issue resulting me to upgrade to pro.

- **The "Waiter Model" Model:** adding the .webp images to my public directory which makes them directly accessible. to specifyin gthem in a React component using src={props.image} then adding style using <link> tag with rel="styleshee" and href pointing stylesheet path. Lastly, adding attributes like src and alt. 

- **Future Debt:** I will eventually have to swap things out as I learn about dynamic images and dynamic content.

## The "Bridge" Tasks (Roadmap Item):

# Session: Lesson 5 - Complete Intro to React, V9

## React Hooks

### Creating the Order Components

- **The order component:** I named it "Order.jsx" and it was used to add two impust one for the piza type and a set of radio buttons for the size.

- **How React works:** React detects that a DOM event happens when that happens, React thinks something may have changed so it runs a re-render. Providing your render functions are fast, this is a very quick operation. It then diffs what's currently there and what its render pass came up with. It then updates the minimum amount of DOM neccessary.

- **The select or radio button tags:** Its value is tied to pizzaType and pizzaSize and nothing chande those, so they remain the same. In other words, two way data binding is not free in React. This is a feature because it makes me explicit on how I handle my data.

- **Making it work:** In my Order.jsx file I imported useState added the useState hook at the top of the component which is always formatted const [value, setValue] = useState(defaultValue). I replace the input using a event state which is onChange={(e) => setPizzaType(e.target.value)} and added to all radio buttons I used onChange={(e) => setPizzaSize(e.target.value)}

### The useState Hook

- **A hook:** To remember, it's called such because it's a hook that gets caught every time the render function gets called. Because the hooks get called in the same order every single time, they'll always point to the same piece of state. Because of that they can be stateful: you can keep pieces of mutable state using hooks and then modify them later using their provided updater functions.

- **An absoulutely key concept:** Hooks rely on this strict order do not put hooks inside if statements or loops. If I do I'll have insane bugs that involve useState returning the wrong state. If I see useState returning the wrong piece of state, this is likely what I did. Every hook must run every time in the same order. 

- **useState:** The arguement given to useStatae is the default value. In my case, I could give it "" as my default value to make the user have to select something first but in my case I want to default to perpperoni pizza and medium size.

useState returns to me an array with two things in it: the current value of that state and a function to update that state. I'm using. a feature of JavaScript called destrcturing to get both of thos things out of the array.

- **onChange attribute:** I use setPizzaType / setPizzaSize function in the onChange attribute of the input. Every time the input is typed into, it's going to call that functions which call setPizzaType and setPizzaSize whith what has been typed into the input or what has been selected or what has been clicked on. When setPizzaType and setPizzaSize are called, React knows that its state has been modified and kicks off a re-render.

- **Custom hooks:** useState is just one of many you can make your own custom hooks.

- **React History:** React has been written using classes with state being on the instance of the component. This is still a supported pattern in React.

- **When setting value:** I could place onChange handler on each radio button. However event bubbling works the same in React as it does in the normal DOm and I could put it directly on the div that encapsulates all the radio buttons and just have to do it once.

- **Usage of useState:** I can use it as many times as you need for various pices of state! Again, this is why ordering is important because react relies on useState to be called in strictly the same order everytime so it can give the same piece of state.

Similar to above. I'm using onCange because it makes it more accessible.

- **More on Event bubbling:** In React it works just like I would expect. In theory I can have mega event handler in React but the link rules and react's dev tools get noisy about it if you do it that way so I might as well just follow their recommendation.

### The Architects Decision Log
- **Feature Name:** Controlled Order Form

- **The Goal:** To capture user input (Pizza Type and Pizza Size) and maintain a "Source of Truth" for the current order state.

- **Architectural Decision:** Implemented controlled input using useState. By tying the value of input elements to React state and updating them via onChange handers, we ensure that the component's state is always sychronized with the UI.

- **The "Waiters Model":** In this model, the useState hook acts as the "manager" of the order pad. When a user changes an input, it doesn't just change the view; it updates the "manager" (the state), which then tells the view to re-render with the new information.

- **Future Debt:** Currently using useState for granular state management. Acknowledging that as the order object grows, a more robust centralized state pattern like useReducer may be required to maintain code maintainabilty and handle complex state transitions.

## The "Bridge" Tasks (Roadmap Item):



