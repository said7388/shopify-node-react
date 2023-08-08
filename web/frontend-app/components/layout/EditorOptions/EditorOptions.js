import React from "react";
import ImageUploadOption from "./imageUploadOption";
import Superimpose from "./superImpose";

const EditorOptions = ({
    setShowEditor,
    editorType,
    setBackgroundImg,
    curImage
}) => {
  return (<>
        {
           <div className="navLinks">
                <div style={{
                width:"100%",
                textAlign:"center",
                }}>
                    <div>
                        {
                            editorType === "imageUpload" ? <ImageUploadOption setShowEditor={setShowEditor} /> : null
                        }
                        {
                            editorType === "superimpose" ? <Superimpose setBackgroundImg={setBackgroundImg} curImage={curImage} /> : null
                        }
                    </div>
                </div>
            </div>
        }
        </>          
    );

};

export default EditorOptions;
