import { UniqueItemTable } from '@srd/common/interfaces/chapterInterfaces/UniqueItemTables'
import Table from './components/Table'
import { Fragment } from 'react/jsx-runtime'

interface Props {
    tables: UniqueItemTable[]
}

export default function UniqueItemTables({ tables }: Props) {
    return (
        <>
            {tables.map((table, index) => {
                return (
                    <Fragment key={index}>
                        <h2>{table.tableName}</h2>
                        <Table table={table} />
                    </Fragment>
                )
            })}
        </>
    )
}