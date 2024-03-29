import { FC, useEffect } from 'react';
import { useForm, FormProvider } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { Box, Button } from '@mui/material';

import CTextField from '@/components/controlled-text-field';
import { ITaskFormData, ITaskFormProps } from '@/components/task-form/resources/task-form.model';
import { FormFooter, FormLayout } from '@/ui/layouts/form';
import { testStatuses } from '@/shared/data/data';
import CSelect from '@/components/controlled-select';
import schema from './resources/task-form.schema';

const TaskForm: FC<ITaskFormProps> = ({ defaultValues, handleSubmit }) => {
  const methods = useForm({
    defaultValues: {
      title: '',
      description: '',
      status: 1
    },
    resolver: yupResolver(schema)
  });

  useEffect(() => {
    if (defaultValues) {
      methods.reset(defaultValues);
    }
  }, [defaultValues, methods])

  const onSubmit = (data: any) => {
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
            <CSelect
              name={'status'}
              label={'Status'}
              options={
                testStatuses.map(item => ({
                  value: item.id,
                  label: item.title
                }))
              }
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