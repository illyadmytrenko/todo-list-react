import { UiFieldInput } from "@/components/uikit/ui-field-input";
import { UiFieldLabel } from "@/components/uikit/ui-field-label";

export function Search({ onSearchChange }) {
  return (
    <div className="mb-3">
      <form>
        <UiFieldLabel label="Enter your search term:" />
        <UiFieldInput
          type="text"
          name="search"
          placeholder="Enter your search term:"
          onChange={onSearchChange}
        />
      </form>
    </div>
  );
}
