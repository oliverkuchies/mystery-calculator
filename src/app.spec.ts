import '@testing-library/jest-dom'
import '../src/app'
import { screen } from 'shadow-dom-testing-library'

test('Test the sequence of pages', async () => {
  const firstTitle = await screen.findByShadowText(
    'You are encountering the Mystery Calculator.'
  )
  expect(firstTitle)

  const firstButton = await screen.findByShadowText('Lets go!')
  firstButton.click()

  const secondTitle = await screen.findByShadowText(
    'Choose a number between 1 and 63'
  )
  expect(secondTitle)

  const secondButton = await screen.findByShadowText('I have a number')
  secondButton.click()

  const thirdTitle = await screen.findByShadowText(
    'Please select the cards that contain your number.'
  )
  expect(thirdTitle)

  // Click cards 1,2,3 and number will be 7
  const firstCard = await screen.findByShadowTestId('card-0')
  firstCard.click()

  const secondCard = await screen.findByShadowTestId('card-1')
  secondCard.click()

  const thirdCard = await screen.findByShadowTestId('card-2')
  thirdCard.click()

  // Unselect then reselect
  thirdCard.click()
  thirdCard.click()

  const thirdButton = await screen.findByShadowText('Guess my number!')
  thirdButton.click()

  const fourthTitle = await screen.findByShadowText('I know your number!')
  expect(fourthTitle)

  const result = await screen.findByShadowText('It is 7')
  expect(result)

  const fourthButton = await screen.findByShadowText('Play again!')
  fourthButton.click()

  expect(firstTitle)
})
