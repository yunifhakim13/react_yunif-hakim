export default function InputRadio({ radioValue, radioFor, radioText }) {
  return (
    <div class="form-check">
      <input
        class="form-check-input"
        type="radio"
        name="productRadio"
        value={radioValue}
      />
      <label class="form-check-label" for={radioFor}>
        {radioText}
      </label>
    </div>
  );
}
