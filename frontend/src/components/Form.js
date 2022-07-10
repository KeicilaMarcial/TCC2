import React, {useRef} from "react";

export default function Form () {
    const filesElement = useRef(null);

    const sendFile = async () => {
      const dataForm = new FormData();
      for (const file of filesElement.current.files) {
        dataForm.append('file', file);
      }
      const res = await fetch(`http://localhost:5001/upload`, {
        method: 'POST',
        body: dataForm,
      });
      const data = await res.json();
      setInterval(console.log(data));
    };
    return(
        <div className="form">
        {/* <form> */}
            <div className="items-form">
                <label htmlFor="upload-file"><h1>Upload</h1></label>
                <input type="file" name="file" id="upload-file" multiple ref={filesElement} />
                <input type ="submit" onClick={sendFile}/>
            </div>
          {/* </form> */}
        </div>
    );
}

