// Custom validation functions
export const validateContractorName = (value) => {
  let error;
  const nameRegex = /^.{3,}$/; // At least 3 characters
  if (!value) {
    error = "Contractor Name is required";
  } else if (!nameRegex.test(value)) {
    error = "Contractor Name must be at least 3 characters long";
  }
  return error;
};

export const validateContractorNumber = (value) => {
  let error;
  const phoneRegex = /^[0-9]{10}$/; // 10-digit number
  if (!value) {
    error = "Contractor Number is required";
  } else if (!phoneRegex.test(value)) {
    error = "Contractor Number must be a valid 10-digit phone number";
  }
  return error;
};

export const validatePersonName = (value) => {
  let error;
  const nameRegex = /^.{2,}$/; // At least 2 characters
  if (!value) {
    error = "Person Name is required";
  } else if (!nameRegex.test(value)) {
    error = "Person Name must be at least 2 characters long";
  }
  return error;
};
export const validateRemark = (value) => {
  let error;
  const remarkRegex = /^(?=.*[a-zA-Z]).{5,}$/; // At least 5 characters long and contains at least one letter
  if (!value) {
    error = "Remark is required";
  } else if (!remarkRegex.test(value)) {
    error =
      "Remark must be at least 5 characters long and contain at least one letter";
  }
  return error;
};

export const validateCreatedDate = (value) => {
  let error;
  const dateRegex = /^\d{4}-\d{2}-\d{2}$/; // YYYY-MM-DD format
  if (value && !dateRegex.test(value)) {
    error = "Created Date must be in YYYY-MM-DD format";
  }
  return error;
};

export const validateCreatedTime = (value) => {
  let error;
  const timeRegex = /^([01]\d|2[0-3]):([0-5]\d)$/; // HH:MM format
  if (value && !timeRegex.test(value)) {
    error = "Created Time must be in HH:MM format";
  }
  return error;
};
