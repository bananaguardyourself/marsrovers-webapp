import { render } from "@testing-library/react";
import { Rovers } from "../Rovers";

describe('Rovers', () => {
    test('should renders', () => {
        render(<Rovers />);
    });
})