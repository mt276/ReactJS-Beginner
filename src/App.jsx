import { useState } from "react";
import Header from "./components/Header/header.jsx";
import MainContent from "./components/MainContent/mainContent.jsx";
import { myData, EXAMPLES } from "./data.js";
import TabButton from "./components/TabButton.jsx";
import TabContent from "./components/TabContent.jsx";
import AlertBox from "./components/AlertBox/AlertBox.jsx";
import Section from "./components/MainContent/Section.jsx";
import Tabs from "./components/MainContent/Tabs.jsx";

function App() {
  const [selectedTopic, setSelectedTopic] = useState();
  function handleSelect(selectedButton) {
    setSelectedTopic((prev) =>
      prev === selectedButton ? undefined : selectedButton
    );
  }

  return (
    <>
      <Header />
      <main>
        <Section title="Khái niệm chính trong React" id="core-concepts">
          <ul>
            {myData.map((item) => (
              <MainContent key={item.title} {...item} />
            ))}
          </ul>
        </Section>
        <Section title="Examples" id="examples">
          <Tabs
            ButtonContainer="menu"
            button={
              <>
                <TabButton
                  isActive={selectedTopic === "components"}
                  onClick={() => handleSelect(`components`)}
                >
                  Components
                </TabButton>
                <TabButton
                  isActive={selectedTopic === "jsx"}
                  onClick={() => handleSelect(`jsx`)}
                >
                  JSX
                </TabButton>
                <TabButton
                  isActive={selectedTopic === "props"}
                  onClick={() => handleSelect(`props`)}
                >
                  Props
                </TabButton>
                <TabButton
                  isActive={selectedTopic === "state"}
                  onClick={() => handleSelect(`state`)}
                >
                  State
                </TabButton>
              </>
            }
          ></Tabs>
        </Section>
        <TabContent selectedTopic={selectedTopic} EXAMPLES={EXAMPLES} />
        <AlertBox />
      </main>
    </>
  );
}

export default App;
