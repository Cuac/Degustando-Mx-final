import React from "react";
import { Link} from 'react-router-dom';

 function  Mapa () {
       return (
         <div>
            <navigator>
           <header>
              <input className='registros' placeholder= 'Buscar garnacha' />
           </header>
           <Link  className='boton' to=''> Mi perfil  </Link>
          </navigator>
        </div>
       );
    }


export default Mapa;