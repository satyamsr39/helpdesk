'use client';
export default function AuthInput({
  name,
  type = 'text',
  value,
  onChange,
  placeholder,
  className = '',
}) {
  return (
    <input
      name={name}
      type={type}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      className={`w-full border border-gray-400 rounded px-4 py-3 text-lg
                 placeholder-gray-500 focus:outline-none focus:ring-2
                 focus:ring-teal-500 ${className}`}
    />
  );
}
