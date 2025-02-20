/* eslint-disable react/prop-types */
/* Cách 1: toán tử 3 ngôi */

// function TabContent({ selectedTopic, EXAMPLES }) {
//   return (
//     <>
//       {!selectedTopic ? (
//         <p>Vui lòng bấm nút</p>
//       ) : (
//         <div id="tabContent">
//           <h3>{EXAMPLES[selectedTopic].title}</h3>
//           <p>{EXAMPLES[selectedTopic].desc}</p>
//           <pre>
//             <code>{EXAMPLES[selectedTopic].code}</code>
//           </pre>
//         </div>
//       )}
//     </>
//   );
// }

/* Cách 2: && */

// function TabContent({ selectedTopic, EXAMPLES }) {
//   return (
//     <>
//       {!selectedTopic && <p>Vui lòng bấm nút</p>}
//       {selectedTopic && (
//         <div id="tabContent">
//           <h3>{EXAMPLES[selectedTopic].title}</h3>
//           <p>{EXAMPLES[selectedTopic].desc}</p>
//           <pre>
//             <code>{EXAMPLES[selectedTopic].code}</code>
//           </pre>
//         </div>
//       )}
//     </>
//   );
// }

/* Cách 3: if */

function TabContent({ selectedTopic, EXAMPLES }) {
  if (!selectedTopic) {
    return <p>Vui lòng bấm nút</p>;
  }
  return (
    <div id="tabContent">
      <h3>{EXAMPLES[selectedTopic].title}</h3>
      <p>{EXAMPLES[selectedTopic].desc}</p>
      <pre>
        <code>{EXAMPLES[selectedTopic].code}</code>
      </pre>
    </div>
  );
}

export default TabContent;
