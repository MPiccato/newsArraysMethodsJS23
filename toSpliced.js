const tasks = [
    'tarea 1',
    'tarea 2',
    'tarea 3',
]


console.log('tareas originales', tasks)

const spliced = tasks.splice(1, 1, 'tarea 4', 'tarea 5')

console.log('tareas eliminadas', spliced)

console.log(tasks)

// para no modificar el arreglo original se usa toSpliced()

const tareasModificadas = tasks.toSpliced(2, 1, 'tarea 7', 'tarea 8')
console.log(tareasModificadas)