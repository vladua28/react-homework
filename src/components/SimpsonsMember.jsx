const SimpsonsMember = (props) => {
  const { name, age, sex, src } = props;
  return (
      <>
        <h2>Homer Simpson</h2>
        <p>Age: {age}</p>
        <p>Sex: {sex}</p>
        <img src={src} alt={name} />
      </>
  )
}

export default SimpsonsMember;