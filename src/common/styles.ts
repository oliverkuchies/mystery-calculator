import { css } from 'lit'

const globalStyles = css`
  :host {
    @import url("https://fonts.googleapis.com/css2?family=Lato:wght@300;400;700&display=swap");

    --primary-color: #1d5ffd;
    --border-color: #232833;
    font-family: "Lato", sans-serif;
  }

  button {
    background-color: var(--primary-color);
    border: none;
    color: white;
    padding: 15px 32px;
    text-align: center;
    text-decoration: none;
    font-size: 20px;
    cursor: pointer;
    border-radius: 5px;
    font-weight: bold;
    width: 250px;
  }

  button:hover {
    background-color: #1d5ffd;
  }

  .page-wrapper {
    position: absolute;
    top: 5vh;
    left: 0;
    bottom: 0;
    right: 0;
    border-radius: 5px;
    color: white;
    z-index: 2;
  }

  .page-content {
    max-width: 800px;
    border: 1px solid var(--border-color);
    box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.2);
    padding: 20px;
    background-color: rgba(35, 36, 41, 0.8);
    margin: 0 auto;
    border-radius: 5px;
  }

  p {
    font-size: 1.5rem;
  }
`

export default globalStyles
