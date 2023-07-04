import SimpsonsMember from './components/SimpsonsMember';

const App = () => {
  return (
      <>
          <SimpsonsMember
        name="Homer Simpson"
        age={40}
        sex="Male"
        src="https://upload.wikimedia.org/wikipedia/en/0/02/Homer_Simpson_2006.png"
          />
          <SimpsonsMember
        name="Marge Simpson"
        age={38}
        sex="Female"
        src="https://upload.wikimedia.org/wikipedia/ru/0/0b/Marge_Simpson.png"
          />
          <SimpsonsMember
        name="Bart Simpson"
        age={36}
        sex="Male"
        src="https://upload.wikimedia.org/wikipedia/uk/a/aa/Bart_simpson.png"
          />
          <SimpsonsMember
        name="Lisa Simpson"
        age={35}
        sex="Female"
        src="https://upload.wikimedia.org/wikipedia/ru/e/ec/Lisa_Simpson.png"
          />
          <SimpsonsMember
        name="Maggie Simpson"
        age={34}
        sex="Female"
        src="https://upload.wikimedia.org/wikipedia/ru/9/9d/Maggie_Simpson.png"
          />
      </>
  );
};

export default App;
