'use client';
import { useForm } from 'react-hook-form';
import { useRouter } from 'next/navigation';

interface FormData {
  name: string;
  email: string;
}
export default function MyForm() {
  const { register, handleSubmit, formState: { errors } } = useForm<FormData>();
  const router = useRouter();

  const onSubmit = (data: FormData) => {
    console.log('Form data:', data);
    router.push(`/user/userid?name=${data.name}&email=${data.email}`);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <label htmlFor="name">Name:</label>
        <input type="text" id="name" {...register('name', { required: 'Name is required' })} />
        {errors.name && <span>{errors.name.message}</span>}
      </div>
      <div>
        <label htmlFor="email">Email:</label>
        <input type="email" id="email" {...register('email', { required: 'Email is required', pattern: {value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i, message: "invalid email"}})} />
        {errors.email && <span>{errors.email.message}</span>}
      </div>
      <button type="submit">Submit</button>
    </form>
  );
}