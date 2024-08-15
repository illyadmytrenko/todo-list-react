import clsx from "clsx";

/**
 * @param {{
 * type: string;
 * required?: boolean;
 * isError?: boolean;
 * } & import('react').HTMLAttributes<HTMLInputElement>} props -
 */

export function UiFieldInput({ type, id, errorText, ...inputProps }) {
  return (
    <>
      <input
        type={type}
        id={id}
        className={clsx([
          `px-2 py-2 outline-0 border
        block w-full rounded-md shadow-sm  focus:ring-opacity-50 disabled:cursor-not-allowed disabled:bg-gray-50 disabled:text-gray-500`,
          errorText
            ? "focus:border-orange-600 focus:ring focus:ring-orange-600/20 border-orange-600"
            : "focus:border-teal-600 focus:ring focus:ring-teal-600/20 border-slate-200",
        ])}
        {...inputProps}
      />
      <p className="text-red-600 mt-1">{errorText}</p>
    </>
  );
}
