import React from 'react';
import { render, screen } from '@testing-library/react';
import { Login } from './login';
import { labelErrorColor } from './constants';
describe('If login username is not valid', () => {
    it('it should update the label text with red color', () => {
        render(<Login />);
        const labelEmailElement = screen.getByText('Email address');
        expect(labelEmailElement.className).toContain(labelErrorColor);
    });
});
