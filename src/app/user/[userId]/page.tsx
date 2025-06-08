
'use client'
import { useSearchParams } from 'next/navigation';
export default function SuccessPage() {
  const searchParams = useSearchParams();
  const name = searchParams.get('name');
  const email = searchParams.get('email');

  return (
    <div>
      <h1>Success!</h1>
      <p>Name: {name}</p>
      <p>Email: {email}</p>
    </div>
  );
}