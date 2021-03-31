import {GovernmentBuildingsType, HouseType} from "../02/02_02";

export const getStreetsTitlesOfGovernmentsBuildings = (buildings: Array<GovernmentBuildingsType>) => {
    return buildings.map(b => b.address.street.title)
}

export const getStreetsTitlesOfHouse = (houses: Array<HouseType>) => {
    return houses.map(b => b.address.street.title)
}

export function createMes(houses: Array<HouseType>) {
    return houses.map(h => `Hello guys from ${h.address.street.title}`)
}