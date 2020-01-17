import { Router } from 'express';

const routes = new Router();

routes.get('/',(req,res) =>{
  return res.json({message:'hello world'});
})
routes.get('/users',(req,res) =>{
  return res.json({message:'hello bruno'});
})

export default routes;