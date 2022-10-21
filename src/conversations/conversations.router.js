const router = require("express").Router();
const passport = require("passport");
const conversationsServices = require("./conversations.services");
require("../middlewares/auth.middleware")(passport);

router
  .route("/")
  .get(conversationsServices.getAllConversations)
  .post(passport.authenticate("jwt", { session: false }));
conversationsServices.createConversation;

//? /api/v1/conversations/:id
router
  .route("/:id")
  .get(conversationsServices.getConversationById)
  .patch(
    passport.authenticate("jwt", { session: false }),
    conversationsServices.patchConversation
  )
  .delete(
    passport.authenticate("jwt", { session: false }),
    conversationsServices.deleteConversation
  );

module.exports = router;
