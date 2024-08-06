const validate = (values) => {
  const errors = {};

  // Company Name
  if (!values.Company_Name) {
    errors.Company_Name = "Company name is required";
  }

  // Company Email Address
  if (!values.Company_Email) {
    errors.Company_Email = "Company email is required";
  } else if (
    !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.Company_Email)
  ) {
    errors.Company_Email = "Invalid email address";
  }

  // Postal Code
  if (!values.Postal_Code) {
    errors.Postal_Code = "Postal code is required";
  } else if (!/^\d{5}(-\d{4})?$/.test(values.Postal_Code)) {
    errors.Postal_Code = "Invalid postal code";
  }

  // Phone
  if (!values.Phone) {
    errors.Phone = "Phone number is required";
  } else if (!/^\+?[1-9]\d{1,14}$/.test(values.Phone)) {
    errors.Phone = "Invalid Phone number";
  }

  // Company Logo
  if (!values.Company_Logo) {
    errors.Company_Logo = "Company logo URL is required";
  } else if (!/^https?:\/\/.+/.test(values.Company_Logo)) {
    errors.Company_Logo = "Invalid URL";
  }

  // Employee No
  if (!values.Employee_No) {
    errors.Employee_No = "Employee number is required";
  } else if (!/^\d+$/.test(values.Employee_No)) {
    errors.Employee_No = "Employee number must be a number";
  }

  // Established Date
  if (!values.Established_Date) {
    errors.Established_Date = "Established date is required";
  } else if (!/^\d{4}-\d{2}-\d{2}$/.test(values.Established_Date)) {
    errors.Established_Date = "Invalid date format";
  }

  // Company Website
  if (!values.CompanyWebsite) {
    errors.CompanyWebsite = "Company website is required";
  } else if (!/^https?:\/\/.+/.test(values.CompanyWebsite)) {
    errors.CompanyWebsite = "Invalid URL";
  }

  // Text Number
  if (!values.textNumber) {
    errors.textNumber = "Text number is required";
  } else if (!/^\d+$/.test(values.textNumber)) {
    errors.textNumber = "Text number must be a number";
  }

  return errors;
};
