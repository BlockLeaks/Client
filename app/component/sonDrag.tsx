import React, { useCallback } from "react";
import { useDropzone } from "react-dropzone";
import { Web3Storage } from "web3.storage";

interface FileDropProps {
  setCID: React.Dispatch<React.SetStateAction<string | undefined>>;
}

const FileDrop: React.FC<FileDropProps> = ({ setCID }) => {
  const onDrop = useCallback(
    (acceptedFiles: File[]) => {
      const token =
        "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJkaWQ6ZXRocjoweDNGQjMxMTZFNDdkNDdkZEI0MkE5ZGQ4OTFmNzc1NjJmQjJlN2VGZjkiLCJpc3MiOiJ3ZWIzLXN0b3JhZ2UiLCJpYXQiOjE2ODQwMTg1ODA5MDYsIm5hbWUiOiJCbG9ja0xlYWtzIn0.izx6mqqEFB0YNt0bqehBIb81N0awVqn4A02D9GfL4mA";

      const storage = new Web3Storage({ token });

      const uploadFiles = async () => {
        let cid = await storage.put(acceptedFiles);
        setCID(cid);
      };

      uploadFiles();
    },
    [setCID]
  );

  const { getRootProps, getInputProps } = useDropzone({ onDrop });

  return (
    <div
      {...getRootProps()}
      className="flex items-center justify-center p-6 mt-2 border-2 border-dashed border-gray-300 rounded-lg cursor-pointer hover:bg-gray-100"
    >
      <input {...getInputProps()} accept="application/pdf" className="hidden" />
      <div className="text-center">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          className="w-12 h-12 mx-auto mb-2 text-gray-400"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V7a2 2 0 011.732-2A2 2 0 0112 3v1m6 17h2a2 2 0 002-2v-6a2 2 0 00-2-2h-2.5"
          />
        </svg>
        <p className="text-sm text-gray-500">
          Drop a LEAK here, or{" "}
          <span className="font-medium text-indigo-600 cursor-pointer hover:text-indigo-500">
            click to select it
          </span>
        </p>
      </div>
    </div>
  );
};

export default FileDrop;
