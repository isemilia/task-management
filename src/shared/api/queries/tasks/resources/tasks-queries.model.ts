export interface ICreateTaskBody {
    // labels?: any[]
    title: string
    description: string
    status: {
        id: number
    }
    deadline: string
}