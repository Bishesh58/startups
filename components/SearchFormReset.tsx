"use client";

import { X } from "lucide-react";
import Link from "next/link";

const SearchFormReset = () => {
  const reset = () => {
    console.log("reset");
  };
  return (
    <>
      <button onClick={reset}>
        <Link href="/" className="search-btn text-white">
          <X className="size-5" />
        </Link>
      </button>
    </>
  );
};

export default SearchFormReset;
