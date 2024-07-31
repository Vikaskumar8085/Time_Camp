export const validate = (values) => {
  const errors = {};

  // Validate Email
  if (!values.Email) {
    errors.Email = "Email is required";
  } else if (
    !/^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/.test(values.Email)
  ) {
    errors.Email = "Invalid email address";
  }


  // Validate Password
  if (!values.Password) {
    errors.Password = "Password is required";
  } else if (!/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/.test(values.Password)) {
    errors.Password =
      "Password must be at least 8 characters, including letters and numbers";
  }
  return errors;
};
