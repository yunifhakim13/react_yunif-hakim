function InputWithLabel({
  labelFor,
  labelClass,
  labelText,
  inputId,
  inputClassName,
  inputType,
  ariaLabel,
  placehholder,
  onChange,
}) {
  return (
    <div className="mb-3 col-md-8">
      <label htmlFor={labelFor} className={labelClass}>
        {labelText}
      </label>
      <input
        id={inputId}
        className={inputClassName}
        type={inputType}
        aria-label={ariaLabel}
        placeholder={placehholder}
        onChange={onChange}
      />
    </div>
  );
}

export default InputWithLabel;
