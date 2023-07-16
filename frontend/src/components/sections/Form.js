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

    const resp = await fetch(`http://localhost:5001/download`, {
      method: 'GET',
    });

    const data = await res.json();
    setInterval(console.log(data));

  };

  return (
    <>
      <ButtonGroup>
      <Button color="primary" wideMobile  onClick={sendFile}>
        Converter arquivos
        </Button>
        <input type="file" style={{display:'none'}}  name="file" id="upload-file" multiple ref={filesElement} />
    </ButtonGroup>
    </>

  );
}

Form.propTypes = propTypes;
Form.defaultProps = defaultProps;

export default Form;
