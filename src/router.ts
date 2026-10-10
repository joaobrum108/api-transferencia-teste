import { Router } from "express";
import routerTransferencias from "./routers/router.transferencias"

const router = Router()

router.get("/api/v1" , routerTransferencias )

export default router;