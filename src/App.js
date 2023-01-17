import logo from './logo.svg';
import './App.css';

import Diretorio from './componentes/diretorio/componente.diretorio';

const App = () => {

  const empresas = [
    {
      id: 1,
      titulo: 'Costazzura',
      imageUrl: 'https://i.imgur.com/VasyPvJ.png'
    },
    {
      id: 2,
      titulo: 'Ecovino',
      imageUrl: 'https://i.imgur.com/Vvp99N9.png'
    }
  ]

  return (
    <Diretorio empresas={empresas} />
  );
}

export default App;
