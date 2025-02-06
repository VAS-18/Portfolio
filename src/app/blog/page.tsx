import Link from "next/link";
import React from "react";

export default function BlogPage() {
  return (
    <main>
      <div className="p-10">
        <Link href="/" className="hover:text-white">
          {"<- Go back"}
        </Link>
      </div>
      <section className="blog text-2xl flex justify-center items-center m-10">
        $ Blogs?.... i don't write Blogs :P
      </section>
    </main>
  );
}
