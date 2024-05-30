export function TodoList({data = []}) {

    return data.length === 0 ? <h2>Nenhuma task</h2> : <div>Possuimos Tasks</div>

}