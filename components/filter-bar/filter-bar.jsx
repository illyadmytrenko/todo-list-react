import { UiSelectField } from "../uikit/ui-select-field";

export function FilterBar({ setFilter, className }) {
  const handleChangeSelect = (option) => {
    const { value } = option;
    setFilter(value);
  };

  return (
    <div>
      <UiSelectField
        className={className}
        label="Filter by category:"
        onClick={handleChangeSelect}
        options={[
          { label: "All", value: "All", name: "category" },
          { label: "Family", value: "Family", name: "category" },
          { label: "Work", value: "Work", name: "category" },
          { label: "Study", value: "Study", name: "category" },
          {
            label: "Health & Sport",
            value: "Health & Sport",
            name: "category",
          },
          { label: "Hobby", value: "Hobby", name: "category" },
          { label: "Personal", value: "Personal", name: "category" },
        ]}
      />
    </div>
  );
}
