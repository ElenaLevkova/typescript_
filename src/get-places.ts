interface Place {
    code: number,
    city: string
}

export interface PlacesArray {
    [index: number]: Place
  }
  
// export interface PlacesCallback {
//   (error?: Error, Places?: PlacesArray): void
// }

// export const callbackPlaces: PlacesCallback = (error, PlacesArray) => {
//   if (error == null && PlacesArray != null) {
//     console.log(PlacesArray)
//   } else {
//     console.error('Fail', error)
//   }
// }