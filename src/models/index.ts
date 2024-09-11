import { Sequelize } from 'sequelize';
import { User } from './User';
// Import other models

const models = [
  User,
  // Add other models here
];

// Function to initialize all models
export function initializeModels(sequelize: Sequelize) {
  models.forEach(model => model.initialize(sequelize));
}

// Export models as default
export default models;