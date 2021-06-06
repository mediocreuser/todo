import { createGlobalStyle } from 'styled-components'
import reset from 'styled-reset'
import WebFont from 'webfontloader'

WebFont.load({
	google: {
		families: ['Roboto', 'Share Tech Mono'],
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
    margin: 0;
    padding: 0;
    
    height: 100vh;
    
    text-align: center;
    
    font-family: 'Roboto', sans-serif;
    color: ${({ theme }) => theme.text};
    word-break: break-word;
    
    background: ${({ theme }) => theme.body};
  }
  
  ul,
  li {
    margin: 0;
    padding: 0;
    list-style: none;
  }
  
  h1 {
    font-family: 'Share Tech Mono', sans-serif;
    font-size: 50px;
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
    padding: 0 15px;
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
  
  	@keyframes scaleIn {
		from {
			max-height: 106px;
			opacity: 1;
		}
		to {
			max-height: 0;
			opacity: 0;
		}
	}

	@keyframes scaleOut {
		from {
			max-height: 0;
			opacity: 0;
		}
		to {
			max-height: 106px;
			opacity: 1;
		}
	}
`
