
import { renderBlock } from './lib.js'
import { getCheckDates } from './check-date.js'

export function renderSearchFormBlock (dateIn?: string, dateOut?: string) {
  const {
    checkInDateMin,
    checkInDate,
    checkOutDate,
    checkInDateMax,
    nextDateNow
  } = getCheckDates (dateIn, dateOut)

  renderBlock(
    'search-form-block',
    `
    <form>
      <fieldset class="search-filedset">
        <div class="row">
          <div>
            <label for="city">Город</label>
            <input id="city" type="text" disabled value="Санкт-Петербург" />
            <input type="hidden" disabled value="59.9386,30.3141" />
          </div>
          <!--<div class="providers">
            <label><input type="checkbox" name="provider" value="homy" checked /> Homy</label>
            <label><input type="checkbox" name="provider" value="flat-rent" checked /> FlatRent</label>
          </div>--!>
        </div>
        <div class="row">
          <div>
            <label for="check-in-date">Дата заезда</label>
            <input id="check-in-date" type="date" placeholder="dd-mm-yyyy" value=${checkInDate} min=${checkInDateMin} max=${checkInDateMax} name="checkin" />
          </div>
          <div>
            <label for="check-out-date">Дата выезда</label>
            <input id="check-out-date" type="date" value=${checkOutDate} min=${nextDateNow} max=${checkInDateMax} name="checkout" />
          </div>
          <div>
            <label for="max-price">Макс. цена суток</label>
            <input id="max-price" type="text" value="" name="price" class="max-price" />
          </div>
          <div>
            <div><button id="btn-search">Найти</button></div>
          </div>
        </div>
      </fieldset>
    </form>
    `
  )
}

