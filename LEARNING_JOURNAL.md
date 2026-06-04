# Index

## Infastructure & Operations Log:
- **Why this matters:** Building a product isn't just writing React code; it's securing the pipeline that moves that code to the world.

- **The Lesson:** Moving from manual/token-based authentication to SSH key-pair handshakes.

- **The Real-Wold Business Value:** This reduces friction in the deployment cycle and secure the "Inner Circle" intellectual property by preventing cedential-based attacks.

- **Status:** System secured. DevOps workflow automated.

### DevOps Foundation & Secure Authentication
- **Goal:** Establish a secure, automated Git workflow using SSH to resolve "403 Forbidden" authentication errors.

- Key Concept: SSH Key Pairs (Public vs. Private keys) replace outdated password/token authentication.

- Workflow Logic:

- ssh-keygen: Generates the cryptographic key pair.

- ssh-agent: Manages the key in system memory to avoid repeated authentication.

- Host Verification: Verified GitHub’s server fingerprint to ensure a secure, un-tampered connection.

- Outcome: Successfully authenticated via SSH. Git push operations are now secure, automated, and no longer rely on external tokens.

## Independent Learning Loop

- **Observe:** Identify the pattern (e.g., "This is a middleware pattern").

- **Implement:** Build it in a sandbox project first.

- **Refactor:** Apply it to your main project.

- **Journal:** Record the "Why" in your journal.

# The Introduction to React Course Learning Journal

**Mission:** I will be doing a 3-7 week sprint to not just learn react but reverse engineer the Inner Circle and The Vault and all its components applying react skills I learn during this course.

## Independent Learning Loop

- **Observe:** Identify the pattern (e.g., "This is a middleware pattern").

- **Implement:** Build it in a sandbox project first.

- **Refactor:** Apply it to your main project.

- **Journal:** Record the "Why" in your journal.

# Session [1] [ Basic React App ]:

## React without a Build Step

- **Ran in NPX Serve:** Could open it directly in bowser but opened it in http://localhost:3000 in the browser.

- **Created project direcotry inside the repo:** Named it butlers-pizza a pizza ordering system.

- **Created a index.HTML:** I created it in my VS Code editor and added the markup. (html:5) 

- **We're adding a root div:** We'll render our React app here. It doesn't have to be called root, just a common practice.

- **We have two script tags:** The first is the React library. This library is the interface of how to interact with React; all the methods (except one) will be via this library. It contains no way of rendering itself though; it's just the API.

The second library is the rendering layer. Since we're rendering to the browser, we're using React DOM. There are other React libraries like React Native, React Unity, React Babylon.js, React Email, React Figma, React Blessed, and others. You need both script tags. The order is not important.

The last script tag is where we're going to put our code. You don't typically do this but I wanted to start as simple as possible. This script tag must come after the other two.

- **Two components:** A function component and a class component.

- **Function component:** Must return markup (which is what react.createElement generates)

- **The components render funtion:** It has to be fast as it will be called a lot it's a hot code path.

- **Inside of the render function:** You cannot modify any sort of state. Put in functional terms, this function must be pure. You don't know how or when the function will be called so it can't modify any ambient state.

- **React.createElement:** Creates one instance of some component. If it's passed as a string, it will create a DOM tag with that as the string. I used h1 and div, those tags are output to the DOM. If I put x-custom-date-picker, it'll output that (web components are posssible too.)

- **The second empty object:** Is attributes we're passing to the tag or component. Whatever we put in this will be output to the element (like id or style.)

- **document.getElementByID:** This is what we're using to grab an existing div out of the HTML document. Then we take that element (which I called container) and pass that into ReactDOM.createRoot. This is how we signal to React where we want it to render our app. Now later I can root.render again to change what the root of our React app looks like (I rarely need to do this.)

- **React.createElement with App:** We're using React.createElement with App as a parameter to root.render. We need an instance of App to render out. App is a class of components and we need to render one instance of a class. That's what React.createElement does: it makes an instance of a class. An analogy is that App as a class of components is like Honda has a line of cars called Civics. It's a whole line of cars various different options and parameters. An instance of a Civic would be a individual car. It's a concrete instance of the Civic car line.

- **ReactDOM.createRoot vs. ReactDOM.render:** createRoot is a new API as of Reactv18. The old .render is still available (and deprecated) but it'll render your app in "legacy" mode which won't use all the fun new features packed into Reactv18.

### Summary of Concept:

- **What I Learned:** I learned that there are two types of components a "funciton component" and a "class component" also they must return markup (which is what react.createElement does). Also, Inside the render function you cannot modify any state. (The function must be pure.) The React.createElement, document.getElemenentById, and ReactDOM.creatRoot all help make up the simplest React App you can build.

- **How it applies to the Vault:** I can now see that my current 'Shop' button essentially is a 'function component' that return markup, and I understand why my previous code needed to be fast.

- Core Concept: React acts as a "Component API," while ReactDOM acts as the "Rendering Bridge" that translates those components into actual DOM nodes.

### The Architects Decision Log

- **Feature Name:** Component, App

- **The Goal:** Add this feature helps me organize my beats into pillars for easy search by subject.

- **Architectural Decision:** I feel it'll be easy to apply for me and I think it fit's the feature well.

- **The "Waiter Model" Model:** ReactDOM.createRoot is a new API as of Reactv18. That can use React v18's new features.

- **Future Debt:** I will need to refactor the old pillars section. For my document.getElementByID I will possbily have to refactor the id as I add my ecomomerce products to the shop.


### The "Bridge" Tasks (Roadmap Item):
 
- **Business Context:** Why does "The Inner Circle" need this? 
- Establish the foundation for "The Inner Circle" UI by understanding how the "Rendering Layer" (ReactDOM) connects to HTML Document.


- **The Challenge:** Nest multiple elements (an h1 title and a p description) inside a single div using only React.createElement .

- **The Goal:** Observe how the "children" argument (the third parameter) handles complexity.

- **Implementation Plan:** 
    1. Draft: Inside App.js, modify the render function

    2. Nest: Pass an array as the third argument to React.createElement('div', {}, [...children]) or pass them as sequential arguments.

    3. Inspect: Notice the visual "heaviness" and nested nature of the code in you editor.

- **Verification:** Does the UI reflect the data accurately?
- Does the DOM display both the title and the paragraphy correctly when rendered?

- **The Reason:**
- To experience the pain of non-JSX development. This provides the context for why we eventually need JSX to make our code readable and maintainable.

### The "Why" Test:

- **Remember that React.createElement takes:** (Type, Props, ...Children). Any number of arguments you pass after the first two will be treated as children of that element.

# Session [2] [ JSX in React ]:

## Basic React App: 

### Vanilla React Components

- **To make an element have multiple children:** Just pass it as a array of elements.

- **Created second new component:** The Pizza component this component represents one pizza. When you have distinct ideas represented as markup, that's a good idea to seperate that into a component like I did here.

- **The New Pizza component:** Can be used multiple times. I can just use multiple calls to React.createElement.

- **In createElement:** The last two parameters are optional. Since pizza had no props or children (I eventually added them but from the start I didn't use them yet) we can just leave them off.

- **Props:** Make it so each component can be different, that is far more useful than it was since this Pizza component can represent not just a pepperoni, but any pizza.

- **The power of React:** We can make multiple, re-usable components. We can then use these components to build larger components, which in turn make up yet-larger components.

### The Architects Decision Log

- **Feature Name:** Curated Playlist

- **The Goal:** 
- I'm giving users their choice to choose which tracks they want in rotation instead of defulting to my playlist control.

- **Architectural Decision:** 
- I chose Component Props to decouple the track data from the UI rendering logic, allowing for a dynamic, data-driven playlist.

- **The "Waiter Model" Model:** The API call will get the tracks in the DB availible in the DB and if available for isStreaming it will be added to the playlist of the user.

- **Future Debt (Original):** I will need to refactor my createElement function to add on more playlist as I scale.
[ARCHITECTURAL UPDATE - Post-JSX Transition]: 
- Refinement: Follwoing the adoption of JSX, this debt has been satisfied. The createElement logic has benn abstracted away by the JSX transpiler, allowing for a cleaner component architecture. The new debt shifts to optimizing the map() logic for large-scale data sets.

### The "Bridge" Tasks (Roadmap Item):

- Components & Props (Reusability)

- **Business Context:** Why does "The Inner Circle" need this?
- Refactor my "playlist" or "Track" data structure into a reusable component.

- **The Challenge:** 
- Don't hard-code your playlist data. Create a TrackComponent that accepts props (e.g., trackName , duration isStreaming ).

- **The Goal:** 
- Build a dynamic list. Instead of writing the track five times, use a JavaScript .map() to render your list of tracks from an array of objects.

- **Implementation Plan:**
    1. Define: Create a TrackComponent that expects props (name, duration isStreaming).

    2. Map: In my parent component, create an array of track objects.

    3. Render: Use {tracks.map((track) => <TrackComponent {...track} />)} to dynamically render the list.

- **Verification:** Does the UI reflect the data accurately?

    1. Observe: Verify that adding a new track to the array automatically adds a new card to the UI without you having to write more JSX.

    2. Consistency: Ensure each track card displays the unique props passed to it (e.g., Track A shows Name A, Track B shows Name B).

- **The Reason:** 
- This teaches me the power of Data-Driven UI. If I learn to map data to components now, adding a "Database" later becomes just a matter of where I get array from.

### The “Why” Test:

# Session [3] [ Tooling ]:

## JSX in React: Module JSX, Configuring ESLint for JSX, Setup API, Adding Static Assets

- **JSX way of doing createElement:** If I wrote React.createElement("h1", { id: "main-title" }, "My Website"); what am I actually trying to have rendered out? <h1 id="main-title">My Website</h1> , to be exact. JSX tries to shortcut this translation layer in my brain so I can just write what I mean.

- **Creating my first JSX file:** I named it Pizza.jsx not using .js because Vite won't do JSX transpilation if its not named with a .JSX file extension.

- **When using expressions:** that's just anything that can go on the right side of an assignment operator in JS. e.g., <anything that can go here>.  If you take away {} it will literally output 'props.name' to the DOM.

- **ESLint fix:** as JSX adds new twists and turns we need help with. Installed npm i -D eslint-plugin-react@7.37.1 .

- **Added to my eslint.config.mjs:** Had to add two configs, one that allows ESLint to understand React and add some basic React rules, and one to modernize it as React 17 changed a bit how ESLint interacts with React. (Check that file for the updates.)

- **Turned off two rules:** I don't find them particularyly useful: no-unescaped-entities (which make you change things like ' into &aptos) and react/prop-types which no one has used in a decade at this point. 

- **I converted the App.js:** Renamed it to App.jsx and deleted the React import. I also deleted the Pizza component.

- **I changed the Index.html file:** changed the <scritp>type="module" src="./App.jsx"></script> which switch App.js to App.jsx.

- **The component difference:** Notice I have Pizza as a component. Notice that the "P" in "Pizza" is captalized. It has to be if it's lowercase it will try to have pizza as a web componnet not a React component.

- **The API/Image Server:** For this project I used a little Fastify server. It's in the api directory. I used Vite.js to proxy to this API Server. It's usual to do for local development if you have a separate frontend in a backend.

- **For the proxy to API Server:** I had to use TWO terminal windows running. One terminal running the API server (which I don't have to touch once it's running). The other terminal is the Vite server for our web app.

- **The vite.config.js:** I replaced export in the file and added server and proxy and public in the code. (check the code for the indepth syntax).

- **Running the API Server:** I added a api directory to my cloned repo. I opened the terminal and navigate to the api directory and used 'npm install' and then 'npm run dev'.

- **To comfirm it works:** It should be on port 3000 and the url should be http://localhost:3000/api/pizzas.

- **Adding the images:** In the return inside Pizza, inside the div, under <p> I added <img src={props.image} alt={props.name} /> next added to each pizza in App.jsx the image={"/public/pizzas/pepperoni.webp"} (which is the image={"/image path"}) all images are rendered in the App.jsx file.

- **Using stylesheet:** I used <link> tag rel="stylesheet" and href pointing to the stylesheet path to style the App.jsx file.

### Summary of Concept:

### The Architects Decision Log
- **Feature Name:** Curated Playlist

- **The Goal:** 
- Optimize image delivery to improve load times and reduce server infrastructure costs.

- **Architectural Decision:** 
- Implemented Asset Optimization Strategy by transitioning to . webp format. This provides high-quality compression, reducing page weight and bandwidth consuption, effectively eliminating the need for expensive database tier upgrades.

- **The "Waiter Model":** 
- Asset Management:
- The component (Waiter) fetches image references from the /public (Pantry) and presents them to the UI, ensuring asset delivery without bloating the main application bundle.

- The Pantry ( /public directory): This is the resturant's storage. It is "publicly" accessible; if someone knows the name of the ingredient, they can grab it directly from the shelf without needing the Waiter's permission.

- The Menu (The src={props.image} path): 
The React component (the Waiter) doesn't contain the image data itself. It only carries a reference (the path). When the customer (the Browser) request the image, the Waiter points them to the correct location in the Pantry.

- The Setup (<link> and attributes): 
Think of this as the Waiter's uniform and serving instructions. By adding <link rel="stylesheet"> , the Waiter makes sure the "plate" (the component) is styled correctly before presenting it to the customer. By adding src and alt , the Waiter ensures the customer knows exactly what they are receiving. 

- **Future Debt:** As the image library scales into thousands of assets, I will need to implement a Content Delivery Network (CDN) or an automated image optimization service (like Cloudinary) to handle dynamic resizing on the fly.

### The "Bridge" Tasks (Roadmap Item):

- **Business Context:** Why does "The Inner Circle" need this feature?
- Audit my image loading strategy against the GitHub/Vercel deployment bottleneck. This is critical for ensuring "The Inner Circle" assets load correctly in production, preventing broken UI elements for users.

- **The Challenge (The "How"):** What are you building? 
- Move all my static assets (album art, icons, profile pics) into the /public directory.

- **The Goal (The "Effect"):** What should happen? 
- Observe how the browser resolves these paths differently when the app is "Live" versus "Local." Reference them using absolute paths ( /images/filename.webp ) instead of relative paths ( ./images/filename.webp ) and ensure consistency between Localhost and Vercel/GitHub Pages.

- **Implementation Plan:**
    1. Migrate: Relocate all .webp assets to the /public/images/ directory

    2. Refactor: Update all <img> tags in Pizza.jsx (or TrackComponent ) to use absolute paths starting with /images/....

    3. Deployment: Push the changes to the main branch and trigger a new Vercel build.

- **Verification:** Does the UI reflect the data accurately?
- Local: Confirm images load at localhost:5173. 
- Production: Navigate to the live Vercel URL and inspect the "Network" tab in Chrome DevTools to ensure no 404 Not Found errors appear for image requests.

- **The Reason (The "Why"):** Why use this pattern? 
- This is the #1 reason why apps "break" after deployment. Mastering the /public folder (served as-is). and the src folder (processed by Vite) is the key to understanding how Vite (my bundler) processes my assets.

### The “Why” Test:

# Session [4] [ React Hooks ]:

## Creating the Order Components

- **The order component:** I named it "Order.jsx" and it was used to add two imputs one for the pizza type and a set of radio buttons for the size.

- **How React works:** React detects that a DOM event happens when that happens, React thinks something may have changed so it runs a re-render. Providing your render functions are fast, this is a very quick operation. It then diffs what's currently there and what its render pass came up with. It then updates the minimum amount of DOM neccessary.

- **The select or radio button tags:** Its value is tied to pizzaType and pizzaSize and nothing changed those, so they remain the same. In other words, two way data binding is not free in React. This is a feature because it makes me explicit on how I handle my data.

- **Making it work:** In my Order.jsx file I imported useState added the useState hook at the top of the component which is always formatted const [value, setValue] = useState(defaultValue). I replace the input using a event state which is onChange={(e) => setPizzaType(e.target.value)} and added to all radio buttons I used onChange={(e) => setPizzaSize(e.target.value)}

## The useState Hook

- **A hook:** To remember, it's called such because it's a hook that gets caught every time the render function gets called. Because the hooks get called in the same order every single time, they'll always point to the same piece of state. Because of that they can be stateful: you can keep pieces of mutable state using hooks and then modify them later using their provided updater functions.

- **An absoulutely key concept:** Hooks rely on this strict order do not put hooks inside if statements or loops. If I do I'll have insane bugs that involve useState returning the wrong state. If I see useState returning the wrong piece of state, this is likely what I did. Every hook must run every time in the same order. 

- **useState:** The arguement given to useStatae is the default value. In my case, I could give it "" as my default value to make the user have to select something first but in my case I want to default to perpperoni pizza and medium size.

useState returns to me an array with two things in it: the current value of that state and a function to update that state. I'm using. a feature of JavaScript called destrcturing to get both of thos things out of the array.

- **onChange attribute:** I use setPizzaType / setPizzaSize function in the onChange attribute of the input. Every time the input is typed into, it's going to call that functions which call setPizzaType and setPizzaSize whith what has been typed into the input or what has been selected or what has been clicked on. When setPizzaType and setPizzaSize are called, React knows that its state has been modified and kicks off a re-render.

- **Custom hooks:** useState is just one of many you can make your own custom hooks.

- **React History:** React has been written using classes with state being on the instance of the component. This is still a supported pattern in React.

- **When setting value:** I could place onChange handler on each radio button. However event bubbling works the same in React as it does in the normal DOm and I could put it directly on the div that encapsulates all the radio buttons and just have to do it once.

- **Usage of useState:** 
- I can use it as many times as you need for various pices of state! Again, this is why ordering is important because react relies on useState to be called in strictly the same order everytime so it can give the same piece of state.

Similar to above. I'm using onCange because it makes it more accessible.

- **More on Event bubbling:** 
- In React it works just like I would expect. In theory I can have mega event handler in React but the link rules and react's dev tools get noisy about it if you do it that way so I might as well just follow their recommendation.


### Summary of Concept:
- useState is a React Hook that allows functional components to store and update data (state) across re-renders. It follows a strict execution order and ensures the UI stays synchronized with the underlying data model through a re-render cycle triggered by state updater functions.

### The Architects Decision Log
- **Feature Name:** Controlled Order Form

- **The Goal:** 
- To capture user input (Pizza Type and Pizza Size) and maintain a "Source of Truth" for the current order state.

- **Architectural Decision:** 
- Implemented controlled input using useState. By tying the value of input elements to React state and updating them via onChange handelrs, we ensure that the component's state is always synchronized with the UI.

- **The "Waiters Model":** 
- In this model, the useState hook acts as the "manager" of the order pad. When a user changes an input, it doesn't just change the view; it updates the "manager" (the state), which then tells the view to re-render with the new information.

- **Future Debt:** 
- Currently using useState for granular state management. Acknowledging that as the order object grows, a more robust centralized state pattern like useReducer may be required to maintain code maintainability and handle complex state transitions.

### The "Bridge" Task (Roadmap Item):

- **Business Context:** Why does "The Inner Circle" need this?
- To allow users to control track playback without a page refresh.

- **The Challenge (The "How"):** What are you building?
- Add a "Play/Pause" or "Like" button to the TrackComponent. When clicked, it should change the state ( isLiked or isPlaying ) from false to true.

- **The Goal (The "Effect"):** What should happen? 
- Observe the UI re-render instantly when state changes.

- **Implementation Plan:**
- [PRODUCTION/MAIN]:
    1. Import useState into TrackComponent
    2. Define [isPlaying, setPlaying] = useState(false)
    3. Create an onClick handler to toggle setIsPlaying.

- **Verification:** Does the UI reflect the data accurately?
- Check the console to ensure state toggles between true and false.

- **The Reason:** (The "Why"): Why use this pattern 
- This is the "Aha!" moment-changing State instead of manual DOM manipulation. React is handling the HTML updates for me. This is the foundation of my "The Inner Circle" interactivity.


# Session [5] [ React Hooks ]:

## useEffect Hook

- **

### Summary of Concept:

### The Architects Decision Log

- **Feature Name:** 

- **The Goal:**

- **Architectural Decision:**

- **The "Waiter Model" Model:**

- **Future Debt:**

### The "Bridge" Tasks (Roadmap Item):

- **Business Context:** How does this specific lesson impact "The Inner Circle:?
- I need to fetch the list of tracks from the API instead of hard coding them.

- **The Challenge:** What specific React feature am I testing?
- Use useEffect to trigger an API fetch when the component mounts.

- **Implementation Plan:** A high-level list of how I will build this
    1. Steup useEffect  
    2. Define the fetch call
    3. Update the tracks state with the API response

- **Verification (Done Criteria):** How will I know it works? (e.g., The button triggers the re-render correctly.")
- Check the Network tab in the browser to ensure the API call returned a 200 OK and the data populated the UI.

- **The Reason (The "Why"):** How does this change the way I build software?
- This moves me from static data to dynamic, live-data management-a requirement for a real-world SaaS."

# Session [6] [ React Hooks]:

## Title of Module

### Summary of Concept:

### The Architects Decision Log

- **Feature Name:** 

- **The Goal:**

- **Architectural Decision:**

- **The "Waiter Model" Model:**

- **Future Debt:**

### The "Bridge" Tasks (Roadmap Item):

- **Business Context:** How does this specific lesson impact "The Inner Circle:?

- **The Challenge:** What specific React feature am I testing?

- **Implementation Plan:** A high-level list of how I will build this
    1. 
    2. 
    3. 

- **Verification (Done Criteria):** How will I know it works? (e.g., The button triggers the re-render correctly.")

- **The Reason (The "Why"):** How does this change the way I build software?


# Session [Number] [Title of Lesson]:

## Title of Module

### Summary of Concept:

### The Architects Decision Log

- **Feature Name:** 

- **The Goal:**

- **Architectural Decision:**

- **The "Waiter Model" Model:**

- **Future Debt:**

### The "Bridge" Tasks (Roadmap Item):

- **Business Context:** How does this specific lesson impact "The Inner Circle:?

- **The Challenge:** What specific React feature am I testing?

- **Implementation Plan:** A high-level list of how I will build this
    1. 
    2. 
    3. 
- **Verification (Done Criteria):** How will I know it works? (e.g., The button triggers the re-render correctly.")

- **The Reason (The "Why"):** How does this change the way I build software?


