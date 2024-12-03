const [collegeName, setCollegeName] = useState('');
const [email, setEmail] = useState('');
const [contactNumber, setContactNumber] = useState('');
const [password, setPassword] = useState('');

const mongoose = require('mongoose');

// Define the schema for the college
const studentSchema = new mongoose.Schema({
    collegeName: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    contactNumber: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
    },
});

// Create the College model from the schema
const Student = mongoose.model('Student', studentSchema);

// Export the model
module.exports = Student;
