import mongoose from 'mongoose';

const UserSchema = new mongoose.Schema({
    fullName: {
        type: String,
        required: true,
        trim: true
    },
    email: {
        type: String,
        required: true,
        unique: true,
        lowercase: true,
        trim: true
    },
    password: {
        type: String,
        required: function () {
            return this.provider === 'email';
        }
    },
    googleId: {
        type: String,
        sparse: true // Allows multiple null values but unique non-null values
    },
    picture: {
        type: String,
        default: null
    },
    provider: {
        type: String,
        enum: ['email', 'google'],
        required: true
    },
    isActive: {
        type: Boolean,
        default: true
    },
    lastLogin: {
        type: Date,
        default: null
    }
}, {
    timestamps: true // Adds createdAt and updatedAt automatically
});

// Indexes for better performance
UserSchema.index({ email: 1 });
UserSchema.index({ googleId: 1 });
UserSchema.index({ provider: 1 });

// Instance methods
UserSchema.methods.toJSON = function () {
    const user = this.toObject();
    delete user.password; // Never return password in JSON
    return user;
};

// Static methods
UserSchema.statics.findByEmail = function (email) {
    return this.findOne({ email: email.toLowerCase() });
};

UserSchema.statics.findByGoogleId = function (googleId) {
    return this.findOne({ googleId });
};

// Prevent model re-compilation during development
export default mongoose.models.User || mongoose.model('User', UserSchema);