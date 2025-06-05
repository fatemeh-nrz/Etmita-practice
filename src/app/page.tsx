"use client";

import { useRouter } from "next/navigation";
import React from "react";
import { useState } from "react";

const page = () => {
  const [name, setName] = useState("");
  const router = useRouter();

  const handleSubmit = (e) => {
    e.preventDefault();
    router.push(`/user/${name}`);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={name}
         placeholder="Enter User name"
        onChange={(e) => {
          setName(e.target.value);
        }}
       
      />
      <br /><br />
      <button type="submit">submit userName</button>
    </form>
  );
};

export default page;
