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

- **Created project direcotry inside the repo:** Named it padre-ginos a pizza ordering system.

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

## The Learning Log (Journal Entry):**
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

- **The New Pizza compoonent:** Can be used multiple times. I can just use multiple calls to React.createElement.

- **In createElement:** The last two parameters are optional. Since pizza had no props or children (I eventually added then but from the start I didn't use them yet) we can just leave them off.

- **Props:** Make it so each component can be different, that is far more useful than it was since this Pizza component can represent not just a pepperoni, but any pizza.

- **The power of React:** We can make multiple, re-usable components. We can then use these components to build larger components, which in turn make up yet-larger components.

### The Architects Decision Log
- **Feature Name:** Curated Playlist

- **The Goal:** I'm giving users their choice to choose which tracks they want in rotation instead of defulting to my playlist control.

- **Architectural Decision:** I chose this tool because I know curating playlist will need various arrays to keep things organized and with variation.

- **The "Waiter Model" Model:** The API call will get the tracks in the DB availible in the DB and if available for isStreaming it will be added to the playlist of the user.


- **Future Debt:** I will need to refactor my createElement function to add on more playlist as I scale.

## The "Bridge" Tasks (Roadmap Item):

