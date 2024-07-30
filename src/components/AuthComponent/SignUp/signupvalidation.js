export const validate = (values) => {
  const errors = {};

  // First Name
  if (!values.FirstName) {
    errors.FirstName = "FirstName is required";
  } else if (
    (
      <p style={{ color: "red !mportant" }}>
        {
          !/^[\w'\-,.][^0-9_!¡?÷?¿/\\+=@#$%ˆ&*(){}|~<>;:[\]]{2,}$/i.test(
            values.FirstName
          )
        }
      </p>
    )
  ) {
    errors.FirstName = "Invalid email address";
  }
  //   lastName
  if (!values.LastName) {
    errors.LastName = "LastName is required";
  } else if (
    !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.LastName)
  ) {
    errors.LastName = "Invalid LastName address";
  }
  // Email
  if (!values.Email) {
    errors.Email = "Email is required";
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.Email)) {
    errors.Email = "Invalid email address";
  }
  //   password
  if (!values.Password) {
    errors.Password = "Password is required";
  } else if (values.Password.length < 6) {
    errors.Password = "Password must be at least 6 characters long";
  }

  //   Term

  if (!values.Term) {
    errors.Term = "Term is required";
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.Term)) {
    errors.Term = "Invalid Term mail address";
  }

  return errors;
};
