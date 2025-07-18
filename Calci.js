// import React from "react";
import { useState } from "react";
import { sin, cos, tan, unit } from 'mathjs'

function Calci() {
    const [input, setInput] = useState('');

    function handleclick(value) {
        return setInput(input + value);
    }
    // console.log(input);

    function handleremove() {
        setInput('');
    }
    function handlebackspace() {
        try {

            setInput(input.slice(0, -1));

        } catch (error) {
            alert(error = "please do not use rmv for removing result it only remove numbers when you write you calculation like 2+5 , 12+5 rather than use AC");
        }
    }

    function extractValue(input) {
        input = String(input);
        // console.log(input);

        // Check for sin, cos, tan, log patterns
        const sinMatch = input.match(/sin\(([^)]+)\)/);
        // console.log(sinMatch);
        // console.log(typeof(sinMatch));
        if (sinMatch) {
            // console.log([sinMatch[1, null, 'sin']]);
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
        const sqrtMatch = input.match(/sqrt\(([^)]+)\)/);
        if (sqrtMatch) {
            return [sqrtMatch[1], null, 'sqrt']
        }
        const cqrtMatch = input.match(/cqrt\(([^)]+)\)/);
        if (cqrtMatch) {
            return [cqrtMatch[1], null, 'cqrt']
        }

        // Handle leading negative number
        let d;
        if (input[0] === '-') {
            d = input.match(/-?\d+(\.\d+)?/g);
        } else {
            d = input.match(/\d+(\.\d+)?/g);
        }
        d = d ? d.map(Number) : [];
        console.log(d);

        let e = input.match(/(\+|\-|\*|\/|%|\^2|\^3|\sqrt|\cqrt)/g);

        let a = d ? d[0] : null;
        let c = d ? d[1] : null;
        let f = e ? e[0] : null;
        return [a, c, f];
    }

    const [a, c, f] = extractValue(input);
    // console.log(f);


    function handleEval(a, c, f) {

        let g = parseFloat(a);
        let h = parseFloat(c);


        if (f === "+") {
            let m = g + h;
            setInput(m);
        } else if (f === "-") {
            let n = g - h;
            setInput(n);
        } else if (f === "*") {
            let o = g * h;
            setInput(o);
        } else if (f === "/") {
            let p = g / h;
            setInput(p);
        } else if (f === "%") {
            let q = g * (1 / 100);
            setInput(q)
        } else if (f === '^2') {
            let r = g ** 2
            setInput(r);
        } else if (f === '^3') {
            let s = g ** 3
            setInput(s)
        } else if (f === 'sin') {
            let t = sin(unit(g, 'deg'));
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
        } else if (f === 'sqrt') {
            let t = g ** (1 / 2);
            setInput(t.toString());
        } else if (f === 'cqrt') {
            let t = g ** (1 / 3);
            setInput(t.toString());
        }
    }


    return (
        <div className='min-h-screen bg-slate-200 flex justify-center items-center p-2'>
            <div className='bg-slate-700 box-border w-full max-w-screen-md h-auto md:h-[38rem] md:w-[38rem] rounded-2xl p-4 md:p-12 border-4 shadow-2xl flex flex-col gap-y-6 md:gap-y-12'>
                <div>
                    <input className='border border-gray-400 rounded-lg px-4 py-3 text-xl md:text-2xl focus:outline-none focus:ring-2 focus:ring-blue-400 w-full bg-slate-100' type='text' id='input' value={input} readOnly></input>
                </div>
                <div className='grid grid-cols-4 gap-3 md:gap-5'>
                    {/* Numbers */}
                    <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded' onClick={() => handleclick('7')}>7</button>
                    <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded' onClick={() => handleclick('8')}>8</button>
                    <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded' onClick={() => handleclick('9')}>9</button>
                    <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded' onClick={() => handleclick('/')}>/</button>
                    <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded' onClick={() => handleclick('4')}>4</button>
                    <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded' onClick={() => handleclick('5')}>5</button>
                    <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded' onClick={() => handleclick('6')}>6</button>
                    <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded' onClick={() => handleclick('*')}>X</button>
                    <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded' onClick={() => handleclick('1')}>1</button>
                    <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded' onClick={() => handleclick('2')}>2</button>
                    <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded' onClick={() => handleclick('3')}>3</button>
                    <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded' onClick={() => handleclick('-')}>-</button>
                    <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded' onClick={() => handleclick('0')}>0</button>
                    <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded' onClick={() => handleclick('.')}>.</button>
                    <button className='bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded' onClick={() => handleEval(a, c, f)}>=</button>
                    <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded' onClick={() => handleclick('+')}>+</button>
                </div>
                <div className='grid grid-cols-4 gap-3 mt-4'>
                    {/* Scientific & Utility */}
                    <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded' onClick={() => handleclick('%')}>%</button>
                    <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded' onClick={() => handleclick('^2')}>x^2</button>
                    <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded' onClick={() => handleclick('^3')}>x^3</button>
                    <button className='bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded' onClick={() => handleremove()}>AC</button>
                    <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded' onClick={() => handleclick('sin(')}>sin(</button>
                    <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded' onClick={() => handleclick('cos(')}>cos(</button>
                    <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded' onClick={() => handleclick('tan(')}>tan(</button>
                    <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded' onClick={() => handleclick('log(')}>log10(</button>
                    <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded' onClick={() => handleclick('sqrt(')}>sqrt(</button>
                    <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded' onClick={() => handleclick('cqrt(')}>cbrt(</button>
                    <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded' onClick={() => handleclick(')')}>)</button>
                    <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded' onClick={() => handlebackspace('')}>rmv</button>
                </div>
            </div>
        </div>
    )
}

export default Calci;