import React from 'react';

const Productos = (props) => {
  const { datoProducto } = props
  return (
    <div>
      <div className="row">
        <div className="col-xs-1" />
          <div className="col-xs-10">

            { datoProducto.map(product => (
              <div key={ product._id } className="col-sm-3">
                <div className='divProduct'>

                  <div className="divImageProduct">
                    <img src={ product.img.url } />
                  </div>

                  <div className='divImageAndProduct' />
                  { (product.cost < props.user.points) ?
                    <div>
                      <button onClick = { () => props.acquireProduct(product._id) } className='bton'>
                        Redeem now
                      </button>
                    </div>
                    :
                    <div>
                      <h3> Te faltan { product.cost - props.user.points } puntos</h3>
                    </div>
                  }

                  <div>
                    <p> { product.category } </p>
                    <h4> { product.name } </h4>
                    <p> Vale { product.cost } </p>
                  </div>

                </div>
              </div>
              )
            )}

          </div>
        <div className="col-xs-1" />
      </div>
    </div>
  )
};

export default Productos;
