import html from 'choo/html'

function mainView(state, emit) {
    return html`
        <body>
            <h1>count is ${state.count}</h1>
            <button onclick=${onclick}>Increment</button>
            <a href="/users/andrew">Users</a>
        </body>
    `
    function onclick () {
        emit('increment', 5)
    }
}

export default mainView;
