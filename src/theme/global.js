import { createGlobalStyle } from 'styled-components'
import reset from 'styled-reset'
import WebFont from 'webfontloader'

WebFont.load({
	google: {
		families: ['JetBrains Mono', 'Roboto'],
	},
})

export const GlobalStyles = createGlobalStyle`
  ${reset}
  
  h1{font-size:  30px;}
  
  *,
  *::after,
  *::before {
    box-sizing: border-box;
  }
  
  body {
    height: 100vh;
    margin: 0;
    padding: 0;
    
    text-align: center;
    
    font-family: 'Roboto', sans-serif;
    color: ${({ theme }) => theme.text};
    word-break: break-word;
    
    background: ${({ theme }) => theme.body};
    
    // transition: all 0.25s linear;
  }
  
  ul,
  li {
    margin: 0;
    padding: 0;
    list-style: none;
  }
  
  ul {
    margin-top: 30px;
  }
  
  h1 {
  font-family: 'JetBrains Mono', sans-serif;
  }
  
  .App {
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
  }
  
  .container {
    width: 100%;
	  max-width: 1200px;
    margin: 0 auto;
    padding: 15px;
  }
  
  .btn-close {
    color: ${({ theme }) => theme.lightRed};
  }
    
  .btn-done {
    color: ${({ theme }) => theme.lightGreen};
  }
    
  .btn-edit {
    color: ${({ theme }) => theme.yellow};
  }
    
  .btn-delete {
    color: ${({ theme }) => theme.red};
    
    &:hover {
    color: ${({ theme }) => theme.lightRed};
    }
  }
`
