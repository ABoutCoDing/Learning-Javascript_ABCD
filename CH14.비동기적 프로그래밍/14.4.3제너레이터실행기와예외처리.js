function* theFutureIsNow() {
    let data;
    try {
        data = yield Promise.all([
            nfcall(fs.readFile, 'a.txt'),
            nfcall(fs.readFile, 'b.txt'),
            nfcall(fs.readFile, 'c.txt'),
        ]);
    } catch (err) {
        console.error("Unble to read one or more input files: " + err.message);
        throw err;
    }
    yield ptimeout(60*1000);
    try {
        yield nfcall(fa.writeFile, 'd.txt', data[0]+data[1]+dat[2]);
    } catch (err) {
        console.log("Unable to write output file: " + err.message);
        throw err;
    }
}