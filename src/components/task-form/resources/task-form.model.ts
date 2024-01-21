export interface ITaskFormProps {
  defaultValues?: Partial<ITaskFormData>
  handleSubmit: (data: ITaskFormData) => void
}

export interface ITaskFormData {
  title: string
  description: string
  status: number
}