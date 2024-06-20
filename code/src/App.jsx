import { useState } from "react";

function Profile() {
  const user = {
    name: "Hedy Lamarr",
    imageUrl: "https://i.imgur.com/yXOvdOSs.jpg",
    imageSize: 90,
  };
  return (
    <>
      <h1>{user.name}</h1>
      <img
        className="avatar"
        src={user.imageUrl}
        alt={"Photo of" + user.anme}
        style={{
          width: user.imageSize,
          height: user.imageSize,
          borderRadius: "50%",
        }}
      />
    </>
  );
}

const MyButton = ({ count, onClick }) => {
  return <button onClick={onClick}>Clicked {count} times</button>;
};

function App() {
  const [count, setCount] = useState(0);
  const handleClick = () => {
    setCount(count + 1);
  };
  const products = [
    { title: "Cabbage", id: 1 },
    { title: "Garlic", id: 2 },
    { title: "Apple", id: 3 },
  ];
  const listItems = products.map((product) => (
    <li key={product.id}>{product.title}</li>
  ));
  return (
    <>
      <Profile />
      <ul>{listItems}</ul>
      <h1>Counters that update together</h1>
      <MyButton count={count} onClick={handleClick} />
      <MyButton count={count} onClick={handleClick} />
    </>
  );
}

export default App;
