import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './stylequienes.css';

const QuienesSomos = () => {
  return (
    <div className="background">
      {/* Botones */}
      <button type="button" className="btn btn-secondary custom-buttom">INICIO</button>

      <div className="container mt-5 main-container">
        {/* Texto */}
        <div className="text-container">
          <p className='lineas'>
            _________________________________________________________________
          </p>
          <h1 className="display-4" id="titulo">¿Quiénes somos?</h1>
          <p className='lineas'>
            _________________________________________________________________
          </p>
          <p className="lead">
            Somos un equipo comprometido con el medio ambiente y creemos en la importancia de educar
            a los niños sobre la sostenibilidad. Nos proponemos desarrollar una página web interactiva que sirva
            como herramienta educativa, con el objetivo de fomentar en los niños el cuidado y la protección del
            medio ambiente.
          </p>
          <p className='lead'>
            A través de esta plataforma, buscamos proporcionar recursos educativos y actividades interactivas
            diseñadas para inspirar y motivar a los niños a adoptar prácticas responsables que promuevan la
            conservación de nuestro planeta.
          </p>

          <p className='lineas'> 
          _________________________

          </p>
          <p className='frase'>
            Juntos hagamos el cambio!
          </p>

          <p className='lineas'> 
          ___________________
          </p>

          <div>
            
          </div>
          
        </div>

         {/* Tarjetas */}
         <div className="cards-container">
          {[
            { name: 'Alejandra Camacaro', img: 'https://i.pinimg.com/736x/53/04/c5/5304c5d8625cfb2f96e9e31516631c2e.jpg',  },
            { name: 'María Paz Velozo', img: 'https://i.pinimg.com/736x/6c/29/64/6c2964d1d8d496abf8eeb47921ac5b2c.jpg',  },
            { name: 'Camila Fuentes', img: 'https://i.pinimg.com/736x/78/bf/e1/78bfe15b2de15a44b890a10589639b6b.jpg', },
            { name: 'Cynthia Arenas', img: 'https://i.pinimg.com/736x/37/43/01/374301145e6cbdee10055ec09c63b05e.jpg',  }
          ].map((person, index) => (
            <div className="card" key={index}>
              <img src={person.img} className="card-img-top" alt={`Foto de ${person.name}`} />
              <div className="card-body">
                <h5 className="card-title">{person.name}</h5>
                <p className="card-text">{person.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Footer */}
      {/* <footer className="bg-light text-center text-lg-start mt-5">
        <div className="container p-4">
          <p className="text-center">&copy; 2024 Eco-conciencia. Todos los derechos reservados.</p>
        </div>
      </footer> */}
    </div>
  );
};

export default QuienesSomos;