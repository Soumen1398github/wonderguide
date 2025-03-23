function Textarea({ label, rows, placeholder }) {
    return (
      <div className="flex flex-col space-y-1">
        <label className="text-lg font-medium text-gray-900">{label}</label>
        <textarea
          rows={rows}
          placeholder={placeholder}
          className="p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-200 focus:border-blue-200"
        />
      </div>
    );
  }
  export default Textarea;