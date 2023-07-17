import Sequelize from 'sequelize'
import mongoose from 'mongoose'

import User from '../app/models/User'
import Product from '../app/models/Product'
import Category from '../app/models/Category'

import configDatabase from '../config/database'

const models = [User, Product, Category]

class Database {
  constructor() {
    this.init()
    this.mongo()
  }

  init() {
    this.connection = new Sequelize(
      'postgresql://postgres:iuQERgeZ9WAHd8xS1EVB@containers-us-west-195.railway.app:7351/railway'
    )
    models
      .map((model) => model.init(this.connection))
      .map(
        (model) => model.associate && model.associate(this.connection.models)
      )
  }

  mongo() {
    this.mongoConnection = mongoose.connect(
      'mongodb://mongo:fi8QmHuTEaQsCScMqxqi@containers-us-west-57.railway.app:6197',
      {
        useNewUrlParser: true,
        UseUnifiedTopology: true,
      }
    )
  }
}

export default new Database()
