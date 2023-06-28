import Heading from "./Components/Heading";
import Section from "./Components/Section";
import Counter from "./Components/Counter";
import { useState } from "react";
import List from "./Components/List";
function App() {
  const [count, setCount] = useState<number>(1);

  return (
    <>
      <Heading title="TypeScript with React" />
      <Section title="My heading with TS">This is the section</Section>
      <Counter setCount={setCount}>Count id {count}</Counter>
      <List
        items={["☕ Coffee", "🌮 Tacos", "💻 Code"]}
        render={(item: string) => <span className="gold">{item}</span>}
      ></List>
    </>
  );
}

export default App;
