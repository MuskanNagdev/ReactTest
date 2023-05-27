import React from 'react'
import {useParams} from 'react-router-dom'

export default function DetailUser() {
    const params = useParams()
    const userId=params.userId
    return (
    <h1>
        here is the detail of user {userId}
    </h1>
  )
}
