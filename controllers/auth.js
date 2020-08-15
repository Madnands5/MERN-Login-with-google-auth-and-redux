const User = require('../model/user');
const {
    regschema,
    logschema
} = require('../utils/validation/user');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const axios = require('axios');


exports.googleauth = async (req, res) => {
    try {
    const verifcation = await axios.get('https://oauth2.googleapis.com/tokeninfo?id_token=' + req.body.tokenId)
     if (verifcation.data.email_verified) {
       
       
            const user = await User.findOne({
                email: verifcation.data.email
            })
           
            if (user) {
                    const token = await jwt.sign({
                        _id: user._id
                    }, process.env.jwt_secret);
                        console.log(token);
                    await res.json({
                        "token": token,
                        status: "1",
                        "user": user
                    })
            } else {
                await res.json({
                    message: 'Email not found',
                    status: "-1"
                })
            }


        } 
        }catch (error) {
            res.json({"error":error});
    }
}

exports.login = async (req, res) => {

    try {


        const value = await logschema.validateAsync(req.body);
        try {
            const user = await User.findOne({
                email: req.body.email
            })

            if (user) {

                const validpass = await bcrypt.compare(req.body.password, user.password)
                if (!validpass) {
                    res.json({
                        message: 'Invalid password',
                        status: "-1"
                    })
                } else {

                    const token = await jwt.sign({
                        _id: user._id
                    }, process.env.jwt_secret);

                    res.json({
                        "token": token,
                        status: "1",
                        "user": user
                    })


                }
            } else {
                res.json({
                    message: 'Email not found',
                    status: "-1"
                })
            }


        } catch (error) {
            res.send(error);
        }

    } catch (err) {
        res.send(err)
       
    }



};
exports.register = async (req, res) => {
    try {
        const value = await regschema.validateAsync(req.body);
        try {
            const emailexist = await User.findOne({
                email: req.body.email
            })

            if (emailexist) {
                res.json({
                    message: 'Email already exists found',
                    status: "-1"
                })
            }else{
                const salt = await bcrypt.genSalt(10);
                const hashpwd = await bcrypt.hash(req.body.password, salt)

                const user = await new User({
                    name: req.body.name,
                    email: req.body.email,
                    password: hashpwd
                });
                const userdata = await user.save();
                const token = await jwt.sign({
                    _id: user._id
                }, process.env.jwt_secret);
                 res.json({
                        "token": token,
                        status: "1",
                        "user": userdata
                    })

            }
        }catch (err) {
            res.send(err)
          
        }

    } catch (err) {
        res.send(err)
      
    }

   
};