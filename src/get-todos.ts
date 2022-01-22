import { renderSearchResultsBlockTodos } from './search-results-todos.js'
import { renderSearchResultsBlock, renderEmptyOrErrorSearchBlock } from './search-results.js'
import { SearchFormData } from './search.js'
import {PlacesArray} from './get-places.js'

export interface Todos {
  userId: number
  id: number
  title :string
  completed: boolean
}
export interface TodosArray extends Array<Todos>{
  [index: number]: Todos
}


export  interface ICallback {
    (error?: Error, data?: TodosArray | PlacesArray, searchData?: SearchFormData): void
  }

export const callback: ICallback = (error: Error | undefined, dataArray: TodosArray | PlacesArray | undefined, searchData: SearchFormData | undefined) => {
  if (error == null && dataArray != null && searchData != undefined) {
    if (searchData.countRecord) {
      renderSearchResultsBlockTodos(dataArray as Array<Todos>)
    } else {
      renderSearchResultsBlock(dataArray as PlacesArray)
    }
  } else {
    console.error('Fail', error)
    renderEmptyOrErrorSearchBlock('Что-то пошло не так....')
  }
}
  

export async function getTodosByCount(count: number): Promise<TodosArray> {
  const response = await fetch('https://jsonplaceholder.typicode.com/todos/')
  const data = await response.json()
  
  const dataFilter: TodosArray = data.splice(0, count)

  return dataFilter
}