const mongoose = require('mongoose');
const { Schema } = mongoose;

const musicianProfileSchema = new Schema({
  user: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  bio: {
    type: String,
    trim: true,
    maxlength: 1000
  },
  location: {
    city: String,
    state: String,
    country: String,
    coordinates: {
      type: [Number], // [longitude, latitude]
      index: '2dsphere'
    }
  },
  instruments: [{
    instrument: {
      type: String,
      required: true
    },
    yearsOfExperience: Number,
    skillLevel: {
      type: String,
      enum: ['beginner', 'intermediate', 'advanced', 'professional']
    },
    isPrimary: {
      type: Boolean,
      default: false
    }
  }],
  genres: [{
    type: String
  }],
  rates: {
    hourly: {
      amount: Number,
      currency: {
        type: String,
        default: 'USD'
      }
    },
    daily: {
      amount: Number,
      currency: {
        type: String,
        default: 'USD'
      }
    },
    projectBased: Boolean
  },
  audioSamples: [{
    title: String,
    description: String,
    fileUrl: String,
    fileKey: String,
    instruments: [String],
    genres: [String],
    uploadDate: {
      type: Date,
      default: Date.now
    }
  }],
  videoSamples: [{
    title: String,
    description: String,
    embedUrl: String,
    uploadDate: {
      type: Date,
      default: Date.now
    }
  }],
  credits: [{
    projectTitle: String,
    artist: String,
    role: String,
    year: Number,
    url: String
  }],
  equipment: [{
    category: String,
    name: String,
    description: String
  }],
  availability: {
    type: Schema.Types.ObjectId,
    ref: 'Availability'
  },
  studioReady: {
    type: Boolean,
    default: false
  },
  remoteSession: {
    type: Boolean,
    default: false
  },
  travelWillingness: {
    type: String,
    enum: ['none', 'local', 'regional', 'national', 'international'],
    default: 'local'
  },
  featuredMusician: {
    type: Boolean,
    default: false
  },
  verificationStatus: {
    type: String,
    enum: ['unverified', 'pending', 'verified'],
    default: 'unverified'
  },
  verificationDocuments: [{
    documentType: String,
    fileUrl: String,
    fileKey: String,
    uploadDate: {
      type: Date,
      default: Date.now
    },
    status: {
      type: String,
      enum: ['pending', 'approved', 'rejected'],
      default: 'pending'
    }
  }],
  socialMedia: {
    website: String,
    instagram: String,
    facebook: String,
    twitter: String,
    youtube: String,
    soundcloud: String,
    spotify: String,
    bandcamp: String,
    linkedin: String
  },
  createdAt: {
    type: Date,
    default: Date.now
  },
  updatedAt: {
    type: Date,
    default: Date.now
  }
});

// Update timestamp on save
musicianProfileSchema.pre('save', function(next) {
  this.updatedAt = Date.now();
  next();
});

// Create text index for search
musicianProfileSchema.index(
  { 'instruments.instrument': 'text', 'genres': 'text', 'bio': 'text' },
  { weights: { 'instruments.instrument': 10, 'genres': 5, 'bio': 1 } }
);

module.exports = mongoose.model('MusicianProfile', musicianProfileSchema);