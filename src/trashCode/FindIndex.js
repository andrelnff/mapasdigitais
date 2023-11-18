import React from "react";
import Regions from "../../data/Regions";

export default function FindIndex(id) {
    const found = Regions.findIndex(region => region.id === id)
    const region = Regions[found]

    return region
}