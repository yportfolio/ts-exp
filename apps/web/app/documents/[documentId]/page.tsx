"use client";

import { useEffect } from "react";
import Editor from "../../../components/Editor";
import { toast } from "sonner";

const DocumentIdPage = () => {
  useEffect(() => {
    toast.success("File created");
  }, []);

  return (
    <div className="pb-40">
      <div className="md:max-w-3xl lg:max-w-4xl mx-auto">
        <Editor />
      </div>
    </div>
  );
};

export default DocumentIdPage;
