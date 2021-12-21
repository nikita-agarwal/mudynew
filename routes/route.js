const express = require('express');
const Customer = require('../models/customer');
const Invoice = require('../models/invoice');
const Payment = require('../models/payment');
const Part = require('../models/part');
const Submersible = require('../models/submersibles');
const State = require('../models/state');
const MaxRateChange = require('../models/maxRateChange');
const router = express.Router();

// Retrievig Data
router.get('/customers', (req, res, next) => {
    Customer.find(function (err, customers) {
        res.send(customers);
    })
});
router.get('/invoices', (req, res, next) => {
    Invoice.find(function (err, invoices) {
        res.send(invoices);
    })
});
router.get('/parts', (req, res, next) => {
    Part.find(function (err, parts) {
        res.send(parts);
    })
});
router.get('/submersibles', (req, res, next) => {
    Submersible.find(function (err, submersibles) {
        res.send(submersibles);
    })
});
router.get('/maxRateChange', (req, res, next) => {
    MaxRateChange.find(function (err, maxRateChanges) {
        res.send(maxRateChanges);
    })
});
router.get('/payments', (req, res, next) => {
    Payment.find(function (err, payments) {
        res.send(payments);
    })
});
router.get('/states', (req, res, next) => {
    State.find(function (err, states) {
        res.send(states);
    })
});

// Add Customer
router.post('/customer', (req, res, next) => {
    let newCustomer = new Customer({
        name: req.body.name,
        pan: req.body.pan,
        gst: req.body.gst,
        mobileNumber: req.body.mobileNumber,
        stateCode: req.body.stateCode,
        state: req.body.state,
        address: req.body.address,
        shippingAddress: req.body.shippingAddress,
        brand: req.body.brand,
        subRates: req.body.subRates
    });
    newCustomer.save((err, customer) => {
        if (err) {
            err.send({ msg: 'Failed to add customer' + err })
        } else {
            res.send({ msg: 'Customer added success', postId: customer._id })
        }
    })
});

// Delete Customer
router.delete('/customer/:id', (req, res, next) => {
    Customer.remove({ _id: req.params.id }, function (err, customer) {
        if (err) {
            res.send({ msg: 'Failed to delete customer' })
        } else {
            res.send({ msg: 'Customer dleted success' })
        }
    });
});
router.get('/customer/:id', (req, res, next) => {
    Customer.find({ _id: req.params.id }, function (err, customer) {
        if (err) {
            res.json({ msg: 'No customer with this ID' })
        } else {
            res.send(customer);
        }
    })
});
router.put('/updateCustomer/:id', (req, res, next) => {
    Customer.findByIdAndUpdate(req.params.id,
        {
            $set: {
                subRates: req.body.subRates,
            },
        },
        {
            new: true
        },
        function (err, updateCustomer) {
            if (err) {
                res.send({ msg: 'Failed to update customer' })
            } else {
                res.send({ msg: 'Updated success' })
            }
        });
});


// Add Invoice
router.post('/invoice', (req, res, next) => {
    let newInvoice = new Invoice({
        customer: req.body.id,
        goods: req.body.goods,
        date: req.body.date,
        name: req.body.name
    });
    newInvoice.save((err, invoice) => {
        if (err) {
            res.send({ msg: 'Failed to add invoice' })
        } else {
            res.send(invoice)
        }
    })
});
// Delete Invoice
router.delete('/invoice/:id', (req, res, next) => {
    Invoice.remove({ _id: req.params.id }, function (err, invoice) {
        if (err) {
            res.send({ msg: 'Failed to delete invoice' })
        } else {
            res.send({ msg: 'Invoice deleted success' })
        }
    });
});
router.get('/invoice/:id', (req, res, next) => {
    Invoice.find({ _id: req.params.id }, function (err, invoice) {
        if (err) {
            res.json({ msg: 'No Invoice with this ID' })
        } else {
            res.send(invoice);
        }
    })
});

// Add Part
router.post('/part', (req, res, next) => {
    let newPart = new Part({
        name: req.body.name,
        type: req.body.type,
        number: req.body.number,
        material: req.body.material,
        description: req.body.description,
        moc: req.body.moc,
        quantity: 0
    });
    newPart.save((err, part) => {
        if (err) {
            res.send({ msg: 'Failed to add Inventory' })
        } else {
            res.send({ msg: 'Inventory added success', postId: part._id })
        }
    })
});


// Add Stocks
router.get('/stock/:id', (req, res, next) => {
    Part.find({ _id: req.params.id }, function (err, stock) {
        if (err) {
            res.json({ msg: 'No stock with this ID' })
        } else {
            res.send(stock);
        }
    })
});
router.put('/updateStock/:id', (req, res, next) => {
    Part.findByIdAndUpdate(req.params.id,
        {
            $set: {
                quantity: req.body.quantity,
            },
        },
        {
            new: true
        },
        function (err, updatedStock) {
            if (err) {
                res.send({ msg: 'Failed to update parts' })
            } else {
                res.send({ msg: 'Updated success' })
            }
        });
});

router.put('/updateFinishGoods/:id', (req, res, next) => {
    Submersible.findByIdAndUpdate(req.params.id,
        {
            $set: {
                quantity: req.body.quantity,
            },
        },
        {
            new: true
        },
        function (err, submersible) {
            if (err) {
                res.send({ msg: 'Failed to update submersible' })
            } else {
                res.send({ msg: 'Updated success' })
            }
        });
});

// Update Payment Status
router.put('/updatePayment/:id', (req, res, next) => {
    Payment.findByIdAndUpdate(req.params.id,
        {
            $set: {
                mode: 'cleared',
            },
        },
        {
            new: true
        },
        function (err, updatePayment) {
            if (err) {
                res.send({ msg: 'Failed to update payment' })
            } else {
                res.send({ msg: 'Updated success' })
            }
        });
});

// Update Submersibel
router.get('/submersible/:id', (req, res, next) => {
    Submersible.find({ _id: req.params.id }, function (err, stock) {
        if (err) {
            res.json({ msg: 'No Submersible with this ID' })
        } else {
            res.send(stock);
        }
    })
});
router.put('/updateSubmersible/:id', (req, res, next) => {
    Submersible.findByIdAndUpdate(req.params.id,
        {
            $set: {
                quantity: req.body.quantity,
            },
        },
        {
            new: true
        },
        function (err, updateSubmersible) {
            if (err) {
                res.send({ msg: 'Failed to update submersible' })
            } else {
                res.send({ msg: 'Updated success' })
            }
        });
});

// Add Payment
router.post('/payment', (req, res, next) => {
    let newPayment = new Payment({
        customerId: req.body.customerId,
        date: req.body.date,
        ammount: req.body.ammount,
        mode: req.body.mode
    });
    newPayment.save((err, payment) => {
        if (err) {
            res.send({ msg: 'Failed to add Payment' })
        } else {
            res.send({ msg: 'Payment added success', postId: payment._id })
        }
    })
});

router.get('/paymentByCustomer/:id', (req, res, next) => {
    Payment.find({ customerId: req.params.id }, function (err, payment) {
        if (err) {
            res.json({ msg: 'No payment with this ID' })
        } else {
            res.send(payment);
        }
    })
});
router.get('/invoiceByCustomer/:id', (req, res, next) => {
    Invoice.find({ customer: req.params.id }, function (err, invoice) {
        if (err) {
            res.json({ msg: 'No invoice with this ID' })
        } else {
            res.send(invoice);
        }
    })
});

router.put('/updateMaxRateChanges/:id', (req, res, next) => {
    MaxRateChange.findByIdAndUpdate(req.params.id,
        {
            $set: {
                number: req.body.number,
            },
        },
        {
            new: true
        },
        function (err, updateMaxRateChanges) {
            if (err) {
                res.send({ msg: 'Failed to update MaxRateChanges' })
            } else {
                res.send({ msg: 'Updated success' })
            }
        });
});


module.exports = router;
