function aprobarSolicitud(id) {
    if (!confirm("¿Desea aprobar esta solicitud?")) return;

    fetch('/Vacacions/Aprobar', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', 'RequestVerificationToken': getToken() },
        body: JSON.stringify({ id: id })
    }).then(res => location.reload());
}

function rechazarSolicitud(id) {
    if (!confirm("¿Desea rechazar esta solicitud?")) return;

    fetch('/Vacacions/Rechazar', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', 'RequestVerificationToken': getToken() },
        body: JSON.stringify({ id: id })
    }).then(res => location.reload());
}

// Función para obtener el token antiforgery
function getToken() {
    return document.querySelector('input[name="__RequestVerificationToken"]').value;
}
