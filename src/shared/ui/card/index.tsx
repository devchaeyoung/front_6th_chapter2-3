import { HTMLAttributes } from 'react'

interface CardProps extends HTMLAttributes<HTMLDivElement> {
  className?: string
}

// 카드 컴포넌트
const Card = ({ className, ...props }: CardProps) => (
  <div className={`rounded-lg border bg-card text-card-foreground shadow-sm ${className}`} {...props} />
)

const CardHeader = ({ className, ...props }: CardProps) => (
  <div className={`flex flex-col space-y-1.5 p-6 ${className}`} {...props} />
)

const CardTitle = ({ className, ...props }: CardProps) => (
  <h3 className={`text-2xl font-semibold leading-none tracking-tight ${className}`} {...props} />
)

const CardContent = ({ className, ...props }: CardProps) => <div className={`p-6 pt-0 ${className}`} {...props} />

Card.displayName = 'Card'
CardHeader.displayName = 'CardHeader'
CardTitle.displayName = 'CardTitle'
CardContent.displayName = 'CardContent'

export { Card, CardHeader, CardTitle, CardContent }
