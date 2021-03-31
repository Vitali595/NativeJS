import {student, StudentType} from "../02/02";
import {CityType, GovernmentBuildingsType, HouseType} from "../02/02_02";

export const sum = (a: number, b: number) => {
    return a + b;
}

export function sum2(a: number, b: number) {
    return a + b;
}

export const addSkill = (st: StudentType, skill: string) => {
    st.technologies.push({
        id: new Date().getTime(),
        title: skill
    })
}

export function addSkill2(st: StudentType, skill: string) {
    st.technologies.push({
        id: new Date().getTime(),
        title: skill
    })
}

export function makeStudentActive(s: StudentType) {
    s.isActive = true;
}

export const doesStudentLiveIn = (s: StudentType, cityName: string) => {
    return s.address.city.title === cityName;
}

export const addMoneyToBudget = (building: GovernmentBuildingsType, budget: number) => {
    building.budget += budget;
}

export const repairHouse = (houseType: HouseType) => {
 houseType.repaired = true;
}

export function toFireStaff(building: GovernmentBuildingsType, staffCountToFire: number) {
building.staffCount -= staffCountToFire;
}

export const toHireStaff = (building: GovernmentBuildingsType, staffCountToHire: number) => {
    building.staffCount += staffCountToHire;
}

export function createMessage(city: CityType) {
    return `Hello ${city.title} citizents. I want you be happy. All ${city.citizensNumber} men`;
}