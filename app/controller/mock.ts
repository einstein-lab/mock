import { Controller } from 'egg';

export default class MockController extends Controller {
  public async index() {
    const { ctx } = this;
    // ctx.body = await ctx.service.gql.analysis("123412341234");
    console.log(ctx.request?.body);
    ctx.body = ctx.request?.body;
  }
}
