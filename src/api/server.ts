let token = 'f7cc8cd410787b9a2eced2a7d0d871f5d7b30dd3893386aa';

export const serverCalls = {
    get: async () =>{
        const response = await fetch(`http://127.0.0.1:5000/api/skates`,{
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'x-access-token': `Bearer ${token}`
            }
        });
        
        if (!response.ok){
            throw new Error('Failed to fetch data from server')
        }
        return await response.json()
    },

    create: async (data: any = {}) =>{
        const response = await fetch(`http://127.0.0.1:5000/api/skates`,{
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'x-access-token': `Bearer ${token}`
            },
            body: JSON.stringify(data)
        });

        if (!response.ok){
            throw new Error('Failed to Create new Data on Server')
        }

        return await response.json()
    },

    update: async ( id:string, data:any ) => {
        const response = await fetch(`http://127.0.0.1:5000/api/skates/${id}`,{
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'x-access-token': `Bearer ${token}`
            },
            body: JSON.stringify(data)
        });
    },

    delete: async (id:string) => {
        const response = await fetch(`http://127.0.0.1:5000/api/skates/${id}`,{
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
                'x-access-token': `Bearer ${token}`
            }
        });
    }
}