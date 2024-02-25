import {IFormatDateArgs} from '@/shared/utils/format-date/resources/format-date.model.ts';

const formatDate = ({date}: IFormatDateArgs) => {
  const dateObj = new Date(date);

  const day = String(dateObj.getDate()).padStart(2, '0');
  const month = String(dateObj.getMonth()).padStart(2, '0');
  const year = String(dateObj.getFullYear()).padStart(2, '0');

  return `${day}.${month}.${year}`
}

export default formatDate