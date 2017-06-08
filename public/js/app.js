'use strict';

var _appendChild = require('yo-yoify/lib/appendChild');

var _choo = require('choo');

var _choo2 = _interopRequireDefault(_choo);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var app = (0, _choo2.default)();
app.use(logger);
app.use(countStore);
app.route('/', mainView);
app.mount('body');

function mainView(state, emit) {
    var _h, _button, _body;

    return _body = document.createElement('body'), _appendChild(_body, [' ', (_h = document.createElement('h1'), _appendChild(_h, ['count is ', state.count]), _h), ' ', (_button = document.createElement('button'), _button.onclick = onclick, _button.textContent = 'Increment', _button), ' ']), _body;

    function onclick() {
        emit('increment', 1);
    }
}

function logger(state, emitter) {
    emitter.on('*', function (messageName, data) {
        console.log('event', messageName, data);
    });
}

function countStore(state, emitter) {
    state.count = 0;
    emitter.on('increment', function (count) {
        state.count += count;
        emitter.emit('render');
    });
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9pbmRleC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQ0E7Ozs7OztBQUVBLElBQU0sTUFBTSxxQkFBWjtBQUNBLElBQUksR0FBSixDQUFRLE1BQVI7QUFDQSxJQUFJLEdBQUosQ0FBUSxVQUFSO0FBQ0EsSUFBSSxLQUFKLENBQVUsR0FBVixFQUFlLFFBQWY7QUFDQSxJQUFJLEtBQUosQ0FBVSxNQUFWOztBQUVBLFNBQVMsUUFBVCxDQUFtQixLQUFuQixFQUEwQixJQUExQixFQUFnQztBQUFBOztBQUM1QixnSkFFdUIsTUFBTSxLQUY3Qiw2RUFHMEIsT0FIMUI7O0FBT0EsYUFBUyxPQUFULEdBQW9CO0FBQ2hCLGFBQUssV0FBTCxFQUFrQixDQUFsQjtBQUNIO0FBQ0o7O0FBRUQsU0FBUyxNQUFULENBQWlCLEtBQWpCLEVBQXdCLE9BQXhCLEVBQWlDO0FBQzdCLFlBQVEsRUFBUixDQUFXLEdBQVgsRUFBZ0IsVUFBVSxXQUFWLEVBQXVCLElBQXZCLEVBQTZCO0FBQ3pDLGdCQUFRLEdBQVIsQ0FBWSxPQUFaLEVBQXFCLFdBQXJCLEVBQWtDLElBQWxDO0FBQ0gsS0FGRDtBQUdIOztBQUVELFNBQVMsVUFBVCxDQUFxQixLQUFyQixFQUE0QixPQUE1QixFQUFxQztBQUNqQyxVQUFNLEtBQU4sR0FBYyxDQUFkO0FBQ0EsWUFBUSxFQUFSLENBQVcsV0FBWCxFQUF3QixVQUFVLEtBQVYsRUFBaUI7QUFDckMsY0FBTSxLQUFOLElBQWUsS0FBZjtBQUNBLGdCQUFRLElBQVIsQ0FBYSxRQUFiO0FBQ0gsS0FIRDtBQUlIIiwiZmlsZSI6ImFwcC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBodG1sIGZyb20gJ2Nob28vaHRtbCdcbmltcG9ydCBjaG9vIGZyb20gJ2Nob28nXG5cbmNvbnN0IGFwcCA9IGNob28oKVxuYXBwLnVzZShsb2dnZXIpXG5hcHAudXNlKGNvdW50U3RvcmUpXG5hcHAucm91dGUoJy8nLCBtYWluVmlldylcbmFwcC5tb3VudCgnYm9keScpXG5cbmZ1bmN0aW9uIG1haW5WaWV3IChzdGF0ZSwgZW1pdCkge1xuICAgIHJldHVybiBodG1sYFxuICAgICAgICA8Ym9keT5cbiAgICAgICAgICAgIDxoMT5jb3VudCBpcyAke3N0YXRlLmNvdW50fTwvaDE+XG4gICAgICAgICAgICA8YnV0dG9uIG9uY2xpY2s9JHtvbmNsaWNrfT5JbmNyZW1lbnQ8L2J1dHRvbj5cbiAgICAgICAgPC9ib2R5PlxuICAgIGBcblxuICAgIGZ1bmN0aW9uIG9uY2xpY2sgKCkge1xuICAgICAgICBlbWl0KCdpbmNyZW1lbnQnLCAxKVxuICAgIH1cbn1cblxuZnVuY3Rpb24gbG9nZ2VyIChzdGF0ZSwgZW1pdHRlcikge1xuICAgIGVtaXR0ZXIub24oJyonLCBmdW5jdGlvbiAobWVzc2FnZU5hbWUsIGRhdGEpIHtcbiAgICAgICAgY29uc29sZS5sb2coJ2V2ZW50JywgbWVzc2FnZU5hbWUsIGRhdGEpXG4gICAgfSlcbn1cblxuZnVuY3Rpb24gY291bnRTdG9yZSAoc3RhdGUsIGVtaXR0ZXIpIHtcbiAgICBzdGF0ZS5jb3VudCA9IDBcbiAgICBlbWl0dGVyLm9uKCdpbmNyZW1lbnQnLCBmdW5jdGlvbiAoY291bnQpIHtcbiAgICAgICAgc3RhdGUuY291bnQgKz0gY291bnRcbiAgICAgICAgZW1pdHRlci5lbWl0KCdyZW5kZXInKVxuICAgIH0pXG59XG4iXX0=