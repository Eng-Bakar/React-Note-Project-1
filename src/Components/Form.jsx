function Form ({close}){
    
    return <div className="bg-[rgba(0,0,0,0.5)]   h-screen absolute w-full top-0 pt-10">

    <div className=" sm:ml-[350px] ml-[20px] mt-[50px] sm:mt-[30px] ">
        <form className="bg-white border-[2px]  rounded w-[350px] h-[350px] p-[20px]">
        <h1 className="text-orange-500 text-[25px] mt-[-20px] absolute  ml-[80px] font-bold "> Fill this form</h1>
        <i onClick={close} class="fa-solid fa-x  text-2xl hover:text-black mt-[-15px] ml-[300px] absolute text-orange-500"></i>
            <input className="w-[300px] border-solid mt-[20px] border-2 border-black rounded h-[30px] px-[10px]" type="text"placeholder="Enter title" />
            <br />
            <textarea className="mt-[10px] border-solid border-2 border-black rounded px-[10px]" cols={36} rows={8} ></textarea>
            <br />
            <button  className="bg-black text-white hover:bg-orange-500 hover:text-white w-[300px] font-semibold my-5 py-2 rounded"> Save </button>
        </form>
    </div>
    </div>  
    
}
export default Form