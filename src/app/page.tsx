import React from 'react'
import {
    BoltIcon,
    ExclamationTriangleIcon,
    SunIcon,
} from '@heroicons/react/24/solid'

const Page = () => {
    return (
        <div
            className={
                'text-white flex flex-col items-center justify-center h-screen px-2'
            }>
            <h1 className={'text-5xl font-black mb-20'}>ChatGPT</h1>
            <div className={'flex items-center space-x-2'}>
                <div>
                    <div className={'flex flex-col items-center mb-5'}>
                        <div>
                            <SunIcon className={'h-6 w-6 '} />
                        </div>
                        <h2 className={'text-lg'}>Examples</h2>
                    </div>
                    <div className={'space-y-2'}>
                        <p className={'text-info'}>
                            Explain quantum computing in simple terms
                        </p>
                        <p className={'text-info'}>
                            Got any creative ideas for a 10 year old’s
                            birthday?
                        </p>
                        <p className={'text-info'}>
                            How do I make an HTTP request in Javascript?
                        </p>
                    </div>
                </div>
                <div>
                    <div className={'flex flex-col items-center mb-5'}>
                        <div>
                            <BoltIcon className={'h-6 w-6 '} />
                        </div>
                        <h2 className={'text-lg'}>Capabilities</h2>
                    </div>
                    <div className={'space-y-2'}>
                        <p className={'text-info'}>
                            Remembers what user said earlier in the conversation
                        </p>
                        <p className={'text-info'}>
                            Allows user to provide follow-up corrections
                        </p>
                        <p className={'text-info'}>
                            Trained to decline inappropriate requests
                        </p>
                    </div>
                </div>
                <div>
                    <div className={'flex flex-col items-center mb-5'}>
                        <div>
                            <ExclamationTriangleIcon className={'h-6 w-6 '} />
                        </div>
                        <h2 className={'text-lg'}>Limitations</h2>
                    </div>
                    <div className={'space-y-2'}>
                        <p className={'text-info'}>
                            May occasionally generate incorrect information
                        </p>
                        <p className={'text-info'}>
                            May occasionally produce harmful instructions or
                            biased content
                        </p>
                        <p className={'text-info'}>
                            Limited knowledge of world and events after 2021
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Page
