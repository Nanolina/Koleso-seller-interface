import { FormikErrors } from 'formik';

export const TooltipTextErrors = (errors: FormikErrors<any>): string => {
  return Object.values(errors)
    .map((el: any) => {
      if (Array.isArray(el)) {
        return el.join('<br />');
      }
      return `<span>${el}<br /></span>`;
    })
    .join('');
};
