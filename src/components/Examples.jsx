import React, { useState } from "react";
import TabButton from "./TabButton";
import Section from "./Section";
import { EXAMPLES } from "../data";

export default function Examples() {
  const [selectedTopic, setSelectedTopic] = useState();
  const handleSelect = (selectedButon) => {
    setSelectedTopic(selectedButon);
  };
  return (
    <Section title={Examples} id="examples">
      <menu>
        <TabButton
          isSelected={selectedTopic === "Components"}
          onClick={() => {
            handleSelect("Components");
          }}
        >
          Components
        </TabButton>
        <TabButton
          isSelected={selectedTopic === "JSX"}
          onClick={() => {
            handleSelect("JSX");
          }}
        >
          JSX
        </TabButton>
        <TabButton
          isSelected={selectedTopic === "Props"}
          onClick={() => {
            handleSelect("Props");
          }}
        >
          Props
        </TabButton>
        <TabButton
          isSelected={selectedTopic === "State"}
          onClick={() => {
            handleSelect("State");
          }}
        >
          State
        </TabButton>
      </menu>
      {!selectedTopic && <p>Click on any tab to see the example</p>}
      {selectedTopic && (
        <div id="tab-content">
          <h3>{EXAMPLES[selectedTopic].title}</h3>
          <p>{EXAMPLES[selectedTopic].description}</p>
          <pre>
            <code>{EXAMPLES[selectedTopic].code}</code>
          </pre>
        </div>
      )}
    </Section>
  );
}
