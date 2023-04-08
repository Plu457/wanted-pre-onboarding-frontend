import { useState, useMemo } from 'react';
import { Format } from 'utils';

const useForm = submitCallback => {
  const formData = useMemo(() => new Map(), []);
  const [isButtonDisabled, setIsButtonDisabled] = useState(true);

  const handleChange = ({ target }) => {
    if (!(target instanceof HTMLInputElement)) return;

    const validityErrorMessage = Format.getValidityErrorMessage(target);
    target.setCustomValidity(validityErrorMessage);
    target.reportValidity();

    formData.set(target.name, target.value);
    setIsButtonDisabled(!target.form.checkValidity());
  };

  const onSubmit = async e => {
    e.preventDefault();

    const parsedFormData = Object.fromEntries(formData);
    submitCallback(parsedFormData);
  };

  return { handleChange, onSubmit, isButtonDisabled };
};

export default useForm;
