const CrearNuevaLinea=(nombre, email) =>{
    const linea = document.createElement("tr");
    const contenido = `
    
    <td class="td" data-td>${nombre}</td>
    <td>${email}</td>
    <td>
    <ul class="table__button-control">
        <li>
        <a
            href="../screens/editar_cliente.html"
            class="simple-button simple-button--edit"
            >Editar</a
        >
        </li>
        <li>
        <button
            class="simple-button simple-button--delete"
            type="button"
        >
            Eliminar
        </button>
        </li>
    </ul>
    </td>
    `;
    linea.innerHTML= contenido;
    return linea;
}


const http = new XMLHttpRequest();

http.open(GET, " http://localhost:3000/perfil");
http.send();

http.onload = () => {
    const data = http.response();
    console.log(data);
};