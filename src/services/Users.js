import axios from "axios";

  export const getUsers = async () => {
    try {
        let respuestaBack = await axios.get(`https://randomuser.me/api/?results=30`)
        return({
            status:200,
            users:respuestaBack.data.results
        })
    } catch (err) {
      console.log('error en getUsers',err);
      return { status: 505,users:[]};
    }
  };

  