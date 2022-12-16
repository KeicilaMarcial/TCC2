import React, {useRef} from "react";
import classNames from 'classnames';
import { SectionProps } from '../../utils/SectionProps';
import ButtonGroup from '../elements/ButtonGroup';
import Button from '../elements/Button';



const propTypes = {
  ...SectionProps.types
}

const defaultProps = {
  ...SectionProps.defaults
}

const Form = ({
  className,
  topOuterDivider,
  bottomOuterDivider,
  topDivider,
  bottomDivider,
  hasBgColor,
  invertColor,
  ...props
}) => {

  const outerClasses = classNames(
    'hero section center-content',
    topOuterDivider && 'has-top-divider',
    bottomOuterDivider && 'has-bottom-divider',
    hasBgColor && 'has-bg-color',
    invertColor && 'invert-color',
    className
  );

  const innerClasses = classNames(
    'hero-inner section-inner',
    topDivider && 'has-top-divider',
    bottomDivider && 'has-bottom-divider'
  );

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

  const uploadZip =  async () => {
    const sleep = (delay) => new Promise(resolve => setTimeout(resolve, delay));

    await sleep(1000);
    await  fetch(`http://localhost:5001/download`)
    .then(transfer => transfer.blob())
    .then(bytes => {
        let elm = document.createElement('a');
        elm.href = URL.createObjectURL(bytes);
        elm.setAttribute('download', `pack.zip`);
        elm.click()
        return true;
    })
    .catch((error) => {
        console.log(error);
    })
}

 const handleClick = async() =>{
    sendFile();
    uploadZip();
 }

  return (
    <>
      <ButtonGroup>
      <Button color="primary" wideMobile >
        <label  class="custom-file-upload">
            <input type="file" style={{display:'none'}}  name="file" id="upload-file" multiple ref={filesElement} />
            Upload  de arquivos
        </label>
     </Button>
      <Button color="primary" wideMobile  onClick={handleClick}>
        converter
     </Button>
    </ButtonGroup>
    </>

  );
}

Form.propTypes = propTypes;
Form.defaultProps = defaultProps;

export default Form;
