import Hero from "./Hero";
import HeroDetail from "./HeroDetail";
import Messages from "./Messages";
import axios from "axios";

import { useState, useEffect } from "react";

const Heroes = () => {
  const [heroes, setHeroes] = useState([]);
  const [selectedHero, setSelectedHero] = useState({});
  const [messages, setMessages] = useState([]);

  const onDeleteHero = (id) => {
    const newHeroes = heroes.filter((hero) => hero.id !== id);
    setHeroes(newHeroes);
  };

  const handleRowClick = (id) => {
    const hero = heroes.find((hero) => hero.id === id);
    console.log(hero);
    setSelectedHero(hero);
    onAddMessage(`Hero ${hero.name} selected`);
  };

  const onChangeHero = (name) => {
    const heroCopy = heroes;
    const heroIndex = heroCopy.findIndex((hero) => hero.id === selectedHero.id);
    heroCopy[heroIndex].name = name;
    setSelectedHero(heroCopy[heroIndex]);
    setHeroes([...heroCopy]);
  };

  const onAddMessage = (message) => {
    const newMessages = [...messages, message];
    setMessages(newMessages);
  };

  const onClearMessages = () => {
    setMessages([]);
  };

  useEffect(() => {
    const fetchData = async () => {
      const query = await axios.get(
        "https://60dff0ba6b689e001788c858.mockapi.io/heroes"
      );
      const data = query.data;
      setHeroes(data);
    };
    fetchData();
  }, []);

  return (
    <>
      <table>
        <tr>
          <th>ID</th>
          <th>Name</th>
          <th>Button</th>
        </tr>
        {heroes.map((hero) => (
          <Hero
            key={hero.id}
            id={hero.id}
            name={hero.name}
            onDeleteHero={onDeleteHero}
            handleRowClick={handleRowClick}
          />
        ))}
      </table>
      {Object.keys(selectedHero).length === 0 ? (
        <div>Select a hero</div>
      ) : (
        <HeroDetail hero={selectedHero} onChangeHero={onChangeHero} />
      )}
      <button onClick={onClearMessages}>Clear Messages</button>
      {messages.length > 0 && <Messages messages={messages} />}
    </>
  );
};

export default Heroes;
