import {IDynamicObject} from '@/shared/resources/shared.model';
import { ISortByPropertyArgs } from '@/shared/utils/sort-by-property/resources/sort-by-property.model';

export const sortByProperty = (arg: ISortByPropertyArgs) => {
  const { data, property } = arg;

  const sortedByProperty: IDynamicObject = {};

  data.forEach((item) => {
    // Split the property path by '.' to handle nested properties
    const propertyPath = property.split('.');
    let value = item;

    // Traverse the nested properties
    for (const prop of propertyPath) {
      if (value && Object.prototype.hasOwnProperty.call(value, prop)) {
        value = value[prop];
      } else {
        value = undefined;
        break; // Stop if any property is undefined
      }
    }

    // Create an array for the property value if it doesn't exist in the sorted object
    if (!sortedByProperty[value]) {
      sortedByProperty[value] = [];
    }

    sortedByProperty[value].push(item);
  });

  return sortedByProperty;
};