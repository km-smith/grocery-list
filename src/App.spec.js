import App from './App.svelte';
import { render, cleanup } from '@testing-library/svelte';

jest.mock('firebase');

beforeEach(cleanup);

// TODO mock the firebase calls and write this test
describe('App', () => {
  test('should render greeting', () => {
    const { getByText } = render(App, { props: { name: 'world' } });

    expect(getByText('Hello world!'));
  });
});
