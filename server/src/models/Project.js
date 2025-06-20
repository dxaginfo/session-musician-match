const mongoose = require('mongoose');
const { Schema } = mongoose;

const projectSchema = new Schema({
  client: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  title: {
    type: String,
    required: true,
    trim: true
  },
  description: {
    type: String,
    required: true,
    trim: true
  },
  projectType: {
    type: String,
    enum: ['recording', 'live', 'remote', 'other'],
    required: true
  },
  genres: [{
    type: String
  }],
  instrumentsNeeded: [{
    instrument: {
      type: String,
      required: true
    },
    quantity: {
      type: Number,
      default: 1
    },
    description: String,
    filled: {
      type: Boolean,
      default: false
    }
  }],
  budget: {
    minAmount: Number,
    maxAmount: Number,
    currency: {
      type: String,
      default: 'USD'
    },
    paymentType: {
      type: String,
      enum: ['hourly', 'daily', 'fixed'],
      default: 'hourly'
    }
  },
  location: {
    type: {
      type: String,
      enum: ['Point'],
      default: 'Point'
    },
    coordinates: {
      type: [Number], // [longitude, latitude]
      index: '2dsphere'
    },
    address: {
      city: String,
      state: String,
      country: String,
      formattedAddress: String
    },
    remote: {
      type: Boolean,
      default: false
    }
  },
  timeframe: {
    startDate: Date,
    endDate: Date,
    flexibleDates: {
      type: Boolean,
      default: false
    },
    estimatedDuration: {
      value: Number,
      unit: {
        type: String,
        enum: ['hours', 'days', 'weeks']
      }
    }
  },
  attachments: [{
    name: String,
    fileUrl: String,
    fileKey: String,
    fileType: String,
    uploadDate: {
      type: Date,
      default: Date.now
    }
  }],
  status: {
    type: String,
    enum: ['draft', 'open', 'in_progress', 'completed', 'cancelled'],
    default: 'draft'
  },
  visibility: {
    type: String,
    enum: ['public', 'private', 'invitation'],
    default: 'public'
  },
  invitedMusicians: [{
    musician: {
      type: Schema.Types.ObjectId,
      ref: 'User'
    },
    status: {
      type: String,
      enum: ['pending', 'accepted', 'declined'],
      default: 'pending'
    },
    invitedAt: {
      type: Date,
      default: Date.now
    },
    respondedAt: Date
  }],
  applications: [{
    musician: {
      type: Schema.Types.ObjectId,
      ref: 'User'
    },
    message: String,
    proposedRate: {
      amount: Number,
      currency: {
        type: String,
        default: 'USD'
      },
      rateType: {
        type: String,
        enum: ['hourly', 'daily', 'fixed']
      }
    },
    status: {
      type: String,
      enum: ['pending', 'accepted', 'rejected'],
      default: 'pending'
    },
    appliedAt: {
      type: Date,
      default: Date.now
    },
    updatedAt: {
      type: Date,
      default: Date.now
    }
  }],
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
projectSchema.pre('save', function(next) {
  this.updatedAt = Date.now();
  next();
});

// Create text index for search
projectSchema.index(
  { title: 'text', description: 'text', 'instrumentsNeeded.instrument': 'text', genres: 'text' },
  { weights: { title: 10, 'instrumentsNeeded.instrument': 5, genres: 3, description: 1 } }
);

module.exports = mongoose.model('Project', projectSchema);