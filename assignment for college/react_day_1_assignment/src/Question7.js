
const Question7 = ({onColorChange}) => {
  const handleChange = (event) => {
    onColorChange(event.target.value);
};
  return (
    <>
       <input type="color" onChange={handleChange} />
    </>
  );
}

export default Question7