import { useFormik } from 'formik';
import * as Yup from 'yup';
import SmartInput from '../components/UI/SmartInput';
import toast from 'react-hot-toast';
import { useState } from 'react';
import axios from 'axios';
import { baseBeUrl } from '../helper';


export default function LoginPage() {

  const [isSuccess, setIsSuccess] = useState(false);

  const formik = useFormik({
    initialValues: {
      email: 'james@bond.com',
      password: '123456',
    },
    validationSchema: Yup.object({
      email: Yup.string().email().min(3).required(),
      password: Yup.string().min(5).max(30).required()
    }),
    onSubmit: (values) => {
      console.log('values ===', values);
      sendAxiosData(values);
    },
  });

  function sendAxiosData(data) {
    axios
    .post(`${baseBeUrl}/auth/login`, data)
    .then(resp => {
      console.log('resp ===', resp);
      toast.success('Welcome')
    })
    .catch((error) => {
      console.warn('ivyko klaida:', error);
      const klaida = error.resonse.data.error;
      toast.error(klaida);
    })
  }

  return (
    <div className='container mx-auto'>
      <h1 className='text-3xl'>LoginPage</h1>
      <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nostrum voluptatibus, praesentium
        libero repellat officiis corporis esse iste totam reiciendis voluptatem!
      </p>
      <form onSubmit={formik.handleSubmit} className='mt-4' noValidate>
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
          type='submit'>
          Sign In
        </button>
      </form>
    </div>
  );
}
