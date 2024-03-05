const RadioComp = ({
  id,
  title,
  type,
  name,
  value,
  handleChange,
  radioFilter,
}) => {
  return (
    <div className="flex items-center gap-2">
      <input
        id={id}
        type={type}
        name={name}
        value={value}
        onChange={handleChange}
        checked={radioFilter === value}
      />
      <label htmlFor={id} className="text-sm">
        {title}
      </label>
    </div>
  );
};

export default RadioComp;
