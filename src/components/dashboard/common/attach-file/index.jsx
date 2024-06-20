import Image from "next/image";
import React, { useState } from "react";
import Dropzone from "react-dropzone";
import "./style.scss";

const AttachmentFile = () => {
  const [files, setFiles] = useState([]);

  const handleUpload = (acceptedFiles) => {
    console.log("logging drop/selected files", acceptedFiles);
    // fake request to upload file
    const url = "https://api.escuelajs.co/api/v1/files/upload";

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
        });
    });
  };

  const handleRemove = (fileToRemove) => {
    setFiles((prevFiles) => prevFiles.filter((file) => file !== fileToRemove));
  };

  console.log("files", files);

  const fileDetailsHeight = files.length * 50 + 150;

  return (
    <div className="dropzone-container">
      <Dropzone
        onDrop={handleUpload}
        accept="image/*"
        minSize={1024}
        maxSize={3072000}
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
          className={
            files.length === 0 ? "file-details d-none" : "file-details"
          }
        >
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
                <span className="text-white">{file.path}</span>
              </div>
              <button
                className="remove-button"
                onClick={() => handleRemove(file)}
              >
                x
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default AttachmentFile;
