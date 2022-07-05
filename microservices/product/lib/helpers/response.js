const buildResponse = (statusCode, data) => {
    const response = {
        statusCode: statusCode,
        headers: {
            "Access-Control-Allow-Origin": "*",
        },
        body: JSON.stringify(data),
    };

    return response;
};

const handleSuccess = async (data) => {
    return await buildResponse(200, data);
};

const handleError = async (error) => {
    return await buildResponse(error.statusCode || 500, { message: error.body });
};

module.exports = { handleSuccess, handleError, buildResponse };
