const stopProcess = (code, ...messages) => {
    messages.length && messages.forEach(str => console.error(str));
    process.exit(code);
}

module.exports = stopProcess
