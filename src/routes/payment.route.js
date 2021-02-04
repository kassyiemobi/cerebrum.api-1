const router = require("express").Router();
const PaymentCtrl = require("./../controllers/payment.controller");

router.post("/new", PaymentCtrl.create);
router.get("/callback", PaymentCtrl.callback);
router.get("/", PaymentCtrl.getAll);


// router.get("/:paymentId" ,PaymentCtrl.getOne);
// router.put("/:paymentId" ,PaymentCtrl.update);
// router.delete("/:paymentId" ,PaymentCtrl.delete);


module.exports = router