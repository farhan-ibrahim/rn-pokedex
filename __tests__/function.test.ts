import { getBackgroundColor } from "../api"


test("get fire pokemon background color" , () => {
    expect(getBackgroundColor("fire")).toBe("#E8686D")
})

test("get water pokemon background color" , () => {
    expect(getBackgroundColor("water")).toBe("blue")
})

test("get grass pokemon background color" , () => {
    expect(getBackgroundColor("grass")).toBe("#6ED0AF")
})