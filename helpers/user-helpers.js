const db = require("../config/connection");
const collection = require("../config/collections");
const bcrypt = require("bcrypt");
const { reject } = require("bcrypt/promises");
const async = require("hbs/lib/async");
const { response } = require("../app");
const { status } = require("express/lib/response");

module.exports = {
    doSignup: (userData) => {
        return new Promise(async (resolve, reject) => {
            userData.pw = await bcrypt.hash(userData.pw, 10);
            db.get()
                .collection(collection.USER_COLLECTION)
                .insertOne(userData)
                .then(response);
            resolve(response);
        });
    },
    doLogin: (userData) => {
        return new Promise(async (resolve, reject) => {
            let loginStatus = false;
            let response = {};
            let user = await db
                .get()
                .collection(collection.USER_COLLECTION)
                .findOne({ email: userData.email })
            if (user) {

                bcrypt.compare(userData.pw, user.pw).then((status) => {
                    if (status) {
                        console.log("login success");
                        response.user = user
                        response.status = true
                        resolve(response)
                    } else {
                        console.log("login failed");
                        resolve({ status: false })
                    }
                });
            } else {
                console.log('login failed')
                resolve({ status: false })
            }
        });
    },
};
