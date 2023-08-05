import React, { FC, memo } from "react";
import { Editor } from "@tinymce/tinymce-react";

interface MarkDownEditor {
  label: string;
  changeValue: any;
  name: string;
  defaultValue?: string;
}

const MarkDownEditor: FC<MarkDownEditor> = ({
  label,
  changeValue,
  name,
  defaultValue,
}) => {
  return (
    <>
      <span className="text-2xl font-semibold tracking-wider">{label}</span>
      <Editor
        onChange={(e) =>
          changeValue((prev: any) => ({
            ...prev,
            [name]: e.target.getContent(),
          }))
        }
        apiKey={process.env.NEXT_PUBLIC_TINY_API_KEY}
        initialValue={defaultValue ? defaultValue : "<p></p>"}
        init={{
          height: 500,
          menubar: false,
          autoresize_bottom_margin: 50,
        }}
      />
    </>
  );
};

export default memo(MarkDownEditor);
