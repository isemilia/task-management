export interface ICreateTaskBody {
    // labels?: any[]
    title: string
    description: string
    status: {
        id: number
    }
    deadline: string
}

export interface IUpdateTaskArgs {
    id: string
    title?: string
    description?: string
    status?: {
        id: number
    }
    deadline?: string
}