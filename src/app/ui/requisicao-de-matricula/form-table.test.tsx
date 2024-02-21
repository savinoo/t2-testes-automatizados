import {test, describe, expect, vi} from "vitest";
import {render, screen} from "@testing-library/react";
import "@testing-library/jest-dom";
import {Button} from "@/app/ui/button";
import {FormTable} from "@/app/ui/matriculation-requests/form-table"; 

describe('FormTable', () => {
    test('renders correctly', () => {
        render(<FormTable />)
      })
      
    

  });

