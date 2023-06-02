import React, {useEffect, useState} from 'react'
import {Link, useLocation} from 'react-router-dom'
import axios from 'axios'

function P5() {
    const location = useLocation()
    const [backendData, setBackendData] = useState('')
    const [dName, setDName] = useState('')
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
    const delFolder = (event) => {
        const tar = event
        axios.delete(`http://localhost:8080/dir${location.pathname}/delete/${tar}`)
        .then(() => console.log('Folder Deleted'))
        .catch(err => {
            console.log(err)
        })
        window.alert('Folder Deleted!')
    }
    const renameFolder = (event) => {
        const oldName = event
        const newName = window.prompt('Type New Name for Folder: ')
        if(newName != null) {
            axios.put(`http://localhost:8080/dir${location.pathname}/rename/${oldName}/${newName}`)
            .then(() => console.log('Folder Renamed'))
            .catch(err => {
                console.log(err)
            })
            window.alert('Folder Renamed!')
        } else {
            window.alert('Please Type Name for Folder!')
        }
    }
    const handleSubmit = (event) => {
        const dirname = dName
        if(dirname.length <= 0) {
            window.alert('Please Type Folder Name!')
        } else {
            axios.post(`http://localhost:8080/dir${location.pathname}/post`, {dirname})
            .then(() => console.log('Folder Created'))
            .catch(err => {
                console.log(err)
            })
            window.alert('Folder Created!')
            event.preventDefault()
        }
    }
    return (
        <div>
            <h1>Current Directory: "{backendData.names}"</h1>
            <p>✅ Add Folder is allowed here.</p>
            <form onSubmit={handleSubmit}>
                <input type="text" name="dirname" id="dirname" onChange={(e) => setDName(e.target.value)} placeholder='Directory Name' />
                <button type='submit'>➕ Add</button>
            </form>
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
                        <div>
                            <button className='yellow' name='renamebtn' value={file} onClick={(e) => renameFolder(e.target.value)}>📝 Rename</button>
                            <button className='red' name='delbtn' value={file} onClick={(e) => delFolder(e.target.value)}>❌ Delete</button>
                        </div>
                    </li>
                </ul>
                ))
            )}
        </div>
    )
}

export default P5