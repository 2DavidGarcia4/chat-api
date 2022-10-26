const participantsControllers = require('../participants/participants.controller')

const getAllParticipants = (req, res) => {
  const id = req.params.id 

  participantsControllers.getAllParticipants(id)
    .then(data => {
      res.status(200).json(data)
    })
    .catch(err => {
      res.status().json({message: err.message})
    })
}

// const postParticipants = (req, res) => {
//   const userID = req.user.id
//   const {} = req.body

//   participantsControllers.postParticipants
//     .then( => {

//     })
//     .catch( => {

//     })

// }


module.exports = {
  getAllParticipants,
}
