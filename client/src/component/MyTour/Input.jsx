function Input({ label, type, placeholder, required = false }) {
    return (
      <div className="flex flex-col space-y-1">
        <label className="text-lg font-medium text-gray-900">{label}</label>
        <input
          type={type}
          placeholder={placeholder}
          required={required}
          className="p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-200 focus:border-blue-200"
        />
      </div>
    );
  }
  export default Input;