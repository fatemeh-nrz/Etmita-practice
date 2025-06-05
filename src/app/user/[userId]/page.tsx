import React from "react";

async function page({ params }: { params: Promise<{ userId: string }> }) {
  const { userId } = await params;
  // console.log(userId)
  return (
    <div>
      <h1>this page is for user parameter {userId}</h1>
    </div>
  );
}

export default page;
//
