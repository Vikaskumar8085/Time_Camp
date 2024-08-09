export const validateRemark = (value) => {
  let error;
  // Example regex: must contain at least one letter and can include numbers and spaces
  const remarkRegex = /^(?=.*[a-zA-Z]).{5,}$/;
  if (!value) {
    error = "Remark is required";
  } else if (!remarkRegex.test(value)) {
    error =
      "Remark must be at least 5 characters long and contain at least one letter";
  }
  return error;
};

export const validateDepName = (value) => {
  let error;
  if (!value) {
    error = "Department Name is required";
  } else if (value.length < 3) {
    error = "Department Name must be at least 3 characters long";
  } else if (/[^a-zA-Z0-9 ]/.test(value)) {
    error = "Department Name can only contain letters, numbers, and spaces";
  }
  return error;
};
