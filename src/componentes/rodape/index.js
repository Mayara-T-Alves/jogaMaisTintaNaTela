import './rodape.css'

const Rodape = () => {
    return (<footer className="footer" >
        <section>
            <ul>
                <li>
                    <a href="facebook.com" target="_blank" >
                        <img src="/imagens/fb.png" alt="imagem logo facebook" />
                    </a>
                </li>
                <li>
                    <a href="twitter.com" target="_blank" >
                        <img src="/imagens/tw.png" alt="imagem logo twitter" />
                    </a>
                </li>
                <li>
                    <a href="instagram.com" target="_blank" >
                        <img src="/imagens/ig.png" alt="imagem logo instagram" />
                    </a>
                </li>
            </ul>
        </section>
        <section>
            <p> Desenvolvido por Mayara. </p>
        </section>
    </footer>)
}

export default Rodape