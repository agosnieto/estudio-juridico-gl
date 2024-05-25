function loadHeader() {
    const container = document.getElementById('header-container');
    if (window.innerWidth < 768) {
        container.innerHTML = `
            <header>
                <nav class="navbar navbar-expand-lg navbar-dark">
                    <div class="container">
                        <a class="navbar-brand" href="#inicio"><img src="img/logo1sf.png" alt="Logo" width="100"></a>
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
                    <h1 class="animate__animated animate__zoomIn animate__delay-0.75s">TU ASESOR LEGAL DE CONFIANZA</h1>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempora, voluptatem...</p>
                    <a href="https://wa.link/5wbxgs" target="_blank" class="btn btn-custom">AGENDAR CITA</a>
                </div>
            </section>
        `;
    } else {
        container.innerHTML = `
            <header class="inicio">
                <div class="text-inicio">
                    <div class="icon-inicio">
                        <a href="#inicio" class="navbar-brand"><img src="img/logo1sf.png" width="100px" alt=""></a>
                    </div>
                    <h1 id="text-eslogan" style="color: #071f50;" class="animate__animated animate__zoomIn animate__delay-0.75s">TU ASESOR LEGAL DE CONFIANZA</h1>
                    <p id="parrafo-inicio">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempora, voluptatem. Fugit optio eius repellendus, dolor magnam placeat minus voluptate fugiat enim, corrupti assumenda minima sapiente explicabo a ipsum deserunt distinctio.</p>
                    <div class="buttom-inicio-contenedor">
                        <button id="buttom-inicio"><a id="link-consulta" href="https://wa.link/5wbxgs" target="_blank">AGENDAR CITA</a></button>
                    </div>
                </div>
                <div class="nav-style">
                    <nav class="navbar navbar-expand-md navbar-light text-end">
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
