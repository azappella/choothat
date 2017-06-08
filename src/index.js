import html from 'choo/html'
import choo from 'choo'

const app = choo()
app.use(logger)
app.use(countStore)
app.route('/', mainView)
app.mount('body')

function mainView (state, emit) {
    return html`
        <body>
            <h1>count is ${state.count}</h1>
            <button onclick=${onclick}>Increment</button>
        </body>
    `

    function onclick () {
        emit('increment', 10)
    }
}

function logger (state, emitter) {
    emitter.on('*', function (messageName, data) {
        console.log('event', messageName, data)
    })
}

function countStore (state, emitter) {
    state.count = 0
    emitter.on('increment', function (count) {
        state.count += count
        emitter.emit('render')
    })
}
