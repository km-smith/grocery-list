import App from './App.svelte';
import { render, cleanup } from '@testing-library/svelte';

beforeEach(cleanup);

describe('App', () => {
  test('should render greeting', () => {
    const { getByText } = render(App, { props: { name: 'world' } });

    expect(getByText('Hello world!'));
  });
});
