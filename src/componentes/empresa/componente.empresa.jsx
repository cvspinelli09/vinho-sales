import './estilo.empresa.scss'


const ItemEmpresas = ({ empresas }) => {
    const { imageUrl, titulo } = empresas
    return (
        <div  className="container-empresa">
            <div className="imagem-fundo" style={{
                backgroundImage: `url(${imageUrl})`
             }} />
            <div className="container-corpo-empresa">
            <h2>{titulo}</h2>
            <p>Produtos</p>
      </div>
    </div>
    )

}

export default ItemEmpresas;