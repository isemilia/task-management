export interface ITaskFormProps {
  defaultValues?: {
    [key: string]: any
  }
  handleSubmit: (data: any) => void
}