import { FormikProps } from 'formik';

// Function for processing changes in input, textarea, selects fields
export const saveValuesToLocalStorage = (
  key: string,
  name: string,
  value: any,
  setFieldValue: FormikProps<any>['setFieldValue']
) => {
  // Get the current state of the data from localStorage or create a new object if it does not exist
  const currentData = JSON.parse(localStorage.getItem(key) || '{}');

  // Update the data with the new value for this field
  currentData[name] = value;

  // Update the form state with setFieldValue from Formik
  setFieldValue(name, value);

  // Save the updated data back to localStorage
  localStorage.setItem(key, JSON.stringify(currentData));
};
