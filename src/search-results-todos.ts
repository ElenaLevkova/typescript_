import { renderBlock } from './lib.js'
import { TodosArray } from './get-todos.js'

export function renderEmptyOrErrorSearchBlockTodos (reasonMessage: string) {
  renderBlock(
    'search-todo-results-block',
    `
    <div class="no-results-block">
      <img src="img/no-results.png" />
      <p>${reasonMessage}</p>
    </div>
    `
  )
}

export function renderSearchResultsBlockTodos (TodosArray: TodosArray ) {
  const TodosStr = TodosArray.reduce(function(str: string, todo) {
    return str = str + `
      <li class="result">
        userId = ${todo.userId}
        id = ${todo.id}
        title = ${todo.title}
        completed = ${todo.completed}
      </li>
      `
  }, '')
  console.log('renderSearchResultsBlockTodos', TodosArray, TodosStr)
  renderBlock(
    'search-todo-results-block',
    `
    <div class="search-results-header">
        <p>Результаты поиска Todo: </p>
        <br>
        <ul>
      ${TodosStr}
        </ul>
    </div>
   
    `
  )
}
