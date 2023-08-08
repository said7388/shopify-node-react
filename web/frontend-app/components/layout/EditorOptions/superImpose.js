import React, { useEffect, useRef, useState } from 'react';
import {
    getBackgroundImages
} from '../../../api/images';
const Superimpose = ({
    setBackgroundImg,
    curImage,
}) => {
    const [sizeSelected,setSizeSelected] = useState({ width:null, height:null});
    const [backgroundImages, setBackgroundImages] = useState([]);
    const btnref = useRef(null);

    useEffect(() => {
        const fetchBackgroundImages = async()=>{
            try{
                const resp = await getBackgroundImages();
                setBackgroundImages(resp.backgroundImages);
            }catch(err){
                console.log(err);
            }
        }
        fetchBackgroundImages();
    },[]);

    

    const handleBackground = (e)=>{
        setBackgroundImg(e.target.src);
    }

    const handleFileUpload = (e)=>{
        e.preventDefault();
    }

    return (
        <div>
            <h1>Superimpose</h1>
            <div>
                        {
                            // image size options
                        }
                </div>
                <div>
                    {
                        // image upload
                    }
                    <div>
                        <div>
                            <input type='file' ref={btnref} name='file' id='file' className='inputfile' onChange={handleFileUpload} hidden/>
                            <button 
                             type='button'
                                onClick={(e)=>{
                                    window.onbeforeunload = null;
                                    e.stopPropagation();
                                    btnref.current.click();
                                }}>
                                Upload Image
                            </button>
                        </div>
                    </div>
                </div>
            <div style={{
                display: "grid",
                gridTemplateColumns: "repeat(2, 2fr)",
                gridGap: "3px",
            }}>
                { 
                    backgroundImages && backgroundImages.map((imageurl) => {
                       return (<div style={ { width: "90px", height:"90px", backgroundColor: "white",}} >
                            <img src={imageurl} 
                                alt={imageurl.split("/").pop().split(".")[0]}
                                onClick={handleBackground}
                                style={{
                                    width: "100%",
                                    height: "100%",
                                }}
                            />
                        </div>)
                    })
                    }
                </div>
            </div>
    );
}
export default Superimpose;