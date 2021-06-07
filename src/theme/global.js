import { createGlobalStyle } from 'styled-components'
import reset from 'styled-reset'
import WebFont from 'webfontloader'

WebFont.load({
	google: {
		families: ['Roboto', 'Share Tech Mono', 'Material Icons', 'Material Icons Round'],
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
  
  input {
  	font-family: inherit;
    font-size: inherit;
    color: inherit;
  
    background: none;
    border: none;
    
    &:focus {
		  outline: none;
	  }
  }
  
  button {
    background: none;
    border: none;
    padding: 0;
    cursor: pointer;
        font-family: inherit;
    font-size: inherit;
    color: inherit;
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
