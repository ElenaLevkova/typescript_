import { renderBlock } from './lib.js'

export function renderEmptyOrErrorSearchBlockTodos (reasonMessage) {
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

export function renderSearchResultsBlockTodos (TodosArray) {
  const TodosStr = TodosArray.reduce(function(str, todo) {
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
