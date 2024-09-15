// Given timestamp
// const timestamp = "2019-08-06T01:22:55Z";

const convertDate = (timestamp) => {

    // Create a Date object from the timestamp
    const dateObject = new Date(timestamp);
    
    // Get the components of the date
    const year = dateObject.getFullYear();
    const monthName = new Intl.DateTimeFormat('en', { month: 'short' }).format(dateObject);
    const day = dateObject.getDate();
    
    
    // Create the formatted date string
    const formattedDate = `${day} ${monthName} ${year}`;
    
    // Return the formatted date
    return formattedDate;
    
}