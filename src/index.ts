import { renderSearchFormBlock} from './search-form.js'
import { renderSearchStubBlock } from './search-results.js'
import { renderUserBlock } from './user.js'
import { renderToast } from './lib.js'
import { getUserData, getFavoritesAmount, User } from './get-function-from-localstore.js'
import { getAttr, search } from './search.js'
import { callback } from './get-todos.js'
import { makeDate } from './check-date.js'
import { renderBlock } from './lib.js'

window.addEventListener('DOMContentLoaded', () => {
  const userData: User | undefined = getUserData()
  if (userData != undefined) {
    renderUserBlock(userData.userName, userData.avatarUrl, getFavoritesAmount())
  }
  renderSearchFormBlock()
  renderSearchStubBlock()
  renderToast(
    {text: 'Это пример уведомления. Используйте его при необходимости', type: 'success'},
    {name: 'Понял', handler: () => {console.log('Уведомление закрыто')}}
  )

  const inpCheckInDate: HTMLElement | null = (document.getElementById('check-in-date'))
  const inpCheckOutDate = (document.getElementById('check-out-date')  as HTMLInputElement)
  if (inpCheckInDate  != undefined) {
    inpCheckInDate.addEventListener('input', (event) => getOutDate(event) )
  }
  
  function getOutDate(event: Event): void {
    event.preventDefault
    const day: Date = new Date((inpCheckInDate  as HTMLInputElement).value )
    day.setDate(day.getDate() + 2)
    const dateNowOut = makeDate(day.getFullYear(), (day.getMonth() + 1 ), day.getDate())
    inpCheckOutDate.value= dateNowOut
  }

  const button = document.getElementById('btn-search')
  button?.addEventListener('click', (event) =>  {
    renderBlock('search-results-block','')
    renderBlock('search-todo-results-block','')
    event.preventDefault()
    search(getAttr(), callback)
  })
  
})  