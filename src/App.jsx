import { useState } from "react";
import { CORE_CONCEPTS } from "./data";
import Header from "./components/Header/Header";
import CoreConcepts from "./components/CoreConcepts";
import TabButton from "./components/TabButton";

function App() {
  const [selectedTopic, setSelectedTopic] = useState("Please select a topic");
  const handleSelect = (selectedButon) => {
    setSelectedTopic(selectedButon);
  };

  return (
    <div>
      <Header />
      <main>
        <section id="core-concepts">
          <h2>Core Concept</h2>
          <ul>
            <CoreConcepts
              title={CORE_CONCEPTS[0].title}
              description={CORE_CONCEPTS[0].description}
              image={CORE_CONCEPTS[0].image}
            />
            <CoreConcepts {...CORE_CONCEPTS[1]} />
            <CoreConcepts {...CORE_CONCEPTS[2]} />
            <CoreConcepts {...CORE_CONCEPTS[3]} />
          </ul>
        </section>
        <section id="examples">
          <h2>Examples</h2>
          <menu>
            <TabButton
              onSelect={() => {
                handleSelect("Components");
              }}
            >
              Components
            </TabButton>
            <TabButton
              onSelect={() => {
                handleSelect("JSX");
              }}
            >
              JSX
            </TabButton>
            <TabButton
              onSelect={() => {
                handleSelect("Props");
              }}
            >
              Props
            </TabButton>
            <TabButton
              onSelect={() => {
                handleSelect("State");
              }}
            >
              State
            </TabButton>
          </menu>
          <p>{selectedTopic}</p>
        </section>
      </main>
    </div>
  );
}

export default App;
