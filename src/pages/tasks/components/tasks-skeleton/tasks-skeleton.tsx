import { Skeleton } from '@mui/material';
import { StyledColumn, StyledColumnWrap } from '../../resources/tasks.styles';

const TasksSkeleton = () => {
  return (
    <StyledColumnWrap>
      <StyledColumn>
        <Skeleton sx={{ height: '180px' }} variant={'rounded'}></Skeleton>
        <Skeleton sx={{ height: '180px' }} variant={'rounded'}></Skeleton>
        <Skeleton sx={{ height: '180px' }} variant={'rounded'}></Skeleton>
      </StyledColumn>

      <StyledColumn>
        <Skeleton sx={{ height: '180px' }} variant={'rounded'}></Skeleton>
        <Skeleton sx={{ height: '180px' }} variant={'rounded'}></Skeleton>
      </StyledColumn>

      <StyledColumn>
        <Skeleton sx={{ height: '180px' }} variant={'rounded'}></Skeleton>
      </StyledColumn>

      <StyledColumn>
        <Skeleton sx={{ height: '180px' }} variant={'rounded'}></Skeleton>
        <Skeleton sx={{ height: '180px' }} variant={'rounded'}></Skeleton>
      </StyledColumn>
    </StyledColumnWrap>
  );
};

export default TasksSkeleton;
