import type { TableHTMLAttributes, HTMLAttributes } from 'react'

type TableProps = TableHTMLAttributes<HTMLTableElement>
type TableHeaderProps = HTMLAttributes<HTMLTableSectionElement>
type TableBodyProps = HTMLAttributes<HTMLTableSectionElement>
type TableRowProps = HTMLAttributes<HTMLTableRowElement>
type TableHeadProps = HTMLAttributes<HTMLTableCellElement>
type TableCellProps = HTMLAttributes<HTMLTableCellElement>

// 테이블 컴포넌트
export const Table = ({ className, ...props }: TableProps) => (
  <div className="w-full overflow-auto">
    <table className={`table-fixed w-full caption-bottom text-sm ${className}`} {...props} />
  </div>
)

export const TableHeader = ({ className, ...props }: TableHeaderProps) => (
  <thead className={`[&_tr]:border-b ${className}`} {...props} />
)

export const TableBody = ({ className, ...props }: TableBodyProps) => (
  <tbody className={`[&_tr:last-child]:border-0 ${className}`} {...props} />
)

export const TableRow = ({ className, ...props }: TableRowProps) => (
  <tr
    className={`border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted h-14 ${className}`}
    {...props}
  />
)

export const TableHead = ({ className, ...props }: TableHeadProps) => (
  <th
    className={`h-10 px-2 text-left align-middle font-medium text-muted-foreground [&:has([role=checkbox])]:pr-0 ${className}`}
    {...props}
  />
)

export const TableCell = ({ className, ...props }: TableCellProps) => (
  <td className={`p-2 align-middle [&:has([role=checkbox])]:pr-0 ${className}`} {...props} />
)

Table.displayName = 'Table'
TableHeader.displayName = 'TableHeader'
TableBody.displayName = 'TableBody'
TableRow.displayName = 'TableRow'
TableHead.displayName = 'TableHead'
TableCell.displayName = 'TableCell'
