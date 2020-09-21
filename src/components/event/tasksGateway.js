 const baseUrl = 'https://crudcrud.com/api/2a6ea36f197a4f9694fca92083a0b43e/events';
 // const baseUrl ='https://5f16d5d3a346a00016739644.mockapi.io/tasks/events'
 export const createTask = taskData => {
     return fetch(baseUrl, {
         method: 'POST',
         headers: {
             'Content-Type': 'application/json;charset=utf-8',
         },
         body: JSON.stringify(taskData)
     }).then(response => {
         if (!response.ok) {
             throw new Error("Internal Server Error. Can't display events")
         }
     })
 }



 export const fetchEventsList = () => {
     return fetch(baseUrl)
         .then(res => {
             if (res.ok) {
                 return res.json()
             }
         }).then(tasksList => {
             return tasksList.map(({ _id, ...event }) => ({
                 id: _id,
                 ...event,
             }))
         })
 }


 export const deleteTask = id => {
     return fetch(`${baseUrl}/${id}`, {
         method: 'DELETE',
     }).then(response => {
         if (!response.ok) {
             throw new Error("Internal Server Error. Can't display events")
         }
     })
 }