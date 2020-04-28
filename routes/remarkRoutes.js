const mongoose = require('mongoose');
const Remark = mongoose.model('remarks');

module.exports = (app) => {

  app.get(`/api/remarks`, async (req, res) => {
    let remarks = await Remark.find();
    return res.status(200).send(remarks);
  });

  app.get(`/api/remarks/:id`, async (req, res) => {
    const {id} = req.params;
    let remark = await Remark.findById(id);
    return res.status(200).send(remark);
  });

  app.post(`/api/remarks`, async (req, res) => {
    let remark = await Remark.create(req.body);
    return res.status(201).send({
      error: false,
      remark
    })
  })

  app.put(`/api/remarks/:id`, async (req, res) => {
    const {id} = req.params;

    let remark = await Remark.findByIdAndUpdate(id, req.body);

    return res.status(202).send({
      error: false,
      remark
    })

  });

  app.delete(`/api/remarks/:id`, async (req, res) => {
    const {id} = req.params;

    let remark = await Remark.findByIdAndDelete(id);

    return res.status(202).send({
      error: false,
      remark
    })

  })

}