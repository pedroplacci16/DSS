const notFound = (req, res, next) => {
    res.status(404).json({
        error: 'Not Found',
    });

    next();
};

module.exports = notFound;
