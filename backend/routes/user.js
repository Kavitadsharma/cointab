
const express=require("express")
const userRoute=express.Router()
const {User}=require("../model/user")




userRoute.post('/api/addUser', async (req, res) => {
  const user = req.body;

  try {
   
      
      const existingUser = await User.findOne({ Email: user.email });

      if (!existingUser) {
     
        await User.create({
          userId: user.id,
          Name: user.name,
          Email: user.email,
          Phone: user.phone,
          Website: user.website,
          Company: user.company ? user.company.name : '', 
          City: user.address.city
        });
        
      } else {
        // If user with the same email already exists, skip creating the user
        console.log(`User with email ${user.email} already exists, skipping...`);
      
    }

    res.send('Users added successfully');
  } catch (error) {
    console.error(error);
    res.status(500).send('Internal Server Error');
  }
});










  










module.exports={userRoute}