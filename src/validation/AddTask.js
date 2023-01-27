export function validate(values) {
  const errors = {};
  const regName = new RegExp(/^[A-Za-zäöåÄÖÅ0-9\s-]*$/);

  if (!values.name) {
    errors.name = "Required";
  } else if (values.name.length < 2 || values.name.length > 100) {
    errors.name = "Must be between 2-100 characters long";
  } else if (!regName.test(values.name)) {
    errors.name = "Accpeted format: letters, numbers, whitespace, -";
  }
  if (values.description.length > 255) {
    errors.description = "Max length 255 characters";
  }

  return errors;
}
