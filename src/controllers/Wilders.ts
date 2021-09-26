import { Request, Response } from 'express';
import WilderModel from '../models/Wilder';

const WilderController = {
  create: async (req: Request, res: Response): Promise<void> => {
    await WilderModel.init();
    const wilder = new WilderModel(req.body);
    const result = await wilder.save();
    res.json({ success: true, result });
  },
  read: async (req: Request, res: Response): Promise<void> => {
    const result = await WilderModel.find({});
    res.json({ success: true, result });
  },
  update: async (req: Request, res: Response): Promise<void> => {
    await WilderModel.init();
    const result = await WilderModel.findByIdAndUpdate(
      req.params.id,
      req.body,
      {
        useFindAndModify: false,
      }
    );
    res.json({ success: true, result });
  },
  delete: async (req: Request, res: Response): Promise<void> => {
    await WilderModel.init();
    const result = await WilderModel.findByIdAndRemove(req.params.id);
    res.json({ success: true, result });
  },
};

export default WilderController;
