import React, { useEffect } from 'react'
import { useState } from 'react'
import DataReturn from './DataReturn'

const FetchDat = () => {
    const [saveData, setSaveData] = useState(null)

    useEffect(() => {

        fetch("https://jsonplaceholder.typicode.com/users")
            .then((res) => res.json())
            .then((data) => setSaveData(data))
    }, [])
    return (
        <div>
            <div className='card'>
                {saveData &&
                    saveData.map((data) => {
                        return <DataReturn  name={data.name} email={data.email}  idname={data.id} />
                    })
                }
            </div>
        </div>
    )
}

export default FetchDat
