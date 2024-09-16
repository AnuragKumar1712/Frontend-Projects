const dobInput = document.getElementById("dob");
const calcBtn = document.getElementById("calc-btn");
const resultAge = document.getElementById("result");

calcBtn.addEventListener("click",function(){
    
    // Store value of Date input
    const dob = new Date(dobInput.value);

    // Calculate age in milliseconds from the time of input dob
    const ageInMs = Date.now() - dob.getTime();

    // This is done to extract the year from the age.
    const ageDate =new Date(ageInMs);

    // Finale Age logic
    const age = Math.abs(ageDate.getUTCFullYear()- 1970);   
    //It calculates the age in years by subtracting 1970 from the year of the `ageDate` object. 
    //This is because the getUTCFullYear() method returns the year in the UTC time zone, 
    //which is based on the Unix epoch (January 1, 1970, 00:00:00 UTC).

    resultAge.innerHTML = `Your Age is ${age} years.`;
});