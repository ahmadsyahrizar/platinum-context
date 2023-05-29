import ModalImage from "react-modal-image";

const smallImage = "https://aautio.github.io/react-modal-image/example_img_small.jpg"
const mdImage =  "https://aautio.github.io/react-modal-image/example_img_medium.jpg"

const LighthBox = () => {
    return (
        <ModalImage
            small={smallImage}
            medium={mdImage}
            alt="Lightbox"
            hideDownload
            hideZoom
            showRotate
        />
    )
}


export default LighthBox;