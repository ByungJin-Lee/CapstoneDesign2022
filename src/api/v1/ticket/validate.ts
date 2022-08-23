
import validator from '@/middleware/validator';
import Ticket from '@/models/ticket';
import User from '@/models/user';
import TicketService from '@/services/ticket';
import UserService from '@/services/user';
import { Router } from 'express';

const router = Router();

router.post('/', ...validator.ticket_validate, async (req, res) => {
  const isSuccess = await TicketService
    .getInstance()
    .validate(req.body['identifier']);

  if(isSuccess) return res.sendStatus(200);

  return res.sendStatus(200);
})

export default router;