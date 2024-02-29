'use client';
import { UseFormRegister, RegisterOptions, FieldErrors } from 'react-hook-form';
import styles from '../Input/input.module.css'

interface RadioButtonProps {
  label: string;
  value: string;
  checked: boolean;
  onChange: (value: string) => void;
  required?: boolean; // Add the required prop to the interface
  register?: UseFormRegister<any>; // Adjust the type based on your form data structure
  validationRules?: RegisterOptions;
  name: string;
  useReactHookForm?: boolean;
  errors?: Record<string, any>; // Use the correct type based on your version of react-hook-form
}

export default function Radio({
  label,
  value,
  checked,
  onChange,
  required,
  register,
  validationRules = { required: false },
  name,
  useReactHookForm = true,
  errors,
  ...props
}: RadioButtonProps) {
  const handleOnChange = () => {
    if (!checked) {
      onChange(value);
    }
  };

  return (
    <div className="relative">
      <label className="flex items-center">
        <input
          type="radio"
          className="relative float-left mr-3 mt-0.5 h-5 w-5 cursor-pointer appearance-none rounded-full
                border-2 border-solid before:pointer-events-none before:absolute
                before:left-0.5 before:top-0.5 before:h-3
                before:w-3 before:rounded-full before:bg-white checked:border-gray-500 checked:bg-transparent checked:before:bg-gray-500 focus:outline-none"
          value={value}
          {...(useReactHookForm && register
            ? register(name, validationRules)
            : {})}
          {...props}
          checked={checked}
          onChange={handleOnChange}
          required={required} // Use the required prop for the input element
        />
        <span>{label}</span>
      </label>

      {errors && errors[name] && (
        <div className={styles['error-popup']}>
          <span className={styles['error-message']}>
            {errors[name] &&
            typeof errors[name] === 'object' &&
            'message' in errors[name] &&
            errors[name].message !== ''
              ? (errors[name] as { message: React.ReactNode }).message
              : 'Invalid Field Value'}
          </span>
        </div>
      )}
    </div>
  );
}
