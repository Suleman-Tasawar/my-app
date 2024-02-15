import {render,screen} from '@testing-library/react'
import {Greet} from "./greet"
test('Greet component renders correctly', () => {
    render(<Greet/>)
    const textElement = screen.getByText("Greet")
    expect(textElement).ToBeInTheDocument()
})