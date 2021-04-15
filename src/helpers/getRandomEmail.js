const getRandomEmail = () => {
    let email = "";
    const letters = ["q","w","e","r","t","y","u","i","o","p","a","s","d","f","g","h","j","k","l","z","x","c","v","b","n","m"];
    for (let i = 0; i < 5; i++){
        email += letters[Math.ceil(Math.random()*letters.length)]; //@mailinator.com
    }
    return email += "@mailinator.com";
};
module.exports = getRandomEmail;


// const letters = ["q","w","e","r","t","y","u","i","o","p","a","s","d","f","g","h","j","k","l","z","x","c","v","b","n","m"];
// export const getRandomEmail = () => (new Array(10)).fill(null).map(() => letters[Math.ceil(Math.random()*letters.length)]).join("").concat("@mailinator.com");
