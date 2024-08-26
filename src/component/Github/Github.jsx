import React, { useEffect, useState } from 'react';

function Github() {

    const [data, setData] = useState([])


    useEffect(() => {

        fetch('https://api.github.com/users/ravikaransinghbaghel')
            .then((res) => res.json())
            .then((data) => {
                console.log(data);
                setData(data)
            })
    }, []);

    return (
        <>
            <div className='bg-gray-600 p-4 grid sm:grid-cols-2 items-center rounded-xl grid-cols-1 grid-rows-2'>
                <img className='rounded-lg' src={data.avatar_url} alt="git_img" width={300} />
                <div className=" font-sans p-4 text-white  text-3xl ">
                    <h1 className="">Github-name: {data.name}</h1>
                    <a href={data.html_url} rel="noopener noreferrer">
                        <h1 className="text-red-800 text-xl">visit the github</h1>
                    </a>
                    <h1>github id : {data.id}</h1>
                    <h1>github login : {data.login} </h1>
                </div>
            </div>
        </>
    );
}

export default Github;
