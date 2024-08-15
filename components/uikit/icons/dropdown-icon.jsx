import clsx from "clsx";

export function DropDownIcon({ isOpen }) {
   return (
      <svg
         xmlns="http://www.w3.org/2000/svg"
         viewBox="0 0 24 24"
         fill="none"
         stroke="currentColor"
         strokeWidth="2"
         strokeLinecap="round"
         strokeLinejoin="round"
         className={clsx(isOpen && "rotate-180", "h-5 w-5 text-teal-600")}
      >
         <path d="M7 10l5 5 5-5" />
      </svg>
   );
}
