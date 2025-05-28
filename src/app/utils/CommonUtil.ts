// Create function number formatting with commas for thousands
export const numberWithCommas = (num: number) => {
    const formattedNumber = num.toLocaleString("en-US", {
        style: "decimal",
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,
    })

    return formattedNumber;
}

// Create function date formatting
export const formatDate = (date: string) => {
    const formattedDate = new Date(date).toLocaleDateString("en-GB")
    return formattedDate;
}

// Date formatting for IOS without ms
export const formatDateToISOWithoutMilliseconds = (date: any) => {
    return date.toISOString().replace(/\.\d{3}Z$/, '')
}