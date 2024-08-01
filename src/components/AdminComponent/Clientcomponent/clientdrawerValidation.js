export const validate = (values) => {
  const errors = {};

  // Regular expressions for validation
  const nameRegex = /^[A-Za-z\s]+$/; // Allows letters and spaces
  const companyNameRegex = /^[A-Za-z0-9\s]+$/; // Allows letters, numbers, and spaces
  const phoneRegex = /^\+?[1-9]\d{1,14}$/; // E.164 format for international phone numbers
  const postalCodeRegex = /^[A-Za-z0-9\s-]{5,10}$/; // US ZIP code, UK postal code
  const gstNumberRegex = /^[A-Z0-9]{15}$/; // Example GST number format (adjust as needed)
  const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i; // Basic email format

  // Validate Client Name
  if (!values.Client_Name) {
    errors.Client_Name = "Client name is required";
  } else if (!nameRegex.test(values.Client_Name)) {
    errors.Client_Name = "Client name should only contain letters and spaces";
  } else if (values.Client_Name.length < 2) {
    errors.Client_Name = "Client name must be at least 2 characters long";
  } else if (values.Client_Name.length > 50) {
    errors.Client_Name = "Client name can be up to 50 characters long";
  }

  // Validate Company Name
  if (!values.Company_Name) {
    errors.Company_Name = "Company name is required";
  } else if (!companyNameRegex.test(values.Company_Name)) {
    errors.Company_Name =
      "Company name should only contain letters, numbers, and spaces";
  } else if (values.Company_Name.length < 2) {
    errors.Company_Name = "Company name must be at least 2 characters long";
  } else if (values.Company_Name.length > 100) {
    errors.Company_Name = "Company name can be up to 100 characters long";
  }

  // Validate Email
  if (!values.Client_Email) {
    errors.Client_Email = "Client_Email is required";
  } else if (!emailRegex.test(values.Client_Email)) {
    errors.Client_Email = "Invalid email address";
  }

  // Validate Address
  if (!values.Client_Address) {
    errors.Client_Address = "Address is required";
  }

  // Validate Postal Code
  if (!values.Client_Postal_Code) {
    errors.Client_Postal_Code = "Postal code is required";
  } else if (!postalCodeRegex.test(values.Client_Postal_Code)) {
    errors.Client_Postal_Code = "Invalid postal code format";
  }

  // Validate GST Number
  if (!values.GstNumber) {
    errors.GstNumber = "GST number is required";
  } else if (!gstNumberRegex.test(values.GstNumber)) {
    errors.GstNumber = "Invalid GST number format";
  }
  // Phone
  if (!values.Client_Phone) {
    errors.Client_Phone = "Phone number is required";
  } else if (!phoneRegex.test(values.Client_Phone)) {
    errors.Client_Phone = "Invalid phone number format";
  }
  return errors;
};
