import PropTypes from "prop-types";

export default function TabButton({ children, isActive, ...props }) {
  return (
    <li>
      <button className={isActive ? "active" : undefined} {...props}>
        {children}
      </button>
    </li>
  );
}

TabButton.propTypes = {
  children: PropTypes.string,
  onSelect: PropTypes.func,
  isActive: PropTypes.bool,
};
