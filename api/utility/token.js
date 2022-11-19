import jwt from "jsonwebtoken"

/**
 * create token
 */

export const createToken = ( payload, exp ) => {

    const token = jwt.sign(payload, process.env.JWT_SECRET, {
      expiresIn : exp,
    })

    return token;
}