import React from "react";
import { useState } from "react";

function Calci() {
    const  [input ,setInput ] = useState('');

    function handleclick(value) {
       return setInput(input + value);
    }

    function handleremove() {
        setInput('');
    }

    return (
        <div className='min-h-screen bg-slate-200 flex justify-center items-center'>
            <div className='bg-red-200 box-border h-[32rem] w-96 p-8 border-4 flex flex-col gap-y-8'>
                <div className=''>
                    <input className='border border-gray-400 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400 w-full' type='text' id='input' value={input}></input>
                </div>
                <div className='grid grid-cols-2 gap-6'>
                    <div className='grid grid-cols-3 gap-2'>
                        <button type='button' className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'  onClick={()=>handleclick('1')}>1</button>
                        <button type='button' className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'  onClick={()=>handleclick('2')}>2</button>
                        <button type='button' className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'  onClick={()=>handleclick('3')}>3</button>
                        <button type='button' className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'  onClick={()=>handleclick('4')}>4</button>
                        <button type='button' className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'  onClick={()=>handleclick('5')}>5</button>
                        <button type='button' className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'  onClick={()=>handleclick('6')}>6</button>
                        <button type='button' className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'  onClick={()=>handleclick('7')}>7</button>
                        <button type='button' className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'  onClick={()=>handleclick('8')}>8</button>
                        <button type='button' className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'  onClick={()=>handleclick('9')}>9</button>
                        {/* <button type='button' className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'>0</button> */}
                    </div>
                    <div className='grid grid-cols-3 gap-2'>
                        <button type='button' className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'  onClick={()=>handleclick('+')}>+</button>
                        <button type='button' className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'  onClick={()=>handleclick('-')}>-</button>
                        <button type='button' className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'  onClick={()=>handleclick('X')}>X</button>
                        <button type='button' className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'  onClick={()=>handleclick('/')}>/</button>
                        <button type='button' className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded' onClick={()=> handleremove()}>AC</button>
                        <button type='button' className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'>=</button>
                        <button type='button' className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'  onClick={()=>handleclick('.')}>.</button>
                        <button type='button' className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'  onClick={()=>handleclick('0')}>0</button>
                        <button type='button' className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'  onClick={()=>handleclick('%')}>%</button>
                    </div>
                </div>
            </div>
        </div>)
}

export default Calci;