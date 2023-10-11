import _ from "lodash"

const anakKost = [
  {
    nama: "damar jati",
    umur: 25
  },
  {
    nama: "ardan dikri",
    umur: 27
  },
  {
    nama: "nabilah jati",
    umur: 52
  }
]

const cantik = _.find(anakKost, { umur: 52 })

console.log(cantik)