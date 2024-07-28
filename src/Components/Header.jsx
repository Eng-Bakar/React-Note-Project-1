import { useState } from "react"
import Form from "./Form"

function Header (){
    const [isOpen, setIsOpen] = useState(false)
    const handleOpen = () => {
        setIsOpen(true)
    }
    const handleClose = () => {
        setIsOpen(false)
    }
    return <div>
    <div>
        <div className="bg-orange-500 w-full h-[60px] sm:h-[50px] flex justify-between px-[30px]">
            <h1 className="font-bold mt-[10px] sm:mt-0  text-[30px]"> Nooty</h1>
            <button onClick={handleOpen} className="w-[100px] mt-[15px] hover:bg-black hover:text-white h-[35px] bg-white rounded-[10px] sm:mt-[9px] font-semibold"> Add note</button>
        </div>
    </div>
    {
        isOpen == true ? <Form close={handleClose} /> : " "
    }
    </div>
}
export default Header