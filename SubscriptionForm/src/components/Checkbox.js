const Checkbox = ({ value, onChange }) => (
  <div className="checkmark">
    <input
      className="ic-checkmark"
      type="checkbox"
      checked={value}
      onChange={onChange}
    />
  </div>
);
export default Checkbox;
