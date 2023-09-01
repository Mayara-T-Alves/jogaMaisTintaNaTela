import Cliente from '../Cliente'
import './Time.css'

const Time = (props) => {
    return (
        (props.dados.length > 0) && <section className='time' style={{ backgroundColor: props.corPrimaria }}>
            <h3 style={{ borderColor: props.corSecundaria }}>{props.nome}</h3>
            <div className='clientes'>
                {props.dados.map(dado => (
                    <Cliente corDeFundo={props.corSecundaria} key={dado.nome} nome={dado.nome} instagram={dado.instagram} imagem={dado.imagem} descricao={dado.descricao} />))}
            </div>
        </section>
    )
}

export default Time