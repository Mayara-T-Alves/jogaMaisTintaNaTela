import './ListaSuspensa.css'
import { useState } from 'react';

const ListaSuspensa = (props) => {
    const [valorSelecionado, setValorSelecionado] = useState('');

    const aoAlterarValor = (evento) => {
        const novoValor = evento.target.value;
        setValorSelecionado(novoValor);
        props.aoAlterado(novoValor); // Chame a função de callback passando o novo valor selecionado
    };

    return (
        <div className='lista-suspensa'>
            <label>{props.label}</label>
            <select required={props.required} value={valorSelecionado} onChange={aoAlterarValor}>
                <option value="">Selecione uma cor principal para o projeto</option>
                {props.itens.map(item => {
                    return <option key={item}>{item}</option>
                })}
            </select>
        </div>
    )
}

export default ListaSuspensa