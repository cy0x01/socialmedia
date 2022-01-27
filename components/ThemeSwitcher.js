import React, { useEffect, useState } from 'react';
import { useTheme } from "next-themes" 
import { MoonIcon, SunIcon } from '@heroicons/react/outline'

function ThemeSwitcher() {
    
    const { theme, setTheme } = useTheme()    

    const [mounted, setMounted] = useState(false)

    useEffect(() => {
        setMounted(true)
    }, [])

    const ButtonChanger = () => {
    
        if (!mounted) return null

        const themeChanger = () => setTheme( theme === 'dark' ? 'light' : 'dark') 

        if (theme === 'dark') {
            return (
                <SunIcon 
                    role='button' 
                    className='h-5 w-5 text-yellow-400'
                    onClick={
                        themeChanger
                    }
                />   
            )
        }
        else {
            return (
                <MoonIcon
                    role='button'
                    className='h-4 w-4 text-blue-600'
                    onClick={
                        themeChanger
                    }
                />
            )
        }
    } 

    return(
      <div> 
        {ButtonChanger()}  
      </div>
  )
}

export default ThemeSwitcher;
