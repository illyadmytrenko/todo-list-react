import "@/styles/globals.css";
import clsx from "clsx";
import { Poppins } from "next/font/google";

const poppins = Poppins({ subsets: ["latin", "latin-ext"], weight: ["500"] });

export default function App({ Component, pageProps }) {
  return (
    <div className={clsx(poppins.className, "text-slate-900")}>
      <Component {...pageProps} />
    </div>
  );
}
