const Conversations = require("../models/conversations.models");
const uuid = require("uuid");

const getAllConversations = async () => {
  const users = await Conversations.findAll();
  return users;
};

const getConversationById = async (id) => {
  const data = await Conversations.findOne({
    where: {
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

const deleteConversation = async (id) => {
  const result = await Conversations.update({
    where: {
      id,
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
