import Image from "next/image";
import React, { useState } from "react";
import Dropzone from "react-dropzone";
import "./style.scss";

const AttachmentFile = () => {
  const [files, setFiles] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleUpload = (acceptedFiles) => {
    console.log("logging drop/selected files", acceptedFiles);
    // fake request to upload file
    const url = "https://api.escuelajs.co/api/v1/files/upload";

    setLoading(true); // Start loading spinner

    acceptedFiles.forEach((file) => {
      const formData = new FormData();
      formData.append("file", file);

      fetch(url, {
        method: "POST",
        body: formData,
      })
        .then((response) => {
          if (response.ok) {
            // File uploaded successfully
            setFiles((prevFiles) => [...prevFiles, file]);
          } else {
            // File upload failed
            console.error(response);
          }
        })
        .catch((error) => {
          console.error(error);
        })
        .finally(() => {
          setLoading(false); // Stop loading spinner after upload is done
        });
    });
  };

  const handleRemove = (fileToRemove) => {
    setFiles((prevFiles) => prevFiles.filter((file) => file !== fileToRemove));
  };

  console.log("files", files);
  
  return (
    <div className="dropzone-container">
      <Dropzone
        onDrop={handleUpload}
        accept="image/*"
        minSize={1024}
        maxSize={11000000}
        multiple
      >
        {({
          getRootProps,
          getInputProps,
          isDragActive,
          isDragAccept,
          isDragReject,
        }) => {
          const additionalClass = isDragAccept
            ? "accept"
            : isDragReject
            ? "reject"
            : "";

          return (
            <div
              {...getRootProps({
                className: `dropzone ${additionalClass}`,
              })}
            >
              <input {...getInputProps()} />
              <Image
                src="/icons/ui/icons/State=DefaultName=Attach.svg"
                width={25}
                height={25}
                alt="icon"
                className="attach-icon"
              />
            </div>
          );
        }}
      </Dropzone>

      <div className="list-container">
        <ul
          className="file-details"
        >
          {loading && (
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
    </div>
  );
};

export default AttachmentFile;
