export const validate = (values) => {
  const errors = {};

  if (!values.Email) {
    errors.Email = "Email is required";
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.Email)) {
    errors.Email = "Invalid email address";
  }

  //   password

  if (!values.Password) {
    errors.Password = "Password is required";
  } else if (values.Password.length < 6) {
    errors.Password = "Password must be at least 6 characters long";
  }

  return errors;
};
