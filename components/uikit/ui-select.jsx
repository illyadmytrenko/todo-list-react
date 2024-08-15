import { useState } from "react";
import { buttonClasses, renderOptions } from "./modal/select";
import { Listbox, ListboxButton, ListboxOptions } from "@headlessui/react";
import { DropDownIcon } from "./icons/dropdown-icon";
import clsx from "clsx";

/**
 * @component
 * @param {{
 *   className: string,
 *   options: Array.<{value: (string|number), label: string}>,
 *   onClick: Function
 *   isError?: boolean,
 * }} props
 */
export function UiSelect({ className, options, onClick, isError }) {
  const [selectedOption, setSelectedOption] = useState(null);

  const handleSelect = (option) => {
    setSelectedOption(option);
    onClick(option);
  };

  return (
    <Listbox
      className={className}
      value={selectedOption}
      onChange={handleSelect}
    >
      {({ open }) => (
        <>
          <div className="relative">
            <ListboxButton className={clsx(buttonClasses(isError), "bg-white")}>
              {selectedOption ? selectedOption.label : "Select an option"}
              <span className="absolute inset-y-0 right-0 flex items-center pr-2">
                <DropDownIcon isOpen={open} />
              </span>
            </ListboxButton>
            <ListboxOptions
              data-id="select-options"
              className="absolute z-10 mt-1 w-full bg-white rounded-md shadow-lg max-h-60 overflow-auto text-base sm:text-sm focus:outline-none"
            >
              {renderOptions(options)}
            </ListboxOptions>
          </div>
        </>
      )}
    </Listbox>
  );
}
