import { renderSearchFormBlock } from './search-form.js'
import { renderSearchStubBlock } from './search-results.js'
import { renderUserBlock } from './user.js'
import { renderToast } from './lib.js'
console.log('fffff')
window.addEventListener('DOMContentLoaded', () => {
  console.log('ddddd')
  renderUserBlock('Wade Warren1', '/img/avatar.png" alt="Wade Warren', 10)
  renderSearchFormBlock('', '')
  renderSearchStubBlock()
  renderToast(
    {text: 'Это пример уведомления. Используйте его при необходимости', type: 'success'},
    {name: 'Понял', handler: () => {console.log('Уведомление закрыто')}}
  )
})  