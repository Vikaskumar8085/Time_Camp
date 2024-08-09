export const validateDesignation = (value) => {
  let error;
  if (!value) {
    error = "Designation Name is required";
  } else if (value.length < 3) {
    error = "Designation Name must be at least 3 characters long";
  } else if (/[^a-zA-Z0-9 ]/.test(value)) {
    error = "Designation Name can only contain letters, numbers, and spaces";
  }
  return error;
};
