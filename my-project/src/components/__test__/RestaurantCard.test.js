import { render,screen } from "@testing-library/react";
import RestaurantCard,{withPromotedLabel} from "../RestaurantCard";
import MOCK_DATA from "../mocks/resCardMocks.json";
import "@testing-library/jest-dom";

test("Should render restaurant card component with props data", () => {
    render(<RestaurantCard resData={MOCK_DATA}/>);

    const name = screen.getByText("Shiv Sagar Malad");
    expect(name).toBeInTheDocument();
});

test("Should render restaurant card component with Veg label", () => {
    const VegLabel = withPromotedLabel(RestaurantCard);

    render(<VegLabel resData={MOCK_DATA}/>);

    const vegLabelText = screen.getByText("Veg");
    expect(vegLabelText).toBeInTheDocument();
});

test("Should render restaurant card component with props data", () => {
    render(<RestaurantCard resData={MOCK_DATA}/>);

    const cuisines = screen.getByText("Indian, Chinese");
    expect(cuisines).toBeInTheDocument();
});