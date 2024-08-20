const validateProjectName = value => {
    if (!value) return 'Project Name is required';
    return undefined;
  };
  
  const validateProjectCode = value => {
    const regex = /^[A-Z0-9]{2,10}$/; // Example regex for alphanumeric codes
    if (!value) return 'Project Code is required';
    if (!regex.test(value)) return 'Project Code must be alphanumeric and 2-10 characters long';
    return undefined;
  };
  
  const validateClientName = value => {
    if (!value) return 'Client Name is required';
    return undefined;
  };
  
  const validateDate = value => {
    const regex = /^\d{2}\/\d{2}\/\d{4}$/; // Example regex for DD/MM/YYYY
    if (!value) return 'Date is required';
    if (!regex.test(value)) return 'Date must be in DD/MM/YYYY format';
    return undefined;
  };
  
  const validateProjectType = value => {
    if (!value) return 'Project Type is required';
    return undefined;
  };
  
  const validateProjectManagers = value => {
    if (!value) return 'Project Managers are required';
    return undefined;
  };
  
  const validateRole = value => {
    if (!value) return 'Role is required';
    return undefined;
  };
  
  const validateEmployee = value => {
    if (!value) return 'Employee is required';
    return undefined;
  };
  
  // Custom Validation Hook
  export  const validateForm = values => {
    return {
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
  };