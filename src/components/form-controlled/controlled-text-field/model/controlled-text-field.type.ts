export interface ICTextFieldProps {
  name: string
  label?: string
  placeholder?: string
  variant?:
    | 'filled'
    | 'outlined'
    | 'standard'
  margin?:
    | 'dense'
    | 'none'
    | 'normal'
}