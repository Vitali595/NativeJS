import {
    addNewBooksToUser,
    makeHairstyle,
    moveUser,
    moveUserToOtherHouse, newCompany, removeBook, SkillLevelsType, updateBook, updateSkill,
    upgradeUserLaptop,
    UserType,
    UserWithBookType,
    UserWithLaptopType, WithCompaniesType
} from "./10_01"


test("reference type test", () => {
    let user: UserType = {
        name: "Dimych",
        hair: 32,
        address: {
            city: "Minsk",
            house: 12
        }
    }

    const awesomeUser = makeHairstyle(user, 2)

    user = awesomeUser

    expect(user.hair).toBe(32)
    expect(awesomeUser.hair).toBe(16)
    expect(awesomeUser.address).toBe(user.address)
})

test("change address", () => {
    let user: UserWithLaptopType = {
        name: "Dimych",
        hair: 32,
        address: {
            city: "Minsk",
            house: 12
        },
        laptop: {
            title: "ZenBook"
        }
    }

    const movedUser = moveUser(user, "Kiev")

    expect(user).not.toBe(movedUser)
    expect(user.address).not.toBe(movedUser.address)
    expect(user.laptop).toBe(movedUser.laptop)
    expect(movedUser.address.city).toBe("Kiev")
})

test("upgrade laptop to macbook", () => {
    let user: UserWithLaptopType = {
        name: "Dimych",
        hair: 32,
        address: {
            city: "Minsk",
            house: 12
        },
        laptop: {
            title: "ZenBook"
        }
    }

    const userCopy = upgradeUserLaptop(user, "Macbook")

    expect(user).not.toBe(userCopy)
    expect(user.address).toBe(userCopy.address)
    expect(user.laptop).toBe(userCopy.laptop)
    expect(userCopy.laptop.title).not.toBe("Macbook")
    expect(user.laptop.title).toBe("ZenBook")
})

test("upgrade house", () => {
    let user: UserWithLaptopType & UserWithBookType = {
        name: "Dimych",
        hair: 32,
        address: {
            city: "Minsk",
            house: 12
        },
        laptop: {
            title: "ZenBook"
        },
        books: ["css", "html", "js", "react"]
    }

    const userCopy = moveUserToOtherHouse(user, 99)

    expect(user).not.toBe(userCopy)
    expect(user.books).toBe(userCopy.books)
    expect(user.laptop).toBe(userCopy.laptop)
    expect(user.address).not.toBe(userCopy.address)
    expect(userCopy.address.house).toBe(99)
})

test("add new books to user", () => {
    let user: UserWithLaptopType & UserWithBookType = {
        name: "Dimych",
        hair: 32,
        address: {
            city: "Minsk",
            house: 12
        },
        laptop: {
            title: "ZenBook"
        },
        books: ["css", "html", "js", "react"]
    }

    const userCopy = addNewBooksToUser(user, ["ts", "rest api"])

    expect(user).not.toBe(userCopy)
    expect(user.laptop).toBe(userCopy.laptop)
    expect(user.address).toBe(userCopy.address)
    expect(user.books).not.toBe(userCopy.books)
    expect(userCopy.books[4]).toBe("ts")
    expect(userCopy.books[5]).toBe("rest api")
})

test("update js to ts", () => {
    let user: UserWithLaptopType & UserWithBookType = {
        name: "Dimych",
        hair: 32,
        address: {
            city: "Minsk",
            house: 12
        },
        laptop: {
            title: "ZenBook"
        },
        books: ["css", "html", "js", "react"]
    }

    const userCopy = updateBook(user, "js", "ts")

    expect(user).not.toBe(userCopy)
    expect(user.laptop).toBe(userCopy.laptop)
    expect(user.address).toBe(userCopy.address)
    expect(user.books).not.toBe(userCopy.books)
    expect(userCopy.books[2]).toBe("ts")
})

test("remove js book", () => {
    let user: UserWithLaptopType & UserWithBookType = {
        name: "Dimych",
        hair: 32,
        address: {
            city: "Minsk",
            house: 12
        },
        laptop: {
            title: "ZenBook"
        },
        books: ["css", "html", "js", "react"]
    }

    const userCopy = removeBook(user, "js")

    expect(user).not.toBe(userCopy)
    expect(user.laptop).toBe(userCopy.laptop)
    expect(user.address).toBe(userCopy.address)
    expect(user.books).not.toBe(userCopy.books)
    expect(userCopy.books[2]).toBe("react")
})

test("update skill levels", () => {
    let user: UserWithLaptopType & UserWithBookType & SkillLevelsType = {
        name: "Dimych",
        hair: 32,
        address: {
            city: "Minsk",
            house: 12
        },
        laptop: {
            title: "ZenBook"
        },
        books: ["css", "html", "js", "react"],
        skills: [12, 43, 15, 89, 45, 98]
    }

    const userCopy = updateSkill(user, 15, 100)

    expect(user).not.toBe(userCopy)
    expect(user.laptop).toBe(userCopy.laptop)
    expect(user.address).toBe(userCopy.address)
    expect(user.books).toBe(userCopy.books)
    expect(userCopy.skills[2]).toBe(100)
})

test("new company", () => {
    let user: UserWithLaptopType & WithCompaniesType = {
        name: "Dimych",
        hair: 32,
        address: {
            city: "Minsk",
            house: 12
        },
        laptop: {
            title: "ZenBook"
        },
        companies: [{id: 1, title: "Epam"}, {id: 2, title: "IT-INCUBATOR"}]
    }

    const userCopy = newCompany(user, 3, "Google")

    expect(user).not.toBe(userCopy)
    expect(userCopy.companies[2].id).toBe(3)
    expect(userCopy.companies[2].title).toBe("Google")
})