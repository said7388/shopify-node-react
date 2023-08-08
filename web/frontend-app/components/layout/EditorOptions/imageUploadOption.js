
const ImageUploadOption = (
   { setShowEditor}
) => {
    return(<>
        <div style={{
            width:"80%",
            margin:"auto",
            height: "100px",
            marginTop: "20px", 
            backgroundColor: "rgba(0, 0, 0, 0.3)",
            color: "white",
        }}
        
        onClick={() => {
            setShowEditor(true);
        }
        }
        >
            <span>Open in Editor</span>
        </div>
        <div  style={{
            width:"80%",
            margin:"auto",
            marginTop: "20px",                            
            height: "100px",
            backgroundColor: "rgba(0, 0, 0, 0.3)",
            color: "white",
        }}>
            <span>Create Background with AI</span>
        </div>
        </>
    );
}

export default ImageUploadOption;