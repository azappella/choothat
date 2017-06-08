import html from 'choo/html'

export default function usersView(state, emit) {
    return html`
        <body>
            <h1>User: ${state.params.name}</h1>
            <img src="/img/mailgun-support.png" alt="" />
        </body>
    `
}
