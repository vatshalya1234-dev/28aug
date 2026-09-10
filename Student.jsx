const Student = (props) => {
  return (
    <>
      <h2>Student Component</h2>
      <p>Name: {props.name}</p>
      <p>Course: {props.course}</p>
    </>
  );
};

export default Student;