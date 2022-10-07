// (React) src/components/SignUpForm/SignUpForm.jsx <--> users-service.js <--> users-api.js <-Internet-> server.js (Express) <--> Routes


  
  const create = (req, res) => {
    res.status(200).json({
      user: {
        name: req.body.name,
        email: req.body.email
      }
    });
  }

  module.exports = {
    create
  };