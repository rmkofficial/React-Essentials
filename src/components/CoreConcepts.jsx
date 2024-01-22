import CoreConcept from "./CoreConcept";
import { CORE_CONCEPTS } from "../data";

export default function CoreConcepts() {
  return (
    <section id="core-concepts">
      <h2>Core Concept</h2>
      <ul>
        {CORE_CONCEPTS.map((conceptItem) => (
          <CoreConcept
            key={conceptItem.title}
            title={conceptItem.title}
            description={conceptItem.description}
            image={conceptItem.image}
          />
        ))}
      </ul>
    </section>
  );
}
