import Image from "./reload-icon-16891.png"
 
export default function Refresh(){
    function reloadAndRotate(){
        window.location.reload();
        document.getElementById("refresh_img").classList.add("rotate_element")
    }
    return (
        <img src={Image} alt="Refresh" className="refresh-img" onClick={reloadAndRotate} id="refresh_img"/>
    )
}