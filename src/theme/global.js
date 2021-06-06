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
  
  h1 {
    font-family: 'JetBrains Mono', sans-serif;
    font-size: 30px;
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
  
  .btn {
    user-select: none;
    transition: opacity 0.1s;
    color: ${({ theme }) => theme.taskGray};
    
    &:hover,
    &:active {
      &.btn-delete {
      color: ${({ theme }) => theme.lightRed};
      }

      &.btn-edit {
      color: ${({ theme }) => theme.yellow};
      }
    }
    
    &-done {
      color: ${({ theme }) => theme.lightGreen};
      
      @media (min-width: 768px) {
        color: ${({ theme }) => theme.green};
    
        &:hover {
          color: ${({ theme }) => theme.lightGreen};
        }
      }
    }

    &-close {
      color: ${({ theme }) => theme.lightRed};
      
      @media (min-width: 768px) {
            color: ${({ theme }) => theme.red};
      
      &:hover {
        color: ${({ theme }) => theme.lightRed};
      }
      }
    }
  }
`
