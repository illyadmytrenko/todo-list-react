import { useState } from "react";
import { UiSelectField } from "../uikit/ui-select-field";

export function SortBar({ setSortOrder, className }) {
  const handleChangeSelect = (option) => {
    const { value } = option;
    setSortOrder(value);
  };

  return (
    <div>
      <UiSelectField
        className={className}
        label="Sort by date:"
        onClick={handleChangeSelect}
        options={[
          { label: "Ascending", value: "ascending", name: "sort" },
          { label: "Descending", value: "descending", name: "sort" },
        ]}
      />
    </div>
  );
}
