const Conversations = require("../models/conversations.models");
const uuid = require("uuid");

const getAllConversations = async (userId) => {
  const users = await Conversations.findAll({ where: { userId } });
  return users;
};

const getConversationById = async (userId, id) => {
  const data = await Conversations.findOne({
    where: {
      userId,
      id,
    },
  });
  return data;
};

//title,  imageUrl, userId

const postConversation = async (data) => {
  const response = await Conversations.create({
    id: uuid.v4(),
    title: data.title,
    imageUrl: data.imageUrl,
    userId: data.userId,
  });
  return response;
};

const updateConversation = async (id, data) => {
  const result = await Conversations.update(data, {
    where: {
      id,
    },
  });
  return result;
};

const deleteConversation = async (userId, id) => {
  const result = await Conversations.destroy({
    where: {
      id,
      userId,
    },
  });
  return result;
};

module.exports = {
  getAllConversations,
  postConversation,
  getConversationById,
  updateConversation,
  deleteConversation,
};
