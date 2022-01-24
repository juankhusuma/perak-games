var gameData = {
    score: 0,
    points: [],
    keystrokes: [],
};
var encKey = "default-key"

function uploadGameData() {
    console.log(encKey)
    var ciphertext = CryptoJS.AES.encrypt(JSON.stringify(gameData), encKey).toString();
    var result = pako.gzip(ciphertext)
    window.top.postMessage(result, '*')
    console.log(result);
    console.log(decrypt(result, encKey))
}

function decrypt(compressedResult, encKey) {
    var decoder = new TextDecoder();
    const decompressed = pako.inflate(compressedResult)
    const decryptedBytes = CryptoJS.AES.decrypt(decoder.decode(decompressed), encKey)
    return JSON.parse(decryptedBytes.toString(CryptoJS.enc.Utf8))
}

function reset() {
    gameData = {
        score: 0,
        points: [],
        keystrokes: [],
    };
}

window.onmessage = function (e) {
    if (e.data.startsWith('k')) {
        encKey = e.data.split("k")[1]
    }
};

