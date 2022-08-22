import validator from "@/middleware/validator";
import { IUser } from "@/models/user";
import NoticeService from "@/services/notice";
import { NoticeDTO } from "@/types/dto";
import { Router } from "express";

const router = Router()

router.post('/', ...validator.notice_update, async (req, res) => {
    if(req.user){
      if(req.body.identifier) {
        console.log(req.body.identifier);
        req.body.identifier = parseInt(req.body.identifier);
      }
  
      const identifier = await NoticeService
        .getInstance()
        .update(req.user as IUser, req.body as NoticeDTO);
  
      return res.redirect(`/api/v1/notice/get/${identifier}`);
    }
    return res.redirect('/api/v1/user/login/web');
  });
  
  router.get('/', async (req, res) => {
    return res.send(`<html>
    <head>
      <title>Hello</title>
    </head>
    <body>
      <form action="/api/v1/notice/update" method="post">
        id = <input type="number" name="identifier" id=""> 
        header = <input type="text" name="header" id=""> 
        title = <input type="text" name="title" id="">
        content = <input type="text" name="content" id="">
        <input type="submit" value="submit">
      </form>
    </body>
    
    </html>`);
  })
  
  export default router;