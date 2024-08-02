import Image from "next/image";
import React, { useState } from "react";
import Dropzone from "react-dropzone";
import "./style.scss";

const AttachmentFile = ({setFiles, setIsLoading}) => {

  const handleUpload = (acceptedFiles) => {
    console.log("logging drop/selected files", acceptedFiles);
    // fake request to upload file
    const url = "https://api.escuelajs.co/api/v1/files/upload";

    setIsLoading(true); // Start loading spinner

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
          setIsLoading(false); // Stop loading spinner after upload is done
        });
    });
  };

  // console.log("files", files);

  return (
    <div className="dropzone-container">
      <Dropzone
        onDrop={handleUpload}
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
              Upload File
            </div>
          );
        }}
      </Dropzone>
    </div>
  );
};

export default AttachmentFile;
