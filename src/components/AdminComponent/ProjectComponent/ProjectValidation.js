import moment from 'moment';

// Define your accepted date formats
const dateFormats = ["YYYY-MM-DD", "MM/DD/YYYY", "DD-MM-YYYY"];

// Validation Functions
const validateProjectName = (value) => {
  if (!value) return "Project Name is required";
  if (value.length < 3) return "Project Name must be at least 3 characters long";
  return undefined;
};

const validateProjectCode = (value) => {
  const regex = /^[A-Z0-9]{2,10}$/; // Alphanumeric codes 2-10 characters long
  if (!value) return "Project Code is required";
  if (!regex.test(value))
    return "Project Code must be alphanumeric and 2-10 characters long";
  return undefined;
};

const validateClientName = (value) => {
  if (!value) return "Client Name is required";
  return undefined;
};

const validateDate = (value) => {
  if (!value) return "Date is required";
  
  // Check if the date is in any of the accepted formats
  const isValid = dateFormats.some(format => moment(value, format, true).isValid());
  if (!isValid) return `Date must be in one of the following formats: ${dateFormats.join(", ")}`;
  
  return undefined;
};

const validateDateRange = (startDate, endDate) => {
  if (!startDate || !endDate) return;
  
  const start = moment(startDate, dateFormats);
  const end = moment(endDate, dateFormats);
  
  if (!start.isValid() || !end.isValid()) return;
  
  if (end.isBefore(start)) return "End Date cannot be before Start Date";
};

const validateProjectType = (value) => {
  if (!value) return "Project Type is required";
  if (value.length < 3) return "Project Type must be at least 3 characters long";
  return undefined;
};

const validateProjectManagers = (value) => {
  if (!value) return "Project Managers are required";
  return undefined;
};

const validateRole = (value) => {
  if (!value) return "Role is required";
  return undefined;
};

const validateEmployee = (value) => {
  if (!value) return "Employee is required";
  return undefined;
};

// Custom Validation Hook
export const validateForm = (values) => {
  const errors = {
    Project_Name: validateProjectName(values.Project_Name),
    Project_Code: validateProjectCode(values.Project_Code),
    Client_Name: validateClientName(values.Client_Name),
    Start_Date: validateDate(values.Start_Date),
    End_Date: validateDate(values.End_Date),
    Project_Type: validateProjectType(values.Project_Type),
    Project_Managers: validateProjectManagers(values.Project_Managers),
    Role: validateRole(values.Role),
    Employee: validateEmployee(values.Employee),
  };

  // Additional validation for date relationship
  const dateRangeError = validateDateRange(values.Start_Date, values.End_Date);
  if (dateRangeError) {
    errors.End_Date = dateRangeError;
  }

  return errors;
};
