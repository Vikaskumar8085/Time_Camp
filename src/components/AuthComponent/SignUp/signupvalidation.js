export const validate = (values) => {
  const errors = {};

  // Validate FirstName
  if (!values.FirstName) {
    errors.FirstName = "First name is required";
  } else if (!/^[A-Za-z]{2,50}$/.test(values.FirstName)) {
    errors.FirstName = "First name must be 2-50 alphabetic characters";
  }

  // Validate LastName
  if (!values.LastName) {
    errors.LastName = "Last name is required";
  } else if (!/^[A-Za-z]{2,50}$/.test(values.LastName)) {
    errors.LastName = "Last name must be 2-50 alphabetic characters";
  }

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
  } else if (
    !/^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(
      values.Password
    )
  ) {
    errors.Password =
      "Password must include uppercase, lowercase, number, and special character";
  }

  // Validate Terms
  if (!values.Term) {
    errors.Term = "You must accept the terms and conditions";
  }

  return errors;
};
