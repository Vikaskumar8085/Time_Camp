export const validate = (values) => {
  const errors = {};

  // Regular expressions for validation
  const nameRegex = /^[A-Za-z\s]+$/; // Allows letters and spaces
  const passwordRegex =
    /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/; // At least one uppercase letter, one lowercase letter, one digit, one special character, and minimum 8 characters long
  const phoneRegex = /^\+?[1-9]\d{1,14}$/; // E.164 format for international phone numbers
  const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i; // Basic email format

  // Validate First Name
  if (!values.FirstName) {
    errors.FirstName = "First name is required";
  } else if (!nameRegex.test(values.FirstName)) {
    errors.FirstName = "First name should only contain letters and spaces";
  } else if (values.FirstName.length < 2) {
    errors.FirstName = "First name must be at least 2 characters long";
  } else if (values.FirstName.length > 50) {
    errors.FirstName = "First name can be up to 50 characters long";
  }

  // Validate Last Name
  if (!values.LastName) {
    errors.LastName = "Last name is required";
  } else if (!nameRegex.test(values.LastName)) {
    errors.LastName = "Last name should only contain letters and spaces";
  } else if (values.LastName.length < 2) {
    errors.LastName = "Last name must be at least 2 characters long";
  } else if (values.LastName.length > 50) {
    errors.LastName = "Last name can be up to 50 characters long";
  }

  // Validate Email
  if (!values.Email) {
    errors.Email = "Email is required";
  } else if (!emailRegex.test(values.Email)) {
    errors.Email = "Invalid email address";
  }

  // Validate Password
  if (!values.Password) {
    errors.Password = "Password is required";
  } else if (!passwordRegex.test(values.Password)) {
    errors.Password =
      "Password must include uppercase, lowercase, number, and special character";
  }

  // Validate Confirm Password
  if (!values.ConfirmPassword) {
    errors.ConfirmPassword = "Confirm password is required";
  } else if (values.ConfirmPassword !== values.Password) {
    errors.ConfirmPassword = "Passwords must match";
  }

  // Validate Phone
  if (!values.Phone) {
    errors.Phone = "Phone number is required";
  } else if (!phoneRegex.test(values.Phone)) {
    errors.Phone = "Invalid phone number format";
  }

  return errors;
};
