import React, {useEffect, useState} from 'react'
import {Link, useLocation} from 'react-router-dom'

function P2() {
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
            <ul>
                <li>
                    <Link to={'../'}>[..]</Link>
                </li>
            </ul>
            {(typeof backendData.files === 'undefined') ? (
                <p>Loading Directory... or Might it may be a file.</p>
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

export default P2