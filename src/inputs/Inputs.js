function Inputs({ placeholderArr, onHandleInput }) {
  const handleChange = (e) => {
    onHandleInput(e.target.value, e.target.placeholder);
  };
  return (
    <>
      {placeholderArr.map((placeholder) => (
        <input
          key={placeholder}
          type="text"
          onChange={handleChange}
          placeholder={placeholder}
        />
      ))}
    </>
  );
}
export default Inputs;
