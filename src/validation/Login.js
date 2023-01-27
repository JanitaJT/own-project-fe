export function validate(values) {
  const errors = {};
  const regUsername = new RegExp(/^[a-zäöå]*[.][a-zäöå/-]*$/);

  if (!values.username) {
    errors.username = "Required";
  } else if (!regUsername.test(values.username)) {
    errors.username = "Allowed format firstname.lastname-lastname";
  }

  if (!values.password) {
    errors.password = "Required";
  }

  return errors;
}
