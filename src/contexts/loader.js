import React, { useState, useCallback } from 'react'

const LoaderContext = React.createContext({})

export const ProvideLoader = ({children}) => {
  const [loadingMessages, setLoadingMessages] = useState([])

  const setMessage = useCallback(messageConfig => {
    setLoadingMessages(
      Array.from(
        new Set([...loadingMessages, messageConfig])
      )
    )
  },[])

  const clearLoadingMessage = useCallback(messageConfig => {
    setLoadingMessages(loadingMessages.filter(config => config.key === messageConfig))
  }, [])

  return (
    <div>
      <LoaderContext.Provider value={[loadingMessages, setMessage, clearLoadingMessage]}>
        {children}
      </LoaderContext.Provider>
    </div>
  )
}

export const withLoader = Cmpt => props => (
  <LoaderContext.Consumer>
    {([loadingMessages, setMessage, clearLoadingMessage]) => <Cmpt
      setLoadingMessage={setMessage}
      loadingMessages={loadingMessages}
      clearLoadingMessage={clearLoadingMessage}
      {...props}
    />}
  </LoaderContext.Consumer>
)
