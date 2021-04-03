
export type UserType = {
    name: string
    hair: number
    address: { city: string, house?: number }
}
export type LaptopType = {
    title: string
}
export type UserWithLaptopType = UserType & {
    laptop: LaptopType
}
export type UserWithBookType = UserType & {
    books: Array<string>
}
export type SkillLevelsType = UserType & {
    skills: Array<number>
}
type CompanyType = { id: number, title: string }
export type WithCompaniesType = {
    companies: Array<CompanyType>
}

export function makeHairstyle(u: UserType, power: number) {
    const copy = {
        ...u,
        hair: u.hair / power
    }

    return copy
}

export function moveUser(u: UserWithLaptopType, city: string) {
    return {
        ...u,
        address: {
            ...u.address,
            city: city
        }
    }
}

export function moveUserToOtherHouse(u: UserWithLaptopType & UserWithBookType, house: number) {
    return {
        ...u,
        address: {
            ...u.address,
            house: house
        }
    }
}

export function upgradeUserLaptop(u: UserWithLaptopType, laptop: string) {
    return {
        ...u,
        laptop: {
            ...u.laptop,
            title: laptop
        }
    }
}

export function addNewBooksToUser(u: UserWithLaptopType & UserWithBookType, newBooks: Array<string>) {
    return {
        ...u,
        books: [...u.books.concat(newBooks)]
    }
}

export const updateBook = (u: UserWithLaptopType & UserWithBookType, oldBook: string, updateBook: string) => ({
        ...u,
        books: u.books.map(b => b === oldBook ? updateBook : b)
})

export const removeBook = (u: UserWithLaptopType & UserWithBookType, removeBook: string) => ({
    ...u,
    books: u.books.filter(b => b !== removeBook)
})

export const updateSkill = (u: UserWithLaptopType & UserWithBookType & SkillLevelsType, oldSkill: number, updateSkill: number) => ({
    ...u,
    skills: u.skills.map(s => s === oldSkill ? updateSkill : s)
})

export const newCompany = (u: UserWithLaptopType & WithCompaniesType, companyId: number, newTitle: string) => ({
    ...u,
    companies: [...u.companies, {id: companyId, title: newTitle}]
})