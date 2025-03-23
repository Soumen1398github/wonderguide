function Select({ label, options }) {
    return (
      <div className="flex flex-col space-y-1">
        <label className="text-lg font-medium text-gray-900">{label}</label>
        <select className="p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400 focus:border-blue-400">
          <option value="">Select {label}</option>
          {options.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
      </div>
    );
  }
  export default Select;