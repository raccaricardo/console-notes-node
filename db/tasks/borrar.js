const arr = [
    {
        id: "36665839-5282-43d6-937f-3730bdc17736",
        description: "ordenar",
        created_at: null,
        is_completed: true
    },
    {
        id: "c5c15172-60d6-47cb-9cd4-faf27b1ee488",
        description: "limpiar",
        created_at: null,
        is_completed: false
    },
    {
        id: "7ad0fb6d-8b36-48eb-a6af-7244c28acf54",
        description: "Baño",
        created_at: null,
        is_completed: true
    },
    {
        id: "67d5de29-a64d-4390-a27a-27d77e18008d",
        description: "Cocina",
        created_at: null,
        is_completed: false
    },
    {
        id: "6439df3c-cb63-4114-a13f-a44c1c13e4f3",
        description: "asd",
        created_at: null,
        is_completed: true
    },
    {
        id: "5f45a6ce-1d29-4bbd-8010-589b4f690d50",
        description: "asdasd",
        created_at: null,
        is_completed: true
    },
    {
        id: "35592a7d-53e0-4662-8d24-a2b3b5131ea5",
        description: "Ver proyecto maxi",
        created_at: null,
        is_completed: false
    }
]

const res = arr.reduce((acc, el ) => ({
    ...acc,
    [el.description]: el,
}),{})

res['Ver proyecto maxi']
console.clear()
console.log(res)