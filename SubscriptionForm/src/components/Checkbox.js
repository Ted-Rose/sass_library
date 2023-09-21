const Checkbox = ({ checkboxChecked, onChange }) => (
  <div className="checkmark">
    <input
      className="ic-checkmark"
      type="checkbox"
      checked={checkboxChecked}
      onChange={onChange}
    />
  </div>
);
export default Checkbox;
