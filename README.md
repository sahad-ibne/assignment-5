# DevStack 🚀

DevStack is a simple web app that lets developers explore technologies and build their custom dev stack with real-time feedback.

## 🛠️ Built With

* React (TypeScript)
* Tailwind CSS
* React-Toastify

## ✨ Features

* **Interactive Stack Builder:** Add or remove tech items with smooth visual transitions and stack state tracking.
* **Instant Alerts:** Dynamic toast notifications for adding, removing, duplicate warnings, and clearing the stack.
* **Fully Responsive:** Clean grid and flex layouts designed to work seamlessly on mobile, tablet, and desktop screens.

## 🏃 Getting Started

```bash
# Clone the repository
git clone https://github.com/sahad-ibne/assignment-5.git

# Go to project directory
cd assignment-5

# Install dependencies
npm install

# Run dev server
npm run dev


# Live link
shimmering-cascaron-ba704d.netlify.app
```

## 💡 React Q&A

### What is JSX, and why is it used in React?
JSX lets us write HTML directly inside JavaScript. It makes creating UI components much easier and cleaner to read than using standard JavaScript functions.

### What is the difference between props and state?
* **Props:** Data sent from a parent component to a child. The child component can only read it and cannot change it.
* **State:** Data stored inside a component that can change over time. Whenever state updates, React automatically re-renders the component.

### What does the useState hook do, and where did you use it in this project?
`useState` stores component data that needs to change. In this project, I used it in `App.tsx` to keep track of the items added to the user's stack.

### What does the useEffect hook do, and why did you need it to load the JSON data? 
`useEffect` handles tasks that happen outside the render process, like loading data. I used it to fetch the `data.json` file once when the page loads.

### Why does every item in a .map() list need a unique key prop?
A unique key helps React figure out which items were added, removed, or modified. This prevents React from re-rendering the whole list, keeping the page fast.

### What is conditional rendering? Show one place you used it.
Conditional rendering means showing or hiding UI components based on a specific condition (like an `if` statement or ternary operator). 

In `YourStack.tsx`, I used it to check if the stack array is empty. If empty, it renders a "Your stack is empty" message; otherwise, it renders the list of selected tech items:

```tsx
{stack.length === 0 ? (
  <div className="border border-dashed border-slate-200 rounded-xl p-8 text-center text-slate-400 text-sm">
    Your stack is empty.
  </div>
) : (
  <div className="space-y-4">
    {/* Stack list items */}
  </div>
)}
```
### How do you pass data from a parent component to a child component, and how does a child send something back to the parent?
* **Parent to Child:** The parent component passes data down using **props** (e.g., passing the `stack` array into `<YourStack stack={stack} />`).
* **Child to Parent:** The parent sends a **callback function** down as a prop, and the child calls it with an argument when an action happens (e.g., clicking the remove button triggers `onClick={() => RemoveFromStack(item.id)}` to tell the parent which item to remove).
