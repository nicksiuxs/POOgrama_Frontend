import { render, screen } from '@testing-library/react'
import StartExperience from '../StartExperience';

describe("Start Experience View", () => {

    test("Component must have the text", () => {
        render(<StartExperience />);

        expect(screen.getByText("StartExperience")).toBeInTheDocument();
    });
});