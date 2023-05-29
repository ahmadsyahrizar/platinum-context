import Dropzone from "react-dropzone-uploader";
import ReactPlayer from "react-player";

const Uploader = () => {
  const handleUploadParams = ({ meta }) => {
    return {
      url: "https://httpbin.org/post",
    };
  };

  const handleChangeStatus = ({ meta, file }, status) => {
    console.log("S", status, meta, file);
  };

  const handleOnSubmit = (files, allFiles) => {
    console.log(files.map((f) => f.meta));
    allFiles.forEach((f) => f.remove());
  };

  //   if(statusUpload) return <div>{statusUpload}</div>

  return (
    <div style={{ margin: "5em" }}>
      <Dropzone
        getUploadParams={handleUploadParams}
        onChangeStatus={handleChangeStatus}
        onSubmit={handleOnSubmit}
        accept="image/*,audio/*,video/*"
      />
      <ReactPlayer 
                width={500} height={300}
       url="https://www.youtube.com/watch?v=ysz5S6PUM-U" />
    </div>
  );
};

export default Uploader;
