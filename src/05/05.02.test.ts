import {createMes, getStreetsTitlesOfGovernmentsBuildings, getStreetsTitlesOfHouse} from "./05.02";
import {GovernmentBuildingsType, HouseType} from "../02/02_02";
import {createMessage} from "../03/03";
type CityType = {
    title: string
    houses: Array<HouseType>
    governmentBuildings: Array<GovernmentBuildingsType>
    citizensNumber: number
}
let city: CityType;

beforeEach(() => {
    city = {
        title: "New York",
        houses: [
            {
                buildedAt: 2012, repaired: false,
                address: {number: 100, street: {title: "White street"}}
            },
            {
                buildedAt: 2008, repaired: false,
                address: {number: 100, street: {title: "Happy street"}}
            },
            {
                buildedAt: 2020, repaired: false,
                address: {number: 101, street: {title: "Happy street"}}
            }
        ],
        governmentBuildings: [
            {
                type: "HOSPITAL", budget: 200000, staffCount: 200,
                address: {
                    street: {
                        title: "Central Str"
                    }
                }
            },
            {
                type: "FIRE-STATION", budget: 500000, staffCount: 1000,
                address: {
                    street: {
                        title: "South Str"
                    }
                }
            }
        ],
        citizensNumber: 1000000
    }
})

test.skip("list of streets titles of governments buildings", () => {
    let streetsName = getStreetsTitlesOfGovernmentsBuildings(city.governmentBuildings)

    expect(streetsName.length).toBe(2);
    expect(streetsName[0]).toBe("Central Str");
    expect(streetsName[1]).toBe("South Str");
})

test.skip("list of streets titles", () => {
    let streets = getStreetsTitlesOfHouse(city.houses)

    expect(streets.length).toBe(3);
    expect(streets[0]).toBe("White street");
    expect(streets[1]).toBe("Happy street");
    expect(streets[2]).toBe("Happy street");
})

test.skip("create greeting messages for streets", () => {
    let messages = createMes(city.houses);
    expect(messages.length).toBe(3);
    expect(messages[0]).toBe("Hello guys from White street");
    expect(messages[1]).toBe("Hello guys from Happy street");
    expect(messages[2]).toBe("Hello guys from Happy street");
})