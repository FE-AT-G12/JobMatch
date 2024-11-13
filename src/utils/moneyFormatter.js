export const moneyFormatter = (money)=>{
    if(!money) return ""
    return money?.toLocaleString() + ' VND' 
}