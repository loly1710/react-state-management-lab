// src/App.jsx
import { useState } from "react";
import "./App.css";

const App = () => {
  const [team, setTeam] = useState([]);
  const [money, setMoney] = useState(100);
  const [setTotalStrength] = useState(0);
  const [setTotalAgility] = useState(0);

  const zombieFighters = [
    {
      name: "Survivor",
      price: 12,
      strength: 6,
      agility: 4,
      img: "https://via.placeholder.com/150/92c952",
      id: 1,
    },
    {
      name: "Scavenger",
      price: 10,
      strength: 5,
      agility: 5,
      img: "https://via.placeholder.com/150/771796",
      id: 2,
    },
    {
      name: "Shadow",
      price: 18,
      strength: 7,
      agility: 8,
      img: "https://via.placeholder.com/150/24f355",
      id: 3,
    },
    {
      name: "Tracker",
      price: 14,
      strength: 7,
      agility: 6,
      img: "https://via.placeholder.com/150/d32776",
      id: 4,
    },
    {
      name: "Sharpshooter",
      price: 20,
      strength: 6,
      agility: 8,
      img: "https://via.placeholder.com/150/1ee8a4",
      id: 5,
    },
    {
      name: "Medic",
      price: 15,
      strength: 5,
      agility: 7,
      img: "https://via.placeholder.com/150/66b7d2",
      id: 6,
    },
    {
      name: "Engineer",
      price: 16,
      strength: 6,
      agility: 5,
      img: "https://via.placeholder.com/150/56acb2",
      id: 7,
    },
    {
      name: "Brawler",
      price: 11,
      strength: 8,
      agility: 3,
      img: "https://via.placeholder.com/150/8985dc",
      id: 8,
    },
    {
      name: "Infiltrator",
      price: 17,
      strength: 5,
      agility: 9,
      img: "https://via.placeholder.com/150/392537",
      id: 9,
    },
    {
      name: "Leader",
      price: 22,
      strength: 7,
      agility: 6,
      img: "https://via.placeholder.com/150/602b9e",
      id: 10,
    },
  ];

  const handleAddFighter = (zombieFighters) => {
    if (money >= zombieFighters.price) {
      const newTeam = [...team, zombieFighters];
      setTeam((prevTeam) => [...prevTeam, zombieFighters]);
      setMoney((prevMoney) => prevMoney - zombieFighters.price);
      setTotalStrength(calculateTotalStrength(newTeam));
      setTotalAgility(calculateTotalAgility(newTeam));
    } else {
      console.log("Not Enough money!");
    }
  };

  const calculateTotalStrength = (team) => {
    return team.reduce((acc, member) => acc + member.strength, 0);
  };

  const calculateTotalAgility = (team) => {
    return team.reduce((acc, member) => acc + member.agility, 0);
  };

  const handleRemoveFighter = (zombieFighters) => {
    const newTeam = team.filter((member) => member.id !== zombieFighters.id);
    setTeam(newTeam);
    setMoney(money + zombieFighters.price);
    setTotalStrength(calculateTotalStrength(newTeam));
    setTotalAgility(calculateTotalAgility(newTeam));
  };

  return (
    <div>
      <h1>Zombie Fighters</h1>
      <h3>Money: {money}</h3>
      <h3>
        Team Strength:{team.reduce((acc, member) => acc + member.strength, 0)}{" "}
      </h3>
      <h3>
        Team Agility:{team.reduce((acc, member) => acc + member.agility, 0)}{" "}
      </h3>

      <h3>Team</h3>
      {team.length === 0 ? (
        <p>Pick some team members!</p>
      ) : (
        <ul>
          {team.map((zombieFighters) => (
            <li key={zombieFighters.id}>
              <img src={zombieFighters.img} alt={zombieFighters.name} />
              <p>Name: {zombieFighters.name}</p>
              <p>Strength: {zombieFighters.strength}</p>
              <p>Agility: {zombieFighters.agility}</p>
              <button onClick={() => handleRemoveFighter(zombieFighters)}>
                Remove
              </button>
            </li>
          ))}
        </ul>
      )}
      <h3>Fighters</h3>

      <ul>
        {zombieFighters.map((zombieFighters) => (
          <li key={zombieFighters.id}>
            <img src={zombieFighters.img} alt={zombieFighters.name} />
            <p>Name: {zombieFighters.name}</p>
            <p>Price: {zombieFighters.price}</p>
            <p>Strength: {zombieFighters.strength}</p>
            <p>Agility: {zombieFighters.agility}</p>
            <button onClick={() => handleAddFighter(zombieFighters)}>
              Add
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default App;
