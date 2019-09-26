const { Kelas } = require("../models");
const Op = require("sequelize").Op;


exports.viewKelas = async (req, res) => {
  try {
    const userLogin = req.session.user

    const kelas = await Kelas.findAll()
    res.render('admin/kelas/view_kelas', {
      title: "E-Raport | Kelas",
      user: userLogin,
      kelas: kelas,
    })

  } catch (err) {
    throw err
  }
}

exports.actionCreate = async (req, res) => {
  const { tingkat, nama } = req.body
  await Kelas.create({ tingkat, nama })
  res.redirect("/admin/kelas");
}
