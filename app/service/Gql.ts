import { Service } from 'egg';

/**
 * Test Service
 */
export default class Gql extends Service {
  /**
   * 解析gql
   * @param name - your name
   */
  public analysis(gql: string) {
    return `hi, ${gql}`;
  }
}
