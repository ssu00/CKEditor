import React from "react";
import { CKEditor, CKEditorContext } from "@ckeditor/ckeditor5-react";
import Context from "@ckeditor/ckeditor5-core/src/context";
import ClassicEditor from "@ckeditor/ckeditor5-editor-classic/src/classiceditor";
import Bold from "@ckeditor/ckeditor5-basic-styles/src/bold";
import Italic from "@ckeditor/ckeditor5-basic-styles/src/italic";
import Underline from "@ckeditor/ckeditor5-basic-styles/src/underline";
import Strikethrough from "@ckeditor/ckeditor5-basic-styles/src/strikethrough";
import Essentials from "@ckeditor/ckeditor5-essentials/src/essentials";
import Paragraph from "@ckeditor/ckeditor5-paragraph/src/paragraph";
import Heading from "@ckeditor/ckeditor5-heading/src/heading";
import BlockQuote from "@ckeditor/ckeditor5-block-quote/src/blockquote";
import Link from "@ckeditor/ckeditor5-link/src/link";
import PasteFromOffice from "@ckeditor/ckeditor5-paste-from-office/src/pastefromoffice";
import Font from "@ckeditor/ckeditor5-font/src/font";
import Image from "@ckeditor/ckeditor5-image/src/image";
import ImageStyle from "@ckeditor/ckeditor5-image/src/imagestyle";
import ImageToolbar from "@ckeditor/ckeditor5-image/src/imagetoolbar";
import ImageUpload from "@ckeditor/ckeditor5-image/src/imageupload";
import ImageResize from "@ckeditor/ckeditor5-image/src/imageresize";
import List from "@ckeditor/ckeditor5-list/src/list";
import Alignment from "@ckeditor/ckeditor5-alignment/src/alignment";
import Table from "@ckeditor/ckeditor5-table/src/table";
import TableToolbar from "@ckeditor/ckeditor5-table/src/tabletoolbar";
import TableProperties from "@ckeditor/ckeditor5-table/src/tableproperties";
import TableCellProperties from "@ckeditor/ckeditor5-table/src/tablecellproperties";
import TextTransformation from "@ckeditor/ckeditor5-typing/src/texttransformation";
import Indent from "@ckeditor/ckeditor5-indent/src/indent";
import IndentBlock from "@ckeditor/ckeditor5-indent/src/indentblock";
import Base64UploadAdapter from "@ckeditor/ckeditor5-upload/src/adapters/base64uploadadapter";
import "./editor.scss";

const Editor = () => {
  return (
    <>
      <div className="editorApp">
        &nbsp;&nbsp; <h1>CKEditor5</h1>
        <CKEditorContext context={Context}>
          <CKEditor
            editor={ClassicEditor}
            config={{
              plugins: [
                Essentials,
                Paragraph,
                Bold,
                Italic,
                Heading,
                Indent,
                IndentBlock,
                Underline,
                Strikethrough,
                BlockQuote,
                Font,
                Alignment,
                List,
                Link,
                PasteFromOffice,
                Image,
                ImageStyle,
                ImageToolbar,
                ImageUpload,
                ImageResize,
                Base64UploadAdapter,
                Table,
                TableToolbar,
                TableProperties,
                TableCellProperties,
                TextTransformation,
              ],
              toolbar: [
                "heading",
                "|",
                "bold",
                "italic",
                "underline",
                "strikethrough",
                "|",
                "fontSize",
                "fontColor",
                "fontBackgroundColor",
                "|",
                "alignment",
                "outdent",
                "indent",
                "bulletedList",
                "numberedList",
                "blockQuote",
                "|",
                "link",
                "insertTable",
                "imageUpload",
                "|",
                "undo",
                "redo",
              ],
              fontSize: {
                options: [
                  14,
                  15,
                  16,
                  17,
                  18,
                  19,
                  "default",
                  21,
                  22,
                  23,
                  24,
                  25,
                  26,
                  27,
                  28,
                  29,
                  30,
                ],
              },
              alignment: {
                options: ["justify", "left", "center", "right"],
              },
              table: {
                contentToolbar: [
                  "tableColumn",
                  "tableRow",
                  "mergeTableCells",
                  "tableProperties",
                  "tableCellProperties",
                ],
              },
              image: {
                resizeUnit: "px",
                toolbar: [
                  "imageStyle:alignLeft",
                  "imageStyle:full",
                  "imageStyle:alignRight",
                  "|",
                  "imageTextAlternative",
                ],
                styles: ["full", "alignLeft", "alignRight"],
                type: ["JPEG", "JPG", "GIF", "PNG"],
              },
              typing: {
                transformations: {
                  remove: [
                    "enDash",
                    "emDash",
                    "oneHalf",
                    "oneThird",
                    "twoThirds",
                    "oneForth",
                    "threeQuarters",
                  ],
                },
              },
              placeholder: "글을 입력해보세요!",
            }}
            onReady={(editor) => {
              console.log("Editor is ready to use!", editor);
              // Insert the toolbar before the editable area.
              editor.ui
                .getEditableElement()
                .parentElement.insertBefore(
                  editor.ui.view.toolbar.element,
                  editor.ui.getEditableElement()
                );
            }}
            onError={({ willEditorRestart }) => {
              if (willEditorRestart) {
                this.editor.ui.view.toolbar.element.remove();
              }
            }}
            onChange={(event, editor) => console.log({ event, editor })}
          />
        </CKEditorContext>
      </div>{" "}
    </>
  );
};

export default Editor;
