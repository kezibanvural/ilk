import Image from 'next/image';
import React from 'react'

const FileUploadList = ({files, setFiles, isLoading}) => {

    const handleRemove = (fileToRemove) => {
        setFiles((prevFiles) => prevFiles.filter((file) => file !== fileToRemove));
      };

  return (
    <div className="list-container">
        <ul className="file-details">
          {isLoading && (
            <li className="placeholder-glow py-3">
              <span className="placeholder col-12 rounded-3 bg-light"></span>
            </li>
          )}
          {files.map((file, index) => (
            <li key={index} className="file-detail-item">
              <div>
                <Image
                  src="/icons/actions/file/State=Default.svg"
                  width={25}
                  height={25}
                  className="img-container"
                  alt="Uploaded file"
                />
                <span>{file.path}</span>
              </div>
              <button
                className="remove-button"
                onClick={() => handleRemove(file)}
              >
                <Image
                  src="/icons/ui/icons/State=Default,Name=Clear.svg"
                  width={20}
                  height={20}
                  className="img-container"
                  alt="Uploaded file"
                />
              </button>
            </li>
          ))}
        </ul>
      </div>
  )
}

export default FileUploadList