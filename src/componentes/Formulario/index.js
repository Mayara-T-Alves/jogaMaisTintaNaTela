import './Formulario.css';
import CampoTexto from '../CampoTexto';
import ListaSuspensa from '../ListaSuspensa';
import Botao from '../Botao';
import { useState } from 'react';

const Formulario = (props) => {

    const [nome, setNome] = useState('')
    const [instagram, setInstagram] = useState('')
    const [imagem, setImagem] = useState('')
    const [descricao, setDescricao] = useState('')
    const [time, setTime] = useState('')

    const aoSalvar = (evento) => {
        evento.preventDefault() //Previnindo o comportamento padrao, evita que a pg seja
        props.aoDadosCadastrado({
            nome,
            instagram,
            imagem,
            descricao,
            time
        })
        setNome('')
        setInstagram('')
        setImagem('')
        setDescricao('')
        setTime('')
    }

    return (
        <section className='formulario'>
            <form onSubmit={aoSalvar} >
                <h2>Preencha os dados e compartilhe sua ideia para ciração de um Motion!</h2>
                <CampoTexto
                    obrigatorio={true}
                    label="Nome"
                    placeholder="Digite seu nome"
                    valor={nome}
                    aoAlterado={valor => setNome(valor)}
                />
                <CampoTexto
                    obrigatorio={true}
                    label="Instagram"
                    placeholder="Digite seu IG"
                    valor={instagram}
                    aoAlterado={valor => setInstagram(valor)}
                />
                <CampoTexto
                    label="Imagem"
                    placeholder="Informe o endereço da imagem que pode ser utilizado no Motion"
                    valor={imagem}
                    aoAlterado={valor => setImagem(valor)}
                />
                <CampoTexto
                    obrigatorio={true}
                    label="Descrição da ideia"
                    placeholder="Escreva sua ideia"
                    valor={descricao}
                    aoAlterado={valor => setDescricao(valor)}
                />
                <ListaSuspensa
                    label="Cor"
                    itens={props.times}
                    valor={time}
                    aoAlterado={valor => setTime(valor)}
                />
                <Botao>
                    Salvar ideia
                </Botao>
            </form>
        </section>
    )

}

export default Formulario