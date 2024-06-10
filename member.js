function skilsMember() {
    var member = {
        name: 'John Doe',
        age: 30,
        skils: ['HTML', 'CSS', 'JS'],
        // Method
        showSkills: function () {
            this.skils.forEach(function (skill) {
                console.log(skill);
            });
        }
    };
    return member;
}