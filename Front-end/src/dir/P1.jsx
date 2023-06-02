import React, {useEffect, useState} from 'react'
import {Link, useLocation} from 'react-router-dom'

function P1() {
    const location = useLocation()
    const [backendData, setBackendData] = useState('')
    useEffect(() => {
        fetch(`/dir/${location.pathname}`)
        .then(
            response => response.json()
        )
        .then(
            data => {
                setBackendData(data)
            }
        )
    }, [backendData])
    return (
        <div>
            <h1>Current Directory: "{backendData.names}"</h1>
            <p>❗ Add/Delete Folder is not allowed here.</p>
            {(typeof backendData.files === 'undefined') ? (
                <p>Loading Directory...</p>
            ): (
                backendData.files.map((file, i) => (
                <ul>
                    <li key={i}>
                        <Link to={file}>[{file}]</Link>
                    </li>
                </ul>
                ))
            )}
        </div>
    )
}

export default P1