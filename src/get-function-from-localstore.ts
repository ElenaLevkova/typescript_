export interface User {
    userName: string,
    avatarUrl: string
}
const initUser: User = { 
  userName: 'Wade Warren2',
  avatarUrl: '/img/avatar.png" alt="Wade Warren'}

localStorage.setItem('user', JSON.stringify(initUser))

export function getUserData() {
  const usertmp: unknown = JSON.parse(localStorage.getItem('user'))
  const userValid = usertmp as User
  return userValid
}

localStorage.setItem('favoritesAmount', '3')

export function getFavoritesAmount(): number {
  const favoritesAmount: unknown = localStorage.getItem('favoritesAmount')
  const favoritesAmountValid = favoritesAmount as number
  return favoritesAmountValid  
}