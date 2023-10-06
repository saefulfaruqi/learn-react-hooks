import React from 'react';

import React, { useState, useEffect } from 'react';

const LearnUseEffect = () => {
    const [count, setCount] = useState(0);
 //useEffect adalah hooks yang digunakan untuk menggantikan lifecycle method
    //useEffect akan menerima 2 parameter
    //parameter pertama adalah function yang akan dijalankan
    //parameter kedua adalah array yang berisi dependency
    //useEffect akan dijalankan setiap ada perubahan pada dependency
    //jika array dependency kosong, useEffect hanya akan dijalankan sekali
    // ini adalah contoh penggunaan useEffect untuk melakukan console.log ketika component pertama kali dibuka
    // dan ketika count berubah
    
    useEffect(() => {
        console.log(`The count is ${count}`);
    }, [count]);

    const handleIncrement = () => {
        setCount(count + 1);
    };

    return (
        <div>
            <h1>Count: {count}</h1>
            <button onClick={handleIncrement}>Increment</button>
        </div>
    );
};

export default LearnUseEffect;
