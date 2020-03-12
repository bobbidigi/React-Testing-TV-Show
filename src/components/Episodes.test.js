import React from "react";
import {
  render,
  fireEvent,
  waitForElement,
  wait
} from "@testing-library/react";
import { fetchShow } from "../api/fetchShow";
import Episodes from "./Episodes";

const episodes = [
    {
      episodes_name: "Thaicom",
    },
    {
      episodes_name: "Telstar",
    },
    {
      episodes_name: "Iridium NEXT",
    },
    {
      episodes_name: "Commercial Resupply Services",
    },
    {
      episodes_name: "SES",
    },
    {
      episodes_name: "JCSAT",
    },
    {
      episodes_name: "AsiaSat",
    },
    {
      episodes_name: "Orbcomm OG2", 
    },
    {
      episodes_name: "ABS",
    },
    {
      episodes_name: "Eutelsat"
    }
  ];


  test("Episodes List shows data when rerendered success", () => {
    // initial render  
    const { queryAllByTestId, rerender } = render(
        <Episodes error="" episodes={[]} />
    );
    expect(queryAllByTestId("episode")).toHaveLength(0);

    // rerender when Episodes recieves props
    const mockLoadedEpisodes = () => {
       rerender(<Episodes error="" episodes={episodes}/>) 
       expect(queryAllByTestId("episode")).toHaveLength(10);
    }
    mockLoadedEpisodes();
});


