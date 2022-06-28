import {Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow} from "@mui/material";

const CustomTable = ({columns, rows}) => (<Paper sx={{
    width: '95%',
    overflow: 'hidden',
    justifyContent: 'center'
}}>
    <TableContainer sx={{maxHeight: 440}}>
        <Table stickyHeader aria-label="sticky table">
            <TableHead>
                <TableRow>
                    {columns.map((column) => (
                        <TableCell
                            key={column.id}
                            align="left"
                            style={{minWidth: column.minWidth}}
                        >
                            {column.label}
                        </TableCell>
                    ))}
                </TableRow>
            </TableHead>
            <TableBody>
                {rows
                    .map((row, index) => (
                        <TableRow hover role="checkbox" tabIndex={-1} key={index}>
                            {columns
                                .map((column) => {
                                    const value = row[column.id]
                                    return (
                                        <TableCell key={column.id} align={column.align}>
                                            {column.format && typeof value === 'number'
                                                ? column.format(value)
                                                : value}
                                        </TableCell>
                                    )
                                })}
                        </TableRow>
                    ))}
            </TableBody>
        </Table>
    </TableContainer>
</Paper>)

export default CustomTable