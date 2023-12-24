import { FC } from "react";
import { Box, Button } from "@mui/material";
import { useForm, FormProvider } from 'react-hook-form';
import CTextField from '../form-controlled/controlled-text-field';
import { ITaskFormData, ITaskFormProps } from './model/task-form.type';
import { FormFooter, FormLayout } from "../../ui/layouts/form";

const TaskForm: FC<ITaskFormProps> = ({ defaultValues, handleSubmit }) => {
  const methods = useForm<ITaskFormData>({
    defaultValues: {
      title: '',
      description: ''
    }
  });

  const onSubmit = (data: ITaskFormData) => {
    handleSubmit(data);
  }

  return (
    <Box>
      <FormProvider {...methods}>
        <form onSubmit={methods.handleSubmit(onSubmit)}>
          <FormLayout>
            <CTextField
              name={'title'}
              label={'Enter title'}
              variant={'standard'}
              required
            />
            <CTextField
              name={'description'}
              label={'Enter description'}
              variant={'standard'}
              multiline={true}
            />
            <FormFooter>
              <Button type={'submit'}>
                Submit
              </Button>
            </FormFooter>
          </FormLayout>


        </form>
      </FormProvider>
    </Box>
  )
}

export default TaskForm;