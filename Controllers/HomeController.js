const HomeController = {
    getHomePage: (request, response)=>{
        response.send({
            call: true,
            message: "Welcome to Movies and Shows Arena"
        })
    }
}

module.exports = HomeController;