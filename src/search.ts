import { getTodosByCount, TodosArray, ICallback } from './get-todos.js'
import { PlacesArray } from './get-places.js'

export interface SearchFormData {
    city: string,
    checkInDate: Date,
    checkOutDate :Date,
    maxPrice: number,
    countRecord: number
  }

export function getAttr(): SearchFormData  {
  const inpCity = (document.getElementById('city') as HTMLInputElement).value
  const inpCheckInDate = (document.getElementById('check-in-date') as HTMLInputElement).value as unknown as Date
  const inpCheckOutDate = (document.getElementById('check-out-date') as HTMLInputElement).value as unknown as Date
  const inpMaxPrice = +(document.getElementById('max-price') as HTMLInputElement).value
  const inpCountRecord = +(document.getElementById('count-record') as HTMLInputElement).value
  const searchData: SearchFormData = {
    city: inpCity,
    checkInDate: inpCheckInDate,
    checkOutDate :inpCheckOutDate,
    maxPrice: inpMaxPrice,
    countRecord: inpCountRecord
  } 
  return searchData
}

const wait = (ms: number) => new Promise(res => setTimeout(res, ms));

async function startAsync (searchData: SearchFormData) {
  if (searchData.countRecord) {
    const todosData: TodosArray = await getTodosByCount(searchData.countRecord)
    return todosData
  } 
  else {
    await wait(1000);
    const chance = Math.random()
    const placesData: PlacesArray = []
    if (chance < 0.5) {
      throw 'error'
    }
    else {
      console.log('startAsync', placesData)
      return placesData
    }
  }
}

export  async function search (searchData: SearchFormData, callback: ICallback) {
  try {
    const res = await startAsync(searchData) 
    callback(undefined, res, searchData)
  }
  catch (err) {
    callback(err)
  }
}
