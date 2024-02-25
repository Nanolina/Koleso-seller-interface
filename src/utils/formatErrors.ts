import { FormikErrors } from 'formik';

export const formatErrors = (errors: FormikErrors<any> | undefined): string => {
  if (!errors) return '';

  const errorMessages: string[] = [];
  for (const key in errors) {
    const value = errors[key];

    // If the value is a string, add it to the array of messages wrapped in <span>
    if (typeof value === 'string') {
      errorMessages.push(`<span>${value}</span><br />`);
    } else if (Array.isArray(value)) {
      // If the value is an array, process each element of the array
      const arrayMessages = value
        .map((item, index) => {
          if (typeof item === 'string') {
            return `<span>${item}</span>`;
          } else {
            // Recursively format errors for each element of the array
            return `<span>${formatErrors(item)}</span>`;
          }
        })
        .join('<br />');
      errorMessages.push(arrayMessages);
    } else if (typeof value === 'object') {
      // Recursively format errors for nested objects, add <br /> after each message
      const objectMessages = formatErrors(value);
      errorMessages.push(`<span></span><br />${objectMessages}`);
    }
  }

  // Return all errors separated by <br />
  return errorMessages.join('<br />');
};
