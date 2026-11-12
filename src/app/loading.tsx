import React from 'react'

const loading = () => {
  return (
    <div className="flex min-h-screen items-center justify-center">
      <div className="h-12 w-12 animate-spin rounded-full border-4 border-gray-200 border-t-green-400" />
    </div>
  )
}

export default loading