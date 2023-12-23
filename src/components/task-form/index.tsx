import {FC} from "react";
import {Box, Button} from "@mui/material";
import {useForm, FormProvider} from 'react-hook-form';
import CTextField from '../form-controlled/controlled-text-field';
import {ITaskFormProps} from './model/task-form.type';

const TaskForm: FC<ITaskFormProps> = ({defaultValues}) => {
  const methods = useForm({});

  const onSubmit = (data) => {
    console.log(data);
  }

  return (
    <Box>
      <FormProvider {...methods}>
        <form onSubmit={methods.handleSubmit(onSubmit)}>
          <CTextField name={'title'} label={'Enter title'} variant={'standard'} />
          <Button type={'submit'}>
            Submit
          </Button>
        </form>
      </FormProvider>
    </Box>
  )
}

export default TaskForm;