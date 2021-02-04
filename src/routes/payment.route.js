const router = require("express").Router();
const PaymentCtrl = require("./../controllers/payment.controller");
const auth = require("./../middlewares/auth.middleware");
const { role } = require("./../config");

router.post("/new", PaymentCtrl.create);
router.post("/add-payment-type", auth(role.ADMIN), PaymentCtrl.addPaymentType);
router.get("/callback", PaymentCtrl.callback);
router.get("/", PaymentCtrl.getAll);


// router.get("/:paymentId" ,PaymentCtrl.getOne);
// router.put("/:paymentId" ,PaymentCtrl.update);
// router.delete("/:paymentId" ,PaymentCtrl.delete);


module.exports = router