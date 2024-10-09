function generatePassword(length = 12) {
    const charlist = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890_";
    let ranpassword = "";
    for (let i = 0; i < length; i ++) {
        ranpassword += charlist[Math.floor(Math.random() * charlist.length)] 
    }
    return ranpassword
}
module.exports = generatePassword;