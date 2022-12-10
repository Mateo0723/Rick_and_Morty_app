const validateEmail = (email) => {
    return String(email)
        .toLowerCase()
        .match(
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        );
};

const validatePassword = () => {
    var newPassword = document.getElementById('changePasswordForm').newPassword.value;
    var minNumberofChars = 6;
    var maxNumberofChars = 16;
    var regularExpression = /^[a-zA-Z0-9!@#$%^&*]{6,16}$/;
    alert(newPassword);
    if (newPassword.length < minNumberofChars || newPassword.length > maxNumberofChars) {
        return false;
    }
    if (!regularExpression.test(newPassword)) {
        alert("password should contain atleast one number and one special character");
        return false;
    }
}