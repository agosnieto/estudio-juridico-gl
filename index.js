function loadHeader() {
  const container = document.getElementById('header-container');
  if (window.innerWidth < 768) {
      container.innerHTML = `
          <header>
              <nav class="navbar navbar-expand-lg navbar-dark">
                  <div class="container">
                      <a class="navbar-brand" href="#inicio"><img src="img/NUEVO LOGO LARCHE (100 x 100 px).png" alt="Logo" width="100"></a>
                      <button class="navbar-toggler button-menu" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                          <span class="navbar-toggler-icon"></span>
                      </button>
                      <div class="collapse navbar-collapse" id="navbarNav">
                          <ul class="navbar-nav ms-auto">
                              <li class="nav-item">
                                  <a class="nav-link" href="#inicio">INICIO</a>
                              </li>
                              <li class="nav-item">
                                  <a class="nav-link" href="#servicios">SERVICIOS</a>
                              </li>
                              <li class="nav-item">
                                  <a class="nav-link" href="#nosotros">NOSOTROS</a>
                              </li>
                              <li class="nav-item">
                                  <a class="nav-link" href="#contacto">CONTACTO</a>
                              </li>
                          </ul>
                      </div>
                  </div>
              </nav>
          </header>
          <section class="hero" id="inicio">
              <div class="container">
                  <h1 id="text-eslogan-responsive">TU ASESOR LEGAL DE CONFIANZA</h1>
                  <p id= "parrafo-inicial-responsive">En cada paso, defendemos tus derechos con integridad y excelencia. Tu tranquilidad es nuestra prioridad.</p>
                  <button class = "btn-custom"><a href="https://wa.link/5wbxgs" id= "link-consulta" target="_blank" class="btn">AGENDAR CITA</a></button>
              </div>
          </section>
      `;
  } else {
      container.innerHTML = `
          <header class="inicio">
              <div class="text-inicio">
                  <div class="icon-inicio">
                  <a href="#inicio" class="navbar-brand"><img src="img/NUEVO LOGO LARCHE (100 x 100 px).png" width="100px" alt="logo estudio"></a>
                  </div>
                  <h1 id="text-eslogan" style="color: #071f50;">TU ASESOR LEGAL DE CONFIANZA</h1>
                  <p id="parrafo-inicio">En cada paso, defendemos tus derechos con integridad y excelencia.<br> Tu tranquilidad es nuestra prioridad.</p>
                  <div class="buttom-inicio-contenedor">
                      <button id="buttom-inicio"><a id="link-consulta" href="https://wa.link/5wbxgs" target="_blank">AGENDAR CITA</a></button>
                  </div>
              </div>
              <div class="nav-style">
                  <nav class="navbar navbar-expand-md navbar-light">
                      <div class="container-fluid">
                          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                              <span class="navbar-toggler-icon"></span>
                          </button>
                          <div class="collapse navbar-collapse" id="navbarSupportedContent">
                              <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
                                  <li class="nav-item">
                                      <a class="nav-link" href="#inicio">INICIO</a>
                                  </li>
                                  <li class="nav-item">
                                      <a class="nav-link" href="#servicios">SERVICIOS</a>
                                  </li>
                                  <li class="nav-item">
                                      <a class="nav-link" href="#nosotros">NOSOTROS</a>
                                  </li>
                                  <li class="nav-item">
                                      <a class="nav-link" href="#contacto">CONTACTO</a>
                                  </li>
                              </ul>
                          </div>
                      </div>
                  </nav>
              </div>
          </header>
      `;
  }
}
window.addEventListener('resize', loadHeader);
window.addEventListener('load', loadHeader);

window.onscroll = function() {
    scrollFunction();
};

function scrollFunction() {
    const backToTopBtn = document.getElementById("backToTopBtn");
    if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
        backToTopBtn.style.display = "block";
    } else {
        backToTopBtn.style.display = "none";
    }
}
document.getElementById("backToTopBtn").addEventListener("click", function() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});


