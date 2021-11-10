const React = require("react");
const {render ,  screen, fireEvent} = require("@testing-library/react");
const InputField = require("./InputField.jsx");
//import InputField from "./InputField";

// jest.fn is a mock(fake) function that  will always return the  value that I want in this case its 3.
const add = jest.fn(() => 3); 

it("should render InputField Component", () => {
    const { queryByTestId } = render(<InputField/>);
    const todoElement = queryByTestId("inputfield");
    //const todoElement = queryByTitle("label"); 
    //const todoElement = screen.getByTestId("inputfield");
    expect(todoElement).toBeTruthy();
    //expect(todoElement).toBeInTheDocument();
});
   


describe("My Describes", () => {
    it("Should be  true", () => {
        const foo = true;
        expect(foo).toBe(true);
    })
    it("Should be  false", () => {
        const foo = true;
        expect(foo).toBe(false);
    })
    
});