import { ListboxOption } from "@headlessui/react";

import clsx from "clsx";

export function buttonClasses(isError) {
  return clsx(
    "px-2 py-2 pr-8 leading-tight outline-0 border block w-full rounded-md shadow-sm focus:ring-opacity-50",
    isError
      ? "border-teal-600 focus:border-teal-600 focus:ring focus:ring-teal-600/20"
      : "border-slate-200 focus:border-teal-600 focus:ring focus:ring-teal-600/20"
  );
}

function optionClasses(active) {
  return clsx(
    "cursor-pointer select-none relative py-2 pl-3 pr-9",
    active ? "text-white bg-teal-600" : "text-gray-900"
  );
}

export function renderOptions(options) {
  return options.map((option) => (
    <ListboxOption
      key={option.value}
      value={option}
      name={option.name}
      className={({ active }) => optionClasses(active)}
    >
      {({ selected }) => (
        <>
          <span
            className={clsx(
              selected ? "font-semibold" : "font-normal",
              "block truncate"
            )}
          >
            {option.label}
          </span>
        </>
      )}
    </ListboxOption>
  ));
}
