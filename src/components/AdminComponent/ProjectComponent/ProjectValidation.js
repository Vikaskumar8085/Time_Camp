import moment from 'moment';

// Define strong regular expressions for validation
const alphanumericCodeRegex = /^[A-Z0-9]{2,10}$/; // Alphanumeric codes 2-10 characters long
const dateRegex = /^\d{4}-\d{2}-\d{2}$/; // YYYY-MM-DD format

// Validate if a date is valid according to the YYYY-MM-DD format
const isValidDate = (date) => {
  return moment(date, "YYYY-MM-DD", true).isValid();
};

// Validation Function
const projectvalidation = (values) => {
  const errors = {};

  // Check if required fields are filled
  if (!values.Project_Name) {
    errors.Project_Name = "Project Name is required";
  } else if (values.Project_Name.length < 3) {
    errors.Project_Name = "Project Name must be at least 3 characters long";
  }

  if (!values.Project_Code) {
    errors.Project_Code = "Project Code is required";
  } else if (!alphanumericCodeRegex.test(values.Project_Code)) {
    errors.Project_Code = "Project Code must be alphanumeric and 2-10 characters long";
  }

  if (!values.Client_Name) {
    errors.Client_Name = "Client Name is required";
  } else if (values.Client_Name.length < 3) {
    errors.Client_Name = "Client Name must be at least 3 characters long";
  }

  if (!values.Start_Date) {
    errors.Start_Date = "Start Date is required";
  } else if (!dateRegex.test(values.Start_Date) || !isValidDate(values.Start_Date)) {
    errors.Start_Date = "Start Date must be in YYYY-MM-DD format and be a valid date";
  }

  if (!values.End_Date) {
    errors.End_Date = "End Date is required";
  } else if (!dateRegex.test(values.End_Date) || !isValidDate(values.End_Date)) {
    errors.End_Date = "End Date must be in YYYY-MM-DD format and be a valid date";
  }

  if (!values.Project_Type) {
    errors.Project_Type = "Project Type is required";
  } else if (values.Project_Type.length < 3) {
    errors.Project_Type = "Project Type must be at least 3 characters long";
  }

  if (!values.Project_Managers) {
    errors.Project_Managers = "Project Managers are required";
  }

  if (!values.Role) {
    errors.Role = "Role is required";
  }

  if (!values.Employee) {
    errors.Employee = "Employee is required";
  }

  // Additional validation for date range
  if (values.Start_Date && values.End_Date) {
    const start = moment(values.Start_Date, "YYYY-MM-DD");
    const end = moment(values.End_Date, "YYYY-MM-DD");
    if (end.isBefore(start)) {
      errors.End_Date = "End Date cannot be before Start Date";
    }
  }

  return errors;
};

export default projectvalidation;
