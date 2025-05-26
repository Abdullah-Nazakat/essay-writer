import React from 'react'

const Textfield = ({ 
  label, 
  placeholder, // For text/textarea inputs
  dropdownPlaceholder, // Specific for dropdowns
  type = "text",
  options = [],
  value,
  onChange,
  name, // Add name prop
  required // Add required prop
}) => {
  return (
    <div className='flex flex-col gap-2'>
      <label htmlFor={name} className='text-base font-bold leading-6 text-[#3F3F46]'>
        {label}
      </label>
      
      {type === "dropdown" ? (
        <select
        className={`border border-[#D4D4D8] rounded-md p-4 focus:outline-none focus:ring-2 
          focus:black focus:border-transparent bg-white 
          ${value === '' ? 'text-gray-500' : 'text-black'}`}
          id={name}
          name={name}
          value={value}
          onChange={onChange}
          required={required}
        >
          <option value="" disabled hidden 
          //  style={{ color: '#9CA3AF' }}
          >
            {dropdownPlaceholder || placeholder}
          </option>
          {options.map((option, index) => (
            <option key={index} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      ) : type === "textarea" ? (
        <textarea
          className='border border-[#D4D4D8] rounded-md p-4 focus:outline-none focus:ring-2 
          focus:black focus:border-transparent text-black min-h-[144px]'
          id={name}
          name={name}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          required={required}
        />
      ) : (
        <input 
          className='border border-[#D4D4D8] rounded-md p-4 focus:outline-none focus:ring-2 
          focus:black focus:border-transparent text-black'
          type={type}
          id={name}
          name={name}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          required={required}
        />
      )}
    </div>
  )
}

export default Textfield