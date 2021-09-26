"use strict";
const WilderModel = require('../models/Wilder');
module.exports = {
    create: async (req, res) => {
        await WilderModel.init();
        const wilder = new WilderModel(req.body);
        const result = await wilder.save();
        res.json({ success: true, result });
    },
    read: async (req, res) => {
        const result = await WilderModel.find({});
        res.json({ success: true, result });
    },
    update: async (req, res) => {
        await WilderModel.init();
        const result = await WilderModel.findByIdAndUpdate(req.params.id, req.body, {
            useFindAndModify: false,
        });
        res.json({ success: true, result });
    },
    delete: async (req, res) => {
        await WilderModel.init();
        const result = await WilderModel.findByIdAndRemove(req.params.id);
        res.json({ success: true, result });
    },
};
//# sourceMappingURL=Wilders.js.map