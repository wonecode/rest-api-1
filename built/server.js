"use strict";
const express = require('express');
const mongoose = require('mongoose');
const asyncHandler = require('express-async-handler');
const WilderController = require('./controllers/Wilders');
const app = express();
const url = 'mongodb+srv://lochgdt:admin@cluster0.9n7e8.mongodb.net/wilders?retryWrites=true&w=majority';
/* eslint no-console: ["error", { allow: ["log", "error"] }] */
mongoose
    .connect(url, {
    autoIndex: true,
})
    .then(() => console.log('Connected to database'))
    .catch((err) => console.error(err));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// routes
app.get('/', (req, res) => {
    res.send('Hello World');
});
app.post('/api/wilder/create', asyncHandler(WilderController.create));
app.get('/api/wilder/read', asyncHandler(WilderController.read));
app.put('/api/wilder/update/:id', asyncHandler(WilderController.update));
app.delete('/api/wilder/delete/:id', asyncHandler(WilderController.delete));
// app.use(function (req: any, res: any) {
//   res.status(404).send("Sorry can't find that!");
// });
app.listen(5000, () => console.log('Server started on 5000'));
//# sourceMappingURL=server.js.map