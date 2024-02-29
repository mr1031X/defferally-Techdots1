'use client'
import React, { useState } from 'react'
import { RegisterOptions, UseFormRegister } from 'react-hook-form'
import styles from '@/src/components/Input/input.module.css'

interface Option {
  value: string | number
  label: string
}

interface SelectProps {
  label?: string
  name: string
  register?: UseFormRegister<any> // Adjust the type based on your form data structure
  errors?: Record<string, any> // Use the correct type based on your version of react-hook-form
  useReactHookForm?: boolean
  validationRules?: RegisterOptions
  options?: Option[]
  defaultValue?: string | number
  style?: React.CSSProperties
  className?: string
  setSelectedValueProp?: (value: any) => void
}

const Select: React.FC<SelectProps> = ({
  label,
  options,
  defaultValue,
  style,
  className,
  setSelectedValueProp,
  register,
  validationRules,
  name,
  errors
}) => {
  const [selectedValue, setSelectedValue] = useState(defaultValue || '')

  const handleSelectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const newValue = event.target.value
    setSelectedValue(newValue)
    if (setSelectedValueProp) {
      setSelectedValueProp(newValue)
    }
  }

  return (
    <div>
      {label && <label className="flex mb-1 text-sm text-black">{label}</label>}
      <select
        id="default"
        className={`bg-white border border-gray-300 text-gray-900 mb-6 text-sm h-[45px] rounded-md focus:ring-gray-500 focus:border-gray-500 block w-full p-2.5 dark:border-gray-600 dark:placeholder-gray-400 dark:focus:ring-gray-500 dark:focus:border-gray-500 ${
          className || ''
        }`}
        style={style}
        {...(register ? register(name, validationRules) : {})}
        value={selectedValue}
        onChange={handleSelectChange}
      >
        <option value="" disabled>
          Choose option
        </option>
        {options?.length &&
          options.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
      </select>
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
  )
}

export default Select
