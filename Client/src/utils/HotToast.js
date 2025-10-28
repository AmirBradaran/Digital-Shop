import toast from "react-hot-toast";
const HotToast=(status,message)=>{
    toast[status](message, {
        duration: 4000,})
}
export default HotToast