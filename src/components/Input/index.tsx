import styles from './input.module.css'
import Image from 'next/image'
import React from 'react'
import { useState } from 'react'
import { UseFormRegister, RegisterOptions, FieldErrors } from 'react-hook-form'
import passwordEye from '@/public/passwordEye.svg'

interface InputFieldProps {
    type: string
    placeholder: string
    name: string
    title?: string
    register?: UseFormRegister<any> // Adjust the type based on your form data structure
    errors?: Record<string, any> // Use the correct type based on your version of react-hook-form
    useReactHookForm?: boolean
    defaultValue?: string | number
    showPassword?: any
    validationRules?: RegisterOptions
    style?: React.CSSProperties
    subTitle?: string
    className?: string // Add className to the interface
    requiredSign?: boolean
    maxlength?: number
}

export default function Input({
    type,
    placeholder,
    showPassword,
    requiredSign,
    title,
    style,
    register,
    name,
    subTitle,
    useReactHookForm = true,
    validationRules = { required: false },
    className,
    errors,
    ...props
}: InputFieldProps) {
    const inputStyle: React.CSSProperties = {
        ...style
    }

    const [isVisible, setIsVisible] = useState(false)

    const handleFunction = () => {
        setIsVisible(!isVisible)
        // Call the callback function with the new visibility state
        showPassword(isVisible)
    }
console.log("======== isVisible =========", isVisible);

    return (
        <div>
            {
                title &&
                <div className="flex justify-start">
                    <span className={`${title ? 'mb-1' : ''}`}>
                        {title}
                        {validationRules.required !== undefined && requiredSign !== false && (
                            <span className="ml-1 text-red-500">*</span>
                        )}
                    </span>
                </div>
            }
            {
                subTitle &&
                <span className={`text-gray-400 text-xs ${subTitle ? 'mb-3' : ''}`}>{subTitle}</span>
            }
            <div className='relatived'>
            {type === 'textarea' ? (
          <textarea
            className={`${className ? className : ''} w-full ${
              type !== 'textarea' ? 'h-8 md:h-10' : ''
            } rounded-md border border-gray-300 px-2 text-sm font-light focus:border focus:border-gray-400 md:text-lg`}
            {...(useReactHookForm && register
              ? register(name, validationRules)
              : {})}
            placeholder={placeholder}
            {...props}
            style={inputStyle} // Use the updated inputStyle here
          />
        ) : (
          <input
            className={`${className ? className : ''} w-full ${
              type !== 'textarea' ? 'h-8 md:h-10' : ''
            } rounded-md border border-gray-300 px-2 text-sm font-light focus:border focus:border-gray-400 md:text-lg`}
            {...(useReactHookForm && register
              ? register(name, validationRules)
              : {})}
            type={isVisible ? 'text' : type} // Toggle between 'text' and original type
            placeholder={placeholder}
            {...props}
            style={inputStyle} // Use the updated inputStyle here
          />
        )}
                {type === 'password' && ( // Only show the eye icon for password input
                    <div className='flex justify-end mb-[-27px]'>
                        <Image
                        src={passwordEye}
                        alt="Show Password"
                        width={25}
                        height={25}
                        onClick={handleFunction}
                        style={{
                            position: 'relative',
                            bottom: '16px',
                            right: '10px',
                            transform: 'translateY(-50%)',
                            cursor: 'pointer'
                        }}
                    />
                        </div>
                
                )}
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
        </div>
    )
}
