import { renderSearchFormBlock} from './search-form.js'
import { renderSearchStubBlock } from './search-results.js'
import { renderUserBlock } from './user.js'
import { renderToast } from './lib.js'
import { getUserData, getFavoritesAmount, User } from './get-function-from-localstore.js'
import { getAttr, search, callback } from './search.js'
import { makeDate } from './check-date.js'

window.addEventListener('DOMContentLoaded', () => {
  const userData: User = getUserData()
  renderUserBlock(userData.userName, userData.avatarUrl, getFavoritesAmount())
  renderSearchFormBlock()
  renderSearchStubBlock()
  renderToast(
    {text: 'Это пример уведомления. Используйте его при необходимости', type: 'success'},
    {name: 'Понял', handler: () => {console.log('Уведомление закрыто')}}
  )

  const inpCheckInDate = (document.getElementById('check-in-date'))
  const inpCheckOutDate = (document.getElementById('check-out-date')  as HTMLInputElement)
  inpCheckInDate.addEventListener('input', (event) => getOutDate(event) )

  function getOutDate(event): void {
    event.preventDefault
    const day: Date = new Date((inpCheckInDate  as HTMLInputElement).value )
    day.setDate(day.getDate() + 2)
    const dateNowOut = makeDate(day.getFullYear(), (day.getMonth() + 1 ), day.getDate())
    inpCheckOutDate.value= dateNowOut
  }

  const button = document.getElementById('btn-search')
  button?.addEventListener('click', (event) =>  search(getAttr(event), callback))
  
})  