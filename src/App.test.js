// src/App.test.js
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders PeakZone title', () => {
    render(<App />);
    const titleElement = screen.getByText(/PeakZone/i);
    expect(titleElement).toBeInTheDocument();
});
