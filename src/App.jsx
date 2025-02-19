import { useState } from "react";
import Header from "./components/Header/header.jsx";
import MainContent from "./components/MainContent/mainContent.jsx";
import { myData } from "./data.js";
import TabButton from "./components/TabButton.jsx";

function App() {
  const [selectedTopic, setSelectedTopic] = useState("Vui lòng click nào nút");
  function handleSelect(selectedButton) {
    setSelectedTopic(selectedButton);
  }

  return (
    <>
      <Header />
      <main>
        <section id="core-concepts">
          <h2>Khái niệm chính trong React</h2>
          <ul>
            <MainContent {...myData[0]} />
            <MainContent {...myData[1]} />
            <MainContent {...myData[2]} />
            <MainContent {...myData[3]} />
          </ul>
        </section>

        <section id="examples">
          <h2>Examples</h2>
          <menu>
            <TabButton onSelect={() => handleSelect(`Components`)}>
              Components
            </TabButton>
            <TabButton onSelect={() => handleSelect(`JSX`)}>JSX</TabButton>
            <TabButton onSelect={() => handleSelect(`Props`)}>Props</TabButton>
            <TabButton onSelect={() => handleSelect(`State`)}>State</TabButton>
            {/* <TabButton Beginner="Components"></TabButton> */}
          </menu>
        </section>
        {selectedTopic}
      </main>
    </>
  );
}

export default App;
