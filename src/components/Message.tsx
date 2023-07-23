import React from 'react'
import { DocumentData } from '@firebase/firestore'

type Prop2 = {
    message: DocumentData
}

const Message = ({ message }: Prop2) => {
    const isChatGPT = message.user.name === 'ChatGPT'
    return (
        <div className={`py-5 text-white ${isChatGPT && 'bg-[#434654]'}`}>
            <div className={'flex space-x-5 px-10 max-w-2xl mx-auto'}>
                <img src={message.user.avatar} className={'h-8 w-8'} />
                <p className={'text-sm pt-1'}>{message.text}</p>
            </div>
        </div>
    )
}

export default Message
