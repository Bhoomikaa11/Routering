import React from 'react'
import { useState ,  useEffect } from 'react'
 //import { useLoaderData } from 'react-router-dom'

function Github() {
  //  const data1 = useLoaderData();
  //  console.log(data1)
    const [data1, setData] = useState([])
    useEffect(() => {
     fetch('https://api.github.com/users/Bhoomikaa11')
     .then(response => response.json())
     .then(data => {
        console.log(data);
        setData(data)
     })
    }, [])
    
  return (
    <div className='text-center m-4 bg-gray-600 text-white p-4 text-3xl'>Github followers: {data1.followers}
    <img src={data1.avatar_url} alt="Git picture" width={250} />
    </div>
  )
}

export default Github

// export  const githubInfoLoader = async () => {
//      const response = await fetch('https://api.github.com/users/Bhoomikaa11')
//       return response.json();
// }