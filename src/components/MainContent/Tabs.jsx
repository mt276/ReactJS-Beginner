/* eslint-disable react/prop-types */
function Tabs({ button, children, ButtonContainer }) {
  return (
    <>
      <ButtonContainer>{button}</ButtonContainer>
      {children}
    </>
  );
}

export default Tabs;
