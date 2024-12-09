"use client";

import { ChangeEvent, useContext, useEffect, useState } from "react";
import { getFiles, uploadFile } from "./handlers";
import toast from "react-hot-toast";
import { storage } from "@/utils/appwrite";
import { UserContext } from "@/context/UserContextApi";

export default function StoragePage() {
  const [images, setImages] = useState<any>(null);
  const { user } = useContext<any>(UserContext);
  const handleFileUpload = async (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      const selectedFile = e.target.files[0];
      const { result, error } = await uploadFile(selectedFile);
      if (result) {
        toast(`File is uploaded ${selectedFile.name}`);
        return;
      }
      if (error) {
        toast("Error found");
      }
    }
  };

  const handleGetFiles = async () => {
    const { result, error } = await getFiles();
    if (result) {
      const temp = result.files.map((item) => {
        const img = storage.getFileView("671884dd002c09858b70", item.$id);
        return img;
      });
      setImages(temp);
      return;
    }
    if (error) {
      console.log(error);
      toast("Error in fetching files");
    }
  };

  useEffect(() => {
    if (user) {
      handleGetFiles();
    }
  }, [user]);

  return (
    <div className="mt-6">
      {/* Upload */}
      <div>
        <input type="file" onChange={handleFileUpload} />
      </div>
      <div className="">
        <h1 className="mt-4 text-3xl font-bold">Uploaded Images</h1>
        <div className="flex items-center gap-4 flex-wrap mt-4">
          {images && images?.length > 0 ? (
            images.map((item: any, i: number) => (
              <div key={i} className="flex items-center flex-col gap-2">
                <img
                  height={100}
                  width={100}
                  alt={`Uploaded Image ${i + 1}`}
                  src={item}
                  className="aspect-square rounded-lg object-cover"
                />

                <p
                  onClick={() =>
                    console.log(
                      storage.getFileDownload("671884dd002c09858b70", item.$id)
                    )
                  }
                  className="text-white font-bold"
                >
                  Download
                </p>
              </div>
            ))
          ) : (
            <span>No files</span>
          )}
        </div>
      </div>
    </div>
  );
}
