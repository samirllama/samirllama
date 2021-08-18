export default function App() {
  return (
    <ColorPicker>
      <p>Hello, world!</p>
      <ExpensiveTree />
    </ColorPicker>
  );
}

function ColorPicker({ children }) {
  let [color, setColor] = useState("red");
  return (
    <div style={{ color }}>
      <input value={color} onChange={(e) => setColor(e.target.value)} />
      {children}
    </div>
  );
}

//We split the App component in two. The parts that depend on the color, together with the color state variable itself, have moved into ColorPicker.

// The parts that don’t care about the color stayed in the App component and are passed to ColorPicker as JSX content, also known as the children prop.

// When the color changes, ColorPicker re-renders. But it still has the same children prop it got from the App last time, so React doesn’t visit that subtree.

// And as a result, <ExpensiveTree /> doesn’t re-render.
