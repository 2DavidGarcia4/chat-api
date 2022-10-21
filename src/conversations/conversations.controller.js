const Conversations = require("../models/conversations.models");
const uuid = require("uuid");

const getAllConversations = async () => {
  const users = await Conversations.findAll();
  return users;
};

//title,  imageUrl, userId

const postConversation = async (data) => {
  const response = await Pokemons.create({
    id: uuid.v4(),
    title: data.title,
    imageUrl: data.imageUrl,
    userId: data.userId,
  });
  return response;
};

module.exports = {
  getAllConversations,
  postConversation,
};
