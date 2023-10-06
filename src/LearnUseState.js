const { useState } = require("react");

const LearnUseState = () => {
    // belajar menggunakan use state
    // useState adalah hooks yang digunakan untuk mengubah state pada function component
    // useState akan mengembalikan array yang berisi 2 element
    // element pertama adalah state yang kita buat
    // element kedua adalah function yang digunakan untuk mengubah state
    // useState akan menerima parameter awal state
    // setiap perubahan state akan menyebabkan component di render ulang
    const [count, setCount] = useState(0);

    const [name, setName] = useState('John Doe');

    const [dataMahasiswa, setDataMahasiswa] = useState({
        nama: "ivan",
        umur: 20,
        alamat: "jakarta",
        hobi: "makan",
    });

    const ubahDataDiri = (e) => {
        setDataMahasiswa((_dataDiri) => {
            return { ...dataMahasiswa, [e.target.name]: e.target.value };
        });
    };

    const handleClick = () => {
        setCount(count + 1);
    };

    return (
        <div style={{ margin: '1rem' }}>
            <>
                {JSON.stringify(dataMahasiswa)}
                <br />
                <input placeholder="nama" name="nama" onChange={ubahDataDiri} />
                <br />
                <input placeholder="umur" type="number" name="umur" onChange={ubahDataDiri} />
                <br />
                <input placeholder="alamat" name="alamat" onChange={ubahDataDiri} />
                <br />
                <input placeholder="hobi" name="hobi" onChange={ubahDataDiri} />
            </>
            <p>{name}</p>
            <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
            <br />
            <p>You clicked {count} times</p>
            <button onClick={handleClick}>Click me</button>
        </div>
    );
};

export default LearnUseState;