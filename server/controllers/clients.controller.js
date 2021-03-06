const Client = require("../models/client");

const clientController = {};

clientController.getAllClients = async (req, res) => {
    const clients = await Client.find();
    res.json(clients);
};

clientController.getByIdClient = async (req, res) => {
    const client = await Client.findById(req.params.id);
    res.json(client);
};

clientController.getByIdClientCredit = async (req, res) => {
    const client = await Client.findById(req.params.id).populate('credit').exec();
    res.json(client);
};

//  Credit.schema.pre
clientController.createClient = async (req, res) => {
    const { company, nit, contact, email } = req.body;

    const client = new Client({
        company, nit, contact, email,
    });
    await client.save((err, client) => {
        if (err) return res.json({ error: err });
        res.json({ status: "Client Saved", client });
    });

};

clientController.updateClient = async (req, res) => {
    const { company, contact } = req.body;
    const clientUpdate = { company, contact };

    await Client.findByIdAndUpdate(req.params.id, clientUpdate, { new: true }, (err, client) => {
        if (err) return res.json({ error: err });
        res.json({ status: "Client Updated", client });
    });

};

// Pending Review
clientController.deleteClient = async (req, res) => {
    try {
        await Client.findByIdAndRemove(req.params.id, (err, client) => {
            if (err) return res.json({ error: err });
            res.json({ status: "Client Removed" });
        });
    } catch (error) {
        const message = error.message || error;
        res.json({ error: message });
    }
};

module.exports = clientController;
