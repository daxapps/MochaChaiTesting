import { expect } from '../test_helper';
import commentReducer from '../../src/reducers/comments';
import {  SAVE_COMMENT } from '../../src/actions/types';

describe('Comments Reducer', () => {
  it('handles action with unknown type', () => {
    expect(commentReducer()).to.eql([]);
  });

  it('handles action of type of SAVE_COMMENT', () => {
    const action = { type: SAVE_COMMENT, paylaod: 'new comment' };
    expect(commentReducer([], action).to.eql(['new comment']));
  });
});