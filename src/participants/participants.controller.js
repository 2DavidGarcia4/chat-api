const Participants = require('../models/participants.models')
const uuid = require("uuid");

const getAllParticipants = async (conversationId) => {
  const data = await Participants.findAll({
    where: {
      conversationId
    }
  })
  return data
}


const createParticipants = async (conversationId, userId) => {
  const data = await Participants.create({
    id: uuid.v4(),
    conversationId,
    userId
  })
  return data
}


module.exports = {
  getAllParticipants,
  createParticipants
}