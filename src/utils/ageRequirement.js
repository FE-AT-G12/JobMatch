export const ageRequirement = (age) => {
  if (age.min && age.max) {
    return `Từ ${age.min} đến ${age.max} tuổi`
  } else if (age.min && !age.max) {
    return `Tối thiểu ${age.min} tuổi`
  } else if (!age.min && age.max) {
    return `Tối đa ${age.max} tuổi`
  } else {
    return `Không yêu cầu độ tuổi`
  }
}
