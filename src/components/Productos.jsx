import React from 'react';

import datoProducto from '../../datoProducto.js';
import datoUser from '../../datoUser.js';

class Productos extends React.Component {
  render() {
    console.log('DatoPRODUCTO', datoProducto);
    console.log('DatoUSER', datoUser);
    return (
      <div>
        <div className="row">
          <div className="col-xs-1"> col 2</div>
            <div className="col-xs-10">

              {datoProducto.map(product => (
                <div key={product._id} className="col-sm-3">
                  <div className='divProduct'>
                    <div className="divImage">
                      <img src={product.img.url} />
                    </div>
                    <div>
                      <p1> {product.category} </p1>
                      <h4> {product.name} </h4>
                      <p1> Vale {product.cost} </p1>
                    </div>
                    {(product.cost < datoUser.points) ?
                      <div>
                        <button> Comprar! </button>
                      </div>
                      :
                      <div>
                        <h5> Te faltan {product.cost - datoUser.points} puntos</h5>
                      </div>
                    }
                  </div>
                </div>
                )
              )}

            </div>
          <div className="col-xs-1"> col 2</div>
        </div>
      </div>
    )
  };
};

export default Productos;
