import { UniqueItemTable } from "@srd/common/interfaces/chapterInterfaces/UniqueItemTables"

interface Props {
    table: UniqueItemTable
}

export default function Table({ table }: Props) {
    const { headers, rows } = table

    return (
        <div className="responsive-table">
            <table className="no-float justify-left">
                <thead>
                    {headers.map((header, index) => {
                        return (
                            <tr key={index}>
                                {header.map((headerRow, rowIndex) => {
                                    if (typeof headerRow === 'string') { return <th key={rowIndex}>{headerRow}</th> }
                                    return <th key={rowIndex} colSpan={headerRow.colSpan}>{headerRow.label}</th>
                                })}
                            </tr>
                        )
                    })}
                </thead>
                <tbody>
                    {rows.map((row, index) => {
                        return (
                            <tr key={index}>
                                {row.map((cell, rowIndex) => <td key={rowIndex}>{cell}</td>)}
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </div>
    )
}