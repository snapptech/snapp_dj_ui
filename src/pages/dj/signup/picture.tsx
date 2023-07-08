import 'react-phone-input-2/lib/style.css';

import AuthLayout from '@/lib/auth/AuthLayout';
import { useCallback, useState } from 'react';

type PictureFormProps = {};

export const Form = () => {
  return <>Here comes pictuer</>;
};

function PictureForm({}: PictureFormProps) {
  return (
    <AuthLayout>
      <Form />
    </AuthLayout>
  );
}

export default PictureForm;
