import { useFormik } from 'formik';
import SmartInput from '../components/UI/SmartInput';

export default function LoginPage() {
  const formik = useFormik({
    initialValues: {
      email: '',
    },
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });

  return (
    <div className='container mx-auto'>
      <h1 className='text-3xl'>LoginPage</h1>
      <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nostrum voluptatibus, praesentium
        libero repellat officiis corporis esse iste totam reiciendis voluptatem!
      </p>
      <form className='mt-4' noValidate>
        <div className='mb-4'>
          <SmartInput id='email' formik={formik} type='email' placeholder='Enter your email' />
        </div>
        <div className='mb-4'>
          <SmartInput
            id='password'
            formik={formik}
            type='password'
            placeholder='Enter your password'
          />
        </div>
        <button
          className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline'
          type='button'>
          Sign In
        </button>
      </form>
    </div>
  );
}
