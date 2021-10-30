
const getData = async (schema) => {
try {
  let data = await schema.find()
  return data
} catch(err) {
  throw new Error('Error getting data in database')
}
}

const saveData = async (schema, data) => {
  try {
    let new_data = new schema(data)
    let data_created = await new_data.save()
    return data_created
  } catch(err) {
    throw new Error('Error saving data in database')
  }
  }

module.exports = {
  getData,
  saveData
}