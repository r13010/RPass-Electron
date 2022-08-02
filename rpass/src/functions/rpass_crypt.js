const { createCipheriv, createDecipheriv, createHash } = require('crypto');

function Rencrypt(text, key, salt) {
    // Unifiy key and salt to be a certain lenght\
    var saltUnified = UnifiySalt(salt);
    var keyUnified = UnifiyKey(key);
    
    // Encrypt
    try {
        const cipher = createCipheriv('aes-256-cbc', keyUnified, saltUnified);
        var hash = cipher.update(text, 'utf8', 'hex') + cipher.final('hex');
        return hash;
    } catch (error) {
        console.log("RSCRIPT: bad_encrypt");
        console.log(error);
        return "RSCRIPT: bad_encrypt";
    }
}

function Rdecrypt(hash, key, salt) {
    // Unifiy key and salt to be a certain lenght
    var saltUnified = UnifiySalt(salt);
    var keyUnified = UnifiyKey(key);
    // Decrypt
    try {
        const decipher = createDecipheriv('aes-256-cbc', keyUnified, saltUnified);
        var text = decipher.update(hash, 'hex', 'utf8') + decipher.final('utf8');
        return text;
    } catch (error) {
        console.log("RSCRIPT: bad_decrypt");
        console.log(error);
        return "RSCRIPT: bad_decrypt";
    }
}

function UnifiyKey(key) {
    // INFO: Master password is considered the key that's used to encrypt/decrypt the text
    var keyUnified = createHash('sha256').update(key).digest('base64').slice(0, 32);
    return keyUnified;
}

function UnifiySalt(salt) {
    // INFO: The super secret code (or the initialization vector/iv) is considered the salt that's used to encrypt/decrypt the text
    var saltN = parseInt(salt, 10);
    return (saltN + (saltN * 100000000)).toString();
}