const db = require("../models")
const Mahasiswa = db.mahasiswa

exports.create = (req, res) => {

    req.body.tanggal_lahir = new Date(req.body.tanggal_lahir)

    Mahasiswa.create(req.body)
    .then(() => res.send({message: "Data insert success !"}))
    .catch(err => res.status(500).send({message: err.message}))
}

exports.findAll = (req, res) => {
    Mahasiswa.find()
    .then(data => res.send(data))
    .catch(err => res.status(500).send({message: err.message}))
}

exports.show = (req, res) => {
    const id = req.params.id;

    Mahasiswa.findById(id)
    .then(data => res.send(data))
    .catch(err => res.status(500).send({message: err.message}))
}

exports.update = (req, res) => {
    const id = req.params.id;

    req.body.tanggal_lahir = new Date(req.body.tanggal_lahir)

    Mahasiswa.findByIdAndUpdate(id, req.body, {useFindAndModify: false})
    .then(data => {
        if (!data) {
            res.status(404).send({message: "failed to update data"})
        }
        res.send({message: "data updated"})
    })
    .catch(err => res.status(500).send({message: err.message}))
}

exports.delete = (req, res) => {
    const id = req.params.id;

    Mahasiswa.findByIdAndDelete(id)
        .then(data => {
            if (!data) {
                res.status(404).send({message: "failed to delete data"})
            }

            res.send({message: "data deleted"})
        })
        .catch(err => res.status(500).send({message: err.message}))
}