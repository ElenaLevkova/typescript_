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
export interface TodosArray {
    [index: number]: Todos
}

export  interface ICallback {
    (error?: Error, data?: TodosArray | PlacesArray, searchData?: SearchFormData): void
  }

export const callback: ICallback = (error, dataArray, searchData) => {
  if (error == null && dataArray != null) {
    if (searchData.countRecord) {
      renderSearchResultsBlockTodos(dataArray)
    } else {
      renderSearchResultsBlock(dataArray)
    }
  } else {
    console.error('Fail', error)
    renderEmptyOrErrorSearchBlock('Что-то пошло не так....')
  }
}
  

export async function getTodosByCount(count): Promise<TodosArray> {
  const response = await fetch('https://jsonplaceholder.typicode.com/todos/')
  const data = await response.json()
  
  const dataFilter: TodosArray = data.splice(0, count)

  return dataFilter
}