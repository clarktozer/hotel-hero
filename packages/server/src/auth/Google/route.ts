import { Router } from "express";
import passport from "passport";

const router = Router();

router.get(
    "/auth/google",
    passport.authenticate("google", { scope: ["profile", "email"] })
);

router.get(
    "/auth/google/callback",
    passport.authenticate("google", {
        failureRedirect: "/api",
        successRedirect: "/api"
    })
);

export { router as googleStrategyRoutes };