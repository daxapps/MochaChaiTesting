import { renderComponent , expect } from '../test_helper';
import App from '../../src/components/app';

describe('App' , () => {
  const component = renderComponent(App);

  it('shows correct text', () => {
    expect(component).to.contain('React simple starter');
  });
});
