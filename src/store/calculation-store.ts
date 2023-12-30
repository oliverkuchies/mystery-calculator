import { action, computed, makeObservable, observable, toJS } from 'mobx'
import { type Card } from '../types/card'

class CalculationStore {
  cards: Card[] = []

  constructor (cards: Card[] = []) {
    makeObservable(this, {
      cards: observable,
      selectedCards: computed,
      storeCards: action
    })

    this.cards = cards
  }

  get selectedCards (): Card[] {
    return toJS(this.cards).filter((card: Card) => card.selected)
  }

  guessNumber (): number {
    const trickNumbers = this.selectedCards.map(
      (card: Card) => card.trickNumber
    )
    return trickNumbers.reduce(
      (acc: number, trickNumber: number) => acc + trickNumber,
      0
    )
  }

  public updateCard (index: number, card: Card): void {
    this.cards[index] = card
  }

  storeCards (cards: Card[]): void {
    this.cards = cards
  }
}

const calculationStore = new CalculationStore()

export default calculationStore
