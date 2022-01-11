export interface SearchFormData {
    city: string,
    checkInDate: Date,
    checkOutDate :Date,
    maxPrice: number
  }

export function getAttr(event): SearchFormData  {
  event.preventDefault()
  const inpCity = (document.getElementById('city') as HTMLInputElement).value
  const inpCheckInDate = (document.getElementById('check-in-date') as HTMLInputElement).value as unknown as Date
  const inpCheckOutDate = (document.getElementById('check-out-date') as HTMLInputElement).value as unknown as Date
  const inpMaxPrice = +(document.getElementById('max-price') as HTMLInputElement).value
  const searchData: SearchFormData = {
    city: inpCity,
    checkInDate: inpCheckInDate,
    checkOutDate :inpCheckOutDate,
    maxPrice: inpMaxPrice
  } 
  return searchData
}

interface Place {
    code: number,
    city: string
}

interface Places {
    [index: number]: Place;
  }
  
interface PlacesCallback {
  (error?: Error, Places?: Places): void
}

export const callback: PlacesCallback = (error, Places) => {
  if (error == null && Places != null) {
    console.log(Places)
  } else {
    console.error('Fail', error)
  }
}

const wait = (ms) => new Promise(res => setTimeout(res, ms));

async function startAsync (searchData: SearchFormData) {
  await wait(1000);
  const chance = Math.random()
  const placesRes: Places = []
  if (chance < 0.5) {
    throw 'error'
  }
  else {
    return placesRes
  }
}

export  async function search (searchData: SearchFormData, callback: PlacesCallback) {
  try {
    const res = await startAsync(searchData) as unknown as Places
    callback(null, res)
  }
  catch (err){
    callback(err)
  }
}
