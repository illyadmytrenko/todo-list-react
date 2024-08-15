import { UiFieldLabel } from "./ui-field-label";
import { UiSelect } from "./ui-select";

/**
 *
 * @param {Object} props
 * @param {string} props.label
 * @param {string} props.errorText
 * @param {string} props.className
 * @param {string[]} props.options
 * @returns {JSX.Element}
 */
export function UiSelectField({
  label,
  errorText,
  className,
  onClick,
  options,
}) {
  return (
    <div className={className}>
      <UiFieldLabel label={label} />
      <UiSelect className="mt-1" onClick={onClick} options={options} />
      <p className="text-red-600 mt-1">{errorText}</p>
    </div>
  );
}
