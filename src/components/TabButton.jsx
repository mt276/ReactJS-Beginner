import PropTypes from "prop-types";
export default function TabButton({ children, onSelect }) {
  return (
    <li>
      <button onClick={onSelect}>{children}</button>
    </li>
  );
}

TabButton.propTypes = {
  children: PropTypes.string,
  onSelect: PropTypes.func,
};
