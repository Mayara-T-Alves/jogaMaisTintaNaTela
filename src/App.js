import { useState } from 'react';
import Banner from './componentes/Banner';
import Formulario from './componentes/Formulario';
import Time from './componentes/Time';
import Rodape from './componentes/rodape';


function App() {

  const times = [
    {
      nome: 'Vermelho',
      corPrimaria: '#FAB2B2',
      corSecundaria: '#FF0100'
    },
    {
      nome: 'Laranja',
      corPrimaria: '#FBCEA1 ',
      corSecundaria: '#F7941F'
    },
    {
      nome: 'Amarelo',
      corPrimaria: '#FCFDBF ',
      corSecundaria: '#FCEE21'
    },
    {
      nome: 'Verde',
      corPrimaria: '#B9FBCF ',
      corSecundaria: '#39B549'
    },
    {
      nome: 'Azul',
      corPrimaria: '#B3D2FF ',
      corSecundaria: '#29ABE3'
    },
    {
      nome: 'Anil',
      corPrimaria: '#D6AEF8',
      corSecundaria: '#2F3192'
    },
    {
      nome: 'Violeta',
      corPrimaria: '#FBC0F8 ',
      corSecundaria: '#662D92'
    }
  ]

  const [dados, setDados] = useState([])

  const aoNovoDadoAdicionado = (dado) => {
    setDados([...dados, dado])
  }

  return (
    <div className="App">
      <Banner />
      <Formulario times={times.map(time => time.nome)} aoDadosCadastrado={dado => aoNovoDadoAdicionado(dado)} />
      {times.map(time => <Time
        key={time.nome}
        nome={time.nome}
        corPrimaria={time.corPrimaria}
        corSecundaria={time.corSecundaria}
        dados={dados.filter(dados => dados.time === time.nome)}
      />)}
      <Rodape />

    </div>
  );
}

export default App;
