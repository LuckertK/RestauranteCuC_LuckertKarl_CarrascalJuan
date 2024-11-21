export const Acerca = () => {
  return (
  <>
  <div className="container py-5 d-flex justify-content-center" style={{ marginTop: '100px' }}> {/* Ajusta el margen superior aquí */}
  <div className="card shadow-lg border-0" style={{ maxWidth: '900px', borderRadius: '25px' }}>
  <div
  className="card-header text-center text-white"
  style={{
  backgroundColor: '#B22222', // Rojo fuego
  clipPath: 'polygon(0 0, 100% 0, 95% 100%, 5% 100%)',
  padding: '2rem',
  fontSize: '2.5rem',
  letterSpacing: '2px',
  fontWeight: 'bold',
  boxShadow: '0 5px 15px rgba(0, 0, 0, 0.3)'
  }}
  >
  Somos el mejor Restaurante de la Costa Caribe
  </div>
  <div className="card-body text-center">
  <p className="card-text" style={{ fontSize: '1.25rem', lineHeight: '1.75' }}>
  Somos un Restaurante excepcional. <br />
  Nuestros platos son de la más alta calidad para darle lo mejor a nuestros clientes.
  </p>
  <button className="btn btn-outline-danger mt-4" style={{ padding: '0.75rem 2rem', fontSize: '1.2rem' }}>
  Conoce nuestro menú
  </button>
  </div>
  <div className="card-footer text-muted text-center" style={{ fontStyle: 'italic', fontSize: '1rem' }}>
  ¡Sabor y sazón en cada bocado!
  </div>
  </div>
  </div>
  </>
  );
  };  
