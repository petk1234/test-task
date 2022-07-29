import { useState } from "react";
function Textarea(props) {
  const [imgName, setImgName] = useState();
  const handleImgFile = (e) => {
    setImgName(e.target.files[0].name);
    props.onImgFile(e.target.files[0]);
  };
  return (
    <div>
      <input type="file" onChange={handleImgFile} name="title"></input>
      <textarea value={imgName}></textarea>
    </div>
  );
}
export default Textarea;
