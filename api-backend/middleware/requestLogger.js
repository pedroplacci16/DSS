const logger = (req, res, next) => {
    const fecha = new Date().toISOString();
    const { ip, method, path } = req;
    const logString = `[${fecha}]${ip}|${method}|${path}`;
    console.log(logString);

    next();
};

module.exports = logger;
