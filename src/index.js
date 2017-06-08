import choo from 'choo'
import mainView from './components/mainView'
import usersView from './components/usersView'

const app = choo()
app.use(logger)
app.use(countStore)
app.route('/', mainView)
app.route('/users/:name', usersView)
app.mount('body')

function logger(state, emitter) {
    emitter.on('*', function (messageName, data) {
        console.log('event', messageName, data)
    })
}

function countStore(state, emitter) {
    state.count = 0
    emitter.on('increment', function (count) {
        state.count += count
        emitter.emit('render')
    })
}
