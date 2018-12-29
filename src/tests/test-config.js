import { assert } from 'chai';
import loadConfig from '../settings/loadConfig';

describe('Node Environment', () => {
  describe('Variables are present', () => {
    it('returns environment configuration for environment', (done) => {
      loadConfig('TEST');
      assert(typeof process.env.NODE_ENV, 'string');
      assert(typeof process.env.PORT, 'number');
      done();
    });
  });
});
