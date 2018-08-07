class userCtrl {

    getusers(req, res) {

        var usersList = [{
                firstname: 'Mahesh',
                lastname: 'Chejarla',
                email: "chejarla.mahesh@gmail.com",
                mobile: 9908996668,
                college: 'SVU College',
                city: 'Hyderabad',
                specalization: 'MCA',
                yearOfPass: 2013,
                isEmployee: true,
                working_status: 'Employee',
                technologies: 'Fullstack Development',
                organization: "SC Horizons",
                work_exp: 5
            },
            {
                firstname: 'Suresh',
                lastname: 'Singam',
                email: "suresh.singam@gmail.com",
                mobile: 9645364565,
                college: 'SVU College',
                city: 'Hyderabad',
                specalization: 'MCA',
                yearOfPass: 2010,
                isEmployee: true,
                working_status: 'Employee',
                technologies: 'MEAN Stack Development',
                organization: "SC Horizons",
                work_exp: 7
            }
        ]
        res.status(200);
        res.json(usersList)
    }


}

module.exports = new userCtrl();