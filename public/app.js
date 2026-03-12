const app = document.getElementById('app');

const routes = {
    '/': '<h2>Bienvenido al Parque (Index Público)</h2>',
    '/reserva': '<h2>Módulo de Reserva</h2>',
    '/admin': '<h2>Dashboard de Gestión</h2>'
};

function router() {
    const path = window.location.pathname;
    app.innerHTML = routes[path] || '<h2>404 - No encontrado</h2>';
}

window.onpopstate = router;
router();
