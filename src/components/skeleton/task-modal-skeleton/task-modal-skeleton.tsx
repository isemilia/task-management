import { FormLayout } from '@/ui/layouts/form';
import ActionTitle from '@/ui/action-title';
import { Skeleton } from '@mui/material';
import { FC } from 'react';

const TaskModalSkeleton: FC = () => {
  return (
    <>
      <ActionTitle>
        <Skeleton variant={'rounded'} height={'30px'} />
      </ActionTitle>
      <FormLayout>
        <Skeleton variant={'rounded'} height={'40px'} />
        <Skeleton variant={'rounded'} height={'40px'} />
        <Skeleton variant={'rounded'} height={'40px'} />
      </FormLayout>
    </>
  )
}

export default TaskModalSkeleton