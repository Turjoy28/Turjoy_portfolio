/** Labeled input/textarea with an inline validation message. */
function FormField({ name, label, as = 'input', error, ...inputProps }) {
  const Control = as;
  const errorId = `${name}Error`;

  return (
    <div className={`form-group${error ? ' error' : ''}`}>
      <label htmlFor={name}>{label}</label>
      <Control
        id={name}
        name={name}
        required
        aria-invalid={Boolean(error)}
        aria-describedby={errorId}
        {...inputProps}
      />
      <span className="form-error" id={errorId}>
        {error}
      </span>
    </div>
  );
}

export default FormField;
