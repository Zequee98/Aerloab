import React from 'react';

const Productos = function(props) {
  console.log('STATE', props.datoProducto)
  return (
    <div>
      <button onClick = { () => props.getHistory() }> History now </button>
      <div className="row">
        <div className="col-xs-1"> col 2</div>
          <div className="col-xs-10">

            {props.datoProducto.map(product => (
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
                  {(product.cost < props.user.points) ?
                    <div>
                      <button onClick = { () => props.acquireProduct(product._id) }> Redeem now </button>
                    </div>
                    :
                    <div>
                      <h5> Te faltan {product.cost - props.user.points} puntos</h5>
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

export default Productos;
