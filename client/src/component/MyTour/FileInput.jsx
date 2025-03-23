function FileInput({ label, selectedFile, setSelectedFile }) {
    return (
      <div className="flex flex-col">
        <label className="block mb-2 text-lg font-medium text-gray-900 dark:text-white">
          {label}
        </label>
        <div className="flex items-center border border-gray-300 rounded-lg bg-gray-50 dark:bg-gray-700 dark:border-gray-600 w-full h-[42px] overflow-hidden">
          {/* Left side - Button */}
          <label className="bg-gray-500 text-white px-4 h-full flex items-center justify-center cursor-pointer">
            Choose File
            <input
              type="file"
              className="hidden"
              onChange={(e) => setSelectedFile(e.target.files[0]?.name)}
            />
          </label>
  
          {/* Right side - File name or default text */}
          <div className="flex-1 pl-3 text-gray-900 dark:text-white text-sm truncate">
            {selectedFile || "No file chosen"}
          </div>
        </div>
      </div>
    );
  }
  export default FileInput;