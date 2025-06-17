export const input = (type, sz, length, placeholder, value, setValue, keyDown, disabled, color) => {
  return (
    <input
      type={type}
      className={`form-control form-control-${sz} border-0 rounded-4 shadow-0 w-75 mb-2`}
      value={value}
      maxLength={length}
      placeholder={placeholder}
      disabled={disabled}
      onChange={(e) => setValue(e.target.value)}
      onKeyDown={(e) => {
        if (e.key === "Enter" && typeof keyDown === "function") keyDown();
      }}
      style={{ backgroundColor: color }}
    />
  );
};
