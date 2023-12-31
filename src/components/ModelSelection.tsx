'use client'
import React from 'react'
import useSWR from 'swr'
import Select from 'react-select'

const ModelSelection = () => {
    const fetchModels = (url: string) => fetch(url).then(res => res.json())

    const { data: models, isLoading } = useSWR('/api/getEngines', fetchModels)
    const { data: model, mutate: setModel } = useSWR('model', {
        fallbackData: 'text-davinci-003',
    })

    return (
        <div className={'mt-2'}>
            <Select
                className={'mt-2'}
                isSearchable={true}
                defaultValue={model}
                isLoading={isLoading}
                menuPosition={'fixed'}
                classNames={{
                    control: state => 'bg-[#434654] border-[#434654]',
                }}
                options={models?.modelOptions}
                onChange={e => setModel(e.value)}
            />
        </div>
    )
}

export default ModelSelection
