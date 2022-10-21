const conversationsControllers = require("./conversations.controller");

const getAllConversations = (req, res) => {
  conversationsControllers
    .getAllConversations()
    .then((data) => {
      res.status(200).json(data);
    })
    .catch((err) => res.status(400).json({ message: err.message }));
};

const createConversation = (req, res) => {
  const userId = req.user.id;
  const { title, imageUrl } = req.body;
  if (title && imageUrl) {
    conversationsControllers
      .createConversation({
        title,
        imageUrl,
        userId,
      })
      .then((data) => res.status(201).json(data))
      .catch((err) => res.status(400).json(err.message));
  } else {
    res.status(400).json({
      message: "Missing Data",
      fields: {
        title: "string",
        imgUrl: "string",
      },
    });
  }
};

module.exports = {
  getAllConversations,
  createConversation,
};
