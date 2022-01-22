export interface User {
    userName: string,
    avatarUrl: string
}
const initUser: User = { 
  userName: 'Wade Warren2',
  avatarUrl: '/img/avatar.png" alt="Wade Warren'}

localStorage.setItem('user', JSON.stringify(initUser))

export function getUserData(): User | undefined {
  const u: string | null = localStorage.getItem('user')
  if (u != null) {
    const usertmp: unknown = JSON.parse(u as string)
    const userValid = usertmp as User
    return userValid
  }
  return undefined

}

localStorage.setItem('favoritesAmount', '3')

export function getFavoritesAmount(): number {
  const favoritesAmount: unknown = localStorage.getItem('favoritesAmount')
  const favoritesAmountValid = favoritesAmount as number
  return favoritesAmountValid  
}