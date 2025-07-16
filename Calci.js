// import React from "react";
import { useState } from "react";
import {sin , cos , tan ,unit} from 'mathjs'

function Calci() {
    const  [input ,setInput ] = useState('');

    function handleclick(value) {
       return setInput(input + value);
    }

    function handleremove() {
        setInput('');
    }
    
    
    function extractValue(input) {
        input = String(input);

        // Check for sin, cos, tan, log patterns
        const sinMatch = input.match(/sin\(([^)]+)\)/);
        if (sinMatch) {
            return [sinMatch[1], null, 'sin'];
        }
        const cosMatch = input.match(/cos\(([^)]+)\)/);
        if (cosMatch) {
            return [cosMatch[1], null, 'cos'];
        }
        const tanMatch = input.match(/tan\(([^)]+)\)/);
        if (tanMatch) {
            return [tanMatch[1], null, 'tan'];
        }
        const logMatch = input.match(/log\(([^)]+)\)/);
        if (logMatch) {
            return [logMatch[1], null, 'log'];
        }

        let d = input.match(/-?\d+(\.\d+)?/g);
        d = d ? d.map(Number) : [];

        let e = input.match(/(\+|\-|\*|\/|%|\^2|\^3)/g);

        let a = d ? d[0] : null;
        let c = d ? d[1] : null;
        let f = e ? e[0] : null;
        return [a , c, f];
    }

    const[a, c, f] = extractValue(input);

    function handleEval(a,c,f) {

        let g = parseFloat(a);
        let h = parseFloat(c);


        if (f === "+") {
            let m = g+h;
            setInput(m);
        } else if( f === "-"){
            let n = g-h;
            setInput(n);
        } else if( f ==="*"){
            let o = g*h;
            setInput(o);
        } else if( f === "/"){
            let p = g/h; 
            setInput(p);
       } else if(f === "%"){
           let q = g*(1/100);
           setInput(q) 
       } else if( f === '^2'){
           let r = g**2
           setInput(r);
       } else if ( f === '^3'){
           let s = g**3
           setInput(s)
       } else if ( f === 'sin'){
           let t = sin(unit(g ,'deg'));
           setInput(t.toString());
       } else if (f === 'cos') {
           let t = cos(unit(g, 'deg'));
           setInput(t.toString());
       } else if (f === 'tan') {
           let t = tan(unit(g, 'deg'));
           setInput(t.toString());
       } else if (f === 'log') {
           let t = Math.log10(g);
           setInput(t.toString());
       }
    }


    return (
        <div className='min-h-screen bg-slate-200 flex justify-center items-center p-2'>
            <div className='bg-slate-700 box-border w-full max-w-screen-md h-auto md:h-[38rem] md:w-[38rem] rounded-2xl p-4 md:p-12 border-4 shadow-2xl flex flex-col gap-y-6 md:gap-y-12'>
                <div>
                    <input className='border border-gray-400 rounded-lg px-4 py-3 text-xl md:text-2xl focus:outline-none focus:ring-2 focus:ring-blue-400 w-full bg-slate-100' type='text' id='input' value={input} readOnly></input>
                </div>
                <div className='grid grid-cols-2 gap-4 md:gap-8'>
                    <div className='grid grid-cols-3 gap-2 md:gap-4'>
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
                        <button type='button' className='bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded'  onClick={()=>handleremove()}>AC</button>
                        <button type='button' className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'  onClick={()=>handleEval(a,c,f)}>=</button>
                        <button type='button' className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'  onClick={()=>handleclick('.')}>.</button>
                        <button type='button' className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'  onClick={()=>handleclick('0')}>0</button>
                        <button type='button' className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'  onClick={()=>handleclick('%')}>%</button>                        
                        <button type='button' className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'  onClick={()=>handleclick('^2')}>x^2</button>                       
                        <button type='button' className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'  onClick={()=>handleclick('^3')}>x^3</button>                       
                        <button type='button' className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'  onClick={()=>handleclick('sin(')}>sin(</button>                       
                        <button type='button' className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'  onClick={()=>handleclick('cos(')}>cos(</button>                       
                        <button type='button' className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'  onClick={()=>handleclick('tan(')}>tan(</button>                       
                        <button type='button' className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'  onClick={()=>handleclick('log(')}>log10(</button>                       
                        <button type='button' className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'  onClick={()=>handleclick(')')}>)</button>                       
                    </div>
                </div>
            </div>
        </div>)
}

export default Calci;