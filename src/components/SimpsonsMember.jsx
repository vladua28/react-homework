const SimpsonsMember = (props) => {
  const { name, age, sex, src } = props;
  return (
      <div>
          <h2>{name}</h2>
          <p>Age: {age}</p>
          <p>Sex: {sex}</p>
          <img src={src} alt={name} />
      </div>
  )
}

export default SimpsonsMember;