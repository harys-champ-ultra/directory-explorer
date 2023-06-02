const express = require('express')
const app = express()
const port = 8080
const router = express.Router()
const fs = require('fs')
const parser = require('body-parser')
const cors = require('cors')
const logger = require('morgan')

app.use(parser.urlencoded({ extended: false }))
app.use(parser.json())

// app.use(cors())
app.use(cors({ origin: 'http://localhost:3000', credentials: true }))
app.use(logger('dev'))
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

app.use((req, res, next) => {
    res.header({'Access-Control-Allow-Origin': '*'})
    next()
}) 

router.use((req, res, next) => {
    console.log('Time: ', Date.now())
    next()
})

router.get('/dir', (req, res) => {
    process.chdir('C:/')
    fs.readdir(process.cwd(), (err, files) => {
        if (err) {
            throw err
        } else {
            console.log(files)
            res.json({ "names": process.cwd(), "files": files })
        }
    })
})

router.get('/dir/:id1', (req, res) => {
    const {id1} = req.params
    process.chdir('C:/' + id1)
    fs.readdir(process.cwd(), (err, files) => {
        if (err) {
            throw err
        } else {
            console.log(files)
            res.json({ "names": process.cwd(), "files": files })
        }
    })
})

router.get('/dir/:id1/:id2', (req, res) => {
    const {id1} = req.params
    const {id2} = req.params
    process.chdir('C:/' + id1 + "/" + id2)
    fs.readdir(process.cwd(), (err, files) => {
        if (err) {
            throw err
        } else {
            console.log(files)
            res.json({ "names": process.cwd(), "files": files })
        }
    })
})

router.post('/dir/:id1/:id2/post', (req, res) => {
    const {id1} = req.params
    const {id2} = req.params
    const dirname = req.body.dirname
    if(!(dirname.length <= 0)) {
        process.chdir('C:/' + id1 + "/" + id2)
        fs.access(dirname, (err) => {
            if(err) {
                fs.mkdir(dirname, (err) => {
                    if(err) {
                        throw err
                    } else {
                        console.log('Done')
                    }
                })
            } else {
                console.log('Already')
            }
        })
    }
})

router.delete('/dir/:id1/:id2/delete/:delbtn', (req, res) => {
    const {id1} = req.params
    const {id2} = req.params
    const {delbtn} = req.params
    process.chdir('C:/' + id1 + "/" + id2)
    fs.rmdirSync(delbtn, { recursive: true }, (err) => {
        if(err) {
            throw err
        } else {
            console.log('Delete Done')
        }
    })
})

router.put('/dir/:id1/:id2/rename/:oldName/:newName', (req, res) => {
    const {id1} = req.params
    const {id2} = req.params
    const {oldName} = req.params
    const {newName} = req.params
    process.chdir('C:/' + id1 + "/" + id2)
    fs.rename(oldName, newName, (err) => {
        if(err) {
            throw err
        } else {
            console.log('Rename Done')
        }
    })
})

router.get('/dir/:id1/:id2/:id3', (req, res) => {
    const {id1} = req.params
    const {id2} = req.params
    const {id3} = req.params
    process.chdir('C:/' + id1 + "/" + id2 + "/" + id3)
    fs.readdir(process.cwd(), (err, files) => {
        if (err) {
            throw err
        } else {
            console.log(files)
            res.json({ "names": process.cwd(), "files": files })
        }
    })
})

router.post('/dir/:id1/:id2/:id3/post', (req, res) => {
    const {id1} = req.params
    const {id2} = req.params
    const {id3} = req.params
    const dirname = req.body.dirname
    if(!(dirname.length <= 0)) {
        process.chdir('C:/' + id1 + "/" + id2 + "/" + id3)
        fs.access(dirname, (err) => {
            if(err) {
                fs.mkdir(dirname, (err) => {
                    if(err) {
                        throw err
                    } else {
                        console.log('Done')
                    }
                })
            } else {
                console.log('Already')
            }
        })
    }
})

router.delete('/dir/:id1/:id2/:id3/delete/:delbtn', (req, res) => {
    const {id1} = req.params
    const {id2} = req.params
    const {id3} = req.params
    const {delbtn} = req.params
    process.chdir('C:/' + id1 + "/" + id2 + "/" + id3)
    fs.rmdirSync(delbtn, { recursive: true }, (err) => {
        if(err) {
            throw err
        } else {
            console.log('Delete Done')
        }
    })
})

router.put('/dir/:id1/:id2/:id3/rename/:oldName/:newName', (req, res) => {
    const {id1} = req.params
    const {id2} = req.params
    const {id3} = req.params
    const {oldName} = req.params
    const {newName} = req.params
    process.chdir('C:/' + id1 + "/" + id2 + "/" + id3)
    fs.rename(oldName, newName, (err) => {
        if(err) {
            throw err
        } else {
            console.log('Rename Done')
        }
    })
})

router.get('/dir/:id1/:id2/:id3/:id4', (req, res) => {
    const {id1} = req.params
    const {id2} = req.params
    const {id3} = req.params
    const {id4} = req.params
    process.chdir('C:/' + id1 + "/" + id2 + "/" + id3 + "/" + id4)
    fs.readdir(process.cwd(), (err, files) => {
        if (err) {
            throw err
        } else {
            console.log(files)
            res.json({ "names": process.cwd(), "files": files })
        }
    })
})

router.post('/dir/:id1/:id2/:id3/:id4/post', (req, res) => {
    const {id1} = req.params
    const {id2} = req.params
    const {id3} = req.params
    const {id4} = req.params
    const dirname = req.body.dirname
    if(!(dirname.length <= 0)) {
        process.chdir('C:/' + id1 + "/" + id2 + "/" + id3 + "/" + id4)
        fs.access(dirname, (err) => {
            if(err) {
                fs.mkdir(dirname, (err) => {
                    if(err) {
                        throw err
                    } else {
                        console.log('Done')
                    }
                })
            } else {
                console.log('Already')
            }
        })
    }
})

router.delete('/dir/:id1/:id2/:id3/:id4/delete/:delbtn', (req, res) => {
    const {id1} = req.params
    const {id2} = req.params
    const {id3} = req.params
    const {id4} = req.params
    const {delbtn} = req.params
    process.chdir('C:/' + id1 + "/" + id2 + "/" + id3 + "/" + id4)
    fs.rmdirSync(delbtn, { recursive: true }, (err) => {
        if(err) {
            throw err
        } else {
            console.log('Delete Done')
        }
    })
})

router.put('/dir/:id1/:id2/:id3/:id4/rename/:oldName/:newName', (req, res) => {
    const {id1} = req.params
    const {id2} = req.params
    const {id3} = req.params
    const {id4} = req.params
    const {oldName} = req.params
    const {newName} = req.params
    process.chdir('C:/' + id1 + "/" + id2 + "/" + id3 + "/" + id4)
    fs.rename(oldName, newName, (err) => {
        if(err) {
            throw err
        } else {
            console.log('Rename Done')
        }
    })
})

router.get('/dir/:id1/:id2/:id3/:id4/:id5', (req, res) => {
    const {id1} = req.params
    const {id2} = req.params
    const {id3} = req.params
    const {id4} = req.params
    const {id5} = req.params
    process.chdir('C:/' + id1 + "/" + id2 + "/" + id3 + "/" + id4 + "/" + id5)
    fs.readdir(process.cwd(), (err, files) => {
        if (err) {
            throw err
        } else {
            console.log(files)
            res.json({ "names": process.cwd(), "files": files })
        }
    })
})

router.post('/dir/:id1/:id2/:id3/:id4/:id5/post', (req, res) => {
    const {id1} = req.params
    const {id2} = req.params
    const {id3} = req.params
    const {id4} = req.params
    const {id5} = req.params
    const dirname = req.body.dirname
    if(!(dirname.length <= 0)) {
        process.chdir('C:/' + id1 + "/" + id2 + "/" + id3 + "/" + id4 + "/" + id5)
        fs.access(dirname, (err) => {
            if(err) {
                fs.mkdir(dirname, (err) => {
                    if(err) {
                        throw err
                    } else {
                        console.log('Done')
                    }
                })
            } else {
                console.log('Already')
            }
        })
    }
})

router.delete('/dir/:id1/:id2/:id3/:id4/:id5/delete/:delbtn', (req, res) => {
    const {id1} = req.params
    const {id2} = req.params
    const {id3} = req.params
    const {id4} = req.params
    const {id5} = req.params
    const {delbtn} = req.params
    process.chdir('C:/' + id1 + "/" + id2 + "/" + id3 + "/" + id4 + "/" + id5)
    fs.rmdirSync(delbtn, { recursive: true }, (err) => {
        if(err) {
            throw err
        } else {
            console.log('Delete Done')
        }
    })
})

router.put('/dir/:id1/:id2/:id3/:id4/:id5/rename/:oldName/:newName', (req, res) => {
    const {id1} = req.params
    const {id2} = req.params
    const {id3} = req.params
    const {id4} = req.params
    const {id5} = req.params
    const {oldName} = req.params
    const {newName} = req.params
    process.chdir('C:/' + id1 + "/" + id2 + "/" + id3 + "/" + id4 + "/" + id5)
    fs.rename(oldName, newName, (err) => {
        if(err) {
            throw err
        } else {
            console.log('Rename Done')
        }
    })
})

router.get('/dir/:id1/:id2/:id3/:id4/:id5/:id6', (req, res) => {
    const {id1} = req.params
    const {id2} = req.params
    const {id3} = req.params
    const {id4} = req.params
    const {id5} = req.params
    const {id6} = req.params
    process.chdir('C:/' + id1 + "/" + id2 + "/" + id3 + "/" + id4 + "/" + id5 + "/" + id6)
    fs.readdir(process.cwd(), (err, files) => {
        if (err) {
            throw err
        } else {
            console.log(files)
            res.json({ "names": process.cwd(), "files": files })
        }
    })
})

router.post('/dir/:id1/:id2/:id3/:id4/:id5/:id6/post', (req, res) => {
    const {id1} = req.params
    const {id2} = req.params
    const {id3} = req.params
    const {id4} = req.params
    const {id5} = req.params
    const {id6} = req.params
    const dirname = req.body.dirname
    if(!(dirname.length <= 0)) {
        process.chdir('C:/' + id1 + "/" + id2 + "/" + id3 + "/" + id4 + "/" + id5 + "/" + id6)
        fs.access(dirname, (err) => {
            if(err) {
                fs.mkdir(dirname, (err) => {
                    if(err) {
                        throw err
                    } else {
                        console.log('Done')
                    }
                })
            } else {
                console.log('Already')
            }
        })
    }
})

router.delete('/dir/:id1/:id2/:id3/:id4/:id5/:id6/delete/:delbtn', (req, res) => {
    const {id1} = req.params
    const {id2} = req.params
    const {id3} = req.params
    const {id4} = req.params
    const {id5} = req.params
    const {id6} = req.params
    const {delbtn} = req.params
    process.chdir('C:/' + id1 + "/" + id2 + "/" + id3 + "/" + id4 + "/" + id5 + "/" + id6)
    fs.rmdirSync(delbtn, { recursive: true }, (err) => {
        if(err) {
            throw err
        } else {
            console.log('Delete Done')
        }
    })
})

router.put('/dir/:id1/:id2/:id3/:id4/:id5/:id6/rename/:oldName/:newName', (req, res) => {
    const {id1} = req.params
    const {id2} = req.params
    const {id3} = req.params
    const {id4} = req.params
    const {id5} = req.params
    const {id6} = req.params
    const {oldName} = req.params
    const {newName} = req.params
    process.chdir('C:/' + id1 + "/" + id2 + "/" + id3 + "/" + id4 + "/" + id5 + "/" + id6)
    fs.rename(oldName, newName, (err) => {
        if(err) {
            throw err
        } else {
            console.log('Rename Done')
        }
    })
})

app.use(router)

app.listen(port, () => {
    console.log(`Standard File Explorer listening on port http://localhost:${port}`)
})
