function User(data){
    this.data = data[0] || null;
    this.userid = data[0].userid || null;
    this.userpassword = data[0].userpassword || null;
    this.usertag = data[0].usertag || null;
    this.username = data[0].username || null;
}

User.prototype.getJSON = function(){
    const userid = this.userid || null;
    const usertag = this.usertag || null;
    const username = this.username || null;
    return {userid,usertag,username};
}

module.exports = User;
