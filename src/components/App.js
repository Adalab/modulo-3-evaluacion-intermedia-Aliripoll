
import '../styles/App.scss';
import contacts from '../data/contacts.json';
import { useState } from 'react';

function App() {
  const [data, setData] = useState(contacts.results);

   const htmlData = data.map((oneContact, index) => {
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
      <header className='header'>
        <h1 className='header__title'>Adalabers</h1>
      </header>
      <table className="table">
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Tutora</th>
            <th>Especialidad</th>
          </tr>
        </thead>
        <tbody>
      {htmlData}
        </tbody>
      </table>

    </div>
  );
}

export default App;
