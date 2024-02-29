import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import {describe, expect, test, vi} from "vitest";
import {Button} from "../button";

describe('Button', () => {
    test('renders correctly', () => {
        const { getByRole } = render(<Button>Click me</Button>)
        expect(getByRole('button')).toBeInTheDocument()
      })
      
    test('renders the correct text', () => {
        const { getByRole } = render(<Button>Click me</Button>)
        expect(getByRole('button')).toHaveTextContent('Click me')
    })

    test('Calls the onClick handler', () => {
        const onClick = vi.fn();
        render(<Button onClick={onClick}>Click me</Button>); 
        screen.getByRole('button').click();
        expect(onClick).toHaveBeenCalled();
    })
      

  });