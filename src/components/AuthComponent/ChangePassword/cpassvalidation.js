export const validate = (values) => {
  const errors = {};
  const passwordRegex =
    /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

  if (!values.NewPassword) {
    errors.NewPassword = "New password is required";
  } else if (!passwordRegex.test(values.NewPassword)) {
    errors.NewPassword =
      " * Password must be at least 8 characters long, and include uppercase, lowercase, number, and special character";
  }

  if (!values.ConfirmPassword) {
    errors.ConfirmPassword = "Confirm password is required";
  } else if (values.ConfirmPassword !== values.NewPassword) {
    errors.ConfirmPassword = "Passwords must match";
  }

  return errors;
};
