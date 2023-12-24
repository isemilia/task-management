export interface ITaskFormProps {
  defaultValues?: ITaskFormData
  handleSubmit: (data: ITaskFormData) => void
}

export interface ITaskFormData {
  title: string
  description: string
  status: number
}