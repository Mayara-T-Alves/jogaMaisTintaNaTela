import './Cliente.css'

const Cliente = ({ nome, imagem, instagram, descricao, corDeFundo }) => {
    return (<div className='cliente'>
        <div>
            <div className='cabecalho' style={{ backgroundColor: corDeFundo }}>
                <img src={imagem} alt={nome} />
            </div>
            <div className='rodape'>
                <h4>{nome}</h4>
                <h5>{instagram}</h5>
                <h6>{descricao}</h6>
            </div>
        </div>
    </div>)
}

export default Cliente