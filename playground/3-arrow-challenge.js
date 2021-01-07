const tasks = {
    tasks: [
        {
            text: 'grocery shoppiing',
            completed: true
        },
        {
            text: 'clean yard',
            completed: false
        },
        {
            text: 'file course',
            completed: false
        }],

        getTasksToDo(){
            return this.tasks.filter((tasks) =>
            tasks.completed === false
            )
        }
    
    }


    console.log(tasks.getTasksToDo());