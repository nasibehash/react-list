import { useState } from "react";
import Header from "./components/Header/Header.jsx";
import CoreConcept from "./components/CoreConcept.jsx";
import TabButtons from "./components/TabButtons.jsx";
import { CORE_CONCEPTS } from "./data.js";
import { EXAMPLES } from "./data.js";
function App() {
  const [selected, setSelected] = useState();
  function handleSelectedButton(selectedButton) {
    setSelected(selectedButton);
  }

  let tabContent = <p>Please select a topic.</p>;
  if (selected) {
    tabContent = (
      <div id="tab-content">
        <h3>{EXAMPLES[selected].title}</h3>
        <p>{EXAMPLES[selected].description}</p>
        <pre>
          <code>{EXAMPLES[selected].code}</code>
        </pre>
      </div>
    );
  }
  return (
    <div>
      <Header />
      <main>
        <section id="core-concepts">
          <h2>Core Concept</h2>
          <ul>
            {CORE_CONCEPTS.map((conceptItem) => (
              <CoreConcept key={conceptItem.title} {...conceptItem} />
            ))}
          </ul>
        </section>
        <section id="examples">
          <h2>Examples</h2>
          <menu>
            {CORE_CONCEPTS.map((conceptItem) => (
              <TabButtons
                key={conceptItem.title}
                isSelected={selected === conceptItem.title}
                onSelect={() => handleSelectedButton(conceptItem.title)}
              >
                {conceptItem.title}
              </TabButtons>
            ))}
          </menu>
          {tabContent}
        </section>
      </main>
    </div>
  );
}

export default App;
