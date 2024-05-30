function NoTasks() {

    return <h2>Nenuma task disponível</h2>

}

function RenderTasks({tasks = []}) {

    return tasks.map( (task) => (
        <div 
            className={"alert " + (task.completed ? "alert-success" : "alert-warning")}
            key={task.id}
        >
            {task.id} - {task.title}
        </div>
    ))

}

export function TodoList({data = []}) {

    return data.length === 0 ? <NoTasks /> : <RenderTasks tasks={data} />

}