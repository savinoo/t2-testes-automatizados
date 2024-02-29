import LoginForm from "../login-form";
import "@testing-library/jest-dom";
import { fireEvent, render, screen } from "@testing-library/react";

describe('login-form', () => {
    test('it should show login form title', () => {
        render(<LoginForm />);
        const title = screen.getByTestId('login-form-title');
        expect(title).toBeInTheDocument();
    });

    test('it should have correct value for title', () => {
        render(<LoginForm />);
        const title = screen.getByTestId('login-form-title');
        expect(title).toHaveTextContent('Logue-se para continuar.');
    })

    test('it should not to have correct value for title', () => {
        render(<LoginForm />);
        const title = screen.getByTestId('login-form-title');
        expect(title).not.toHaveTextContent('Login');
    })                                        

    test('it should show password input', () => {
        render(<LoginForm />);
        const passwordInput = screen.getByTestId('form-password-input');
        expect(passwordInput).toBeInTheDocument();
    })

    test('it should show email input', () => {
        render(<LoginForm />);
        const passwordInput = screen.getByTestId('form-email-input');
        expect(passwordInput).toBeInTheDocument();
    })

    // crie um teste para testar se eu mudei de rota ao digitar um email e senha corretos

    test('it should change route when email and password are correct', () => {
        render(<LoginForm />);
        const emailInput = screen.getByTestId('form-email-input');
        const passwordInput = screen.getByTestId('form-password-input');
        const loginButton = screen.getByTestId('login-button');
        fireEvent.change(emailInput, { target: { value: 'fsdgsd@fgdsf' } });
        fireEvent.change(passwordInput, { target: { value: '123456' } });
        fireEvent.click(loginButton);
        expect(window.location.pathname).toBe('/dashboard');
    })
})