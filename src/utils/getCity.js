export const getCityByAddress = (address) => {
    if(address === "Tại nhà") return address
    return address.split(",")[3]
}