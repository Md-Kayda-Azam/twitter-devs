import bcrypt from "bcryptjs"

/**
 * password hash
 */

export const hashPassword = (password) => {

    // gensalt 
    const salt = bcrypt.genSaltSync(12);
    const pass = bcrypt.hashSync(password, salt);

    return pass;
}



/**
 * password hash
 */

export const passwordVerify = (password, hash) => {

    const pass = bcrypt.compareSync(password, hash)

    return pass;
}