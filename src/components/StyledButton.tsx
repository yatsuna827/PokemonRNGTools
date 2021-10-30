import React from 'react'
import { Button, ButtonProps } from '@chakra-ui/react'

export const StyledButton: React.FC<ButtonProps> = ({ children, ...props }) => {
  return (
    <Button variant="ghost" border="1px" borderColor="gray.300" rounded="sm" userSelect="none" {...props}>
      {children}
    </Button>
  )
}
