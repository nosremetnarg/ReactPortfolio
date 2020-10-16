import React from 'react';
import { render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Nav from '..';

afterEach(cleanup);

describe('Nav component', () => {
    // baseline test
    it('renders', () => {
        render(<Nav />);
    });
    // snapshot test
    it('matches snapshot DOM node structure', () => {
        // render About
        const { asFragment } = render(<Nav />); // asFragment returns a snapshot of the component
        expect(asFragment()).toMatchSnapshot(); // toMatchSnapshot is a matcher
    })
})

describe('links are visible', () => {
    it('inserts text into the links', () => {
        const { getByTestId } = render(<Nav />);
        expect(getByTestId('link')).toHaveTextContent('Grant Emerson');
        expect(getByTestId('about')).toHaveTextContent('About me');
    });
})
