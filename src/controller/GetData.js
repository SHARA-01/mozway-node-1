import { User } from '../models/user.model.js';

const DatabaseData = async (req, res) => {
    const data = await User.find({});
    console.log(data)
    return data;
}

export default DatabaseData;