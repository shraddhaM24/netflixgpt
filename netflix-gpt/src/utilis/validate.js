export const checkFormValidateData = (email,password,mobile) => {

    const isEmail = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email);
    const isPass = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password);
    // const isMobile = /^\(?\d{3}\)?[-\s]?\d{3}[-\s]?\d{4}$/.test(mobile);
    const isName = /b([A-ZÀ-ÿ][-,a-z. ']+[ ]*)+/;

    if(!isEmail) return "Email is invalid";
    if(!isPass) return "Password is invalid";
    // if(!isMobile) return "Enter correct mobile number";
    if(!isName) return "Please a proper name";

    return null;

};