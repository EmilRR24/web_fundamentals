//  Arrays - Ordered Data Structure

// Objects - Unordered Data Structure

var userInfo = {  // Key : Value
    'fullName' : 'Emil R', 
    'age' : 35,
    'location' : 'Hawaii',
    'marriageStatus' : false,
    'introduction' : function(){
        console.log(this.fullName)
        console.log(this.age)
        console.log(this.location)
        console.log(this.marriageStatus)
    }
}

// Bracket Notation
console.log(userInfo['location'])

//  Dot Notation
console.log(userInfo.location)

userInfo.introduction()