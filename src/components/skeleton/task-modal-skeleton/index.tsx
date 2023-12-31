import { FormLayout } from '@/ui/layouts/form';
import ModalTitle from '@/ui/modal/components/modal-title';
import { Skeleton } from '@mui/material';
import { FC } from 'react';

const TaskModalSkeleton: FC = () => {
    return (
        <>
            <ModalTitle>
                <Skeleton variant={'rounded'} height={'30px'} />
            </ModalTitle>
            <FormLayout>
                <Skeleton variant={'rounded'} height={'40px'} />
                <Skeleton variant={'rounded'} height={'40px'} />
                <Skeleton variant={'rounded'} height={'40px'} />
            </FormLayout>
        </>
    )
}

export default TaskModalSkeleton