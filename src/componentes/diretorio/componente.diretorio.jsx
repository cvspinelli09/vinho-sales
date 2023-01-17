
import ItemEmpresas from '../empresa/componente.empresa';

import './estilo.diretorio.scss'

const Diretorio = ({ empresas }) => {
    return (
        <div className="container-diretorio">
            {empresas.map((empresas) => (    
            <ItemEmpresas key={empresas.id} empresas={empresas} />
        ))}
        </div>
    )    
}

export default Diretorio;