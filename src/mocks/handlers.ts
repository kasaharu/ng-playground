import { rest } from 'msw';
import { findUser, updateUser, users } from './data/user';

export const handlers = [
  rest.get('/users', (req, res, ctx) => {
    return res(ctx.status(200), ctx.json(users));
  }),
  rest.get('/users/:userId', (req, res, ctx) => {
    const userId = parseInt(req.params['userId']);
    return res(ctx.json(findUser(userId)));
  }),
  rest.patch('/users/:userId', (req, res, ctx) => {
    const userId = parseInt(req.params['userId']);
    return res(ctx.json(updateUser(userId, req.body)));
  }),
];
