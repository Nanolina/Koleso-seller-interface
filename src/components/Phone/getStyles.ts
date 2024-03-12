const defaultColor = 'var(--light-gray)';
const errorColor = 'red';
export const containerStyle = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  width: 'auto',
};

export const getStyles = (errors: string | undefined) => ({
  inputStyle: {
    backgroundColor: defaultColor,
    borderColor: errors ? errorColor : defaultColor,
  },
  dropdownStyle: {
    backgroundColor: defaultColor,
    borderColor: defaultColor,
  },
  buttonStyle: {
    left: 0,
    borderColor: errors ? errorColor : defaultColor,
  },
});
