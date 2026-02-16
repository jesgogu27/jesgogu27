const API = 'http://localhost:3000'
const WS_API= 'ws://localhost:3000'

const populateProducts = async (DiagnosticCategory, method = 'GET', payload) => 
{
    const products = document.querySelector('#products')
    products.innerHTML = ''
    const send= method ==='GET'? {} : {
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
    }

    const res = await fetch(`${API}/${category}`, method, ...send)
    const data = await res.json()

    for (const product of data) {
        const item = document.createElement('product-item')
        item.dataset.id = product.id
        for (const key of ['name', 'rrp', 'info']){
            const span = document.createElement('span')
            span.slot = keys
            span.textContent = product[key]
            item.appendChild(span)
        }
        products.appendChild(item)
    }
}

const category = document.querySelector(`#category`)
const add = document.querySelector('#add')

let socket = null
const realtimeOrders = (category) => {
    if (socket) socket.close()
    socket = new WebSocket(`${WS_API}/orders/${category}`)
    socket.addEventListener('message', ({ data }) => {
        try{
            const {id, total} = JSON.parse(data)
            const item = document.querySelector(``)
        }
        catch(err) {
            console.error(err)
        }
    })

}