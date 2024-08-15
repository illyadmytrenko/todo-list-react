import clsx from "clsx";

/**
 * @param {{
 * children: any,
 * className: string,
 * size: 'md' | 'lg',
 * variant: 'primary' | 'outline'
 * }} props
 */

export function UiButton({ children, className, size, variant, onClick }) {
  const buttonClassName = clsx(
    className,
    {
      md: "rounded px-6 py-2 text-sm",
    }[size],
    {
      primary: "bg-teal-400 hover:bg-teal-500",
      outline: "border border-teal-400 text-teal-400 hover:bg-gray-100",
    }[variant]
  );

  return (
    <button className={buttonClassName} onClick={onClick} type="button">
      {children}
    </button>
  );
}
