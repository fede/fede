import * as React from "react"
import { css } from "../../styled-system/css"
import { flex } from '../../styled-system/patterns'

type ExperienceDescriptionType = {
    title: string
    color: string
    children: React.ReactNode
  }
  
  export const ExperienceDescription = ({ title, color, children }: ExperienceDescriptionType) => {
    return (
      <div className={css({ marginTop: '3', paddingRight: '3', lg: { marginTop: '6', paddingRight: '6' }})}>
        <h3 className={css({ fontSize: '2xl', lg: { fontSize: '5xl' }, fontWeight: 'bold', color,  })}>{title}</h3>
        <div className={css({ fontSize: 'sm', lg: { fontSize: '2xl', lineHeight: 'relaxed' }, lineHeight: 'relaxed' })}>{children}</div>
      </div>
    )
  }

  type ExperienceCardType = {
    children: React.ReactNode
    
  }
  
export const ExperienceCard = ({ children }: ExperienceCardType) => {
    return (
      <div className={css({ display: 'block', marginY: '2', borderRadius: 'md', overflow: 'hidden', maxWidth: '5xl'})}>
        <div className={flex({ direction: 'row' })}>
          {children}
        </div>
      </div>
    )
  }