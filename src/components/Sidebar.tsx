'use client'
import React from 'react'
import NewChatButton from '@/components/NewChatButton'
import { signOut, useSession } from 'next-auth/react'
import { useCollection } from 'react-firebase-hooks/firestore'
import { collection, orderBy, query } from '@firebase/firestore'
import { db } from '../../firebase'
import ChatRow from '@/components/ChatRow'
import ModelSelection from '@/components/ModelSelection'

const Sidebar = () => {
    const { data: session } = useSession()
    const [chats, loading, error] = useCollection(
        session &&
            query(
                collection(db, 'users', session.user?.email!, 'chats'),
                orderBy('createdAt', 'desc'),
            ),
    )
    return (
        <div className={'p-2 flex flex-col h-screen'}>
            <div className={'flex-1'}>
                <div>
                    <NewChatButton />
                    <div className={'hidden sm:inline'}>
                        <ModelSelection />
                    </div>
                    <div className={'mt-4'}>
                        {loading ? (
                            <div
                                className={
                                    'text-white animate-plus text-center text-xl py-12'
                                }>
                                Loading ...
                            </div>
                        ) : (
                            chats?.docs.map(chat => (
                                <ChatRow key={chat.id} id={chat.id} />
                            ))
                        )}
                    </div>
                </div>
            </div>
            {session && (
                <img
                    onClick={() => signOut()}
                    src={session.user?.image!}
                    alt={'Profile picture'}
                    className={
                        'h-12 w-12 rounded-full cursor-pointer mx-auto mb-2 hover:opacity-50'
                    }
                />
            )}
        </div>
    )
}

export default Sidebar
