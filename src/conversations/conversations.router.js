const router = require("express").Router();
const passport = require("passport");

const conversationsServices = require("./conversations.services");
require("../middlewares/auth.middleware")(passport);

router
  .route("/")
  .get(conversationsServices.getAllConversations)
  .post(passport.authenticate("jwt", { session: false }));
conversationsServices.createConversation;

module.exports = router;
