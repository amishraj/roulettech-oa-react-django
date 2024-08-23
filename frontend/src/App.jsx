import { useState, useEffect } from 'react';
import axios from 'axios';

import { CORE_CONCEPTS } from './data.js';
import { EXAMPLES } from './data.js';
import Header from './components/Header/Header.jsx';
import CoreConcept from './components/CoreConcept.jsx';
import TabButton from './TabButton.jsx';

function App() {
  const [selectedTopic, setSelectedTopic] = useState();
  const [componentData, setComponentData] = useState({});
  const [coreConcepts, setCoreConcepts] = useState([]);

  function handleSelect(selectedButton) {
    //selectedButton => 'components', 'jsx', 'props', 'state'
    setSelectedTopic(selectedButton);
  }

  useEffect(() => {
    axios.get('http://localhost:8000/api/core_concepts/')
      .then(response => {
        setCoreConcepts(response.data);
      })
      .catch(error => console.error('Error fetching core concepts:', error));
  }, []);

  useEffect(() => {
    if (selectedTopic) {
      // Fetch data from the API when selectedTopic changes
      axios.get(`http://localhost:8000/api/component/${selectedTopic}/`)
        .then(response => {
          setComponentData(response.data);
        })
        .catch(error => console.error('Error fetching data:', error));
    }
  }, [selectedTopic]);

  let tabContent = <p>Please select a topic.</p>;
  if (selectedTopic && componentData) {
    tabContent = (
      <div id="tab-content">
        <h3>{componentData.title}</h3>
        <p>{componentData.description}</p>
        <pre>
          <code>
            {componentData.code}
          </code>
        </pre>
      </div>
    )
  }
  return (
    <div>
      <Header />
      <main>
        <section id="core-concepts">
          <h2>Core Concepts</h2>
          <ul>
            {coreConcepts.map((conceptItem) => {
              const matchingConcept = CORE_CONCEPTS.find(item => item.title === conceptItem.title);

              return (
                <CoreConcept
                  key={conceptItem.title}
                  image={matchingConcept ? matchingConcept.image : ''} // Use the image from CORE_CONCEPTS
                  title={conceptItem.title}
                  description={conceptItem.description}
                />
              );
            })}
          </ul>
        </section>

        <section id="examples">
          <h2>Examples</h2>
          <menu>
            <TabButton isSelected={selectedTopic === 'components'} onSelect={() => handleSelect('components')}>Components</TabButton>
            <TabButton isSelected={selectedTopic === 'jsx'} onSelect={() => handleSelect('jsx')}>JSX</TabButton>
            <TabButton isSelected={selectedTopic === 'props'} onSelect={() => handleSelect('props')}>Props</TabButton>
            <TabButton isSelected={selectedTopic === 'state'} onSelect={() => handleSelect('state')}>State</TabButton>
          </menu>
          {tabContent}
        </section>
      </main>
    </div>
  );
}

export default App;