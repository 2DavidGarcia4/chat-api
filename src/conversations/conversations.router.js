const router = require("express").Router();
const passport = require("passport");
const conversationsServices = require("./conversations.services");
require("../middlewares/auth.middleware")(passport);

router
  .route("/")
  .get(
    passport.authenticate("jwt", { session: false }),
    conversationsServices.getAllConversations
  )
  .post(
    passport.authenticate("jwt", { session: false }),
    conversationsServices.createConversation
  );

//? /api/v1/conversations/:id
router
  .route("/:id")
  .get(
    passport.authenticate("jwt", { session: false }),
    conversationsServices.getConversationById
  )
  .patch(
    passport.authenticate("jwt", { session: false }),
    conversationsServices.patchConversation
  )
  .delete(
    passport.authenticate("jwt", { session: false }),
    conversationsServices.deleteConversation
  );

router
  .route('/:id/participants')
  .get()
  .post()

router
  .route('/:id/participants/:participantId')
  .get(
    passport.authenticate("jwt", { session: false }),
    conversationsServices.getParticipantById
  )
  .post(
    passport.authenticate("jwt", { session: false }),
    conversationsServices.deleteParticipant
  )

module.exports = router;
