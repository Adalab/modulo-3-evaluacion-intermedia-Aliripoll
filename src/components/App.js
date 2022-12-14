import "../styles/App.scss";
import contacts from "../data/contacts.json";
import { useState } from "react";

function App() {
  const [data, setData] = useState(contacts.results);
  const [newContact, setNewContact] = useState({
    name: "",
    counselor: "",
    speciality: "",
  });
  const [search, setSearch] = useState("");

  const handleNewContact = (ev) => {
    setNewContact({ ...newContact, [ev.target.id]: ev.target.value });
  };

  const handleClick = (ev) => {
    ev.preventDefault();
    setData([...data, newContact]);
  };

  const handleSearch = (ev) => {
    setSearch(ev.target.value);
  };
  const handleClickBtn = (ev) => {
    ev.preventDefault();
    setSearch([...data, search]);
  };

  const htmlData = data
    .filter((oneContact) =>
      oneContact.name.toLowerCase().includes(search.toLowerCase())
    )
    .map((oneContact, index) => {
      return (
        <tr key={index}>
          <td>{oneContact.name}</td>
          <td>{oneContact.counselor}</td>
          <td>{oneContact.speciality}</td>
        </tr>
      );
    });

  return (
    <div>
      <header className="header">
        <h1 className="header__title">Adalabers</h1>
      </header>
      <form action="">
        <label htmlFor="">Name:</label>
        <input
          value={search.name}
          className="addContact"
          type="search"
          name="name"
          id="name"
          onInput={handleSearch}
        />
        <button className="search_btn" onClick={handleClickBtn}>
          Search
        </button>
      </form>
      <table className="table">
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Tutora</th>
            <th>Especialidad</th>
          </tr>
        </thead>
        <tbody>{htmlData}</tbody>
      </table>
      <section className="section">
        <h2>Añadir una nueva Adalaber</h2>
        <form>
          <label htmlFor="name">Nombre:</label>
          <input
            value={newContact.name}
            type="text"
            name="name"
            id="name"
            onInput={handleNewContact}
          />

          <label htmlFor="counselor">Tutora:</label>
          <input
            value={newContact.counselor}
            type="text"
            name="counselor"
            id="counselor"
            onInput={handleNewContact}
          />

          <label htmlFor="speciality">Especialidad:</label>
          <input
            value={newContact.speciality}
            type="text"
            name="speciality"
            id="speciality"
            onInput={handleNewContact}
          />
        </form>
        <button className="section__btn" onClick={handleClick}>
          Añadir una nueva Adalaber
        </button>
      </section>
    </div>
  );
}

export default App;
